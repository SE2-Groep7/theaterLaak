using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TheaterLaakLibrary;

public class dbContext : DbContext
{
    public dbContext(DbContextOptions<dbContext> options)
        : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>().ToTable("Accounts");
        modelBuilder.Entity<Donateur>().ToTable("Donateurs");
        modelBuilder.Entity<AccountGenre>().ToTable("AccountGenres");

        modelBuilder.Entity<AccountGenre>()
            .HasKey(t => new { t.AccountId, t.GenreId });
        
        modelBuilder.Entity<AccountKaart>()
            .HasKey(t => new { t.AccountId, t.KaartId });
          
            
    }

    public DbSet<Account> Account { get; set; }
    public DbSet<Donateur> Donateur { get; set; }
    public DbSet<AccountGenre> AccountGenre { get; set; }
    public DbSet<AccountKaart> AccountKaart { get; set; }


}
