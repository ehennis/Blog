using IaDnug.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IaDnug.Service
{
    public interface IWeatherService
    {
        public List<WeatherForecast> GetWeatherReport(int days);
    }
}
