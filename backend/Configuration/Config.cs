using Microsoft.Extensions.Configuration;

namespace Burndown.Configuration
{
    public class Config : IConfig
    {
        public string Env
        {
            get => _config["Environment"];
        }

        public string BurndownConnectionString
        {
            get => _config["ConnectionStrings:BackOfficeDB"];
        }

        private readonly IConfiguration _config;

        public Config(IConfiguration config)
        {
            _config = config;
        }

        public string GetEnvironmentShortName()
        {
            return Env switch
            {
                "development" => "DEV",
                "staging" => "QA",
                "sandbox" => "SB",
                "production" => "PROD",
                _ => "QA"
            };
        }
    }
}
