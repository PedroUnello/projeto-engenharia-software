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
        [HttpGet("getAll")]
        public async Task<ActionResult<Project>> GetAll([FromServices] IUnitOfWork uow, [FromServices] IProjectService service)
        {
            return Ok(await uow.Execute(() => service.GetAll()));
        }

        [HttpPost("create")]
        public async Task<ActionResult<Project>> Create([FromServices] IUnitOfWork uow, [FromServices] IProjectService service, [FromBody] Project request)
        {
            return Ok(await uow.Execute(() => service.Create(request)));
        }

        [HttpPut("update")]
        public async Task<ActionResult<Project>> Update([FromServices] IUnitOfWork uow, [FromServices] IProjectService service, [FromBody] Project request)
        {
            return Ok(await uow.Execute(() => service.Update(request)));
        }

        [HttpDelete("delete/{hash}")]
        public async Task<ActionResult<Project>> Delete([FromServices] IUnitOfWork uow, [FromServices] IProjectService service, [FromRoute] Guid hash)
        {
            return Ok(await uow.Execute(() => service.Delete(hash)));
        }
    }
}
