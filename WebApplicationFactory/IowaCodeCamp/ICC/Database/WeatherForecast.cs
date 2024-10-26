using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace ICC.Database
{
    [Table("weather_forcast")]
    public class WeatherForecast
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("weather_date")]
        public DateTime Date { get; set; }

        [Column("temp_c")]
        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        [Column("summary")]
        public string Summary { get; set; }
    }
}
