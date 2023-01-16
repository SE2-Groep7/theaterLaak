using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace laakapi.Migrations
{
    /// <inheritdoc />
    public partial class _6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedule_Datum_DatumId",
                table: "ShowSchedule");

            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedule_FileModels_ShowId",
                table: "ShowSchedule");

            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedule_Zaal_ZaalId",
                table: "ShowSchedule");

            migrationBuilder.DropTable(
                name: "Datum");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ShowSchedule",
                table: "ShowSchedule");

            migrationBuilder.DropIndex(
                name: "IX_ShowSchedule_DatumId",
                table: "ShowSchedule");

            migrationBuilder.DropColumn(
                name: "DatumId",
                table: "ShowSchedule");

            migrationBuilder.RenameTable(
                name: "ShowSchedule",
                newName: "ShowSchedules");

            migrationBuilder.RenameIndex(
                name: "IX_ShowSchedule_ZaalId",
                table: "ShowSchedules",
                newName: "IX_ShowSchedules_ZaalId");

            migrationBuilder.RenameIndex(
                name: "IX_ShowSchedule_ShowId",
                table: "ShowSchedules",
                newName: "IX_ShowSchedules_ShowId");

            migrationBuilder.AddColumn<DateTime>(
                name: "ScheduleDate",
                table: "ShowSchedules",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddPrimaryKey(
                name: "PK_ShowSchedules",
                table: "ShowSchedules",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ShowSchedules_FileModels_ShowId",
                table: "ShowSchedules",
                column: "ShowId",
                principalTable: "FileModels",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ShowSchedules_Zaal_ZaalId",
                table: "ShowSchedules",
                column: "ZaalId",
                principalTable: "Zaal",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedules_FileModels_ShowId",
                table: "ShowSchedules");

            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedules_Zaal_ZaalId",
                table: "ShowSchedules");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ShowSchedules",
                table: "ShowSchedules");

            migrationBuilder.DropColumn(
                name: "ScheduleDate",
                table: "ShowSchedules");

            migrationBuilder.RenameTable(
                name: "ShowSchedules",
                newName: "ShowSchedule");

            migrationBuilder.RenameIndex(
                name: "IX_ShowSchedules_ZaalId",
                table: "ShowSchedule",
                newName: "IX_ShowSchedule_ZaalId");

            migrationBuilder.RenameIndex(
                name: "IX_ShowSchedules_ShowId",
                table: "ShowSchedule",
                newName: "IX_ShowSchedule_ShowId");

            migrationBuilder.AddColumn<int>(
                name: "DatumId",
                table: "ShowSchedule",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ShowSchedule",
                table: "ShowSchedule",
                column: "Id");

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

            migrationBuilder.CreateIndex(
                name: "IX_ShowSchedule_DatumId",
                table: "ShowSchedule",
                column: "DatumId");

            migrationBuilder.AddForeignKey(
                name: "FK_ShowSchedule_Datum_DatumId",
                table: "ShowSchedule",
                column: "DatumId",
                principalTable: "Datum",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ShowSchedule_FileModels_ShowId",
                table: "ShowSchedule",
                column: "ShowId",
                principalTable: "FileModels",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ShowSchedule_Zaal_ZaalId",
                table: "ShowSchedule",
                column: "ZaalId",
                principalTable: "Zaal",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
