using System;

namespace Burndown.Entities.FinancialInstitutionNS
{
    public class FinancialInstitution : BaseEntity
    {
        public string Name { get; set; }
        public string FinancialInstitutionCode { get; set; }
        public string LogoURL { get; set; }
        public string ShortName { get; set; }
        public DateTime? LastUpdateDate { get; set; }

    }
}
