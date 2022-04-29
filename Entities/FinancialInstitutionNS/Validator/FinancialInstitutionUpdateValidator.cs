using FluentValidation;
using Burndown.Entities.FinancialInstitutionNS.DTO;

namespace Burndown.Entities.FinancialInstitutionNS.Validator
{
    public class FinancialInstitutionUpdateValidator : AbstractValidator<FinancialInstitutionUpdateRequest>
    {
        public FinancialInstitutionUpdateValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .MaximumLength(250);
            RuleFor(x => x.FinancialInstitutionCode)
                .NotEmpty()
                .MaximumLength(3);
            RuleFor(x => x.LogoURL)
                .MaximumLength(500);
            RuleFor(x => x.ShortName)
                .NotEmpty()
                .MaximumLength(250);
            RuleFor(x => x.Hash)
                .NotEmpty();
        }
    }
}
