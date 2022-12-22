using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace theaterlaak.Migrations
{
    /// <inheritdoc />
    public partial class _9 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AccountGenres_GenreDTO_GenreId",
                table: "AccountGenres");

            migrationBuilder.DropTable(
                name: "AccountGenreDTO");

            migrationBuilder.DropTable(
                name: "GenreDTO");

            migrationBuilder.DropIndex(
                name: "IX_AccountGenres_GenreId",
                table: "AccountGenres");
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

            migrationBuilder.CreateTable(
                name: "AccountGenreDTO",
                columns: table => new
                {
                    IntressesId = table.Column<int>(type: "INTEGER", nullable: false),
                    accountsId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountGenreDTO", x => new { x.IntressesId, x.accountsId });
                    table.ForeignKey(
                        name: "FK_AccountGenreDTO_Accounts_accountsId",
                        column: x => x.accountsId,
                        principalTable: "Accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AccountGenreDTO_GenreDTO_IntressesId",
                        column: x => x.IntressesId,
                        principalTable: "GenreDTO",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AccountGenres_GenreId",
                table: "AccountGenres",
                column: "GenreId");

            migrationBuilder.CreateIndex(
                name: "IX_AccountGenreDTO_accountsId",
                table: "AccountGenreDTO",
                column: "accountsId");

            migrationBuilder.AddForeignKey(
                name: "FK_AccountGenres_GenreDTO_GenreId",
                table: "AccountGenres",
                column: "GenreId",
                principalTable: "GenreDTO",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
