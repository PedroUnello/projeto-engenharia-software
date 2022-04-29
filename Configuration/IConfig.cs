namespace Burndown.Configuration
{
    public interface IConfig
    {
        string Env { get; }
        string BurndownConnectionString { get; }
        string GetEnvironmentShortName();
    }
}
