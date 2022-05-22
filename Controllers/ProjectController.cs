using Burndown.Entities.ProjectEmployeeNS;
using Burndown.Entities.ProjectNS;
using Burndown.Repositories.UnitOfWork;
using Burndown.Services.ProjectEmployeeNS;
using Burndown.Services.ProjectNS;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Burndown.Controllers
{
    [ApiController]
    [Route("api/Project")]
    public class ProjectController : ControllerBase
    {

        [HttpPost("create")]
        public async Task<ActionResult<Project>> Create([FromServices] IUnitOfWork uow, [FromServices] IProjectService service, [FromBody] Project request)
        {
            return Ok(await uow.Execute(() => service.Create(request)));
        }
    }
}
