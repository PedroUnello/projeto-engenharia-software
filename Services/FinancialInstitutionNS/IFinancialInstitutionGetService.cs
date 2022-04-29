using System;
using System.Threading.Tasks;
using Burndown.Entities.FinancialInstitutionNS.DTO;

namespace Burndown.Services.FinancialInstitutionNS
{
    public interface IFinancialInstitutionGetService: IBaseService
    {
        Task<FinancialInstitutionResponse> Get(Guid finantialInstitutionHash);
    }
}