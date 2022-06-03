using Burndown.Entities.ProjectNS;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Burndown.Services.ProjectNS
{
    public interface IProjectService : IBaseService
    {
        Task<IEnumerable<Project>> GetAll();
        Task<Project> Get(Guid hash);
        Task<Project> Create(Project request);
        Task<Project> Update(Project request);
        Task<Project> Delete(Guid hash);
    }
}
