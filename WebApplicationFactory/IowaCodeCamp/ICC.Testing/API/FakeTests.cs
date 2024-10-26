using ICC.Controllers;
using ICC.DataStore;
using ICC.Service;
using ICC.Testing.Mocks;
using Microsoft.Extensions.Logging;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace ICC.Testing.API
{
    public class FakeTests
    {
        [Fact]
        public void Controller_Get_Happy()
        {
            var logger = new Mock<ILogger<WeatherForecastController>>();
            var service = new WeatherServiceFake();
            WeatherForecastController ctrl = new WeatherForecastController(logger.Object, service);
            var results = ctrl.Get();
            Assert.Equal(5, results.Count());
        }

        [Fact]
        public void Service_Get_Happy()
        {
            var store = new DataStoreFake();
            var service = new WeatherService(store);
            var results = service.GetWeatherReport(5);
            Assert.Equal(5, results.Count());
        }

        [Fact]
        public void Store_Repository_Happy()
        {
            var repo = new WeatherRepositoryFake();
            var store = new WeatherDataStore(repo);
            // Does nothing since it is just a passthrough for the repo
        }

        [Fact]
        public void Repository_Get_Happy()
        {
            // Can't do this with Mocks (easily)
        }
    }
}
