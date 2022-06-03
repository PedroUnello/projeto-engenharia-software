using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Burndown.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    LastName = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Email = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Hash = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    Deleted = table.Column<bool>(type: "tinyint(1)", nullable: false, defaultValue: false),
                    CreationDate = table.Column<DateTime>(type: "datetime(6)", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP(6)")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employee", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "FinancialInstitution",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "varchar(250)", maxLength: 250, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    FinancialInstitutionCode = table.Column<string>(type: "varchar(3)", maxLength: 3, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    LogoURL = table.Column<string>(type: "varchar(500)", maxLength: 500, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ShortName = table.Column<string>(type: "varchar(250)", maxLength: 250, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    LastUpdateDate = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    Hash = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    Deleted = table.Column<bool>(type: "tinyint(1)", nullable: false, defaultValue: false),
                    CreationDate = table.Column<DateTime>(type: "datetime(6)", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP(6)")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FinancialInstitution", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Project",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Description = table.Column<string>(type: "varchar(250)", maxLength: 250, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Hash = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    Deleted = table.Column<bool>(type: "tinyint(1)", nullable: false, defaultValue: false),
                    CreationDate = table.Column<DateTime>(type: "datetime(6)", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP(6)")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Project", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "ProjectEmployee",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Project = table.Column<int>(type: "int", nullable: false),
                    Employee = table.Column<int>(type: "int", nullable: false),
                    Hash = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    Deleted = table.Column<bool>(type: "tinyint(1)", nullable: false, defaultValue: false),
                    CreationDate = table.Column<DateTime>(type: "datetime(6)", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP(6)")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectEmployee", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProjectEmployee_Employee_Employee",
                        column: x => x.Employee,
                        principalTable: "Employee",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ProjectEmployee_Project_Project",
                        column: x => x.Project,
                        principalTable: "Project",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_Hash",
                table: "Employee",
                column: "Hash",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FinancialInstitution_Hash",
                table: "FinancialInstitution",
                column: "Hash",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Project_Hash",
                table: "Project",
                column: "Hash",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProjectEmployee_Employee",
                table: "ProjectEmployee",
                column: "Employee");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectEmployee_Hash",
                table: "ProjectEmployee",
                column: "Hash",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProjectEmployee_Project",
                table: "ProjectEmployee",
                column: "Project");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FinancialInstitution");

            migrationBuilder.DropTable(
                name: "ProjectEmployee");

            migrationBuilder.DropTable(
                name: "Employee");

            migrationBuilder.DropTable(
                name: "Project");
        }
    }
}
