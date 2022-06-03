using System;
using System.Threading.Tasks;
using Burndown.Entities.FinancialInstitutionNS.DTO;

namespace Burndown.Services.FinancialInstitutionNS
{
    public interface IFinancialInstitutionUpdateService : IBaseService
    {
        Task<FinancialInstitutionResponse> Update(FinancialInstitutionUpdateRequest request);
        Task<FinancialInstitutionResponse> Delete(Guid finantialInstitutionHash);
    }
}
