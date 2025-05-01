using backend.Data;
using Microsoft.EntityFrameworkCore;
 
var builder = WebApplication.CreateBuilder(args);
 
// Add services
builder.Services.AddControllers();
builder.Services.AddDbContext<WorkoutContext>(options =>
    options.UseSqlite("Data Source=workouts.db"));
 
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});
 
var app = builder.Build();
 
// Use middleware
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();
 
app.Run();