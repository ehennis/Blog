using NCode2024.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NCode2024.DataStore
{
    public interface IDataStore
    {
        public IWeatherRepository weatherRepository {get; }
    }
}
