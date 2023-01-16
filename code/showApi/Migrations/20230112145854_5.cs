using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace laakapi.Migrations
{
    /// <inheritdoc />
    public partial class _5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedule_FileModels_FileModelId1",
                table: "ShowSchedule");

            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedule_ShowDTO_FileModelId",
                table: "ShowSchedule");

            migrationBuilder.DropTable(
                name: "ShowDTO");

            migrationBuilder.DropIndex(
                name: "IX_ShowSchedule_FileModelId",
                table: "ShowSchedule");

            migrationBuilder.DropIndex(
                name: "IX_ShowSchedule_FileModelId1",
                table: "ShowSchedule");

            migrationBuilder.DropColumn(
                name: "FileModelId",
                table: "ShowSchedule");

            migrationBuilder.DropColumn(
                name: "FileModelId1",
                table: "ShowSchedule");

            migrationBuilder.CreateIndex(
                name: "IX_ShowSchedule_ShowId",
                table: "ShowSchedule",
                column: "ShowId");

            migrationBuilder.AddForeignKey(
                name: "FK_ShowSchedule_FileModels_ShowId",
                table: "ShowSchedule",
                column: "ShowId",
                principalTable: "FileModels",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedule_FileModels_ShowId",
                table: "ShowSchedule");

            migrationBuilder.DropIndex(
                name: "IX_ShowSchedule_ShowId",
                table: "ShowSchedule");

            migrationBuilder.AddColumn<int>(
                name: "FileModelId",
                table: "ShowSchedule",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FileModelId1",
                table: "ShowSchedule",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "ShowDTO",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    beschrijving = table.Column<string>(type: "TEXT", nullable: false),
                    fotoAlt = table.Column<string>(type: "TEXT", nullable: false),
                    showName = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShowDTO", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ShowSchedule_FileModelId",
                table: "ShowSchedule",
                column: "FileModelId");

            migrationBuilder.CreateIndex(
                name: "IX_ShowSchedule_FileModelId1",
                table: "ShowSchedule",
                column: "FileModelId1");

            migrationBuilder.AddForeignKey(
                name: "FK_ShowSchedule_FileModels_FileModelId1",
                table: "ShowSchedule",
                column: "FileModelId1",
                principalTable: "FileModels",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ShowSchedule_ShowDTO_FileModelId",
                table: "ShowSchedule",
                column: "FileModelId",
                principalTable: "ShowDTO",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
