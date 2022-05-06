using AutoMapper;
using Burndown.Entities;
using Burndown.Entities.EmployeeNS;

namespace Burndown.Repositories.EmployeeNS
{
    public class EmployeeRepository : Repository<Employee>, IEmployeeRepository
    {
        public EmployeeRepository(BurndownDBContext auroraDbContext, IMapper mapper) :
            base(auroraDbContext, mapper)
        {

        }
        
    }
}
