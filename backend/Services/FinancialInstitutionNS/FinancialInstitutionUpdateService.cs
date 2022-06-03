using AutoMapper;
using FluentValidation;
using FluentValidation.Results;
using System;
using System.Threading.Tasks;
using Burndown.Entities.FinancialInstitutionNS;
using Burndown.Entities.FinancialInstitutionNS.DTO;
using Burndown.Entities.FinancialInstitutionNS.Validator;
using Burndown.Exceptions;
using Burndown.Extensions;
using Burndown.Repositories.FinancialInstitutionNS;

namespace Burndown.Services.FinancialInstitutionNS
{
    public class FinancialInstitutionUpdateService : IFinancialInstitutionUpdateService
    {
        private readonly IFinancialInstitutionRepository _financialInstitutionRepository;
        private readonly IMapper _mapper;
        public FinancialInstitutionUpdateService(IFinancialInstitutionRepository finantialInstitutionRepository, IMapper mapper)
        {
            _financialInstitutionRepository = finantialInstitutionRepository;
            _mapper = mapper;
        }
        public async Task<FinancialInstitutionResponse> Delete(Guid finantialInstitutionHash)
        {
            if (finantialInstitutionHash.IsEmpty())
            {
                throw new ArgumentException();
            }
            FinancialInstitution finantialInstitution = await _financialInstitutionRepository.GetFirstAsync(x => x.Hash.Equals(finantialInstitutionHash), false);

            if (finantialInstitution == null)
            {
                throw new NotFoundException(string.Format(""));
            }

            finantialInstitution.Deleted = true;
            finantialInstitution.LastUpdateDate = DateTime.UtcNow;

            await _financialInstitutionRepository.UpdateAsync(finantialInstitution);
            await _financialInstitutionRepository.SaveChangesAsync();

            return _mapper.Map<FinancialInstitutionResponse>(finantialInstitution);
        }

        public async Task<FinancialInstitutionResponse> Update(FinancialInstitutionUpdateRequest request)
        {
            var validator = new FinancialInstitutionUpdateValidator();
            ValidationResult result = validator.Validate(request);

            if (!result.IsValid)
            {
                throw new ValidationException(result.ToString("<br/>"));
            }
            FinancialInstitution finantialInstitution = await _financialInstitutionRepository.GetFirstAsync(x => x.Hash == request.Hash);

            if (finantialInstitution == null)
            {
                throw new NotFoundException(string.Format(""));
            }

            finantialInstitution.Name = request.Name;
            finantialInstitution.FinancialInstitutionCode = request.FinancialInstitutionCode;
            finantialInstitution.ShortName = request.ShortName;
            finantialInstitution.LogoURL = request.LogoURL;
            finantialInstitution.LastUpdateDate = DateTime.UtcNow;

            await _financialInstitutionRepository.UpdateAsync(finantialInstitution);
            await _financialInstitutionRepository.SaveChangesAsync();

            return _mapper.Map<FinancialInstitutionResponse>(finantialInstitution);
        }
    }
}
