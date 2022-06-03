using System;
using System.Threading.Tasks;

namespace Burndown.Repositories.UnitOfWork
{
    public interface IUnitOfWork : IBaseRepository
    {
        Task<T> Execute<T>(Func<Task<T>> action);
    }
}
