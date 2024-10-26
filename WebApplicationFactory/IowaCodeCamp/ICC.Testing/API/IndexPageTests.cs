using Microsoft.AspNetCore.Mvc.Testing;
using ICC.Testing.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using ICC.Database;
using Newtonsoft.Json;

namespace ICC.Testing.API
{
    public class IndexPageTests : IClassFixture<CustomWebApplicationFactory<Program>>
    {
        private readonly HttpClient _client;
        private readonly CustomWebApplicationFactory<Program> _factory;

        public IndexPageTests(CustomWebApplicationFactory<Program> factory)
        {
            _factory = factory;
            _client = factory.CreateClient("IndexPageTests");
        }

        [Fact]
        public async void HappyPath()
        {
            var response = await _client.GetAsync("/WeatherForecast");
            response.EnsureSuccessStatusCode();
            string content = await response.Content.ReadAsStringAsync();

            IEnumerable<WeatherForecast> forecasts = JsonConvert.DeserializeObject<IEnumerable<WeatherForecast>>(content);
            Assert.NotEmpty(forecasts);
            Assert.Equal(5, forecasts.Count());
        }

        [Fact]
        public async void GetDays_HappyPath()
        {
            var response = await _client.GetAsync("/WeatherForecast/3");
            response.EnsureSuccessStatusCode();
            string content = await response.Content.ReadAsStringAsync();

            IEnumerable<WeatherForecast> forecasts = JsonConvert.DeserializeObject<IEnumerable<WeatherForecast>>(content);
            Assert.NotEmpty(forecasts);
            Assert.Equal(3, forecasts.Count());
        }
    }
}
