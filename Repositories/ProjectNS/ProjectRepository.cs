using AutoMapper;
using Burndown.Entities;
using Burndown.Entities.ProjectNS;

namespace Burndown.Repositories.ProjectNS
{
    public class ProjectRepository : Repository<Project>, IProjectRepository
    {
        public ProjectRepository(BurndownDBContext auroraDbContext, IMapper mapper) :
            base(auroraDbContext, mapper)
        {

        }
        
    }
}
