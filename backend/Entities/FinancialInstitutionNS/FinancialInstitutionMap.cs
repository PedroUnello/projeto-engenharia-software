using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Burndown.Extensions;

namespace Burndown.Entities.FinancialInstitutionNS
{
    public class FinancialInstitutionMap : IEntityTypeConfiguration<FinancialInstitution>
    {
        public void Configure(EntityTypeBuilder<FinancialInstitution> builder)
        {
            builder.MapBase();

            builder.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(250);
            builder.Property(x => x.FinancialInstitutionCode)
                .IsRequired()
                .HasMaxLength(3);
            builder.Property(x => x.LogoURL)
                .HasMaxLength(500);
            builder.Property(x => x.ShortName)
                .IsRequired()
                .HasMaxLength(250);
            builder.Property(x => x.LastUpdateDate);
        }
    }
}
