using Burndown.Entities.ProjectEmployeeNS;
using System;
using System.Threading.Tasks;

namespace Burndown.Services.ProjectEmployeeNS
{
    public interface IProjectEmployeeService : IBaseService
    {
        Task<ProjectEmployee> Create(ProjectEmployee request);
        Task<ProjectEmployee> Delete(Guid hash);
    }
}
