using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace laakapi.Migrations
{
    /// <inheritdoc />
    public partial class _3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Datum",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ScheduleDate = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Datum", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ShowDTO",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    showName = table.Column<string>(type: "TEXT", nullable: false),
                    fotoAlt = table.Column<string>(type: "TEXT", nullable: false),
                    beschrijving = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShowDTO", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Zaal",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Naaam = table.Column<string>(type: "TEXT", nullable: false),
                    Capacity = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zaal", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ShowSchedule",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ShowId = table.Column<int>(type: "INTEGER", nullable: false),
                    ZaalId = table.Column<int>(type: "INTEGER", nullable: false),
                    DatumId = table.Column<int>(type: "INTEGER", nullable: false),
                    FileModelId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShowSchedule", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ShowSchedule_Datum_DatumId",
                        column: x => x.DatumId,
                        principalTable: "Datum",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ShowSchedule_FileModels_FileModelId",
                        column: x => x.FileModelId,
                        principalTable: "FileModels",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ShowSchedule_ShowDTO_ShowId",
                        column: x => x.ShowId,
                        principalTable: "ShowDTO",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ShowSchedule_Zaal_ZaalId",
                        column: x => x.ZaalId,
                        principalTable: "Zaal",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ShowSchedule_DatumId",
                table: "ShowSchedule",
                column: "DatumId");

            migrationBuilder.CreateIndex(
                name: "IX_ShowSchedule_FileModelId",
                table: "ShowSchedule",
                column: "FileModelId");

            migrationBuilder.CreateIndex(
                name: "IX_ShowSchedule_ShowId",
                table: "ShowSchedule",
                column: "ShowId");

            migrationBuilder.CreateIndex(
                name: "IX_ShowSchedule_ZaalId",
                table: "ShowSchedule",
                column: "ZaalId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ShowSchedule");

            migrationBuilder.DropTable(
                name: "Datum");

            migrationBuilder.DropTable(
                name: "ShowDTO");

            migrationBuilder.DropTable(
                name: "Zaal");
        }
    }
}
