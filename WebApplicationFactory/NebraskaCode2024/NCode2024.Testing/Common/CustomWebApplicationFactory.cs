using NCode2024.DataStore;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Identity.Client;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using NCode2024.Database;
using System.Xml.Linq;

namespace NCode2024.Testing.Common
{
    public class CustomWebApplicationFactory<TProgram> :
        WebApplicationFactory<TProgram> where TProgram : class
    {
        private string _db_name;

        public HttpClient CreateClient(string dbName)
        {
            _db_name = dbName;
            return CreateClient();
        } 

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureServices(services =>
            {
                // Do any work here for DI

                // Remove existing DbContext
                ServiceDescriptor? contextPermissionAnalytics =
                    services.FirstOrDefault(desc => desc.ServiceType == typeof(WeatherDbContext));
                if (contextPermissionAnalytics != null)
                {
                    services.Remove(contextPermissionAnalytics);
                }

                // Add In-Memory DbContext
                services.AddDbContext<WeatherDbContext>(options =>
                {
                    //From Microsoft.EntityFrameworkCore.InMemory library
                    options.UseInMemoryDatabase(_db_name);
                    // Don't raise error about InMemory not supporting transactions
                    options.ConfigureWarnings(x => x.Ignore(InMemoryEventId.TransactionIgnoredWarning));

                });


                //Add any other DI stuff here!
            });
        }
    }
}
