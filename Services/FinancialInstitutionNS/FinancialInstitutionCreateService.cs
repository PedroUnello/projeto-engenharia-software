using AutoMapper;
using FluentValidation;
using FluentValidation.Results;
using System;
using System.Threading.Tasks;
using Burndown.Entities.FinancialInstitutionNS.DTO;
using Burndown.Entities.FinancialInstitutionNS.Validator;
using Burndown.Entities.FinancialInstitutionNS;
using Burndown.Repositories.FinancialInstitutionNS;

namespace Burndown.Services.FinancialInstitutionNS
{
    public class FinancialInstitutionCreateService : IFinancialInstitutionCreateService
    {
        private readonly IFinancialInstitutionRepository _financialInstitutionRepository;
        private readonly IMapper _mapper;
        public FinancialInstitutionCreateService(IFinancialInstitutionRepository finantialInstitutionRepository, IMapper mapper)
        {
            _financialInstitutionRepository = finantialInstitutionRepository;
            _mapper = mapper;
        }
        public async Task<FinancialInstitutionResponse> Create(FinancialInstitutionCreateRequest request)
        {
            var validator = new FinancialInstitutionCreateValidator();
            ValidationResult result = validator.Validate(request);

            if (!result.IsValid)
            {
                throw new ValidationException(result.ToString("<br/>"));
            }

            FinancialInstitution duplicatedFinantialInstitution = await _financialInstitutionRepository.GetFirstAsync(x => x.FinancialInstitutionCode.Equals(request.FinancialInstitutionCode));
            if (duplicatedFinantialInstitution != null)
            {
                throw new ValidationException("");
            }

            FinancialInstitution finantialInstitution = new FinancialInstitution
            {
                Name = request.Name,
                FinancialInstitutionCode = request.FinancialInstitutionCode,
                LogoURL = request.LogoURL,
                ShortName = request.ShortName,
                Hash = Guid.NewGuid()
            };

            await _financialInstitutionRepository.AddAsync(finantialInstitution);
            await _financialInstitutionRepository.SaveChangesAsync();

            return _mapper.Map<FinancialInstitutionResponse>(finantialInstitution);

        }
    }
}
