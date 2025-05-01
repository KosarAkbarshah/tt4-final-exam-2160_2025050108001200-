using Microsoft.EntityFrameworkCore;
using backend.Models;
namespace backend.Data
{
    public class WorkoutContext : DbContext
    {
        public WorkoutContext(DbContextOptions<WorkoutContext> options) : base(options) { }
        public DbSet<Workout> Workouts { get; set; }
    }
}