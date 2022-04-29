using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Burndown.Entities;

namespace Burndown.Extensions
{
    public static class MapExtensions
    {
        public static void MapBase<TEntity>(this EntityTypeBuilder<TEntity> builder)
           where TEntity : BaseEntity
        {
            builder.HasKey(x => x.Id);

            builder.HasIndex(x => x.Hash)
                .IsUnique();

            builder.Property(x => x.Deleted)
                .IsRequired()
                .HasDefaultValue(false);

            builder.Property(x => x.CreationDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP(6)");
        }
    }
}
