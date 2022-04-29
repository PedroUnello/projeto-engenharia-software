using Microsoft.EntityFrameworkCore.Migrations;

namespace Burndown.Migrations
{
    public partial class AddingPixInCreditor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Pix",
                table: "Creditor",
                type: "varchar(50)",
                maxLength: 50,
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Pix",
                table: "Creditor");
        }
    }
}
