using NCode.DTO;
using System.Collections.Generic;


namespace NCode.Repository
{
    public interface IWeatherRepository
    {
        public List<WeatherForecast> GetWeatherReport(int days);
    }
}
