using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace theaterlaak.Migrations
{
    /// <inheritdoc />
    public partial class _11 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AccountGenres_Accounts_AccountId",
                table: "AccountGenres");

            migrationBuilder.DropTable(
                name: "AccountKaart");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AccountGenres",
                table: "AccountGenres");

            migrationBuilder.RenameTable(
                name: "AccountGenres",
                newName: "AccountGenre");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AccountGenre",
                table: "AccountGenre",
                columns: new[] { "AccountId", "GenreId" });

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
                name: "FK_AccountGenre_Accounts_AccountId",
                table: "AccountGenre",
                column: "AccountId",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AccountGenre_GenreDTO_GenreId",
                table: "AccountGenre",
                column: "GenreId",
                principalTable: "GenreDTO",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AccountGenre_Accounts_AccountId",
                table: "AccountGenre");

            migrationBuilder.DropForeignKey(
                name: "FK_AccountGenre_GenreDTO_GenreId",
                table: "AccountGenre");

            migrationBuilder.DropTable(
                name: "GenreDTO");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AccountGenre",
                table: "AccountGenre");

            migrationBuilder.DropIndex(
                name: "IX_AccountGenre_GenreId",
                table: "AccountGenre");

            migrationBuilder.RenameTable(
                name: "AccountGenre",
                newName: "AccountGenres");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AccountGenres",
                table: "AccountGenres",
                columns: new[] { "AccountId", "GenreId" });

            migrationBuilder.CreateTable(
                name: "AccountKaart",
                columns: table => new
                {
                    AccountId = table.Column<int>(type: "INTEGER", nullable: false),
                    KaartId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountKaart", x => new { x.AccountId, x.KaartId });
                    table.ForeignKey(
                        name: "FK_AccountKaart_Accounts_AccountId",
                        column: x => x.AccountId,
                        principalTable: "Accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_AccountGenres_Accounts_AccountId",
                table: "AccountGenres",
                column: "AccountId",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
