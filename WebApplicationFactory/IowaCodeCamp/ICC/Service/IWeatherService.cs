using ICC.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ICC.Service
{
    public interface IWeatherService
    {
        public List<WeatherForecast> GetWeatherReport(int days);
    }
}
