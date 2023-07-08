using IaDnug.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IaDnug.DataStore
{
    public interface IDataStore
    {
        public IWeatherRepository weatherRepository {get; }
    }
}
