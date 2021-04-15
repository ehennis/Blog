using IaDnug.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IaDnug.Repository
{
    public interface IWeatherRepository
    {
        public List<WeatherForecast> GetWeatherReport(int days);
    }
}
