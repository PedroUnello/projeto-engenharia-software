using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Burndown.Entities;
using Burndown.Entities.FinancialInstitutionNS.DTO;
using Burndown.Repositories.UnitOfWork;
using Burndown.Services.FinancialInstitutionNS;

namespace Burndown.Controllers
{
    [ApiController]
    [Route("api/financialinstitution")]
    public class FinancialInstitutionController : ControllerBase
    {

        [HttpGet("get/{financialInstitutionHash}")]
        public async Task<ActionResult<FinancialInstitutionResponse>> Get([FromRoute] Guid financialInstitutionHash, [FromServices] IFinancialInstitutionGetService service)
        {
            return await service.Get(financialInstitutionHash);
        }

        [HttpPost("create")]
        public async Task<ActionResult<FinancialInstitutionResponse>> Create([FromServices] IUnitOfWork uow, [FromServices] IFinancialInstitutionCreateService service,  [FromBody] FinancialInstitutionCreateRequest request)
        {
            return Ok(await uow.Execute(() => service.Create(request)));
        }

        [HttpDelete("delete/{financialInstitutionHash}")]
        public async Task<ActionResult<FinancialInstitutionResponse>> Delete([FromRoute] Guid financialInstitutionHash, [FromServices] IUnitOfWork uow, [FromServices] IFinancialInstitutionUpdateService service)
        {
            return Ok(await uow.Execute(() => service.Delete(financialInstitutionHash)));
        }

        [HttpPut("update")]
        public async Task<ActionResult<FinancialInstitutionResponse>> Update([FromBody] FinancialInstitutionUpdateRequest request, [FromServices] IUnitOfWork uow, [FromServices] IFinancialInstitutionUpdateService service)
        {
            return Ok(await uow.Execute(() => service.Update(request)));
        }
    }
}
