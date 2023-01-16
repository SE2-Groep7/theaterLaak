using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace laakapi.Migrations
{
    /// <inheritdoc />
    public partial class _4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedule_FileModels_FileModelId",
                table: "ShowSchedule");

            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedule_ShowDTO_ShowId",
                table: "ShowSchedule");

            migrationBuilder.DropIndex(
                name: "IX_ShowSchedule_ShowId",
                table: "ShowSchedule");

            migrationBuilder.AlterColumn<int>(
                name: "FileModelId",
                table: "ShowSchedule",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FileModelId1",
                table: "ShowSchedule",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedule_FileModels_FileModelId1",
                table: "ShowSchedule");

            migrationBuilder.DropForeignKey(
                name: "FK_ShowSchedule_ShowDTO_FileModelId",
                table: "ShowSchedule");

            migrationBuilder.DropIndex(
                name: "IX_ShowSchedule_FileModelId1",
                table: "ShowSchedule");

            migrationBuilder.DropColumn(
                name: "FileModelId1",
                table: "ShowSchedule");

            migrationBuilder.AlterColumn<int>(
                name: "FileModelId",
                table: "ShowSchedule",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.CreateIndex(
                name: "IX_ShowSchedule_ShowId",
                table: "ShowSchedule",
                column: "ShowId");

            migrationBuilder.AddForeignKey(
                name: "FK_ShowSchedule_FileModels_FileModelId",
                table: "ShowSchedule",
                column: "FileModelId",
                principalTable: "FileModels",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ShowSchedule_ShowDTO_ShowId",
                table: "ShowSchedule",
                column: "ShowId",
                principalTable: "ShowDTO",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
