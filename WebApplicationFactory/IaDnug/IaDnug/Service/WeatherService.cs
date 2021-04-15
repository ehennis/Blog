using IaDnug.DataStore;
using IaDnug.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IaDnug.Service
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
