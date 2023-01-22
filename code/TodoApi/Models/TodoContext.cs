using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models;

public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options)
        : base(options)
    {
    }

    public DbSet<TodoItem> TodoItems { get; set; } = null!;
    public DbSet<Ticket> Tickets { get; set; } = null!;
    public DbSet<Interesse> Interesses { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<TodoItem>()
            .Property(t => t.UserId)
            .IsRequired();

        modelBuilder.Entity<TodoItem>()
            .HasOne(u => u.User)
            .WithMany(t => t.TodoItems)
            .HasForeignKey(t => t.UserId);

        modelBuilder.Entity<Ticket>()
            .Property(t => t.UserId)
            .IsRequired();

        modelBuilder.Entity<Ticket>()
            .HasOne(u => u.User)
            .WithMany(t => t.Tickets)
            .HasForeignKey(t => t.UserId);

        modelBuilder.Entity<Interesse>()
            .Property(t => t.UserId)
            .IsRequired();

        modelBuilder.Entity<Interesse>()
            .HasOne(u => u.User)
            .WithMany(t => t.Interesses)
            .HasForeignKey(t => t.UserId);
    }

    public DbSet<User> User { get; set; } = default!;
}