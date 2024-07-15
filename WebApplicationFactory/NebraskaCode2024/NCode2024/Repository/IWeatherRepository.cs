using NCode2024.Database;
using System.Collections.Generic;


namespace NCode2024.Repository
{
    public interface IWeatherRepository
    {
        public List<WeatherForecast> GetWeatherReport(int days);
    }
}
