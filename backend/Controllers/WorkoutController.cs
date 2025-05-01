using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;
using Microsoft.EntityFrameworkCore;
namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WorkoutController : ControllerBase
    {
        private readonly WorkoutContext _context;
        public WorkoutController(WorkoutContext context)
        {
            _context = context;
        }
        // GET: api/Workout
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Workout>>> GetWorkouts()
        {
            return await _context.Workouts.ToListAsync();
        }
        // GET: api/Workout/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Workout>> GetWorkout(int id)
        {
            var workout = await _context.Workouts.FindAsync(id);
            if (workout == null) return NotFound();
            return workout;
        }
        // POST: api/Workout
        [HttpPost]
        public async Task<ActionResult<Workout>> PostWorkout(Workout workout)
        {
            _context.Workouts.Add(workout);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetWorkout), new { id = workout.ID }, workout);
        }
        // PUT: api/Workout/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkout(int id, Workout workout)
        {
            if (id != workout.ID) return BadRequest();
            _context.Entry(workout).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }
        // DELETE: api/Workout/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkout(int id)
        {
            var workout = await _context.Workouts.FindAsync(id);
            if (workout == null) return NotFound();
            _context.Workouts.Remove(workout);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
 