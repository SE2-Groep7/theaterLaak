using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace laakapi.Migrations
{
    /// <inheritdoc />
    public partial class _8 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Naaam",
                table: "Zalen",
                newName: "Naam");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Naam",
                table: "Zalen",
                newName: "Naaam");
        }
    }
}
