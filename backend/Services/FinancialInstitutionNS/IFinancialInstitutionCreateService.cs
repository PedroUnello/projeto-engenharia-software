using System.Threading.Tasks;
using Burndown.Entities.FinancialInstitutionNS.DTO;

namespace Burndown.Services.FinancialInstitutionNS
{
    public interface IFinancialInstitutionCreateService: IBaseService
    {
        Task<FinancialInstitutionResponse> Create(FinancialInstitutionCreateRequest request); 
    }
}
