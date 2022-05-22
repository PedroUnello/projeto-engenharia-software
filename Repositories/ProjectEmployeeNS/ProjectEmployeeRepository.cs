using AutoMapper;
using Burndown.Entities;
using Burndown.Entities.ProjectEmployeeNS;

namespace Burndown.Repositories.ProjectEmployeeNS
{
    public class ProjectEmployeeRepository : Repository<ProjectEmployee>, IProjectEmployeeRepository
    {
        public ProjectEmployeeRepository(BurndownDBContext auroraDbContext, IMapper mapper) :
            base(auroraDbContext, mapper)
        {

        }
        
    }
}
