using Microsoft.Extensions.DependencyInjection;

namespace Burndown.Repositories
{
    public static class DependencyInjectionRepositories
    {
        public static void AddRepositories(this IServiceCollection services)
        {
            services.Scan(scan => scan
            .FromAssembliesOf(typeof(IBaseRepository))
                .AddClasses(classes => classes.AssignableTo<IBaseRepository>())
                .AsImplementedInterfaces()
                .WithScopedLifetime()
            );
        }
    }
}
