using NCode2024.DataStore;
using NCode2024.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NCode2024.Service
{
    public class WeatherService : IWeatherService
    {
        private IDataStore _store;

        public WeatherService(IDataStore dataStore)
        {
            _store = dataStore;
        }

        public List<WeatherForecast> GetWeatherReport(int days)
        {
            return _store.weatherRepository.GetWeatherReport(days);
        }
    }
}
