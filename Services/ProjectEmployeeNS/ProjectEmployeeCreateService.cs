using Burndown.Entities.ProjectEmployeeNS;
using Burndown.Exceptions;
using Burndown.Extensions;
using Burndown.Repositories.ProjectEmployeeNS;
using System;
using System.Threading.Tasks;

namespace Burndown.Services.ProjectEmployeeNS
{
    public class ProjectEmployeeCreateService : IProjectEmployeeService
    {
        private readonly IProjectEmployeeRepository _projectEmployeeRepository;
        public ProjectEmployeeCreateService(IProjectEmployeeRepository ProjectEmployeeRepository)
        {
            _projectEmployeeRepository = ProjectEmployeeRepository;
        }
        public async Task<ProjectEmployee> Create(ProjectEmployee request)
        {
            await _projectEmployeeRepository.AddAsync(request);
            await _projectEmployeeRepository.SaveChangesAsync();

            return request;
        }

        public async Task<ProjectEmployee> Delete(Guid hash)
        {
            if (hash.IsEmpty())
            {
                throw new ArgumentException();
            }
            ProjectEmployee projectEmployee = await _projectEmployeeRepository.GetFirstAsync(x => x.Hash.Equals(hash), false);

            if (projectEmployee == null)
            {
                throw new NotFoundException(string.Format(""));
            }

            projectEmployee.Deleted = true;

            await _projectEmployeeRepository.UpdateAsync(projectEmployee);
            await _projectEmployeeRepository.SaveChangesAsync();

            return projectEmployee;
        }
    }
}
