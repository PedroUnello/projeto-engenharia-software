using Burndown.Entities.ProjectNS;
using Burndown.Exceptions;
using Burndown.Extensions;
using Burndown.Repositories.ProjectNS;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Burndown.Services.ProjectNS
{
    public class ProjectCreateService : IProjectService
    {
        private readonly IProjectRepository _projectRepository;
        public ProjectCreateService(IProjectRepository ProjectRepository)
        {
            _projectRepository = ProjectRepository;
        }
        public async Task<Project> Create(Project request)
        {
            request.Hash = Guid.NewGuid();

            await _projectRepository.AddAsync(request);
            await _projectRepository.SaveChangesAsync();

            return request;
        }

        public async Task<Project> Delete(Guid hash)
        {
            if (hash.IsEmpty())
            {
                throw new ArgumentException();
            }
            Project project = await _projectRepository.GetFirstAsync(x => x.Hash.Equals(hash), false);

            if (project == null)
            {
                throw new NotFoundException(string.Format(""));
            }

            project.Deleted = true;

            await _projectRepository.UpdateAsync(project);
            await _projectRepository.SaveChangesAsync();

            return project;
        }

        public async Task<Project> Get(Guid hash)
        {
            if (hash.IsEmpty())
            {
                throw new ArgumentException(string.Format(""));
            }
            Project project = await _projectRepository.GetFirstAsync(x => x.Hash == hash);

            if (project == null)
            {
                throw new NotFoundException("");
            }

            return project;
        }

        public async Task<IEnumerable<Project>> GetAll()
        {
            IEnumerable<Project> projects = await _projectRepository.GetListAsync(x => !x.Deleted);

            return projects;
        }

        public async Task<Project> Update(Project request)
        {
            Project project = await _projectRepository.GetFirstAsync(x => x.Hash == request.Hash);

            if (project == null)
            {
                throw new NotFoundException("");
            }

            project.Name = request.Name;
            project.Description = request.Description;


            await _projectRepository.UpdateAsync(project);
            await _projectRepository.SaveChangesAsync();

            return project;
        }
    }
}