using Microsoft.EntityFrameworkCore;
using ICC.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore.Storage;

namespace ICC.Testing
{
    public static class BuildDatabase
    {
        private static InMemoryDatabaseRoot _databaseRoot = new();

        public static InMemoryDatabaseRoot DatabaseRoot => _databaseRoot;

        public static void RemoveDbContext(IServiceCollection services)
        {
            // Remove existing DbContext
            ServiceDescriptor? contextPermissionAnalytics =
                services.FirstOrDefault(desc => desc.ServiceType == typeof(WeatherDbContext));
            if (contextPermissionAnalytics != null)
            {
                services.Remove(contextPermissionAnalytics);
            }

            // Remove DbContextOptions
            ServiceDescriptor[] options = services.Where(s =>
                s.ServiceType == typeof(DbContextOptions) ||
                (s.ServiceType.IsGenericType && s.ServiceType.GetGenericTypeDefinition() == typeof(DbContextOptions<>)))
            .ToArray();
            foreach (ServiceDescriptor option in options)
            {
                services.Remove(option);
            }
        }

        public static WeatherDbContext BuildContext(string inMemoryDatabaseName)
        {
            DbContextOptionsBuilder<WeatherDbContext> commonStoreDbContextBuilder =
                new DbContextOptionsBuilder<WeatherDbContext>()
                    .UseInMemoryDatabase(inMemoryDatabaseName, BuildDatabase.DatabaseRoot);
                    //.UseQueryTrackingBehavior(QueryTrackingBehavior.TrackAll);
            return new WeatherDbContext(commonStoreDbContextBuilder.Options);
        }

        public static void LoadDatabase(string inMemoryDatabaseName)
        {
            WeatherDbContext context = BuildContext(inMemoryDatabaseName);

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
            context.SaveChanges();
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
