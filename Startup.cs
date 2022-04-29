using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using NSwag;
using NSwag.Generation.Processors.Security;
using Burndown.Entities;
using Burndown.Filters;
using Burndown.Repositories;
using Burndown.Services;

namespace Burndown
{
    public class Startup
    {

        // This method gets called by the runtime. Use this method to add services to the container. 
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddRepositories();
            services.AddServices();

            services.AddControllers();

            services.AddMvc(options =>
            {
                options.Filters.Add(typeof(ExceptionAttribute));
            });

            services.AddDbContext<BurndownDBContext>();

            services.AddSwaggerDocument(config =>
            {
                config.PostProcess = document =>
                {
                    document.Info.Title = "Burndown";
                };

                config.OperationProcessors.Add(new OperationSecurityScopeProcessor("oauth2"));

            });

            services.AddAutoMapper(cfg =>
            {
                cfg.AddMaps(typeof(Program).Assembly);
            });

            //Add the path to the resources files (.resx files)
            services.AddLocalization();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, BurndownDBContext auroraDbContext)
        {
            var supportedCultures = new[] { "pt-BR", "en-US", "es-ES" };
            var localizationOptions = new RequestLocalizationOptions()
                .SetDefaultCulture(supportedCultures[0])
                .AddSupportedCultures(supportedCultures)
                .AddSupportedUICultures(supportedCultures);

            app.UseRequestLocalization(localizationOptions);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(x => x
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(origin => true)
                .AllowCredentials()); 

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
            });

            app.UseOpenApi(configure =>
                configure.PostProcess = (document, _) =>
                document.Schemes = new[] { OpenApiSchema.Https });

            app.UseSwaggerUi3();
            auroraDbContext.Database.Migrate();
        }
    }
}