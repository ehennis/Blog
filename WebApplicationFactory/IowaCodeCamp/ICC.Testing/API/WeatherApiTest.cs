using ICC.Database;
using ICC.Testing.Common;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace ICC.Testing.API
{
    public class WeatherApiTest : IClassFixture<InMemoryApi>, IDisposable
    {
        private InMemoryApi _api;
        private HttpClient client;
        public WeatherApiTest(InMemoryApi api)
        {
            _api = api;
            client = api.CreateAnonymousClient("WeatherForcastApiTest");
        }
        public void Dispose()
        {
            client.Dispose();
        }

        [Fact]
        public async void Weather_Get_HappyPath()
        {
            var results = await client.GetAsync("/WeatherForecast");
            results.EnsureSuccessStatusCode();
            string content = await results.Content.ReadAsStringAsync();

            IEnumerable<WeatherForecast> forecasts = JsonConvert.DeserializeObject<IEnumerable<WeatherForecast>>(content);
            Assert.NotEmpty(forecasts);
            Assert.Equal(5, forecasts.Count());
        }

        [Fact]
        public async void Weather_GetDays_Happy()
        {
            var results = await client.GetAsync("/WeatherForecast/7");
            results.EnsureSuccessStatusCode();
            string content = await results.Content.ReadAsStringAsync();

            IEnumerable<WeatherForecast> forecasts = JsonConvert.DeserializeObject<IEnumerable<WeatherForecast>>(content);
            Assert.NotEmpty(forecasts);
            Assert.Equal(7, forecasts.Count());
        }
    }
}
