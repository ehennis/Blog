using NCode.DTO;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace NCode.Testing.API
{
    public class WeatherApiTest : IClassFixture<InMemoryApi>, IDisposable
    {
        private InMemoryApi _api;
        private HttpClient client;
        public WeatherApiTest(InMemoryApi api)
        {
            _api = api;
            client = api.CreateAnonymousClient();
        }
        public void Dispose()
        {
            client.Dispose();
        }

        [Fact]
        public async void Weather_Get_HappyPath()
        {
            var results = await client.GetAsync("WeatherForecast");
            string content = await results.Content.ReadAsStringAsync();

            IEnumerable<WeatherForecast> forecasts = JsonConvert.DeserializeObject<IEnumerable<WeatherForecast>>(content);
            Assert.NotEmpty(forecasts);
        }
    }
}
