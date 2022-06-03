﻿using Burndown.Entities.EmployeeNS;
using Burndown.Entities.ProjectNS;

namespace Burndown.Entities.ProjectEmployeeNS
{
    public class ProjectEmployee: BaseEntity
    {
        public int ProjectId { get; set; }
        public virtual Project Project { get; set; }
        public int EmployeeId { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
