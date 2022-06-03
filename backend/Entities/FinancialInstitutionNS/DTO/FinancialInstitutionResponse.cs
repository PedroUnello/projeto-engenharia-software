using System;

namespace Burndown.Entities.FinancialInstitutionNS.DTO
{
    public class FinancialInstitutionResponse
    {
        public string Name { get; set; }
        public string FinancialInstitutionCode { get; set; }
        public string LogoURL { get; set; }
        public string ShortName { get; set; }
        public Guid Hash { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public DateTime CreationDate { get; set; }
    }
}