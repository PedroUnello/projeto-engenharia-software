using Burndown.Entities.ProjectNS;
using System.Threading.Tasks;

namespace Burndown.Services.ProjectNS
{
    public interface IProjectService : IBaseService
    {
        Task<Project> Create(Project request);
    }
}
