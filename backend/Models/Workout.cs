namespace backend.Models
{
    public class Workout
    {
        public int ID { get; set; }
        public DateTime Date { get; set; }
        public string Type { get; set; } = string.Empty;
        public int Duration { get; set; } // in minutes
        public int CaloriesBurned { get; set; }
    }
}

