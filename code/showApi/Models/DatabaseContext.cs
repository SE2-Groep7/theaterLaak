using Microsoft.EntityFrameworkCore;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
    }
    public DbSet<FileModel> FileModels { get; set; }
    public DbSet<ShowSchedule> ShowSchedules { get; set; }
    public DbSet<Zaal> Zalen { get; set; }
}