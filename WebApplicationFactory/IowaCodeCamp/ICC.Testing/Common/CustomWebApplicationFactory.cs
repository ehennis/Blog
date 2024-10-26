using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.DependencyInjection;
using ICC.Database;
using System.Linq;
using System.Net.Http;
using ICC.Repository;
using ICC.Testing.Mocks;
using Microsoft.EntityFrameworkCore.Storage;

namespace ICC.Testing.Common
{
    public class CustomWebApplicationFactory<TProgram> :
        WebApplicationFactory<TProgram> where TProgram : class
    {
        private string _db_name;

        public HttpClient CreateClient(string dbName)
        {
            if(_db_name == null)
            {
                BuildDatabase.LoadDatabase(dbName);
            }
            _db_name = dbName;
            return CreateClient();
        } 

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureServices(services =>
            {
                // Do any work here for DI

                // Remove DbContext
                BuildDatabase.RemoveDbContext(services);

                // Add In-Memory DbContext
                services.AddDbContext<WeatherDbContext>(options =>
                {
                    //From Microsoft.EntityFrameworkCore.InMemory library
                    options.UseInMemoryDatabase(_db_name, BuildDatabase.DatabaseRoot);
                    // Don't raise error about InMemory not supporting transactions
                    options.ConfigureWarnings(x => x.Ignore(InMemoryEventId.TransactionIgnoredWarning));

                });


                //Add any other DI stuff here!
            });
        }
    }
}
