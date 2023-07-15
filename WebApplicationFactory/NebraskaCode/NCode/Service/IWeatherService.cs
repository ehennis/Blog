using NCode.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NCode.Service
{
    public interface IWeatherService
    {
        public List<WeatherForecast> GetWeatherReport(int days);
    }
}
