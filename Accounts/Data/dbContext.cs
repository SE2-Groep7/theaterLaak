using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

public class dbContext : DbContext
{
    public dbContext(DbContextOptions<dbContext> options)
        : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>().ToTable("Accounts");
    }

    public DbSet<Account> Account { get; set; }
    public DbSet<Donateur> Donateur { get; set; }

}
