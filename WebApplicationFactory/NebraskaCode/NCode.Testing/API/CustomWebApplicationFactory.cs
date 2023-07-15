using NCode.DataStore;
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

namespace NCode.Testing.API
{
    public class CustomWebApplicationFactory<TProgram> :
        WebApplicationFactory<TProgram> where TProgram : class
    {
        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureServices(services =>
            {
                // Do any work here
                services.AddDbContext<DbContext>(options =>
                {
                    //From Microsoft.EntityFrameworkCore.InMemory library
                    options.UseInMemoryDatabase("FileName");
                    // Don't raise error about InMemory not supporting transactions
                    options.ConfigureWarnings(x => x.Ignore(InMemoryEventId.TransactionIgnoredWarning));

                });


                //Add any other DI stuff here!
                services.AddScoped<IDataStore, WeatherDataStoreInMemory>();
            });
        }
    }
}
