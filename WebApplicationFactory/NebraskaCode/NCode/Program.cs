using NCode.DataStore;
using NCode.Service;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;



var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Nebraska.Code", Version = "v1" });
});

builder.Services.AddDbContext<DbContext>(options =>
{
    options.UseSqlServer("ConnectionString");
});

builder.Services.AddScoped<IWeatherService, WeatherService>();
builder.Services.AddScoped<IDataStore, WeatherDataStore>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Nebraska.Code v1"));
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();


// NOTE: I created the actual program class like before.
// Look into doing the code they have in the demo online
public partial class Program { }
