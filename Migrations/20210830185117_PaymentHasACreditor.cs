using Microsoft.EntityFrameworkCore.Migrations;

namespace Burndown.Migrations
{
    public partial class PaymentHasACreditor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Payment_Participant_Creditor",
                table: "Payment");

            migrationBuilder.AddForeignKey(
                name: "FK_Payment_Creditor_Creditor",
                table: "Payment",
                column: "Creditor",
                principalTable: "Creditor",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Payment_Creditor_Creditor",
                table: "Payment");

            migrationBuilder.AddForeignKey(
                name: "FK_Payment_Participant_Creditor",
                table: "Payment",
                column: "Creditor",
                principalTable: "Participant",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
