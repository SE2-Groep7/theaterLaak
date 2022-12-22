using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace theaterlaak.Migrations
{
    /// <inheritdoc />
    public partial class _5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccountKaartDTO");

            migrationBuilder.DropTable(
                name: "KaartDTO");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Donateur",
                table: "Donateur");

            migrationBuilder.RenameTable(
                name: "Donateur",
                newName: "Donateurs");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Donateurs",
                table: "Donateurs",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "AccountGenres",
                columns: table => new
                {
                    AccountId = table.Column<int>(type: "INTEGER", nullable: false),
                    GenreId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountGenres", x => new { x.AccountId, x.GenreId });
                    table.ForeignKey(
                        name: "FK_AccountGenres_Accounts_AccountId",
                        column: x => x.AccountId,
                        principalTable: "Accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AccountGenres_GenreDTO_GenreId",
                        column: x => x.GenreId,
                        principalTable: "GenreDTO",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AccountGenres_GenreId",
                table: "AccountGenres",
                column: "GenreId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccountGenres");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Donateurs",
                table: "Donateurs");

            migrationBuilder.RenameTable(
                name: "Donateurs",
                newName: "Donateur");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Donateur",
                table: "Donateur",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "KaartDTO",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Waarheidsmerk = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KaartDTO", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AccountKaartDTO",
                columns: table => new
                {
                    AankoopGeschiedenisId = table.Column<int>(type: "INTEGER", nullable: false),
                    accountsId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountKaartDTO", x => new { x.AankoopGeschiedenisId, x.accountsId });
                    table.ForeignKey(
                        name: "FK_AccountKaartDTO_Accounts_accountsId",
                        column: x => x.accountsId,
                        principalTable: "Accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AccountKaartDTO_KaartDTO_AankoopGeschiedenisId",
                        column: x => x.AankoopGeschiedenisId,
                        principalTable: "KaartDTO",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AccountKaartDTO_accountsId",
                table: "AccountKaartDTO",
                column: "accountsId");
        }
    }
}
