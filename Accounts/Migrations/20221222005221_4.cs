using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace theaterlaak.Migrations
{
    /// <inheritdoc />
    public partial class _4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GenreDTO_Accounts_AccountId",
                table: "GenreDTO");

            migrationBuilder.DropForeignKey(
                name: "FK_KaartDTO_Accounts_AccountId",
                table: "KaartDTO");

            migrationBuilder.DropIndex(
                name: "IX_KaartDTO_AccountId",
                table: "KaartDTO");

            migrationBuilder.DropIndex(
                name: "IX_GenreDTO_AccountId",
                table: "GenreDTO");

            migrationBuilder.DropColumn(
                name: "AccountId",
                table: "KaartDTO");

            migrationBuilder.DropColumn(
                name: "AccountId",
                table: "GenreDTO");

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
                name: "IX_AccountGenreDTO_accountsId",
                table: "AccountGenreDTO",
                column: "accountsId");

            migrationBuilder.CreateIndex(
                name: "IX_AccountKaartDTO_accountsId",
                table: "AccountKaartDTO",
                column: "accountsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccountGenreDTO");

            migrationBuilder.DropTable(
                name: "AccountKaartDTO");

            migrationBuilder.AddColumn<int>(
                name: "AccountId",
                table: "KaartDTO",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "AccountId",
                table: "GenreDTO",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_KaartDTO_AccountId",
                table: "KaartDTO",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_GenreDTO_AccountId",
                table: "GenreDTO",
                column: "AccountId");

            migrationBuilder.AddForeignKey(
                name: "FK_GenreDTO_Accounts_AccountId",
                table: "GenreDTO",
                column: "AccountId",
                principalTable: "Accounts",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_KaartDTO_Accounts_AccountId",
                table: "KaartDTO",
                column: "AccountId",
                principalTable: "Accounts",
                principalColumn: "Id");
        }
    }
}
