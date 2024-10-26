using ICC.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ICC.DataStore
{
    public class WeatherDataStore : IDataStore
    {
        private IWeatherRepository weatherRepo;

        public WeatherDataStore(IWeatherRepository weatherRepo)
        {
            this.weatherRepo = weatherRepo;
        }


        public IWeatherRepository weatherRepository => weatherRepo;
    }
}
