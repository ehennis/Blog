using ICC.Database;
using System.Collections.Generic;


namespace ICC.Repository
{
    public interface IWeatherRepository
    {
        public List<WeatherForecast> GetWeatherReport(int days);
    }
}
