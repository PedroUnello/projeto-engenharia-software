using Burndown.Entities.ProjectNS;
using Burndown.Repositories.ProjectNS;
using System.Threading.Tasks;

namespace Burndown.Services.ProjectNS
{
    public class ProjectCreateService : IProjectService
    {
        private readonly IProjectRepository _projectRepository;
        public ProjectCreateService(IProjectRepository ProjectRepository)
        {
            _projectRepository = ProjectRepository;
        }
        public async Task<Project> Create(Project request)
        {
            await _projectRepository.AddAsync(request);
            await _projectRepository.SaveChangesAsync();

            return request;
        }
    }
}