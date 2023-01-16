using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace laakapi.Migrations
{
    /// <inheritdoc />
    public partial class _7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedules_Zaal_ZaalId",
                table: "ShowSchedules");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Zaal",
                table: "Zaal");

            migrationBuilder.RenameTable(
                name: "Zaal",
                newName: "Zalen");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Zalen",
                table: "Zalen",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ShowSchedules_Zalen_ZaalId",
                table: "ShowSchedules",
                column: "ZaalId",
                principalTable: "Zalen",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedules_Zalen_ZaalId",
                table: "ShowSchedules");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Zalen",
                table: "Zalen");

            migrationBuilder.RenameTable(
                name: "Zalen",
                newName: "Zaal");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Zaal",
                table: "Zaal",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ShowSchedules_Zaal_ZaalId",
                table: "ShowSchedules",
                column: "ZaalId",
                principalTable: "Zaal",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
