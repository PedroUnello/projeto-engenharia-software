using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Burndown.Extensions;

namespace Burndown.Entities.EmployeeNS
{
    public class EmployeeMap : IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> builder)
        {
            builder.MapBase();

            builder.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(50);
            builder.Property(x => x.LastName)
                .IsRequired()
                .HasMaxLength(50);
            builder.Property(x => x.Email)
                .IsRequired()
                .HasMaxLength(100);
        }
    }
}
