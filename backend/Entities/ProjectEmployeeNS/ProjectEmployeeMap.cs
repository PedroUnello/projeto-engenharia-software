using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Burndown.Extensions;

namespace Burndown.Entities.ProjectEmployeeNS
{
    public class ProjectEmployeeMap : IEntityTypeConfiguration<ProjectEmployee>
    {
        public void Configure(EntityTypeBuilder<ProjectEmployee> builder)
        {
            builder.MapBase();

            builder.Property(x => x.ProjectId)
                .HasColumnName("Project");
            builder.HasOne(x => x.Project);

            builder.Property(x => x.EmployeeId)
                .HasColumnName("Employee");
            builder.HasOne(x => x.Employee);
        }
    }
}
