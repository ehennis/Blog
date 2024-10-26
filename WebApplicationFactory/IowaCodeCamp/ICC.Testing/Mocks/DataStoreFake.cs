using ICC.DataStore;
using ICC.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ICC.Testing.Mocks
{
    public class DataStoreFake : IDataStore
    {
        public IWeatherRepository weatherRepository => new WeatherRepositoryFake();
    }
}
