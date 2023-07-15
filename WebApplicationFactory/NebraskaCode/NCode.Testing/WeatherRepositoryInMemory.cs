using NCode.DTO;
using NCode.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NCode.Testing
{
    public class WeatherRepositoryInMemory : IWeatherRepository
    {
        private static readonly string[] Summaries = new[]
        {
            "Some","In", "Memory", "Values"
        };

        public List<WeatherForecast> GetWeatherReport(int days)
        {
            var rng = new Random();
            return Enumerable.Range(1, days).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index).Date,
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToList<WeatherForecast>();
        }
    }
}
