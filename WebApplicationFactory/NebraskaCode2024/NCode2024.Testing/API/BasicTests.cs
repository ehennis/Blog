using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace NCode2024.Testing.API
{
    public class BasicTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly WebApplicationFactory<Program> _factory;

        public BasicTests(WebApplicationFactory<Program> factory) {  _factory = factory; }

        [Fact]
        public async void HappyPath()
        {
            var client = _factory.CreateClient();

            var response = await client.GetAsync("/WeatherForecast");

            response.EnsureSuccessStatusCode();
        }
    }
}
