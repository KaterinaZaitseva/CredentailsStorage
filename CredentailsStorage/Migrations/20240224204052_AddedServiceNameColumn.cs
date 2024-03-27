
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CredentialsStorage.Migrations
{
    /// <inheritdoc />
    public partial class AddedServiceNameColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ServiceName",
                table: "Credentails",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ServiceName",
                table: "Credentails");
        }
    }
}
