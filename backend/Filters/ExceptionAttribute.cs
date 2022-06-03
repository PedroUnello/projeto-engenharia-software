using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Net;
using Burndown.Exceptions;

namespace Burndown.Filters
{
    public class ExceptionAttribute : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            if (context.Exception.GetType() == typeof(ArgumentException) ||
                context.Exception.GetType() == typeof(ValidationException)
                )
            {
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
            }
            else if (context.Exception.GetType() == typeof(InvalidOperationException))
            {
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.Forbidden;
            }
            else if (context.Exception.GetType() == typeof(NotFoundException))
            {
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.NotFound;
            }
            else
            {
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            }

            context.Result = new JsonResult(new
            {
                error = new[] { context.Exception.Message },
#if DEBUG
                stackTrace = context.Exception.StackTrace
#endif
            });
        }
    }
}
