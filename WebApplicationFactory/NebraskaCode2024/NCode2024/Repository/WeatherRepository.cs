using NCode2024.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NCode2024.Repository
{
    public class WeatherRepository : IWeatherRepository
    {
        private WeatherDbContext _context;
        
        public WeatherRepository(WeatherDbContext context)
        {
            _context = context;
        }

        public List<WeatherForecast> GetWeatherReport(int days)
        {
            var lst = _context.WeatherForecasts.OrderBy(w => w.Date).Take(days).ToList();
            return lst;
        }

    }
}
