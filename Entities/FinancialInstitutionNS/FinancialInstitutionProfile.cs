using AutoMapper;
using Burndown.Entities.FinancialInstitutionNS.DTO;

namespace Burndown.Entities.FinancialInstitutionNS
{
    public class FinancialInstitutionProfile : Profile
    {
        public FinancialInstitutionProfile()
        {
            CreateMap<FinancialInstitution, FinancialInstitutionResponse>();
        }
    }
}
