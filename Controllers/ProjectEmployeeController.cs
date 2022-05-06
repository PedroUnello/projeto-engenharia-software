//using Burndown.Entities.ProjectEmployeeNS;
//using Burndown.Repositories.UnitOfWork;
//using Burndown.Services.ProjectEmployeeNS;
//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Threading.Tasks;

//namespace Burndown.Controllers
//{
//    [ApiController]
//    [Route("api/ProjectEmployee")]
//    public class ProjectEmployeeController : ControllerBase
//    {

//        [HttpPost("create")]
//        public async Task<ActionResult<ProjectEmployee>> Create([FromServices] IUnitOfWork uow, [FromServices] IProjectEmployeeService service, [FromBody] ProjectEmployee request)
//        {
//            return Ok(await uow.Execute(() => service.Create(request)));
//        }

//        [HttpDelete("delete/{hash}")]
//        public async Task<ActionResult<ProjectEmployee>> Delete([FromServices] IUnitOfWork uow, [FromServices] IProjectEmployeeService service, [FromRoute] Guid hash)
//        {
//            return Ok(await uow.Execute(() => service.Delete(hash)));
//        }
//    }
//}
