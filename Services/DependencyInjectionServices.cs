using Microsoft.Extensions.DependencyInjection;

namespace Burndown.Services
{
    public static class DependencyInjectionServices
    {
        public static void AddServices(this IServiceCollection services)
        {
            services.Scan(scan => scan
            .FromAssembliesOf(typeof(IBaseService))
                .AddClasses(classes => classes.AssignableTo<IBaseService>())
                .AsImplementedInterfaces()
                .WithTransientLifetime()
            );
        }
    }
}
