using AutoMapper;
using Burndown.Entities;
using Burndown.Entities.FinancialInstitutionNS;

namespace Burndown.Repositories.FinancialInstitutionNS
{
    public class FinancialInstitutionRepository : Repository<FinancialInstitution>, IFinancialInstitutionRepository
    {
        public FinancialInstitutionRepository(BurndownDBContext auroraDbContext, IMapper mapper) :
            base(auroraDbContext, mapper)
        {

        }
        
    }
}
