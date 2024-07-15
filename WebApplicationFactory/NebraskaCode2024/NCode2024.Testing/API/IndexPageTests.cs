using Microsoft.AspNetCore.Mvc.Testing;
using NCode2024.Testing.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace NCode2024.Testing.API
{
    public class IndexPageTests : IClassFixture<CustomWebApplicationFactory<Program>>
    {
        private readonly HttpClient _client;
        private readonly CustomWebApplicationFactory<Program> _factory;

        public IndexPageTests(CustomWebApplicationFactory<Program> factory)
        {
            _factory = factory;
            _client = factory.CreateClient("IndexPageTests");
            BuildDatabase.LoadDatabase("IndexPageTests");
        }

        [Fact]
        public async void HappyPath()
        {
            var response = await _client.GetAsync("/WeatherForecast");

            response.EnsureSuccessStatusCode();
        }
    }
}
