using NCode2024.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NCode2024.Service
{
    public interface IWeatherService
    {
        public List<WeatherForecast> GetWeatherReport(int days);
    }
}
