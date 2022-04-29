using Microsoft.EntityFrameworkCore.Migrations;

namespace Burndown.Migrations
{
    public partial class AddingSavedColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Saved",
                table: "Account",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Saved",
                table: "Account");
        }
    }
}
