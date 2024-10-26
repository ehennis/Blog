using ICC.DataStore;
using ICC.Repository;
using ICC.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ICC.Testing.Custom
{
    public class DataStoreInMemory : IDataStore
    {
        IWeatherRepository _weatherRepository;
        public DataStoreInMemory(string filename) 
        {
            var dbcontext = BuildDatabase.BuildContext(filename);

            _weatherRepository = new WeatherRepository(dbcontext);
        }

        public IWeatherRepository weatherRepository => _weatherRepository;
    }
}
