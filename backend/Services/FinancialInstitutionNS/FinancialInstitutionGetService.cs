using AutoMapper;
using FluentValidation;
using FluentValidation.Results;
using System;
using System.Threading.Tasks;
using Burndown.Entities.FinancialInstitutionNS.DTO;
using Burndown.Entities.FinancialInstitutionNS;
using Burndown.Exceptions;
using Burndown.Extensions;
using Burndown.Repositories.FinancialInstitutionNS;

namespace Burndown.Services.FinancialInstitutionNS
{
    public class FinancialInstitutionGetService : IFinancialInstitutionGetService
    {
        private readonly IFinancialInstitutionRepository _financialInstitutionRepository;
        private readonly IMapper _mapper;
        public FinancialInstitutionGetService(IFinancialInstitutionRepository financialInstitutionRepository, IMapper mapper)
        {
            _financialInstitutionRepository = financialInstitutionRepository;
            _mapper = mapper;
        }
        public async Task<FinancialInstitutionResponse> Get(Guid financialInstitutionHash)
        {
            if (financialInstitutionHash.IsEmpty())
            {
                throw new ArgumentException(string.Format(""));
            }
            FinancialInstitution financialInstitution = await _financialInstitutionRepository.GetFirstAsync(x => x.Hash == financialInstitutionHash);

            if (financialInstitution == null)
            {
                throw new NotFoundException("");
            }

            return _mapper.Map<FinancialInstitutionResponse>(financialInstitution);
        }
    }
}
