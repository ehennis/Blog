using IaDnug.DataStore;
using IaDnug.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IaDnug.Testing
{
    public class WeatherDataStoreInMemory : IDataStore
    {
        public WeatherDataStoreInMemory()
        {
            //In you were using a DataContenxt
            var readonlyBuilder = new DbContextOptionsBuilder();
            readonlyBuilder.UseInMemoryDatabase("SomeFileName"); //Microsoft.EntityFrameworkCore.InMemory
            // Don't raise error about InMemory not supporting transactions
            readonlyBuilder.ConfigureWarnings(x => x.Ignore(InMemoryEventId.TransactionIgnoredWarning));
            var dbcontext = new DbContext(readonlyBuilder.Options);

            repo = new WeatherRepositoryInMemory();
        }

        private IWeatherRepository repo;

        public IWeatherRepository weatherRepository => repo ?? new WeatherRepositoryInMemory();
    }
}
