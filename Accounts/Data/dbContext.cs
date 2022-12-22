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
        // modelBuilder.Entity<AccountGenre>().ToTable("AccountGenres");

        // modelBuilder.Entity<AccountGenre>()
        //     .HasKey(t => new { t.AccountId, t.GenreId });
        
        modelBuilder.Entity<AccountKaart>()
            .HasKey(t => new { t.AccountId, t.KaartId });
         modelBuilder.Entity<AccountGenre>()
            .HasKey(x => new  { x.AccountId, x.GenreId });

        modelBuilder.Entity<AccountGenre>()
            .HasOne(x => x.Account)
            .WithMany(x => x.Intresses)
            .HasForeignKey(x => x.AccountId);


     modelBuilder.Entity<AccountKaart>()
            .HasKey(x => new  { x.AccountId, x.KaartId });

        modelBuilder.Entity<AccountKaart>()
            .HasOne(x => x.Account)
            .WithMany(x => x.AankoopGeschiedenis)
            .HasForeignKey(x => x.AccountId);

          
            
    }

    public DbSet<Account> Account { get; set; }
    public DbSet<Donateur> Donateur { get; set; }
    public DbSet<AccountGenre> AccountGenre { get; set; }
    public DbSet<AccountKaart> AccountKaart { get; set; }


}
