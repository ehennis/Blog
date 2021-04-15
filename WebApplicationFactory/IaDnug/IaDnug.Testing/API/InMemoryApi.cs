using IaDnug.DataStore;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
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

namespace IaDnug.Testing.API
{
    public class InMemoryApi : IDisposable
    {
        private WebApplicationFactory<Startup> appFactory;

        public InMemoryApi()
        {
            appFactory = new WebApplicationFactory<Startup>();
        }

        public HttpClient CreateAnonymousClient()
        {
            return ConfigureAppFactory().CreateClient();
        }

        public HttpClient CreateAuthenticatedClient()
        {
            return ConfigureAppFactory().CreateDefaultClient(new ClientAuthenticationHandler());
        }

        private WebApplicationFactory<Startup> ConfigureAppFactory(string testsettingsFile = "appsettings.test.json")
        {
            return appFactory.WithWebHostBuilder(builder => 
            {
                builder.ConfigureAppConfiguration( (hostContext, config) =>
                {
                    config.SetBasePath(Directory.GetCurrentDirectory())
                        .AddJsonFile(testsettingsFile);
                });

                builder.ConfigureServices(services =>
                {
                    //Will remove existing DB Context
                    services.AddDbContext<DbContext>(options =>
                    {
                        options.UseInMemoryDatabase("FileName");
                    });

                    //Add any other DI stuff here!
                    services.AddScoped<IDataStore, WeatherDataStoreInMemory>();
                });
            });
        }

        public void Dispose()
        {
            appFactory.Dispose();
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
