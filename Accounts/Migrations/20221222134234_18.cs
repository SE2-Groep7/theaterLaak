using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace theaterlaak.Migrations
{
    /// <inheritdoc />
    public partial class _18 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AccountGenre_GenreDTO_GenreId",
                table: "AccountGenre");

            migrationBuilder.DropTable(
                name: "GenreDTO");

            migrationBuilder.DropIndex(
                name: "IX_AccountGenre_GenreId",
                table: "AccountGenre");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GenreDTO",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Naam = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GenreDTO", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AccountGenre_GenreId",
                table: "AccountGenre",
                column: "GenreId");

            migrationBuilder.AddForeignKey(
                name: "FK_AccountGenre_GenreDTO_GenreId",
                table: "AccountGenre",
                column: "GenreId",
                principalTable: "GenreDTO",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
