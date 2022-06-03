using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Burndown.Configuration;

namespace Burndown
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }
#if DEBUG
        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
            .ConfigureServices(serviceCollection => serviceCollection.AddSingleton<IConfig, Config>())
            .UseStartup<Startup>()
            .Build();
#else
        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
            .ConfigureServices(serviceCollection =>  serviceCollection.AddSingleton<IConfig, Config>())
            .UseStartup<Startup>()
            .UseKestrel(options =>
            {
                options.Limits.MaxRequestBodySize = 100_000_000;
                options.AddServerHeader = false;
            })
            .Build();
#endif
    }
}
