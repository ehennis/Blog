using IaDnug.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IaDnug.DataStore
{
    public class WeatherDataStore : IDataStore
    {
        public WeatherDataStore()
        {

        }

        private IWeatherRepository weatherRepo;

        public IWeatherRepository weatherRepository => weatherRepo ?? new WeatherRepository();
    }
}
