using ICC.DataStore;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using ICC.Database;
using Microsoft.Identity.Client;

namespace ICC.Testing.Common
{
    public class InMemoryApi : IDisposable
    {
        private string _db_name;
        private WebApplicationFactory<Program> appFactory;

        public InMemoryApi()
        {
            //appFactory = new WebApplicationFactory<NCode.Program>();
        }

        public HttpClient CreateAnonymousClient(string dbName)
        {
            _db_name = dbName;
            if (appFactory == null)
            {
                appFactory = ConfigureAppFactory();
                BuildDatabase.LoadDatabase(dbName);
            }
            return appFactory.CreateClient();
        }

        public HttpClient CreateAuthenticatedClient(string dbName)
        {
            _db_name = dbName;
            return ConfigureAppFactory().CreateDefaultClient(new ClientAuthenticationHandler());
        }

        private WebApplicationFactory<Program> ConfigureAppFactory(string testsettingsFile = "appsettings.test.json")
        {
            return new WebApplicationFactory<Program>()
                .WithWebHostBuilder(builder =>
            {
                builder.ConfigureAppConfiguration((hostContext, config) =>
                {
                    config.SetBasePath(Directory.GetCurrentDirectory())
                        .AddJsonFile(testsettingsFile);
                });

                builder.ConfigureServices(services =>
                {
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
            });
        }

        public void Dispose()
        {
            if (appFactory != null) appFactory.Dispose();
        }
    }

    public class ClientAuthenticationHandler : DelegatingHandler
    {
        private readonly IConfidentialClientApplication tokenClient;
        private readonly IEnumerable<string> scopes;

        public ClientAuthenticationHandler()
        {
            var appId = "SomeId";
            var secret = "Shhhhh";
            tokenClient = ConfidentialClientApplicationBuilder.Create(appId)
                .WithClientSecret(secret)
                .WithAuthority(AzureCloudInstance.AzurePublic, "tenant")
                .Build();

            scopes = new[] { $"api://{appId}/.default" };
        }

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancel)
        {
            var tokenResponse = await tokenClient.AcquireTokenForClient(scopes).ExecuteAsync();
            request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", tokenResponse.AccessToken);
            return await base.SendAsync(request, cancel);
        }

    }
}
