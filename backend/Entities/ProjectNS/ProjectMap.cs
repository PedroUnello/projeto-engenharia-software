using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Burndown.Extensions;

namespace Burndown.Entities.ProjectNS
{
    public class ProjectMap : IEntityTypeConfiguration<Project>
    {
        public void Configure(EntityTypeBuilder<Project> builder)
        {
            builder.MapBase();

            builder.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(50);
            builder.Property(x => x.Description)
                .IsRequired()
                .HasMaxLength(250);
        }
    }
}
