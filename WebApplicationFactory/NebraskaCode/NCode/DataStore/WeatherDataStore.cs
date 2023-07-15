using NCode.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NCode.DataStore
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
