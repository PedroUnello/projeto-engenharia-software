using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Linq;
using System.Reflection;

namespace Burndown.Entities
{
    public partial class BurndownDBContext : DbContext
    {
        private readonly IConfiguration _config;

        public BurndownDBContext(DbContextOptions<BurndownDBContext> options, IConfiguration config)
            : base(options)
        {
            _config = config;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder
                    .UseLazyLoadingProxies()
                     .UseMySql(_config.GetConnectionString("BackOfficeDB"), ServerVersion.AutoDetect(_config.GetConnectionString("BackOfficeDB")),
                            options => options.EnableRetryOnFailure());
            }
        }

        protected void DisableDeleteCascade(ModelBuilder modelBuilder)
        {
            var cascadeFKs = modelBuilder.Model.GetEntityTypes()
                   .SelectMany(t => t.GetForeignKeys())
                   .Where(fk => !fk.IsOwnership && fk.DeleteBehavior == DeleteBehavior.Cascade);

            foreach (var fk in cascadeFKs)
                fk.DeleteBehavior = DeleteBehavior.Restrict;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly(),
                t => t.GetInterfaces().Any(i =>
                i.IsGenericType &&
                i.GetGenericTypeDefinition() == typeof(IEntityTypeConfiguration<>) &&
                typeof(BaseEntity).IsAssignableFrom(i.GenericTypeArguments[0])));
            DisableDeleteCascade(modelBuilder);
            base.OnModelCreating(modelBuilder);
        }
    }
}