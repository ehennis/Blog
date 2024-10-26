using ICC.Controllers;
using ICC.Service;
using ICC.Testing.Custom;
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
    public class CustomDbContext
    {
        [Fact]
        public void Controller_Get_Happy()
        {
            // Set In-Memory Name/Path
            string dbFileName = "CustomDbContext";
            // Load Records
            BuildDatabase.LoadDatabase(dbFileName);

            var store = new DataStoreInMemory(dbFileName);
            var logger = new Mock<ILogger<WeatherForecastController>>();
            var service = new WeatherService(store);
            var controller = new WeatherForecastController(logger.Object,service);
            var result = controller.Get();
            // Get() only returns 5
            Assert.Equal(5, result.Count());
        }
    }
}
