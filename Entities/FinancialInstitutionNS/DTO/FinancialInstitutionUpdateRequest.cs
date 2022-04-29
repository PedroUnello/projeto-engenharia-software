using System;

namespace Burndown.Entities.FinancialInstitutionNS.DTO
{
    public class FinancialInstitutionUpdateRequest
    {
        public string Name { get; set; }
        public string FinancialInstitutionCode { get; set; }
        public string LogoURL { get; set; }
        public string ShortName { get; set; }
        public Guid Hash { get; set; }
    }
}
