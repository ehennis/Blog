using Microsoft.EntityFrameworkCore;
using NCode2024.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace NCode2024.Testing
{
    public static class BuildDatabase
    {
        public static void LoadDatabase(string inMemoryDatabaseName)
        {

            DbContextOptionsBuilder<WeatherDbContext> commonStoreDbContextBuilder =
                new DbContextOptionsBuilder<WeatherDbContext>()
                    .UseInMemoryDatabase(inMemoryDatabaseName)
                    .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            WeatherDbContext context = new WeatherDbContext(commonStoreDbContextBuilder.Options);

            // Add some data
            BuildWeatherForcast(context, 1, 30, new DateTime(2024, 7, 1));
            BuildWeatherForcast(context, 2, 25, new DateTime(2024, 7, 2));
            BuildWeatherForcast(context, 3, 20, new DateTime(2024, 7, 3));
            BuildWeatherForcast(context, 4, 10, new DateTime(2024, 7, 4));
            BuildWeatherForcast(context, 5, 20, new DateTime(2024, 7, 5));
            BuildWeatherForcast(context, 6, 35, new DateTime(2024, 7, 6));
            BuildWeatherForcast(context, 7, 40, new DateTime(2024, 7, 7));
            BuildWeatherForcast(context, 8, 35, new DateTime(2024, 7, 8));
            BuildWeatherForcast(context, 9, 30, new DateTime(2024, 7, 9));
            BuildWeatherForcast(context, 10, 20, new DateTime(2024, 7, 10));
        }

        private static void BuildWeatherForcast(WeatherDbContext context, int id, int temp, DateTime date)
        {
           context.WeatherForecasts.Add(new()
            {
                Id = id,
                Date = date,
                TemperatureC = temp,
                Summary = temp switch
                {
                    <= 10 => "Chilly",
                    <= 20 => "Cool",
                    <= 30 => "Hot",
                    _ => "Scorching"
                }
           });
        }
    }
}
