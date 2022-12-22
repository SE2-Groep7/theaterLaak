﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace theaterlaak.Migrations
{
    [DbContext(typeof(dbContext))]
    [Migration("20221222133916_16")]
    partial class _16
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.1");

            modelBuilder.Entity("Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("naam")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("wachtwoord")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Accounts", (string)null);
                });

            modelBuilder.Entity("AccountGenre", b =>
                {
                    b.Property<int>("AccountId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("GenreId")
                        .HasColumnType("INTEGER");

                    b.HasKey("AccountId", "GenreId");

                    b.HasIndex("GenreId");

                    b.ToTable("AccountGenre");
                });

            modelBuilder.Entity("Donateur", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("accountId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Donateurs", (string)null);
                });

            modelBuilder.Entity("GenreDTO", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Naam")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("GenreDTO");
                });

            modelBuilder.Entity("AccountGenre", b =>
                {
                    b.HasOne("Account", "Account")
                        .WithMany("Intresses")
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GenreDTO", "Genre")
                        .WithMany()
                        .HasForeignKey("GenreId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");

                    b.Navigation("Genre");
                });

            modelBuilder.Entity("Account", b =>
                {
                    b.Navigation("Intresses");
                });
#pragma warning restore 612, 618
        }
    }
}
