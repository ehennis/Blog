using ICC.Database;
using ICC.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ICC.Testing.Mocks
{
    public class WeatherRepositoryFake : IWeatherRepository
    {
        public List<WeatherForecast> GetWeatherReport(int days)
        {
            var weather = new List<WeatherForecast>();
            for (int i = 0; i < days; i++)
            {
                weather.Add(new()
                {
                    Id = i,
                    Date = DateTime.Now.AddDays(-i),
                    TemperatureC = 32 + i,
                    Summary = $"Created Forcast {i}"
                });
            }
            return weather;
        }
    }
}
