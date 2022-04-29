using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Burndown.Entities;

namespace Burndown.Repositories
{
    public interface IRepository<T> where T : BaseEntity
    {
        Task<IEnumerable<TDTO>> GetAllNotDeletedAsync<TDTO>
            (
                bool asNoTracking = true
            );
        Task<IEnumerable<TDTO>> GetListAsync<TDTO>
            (
                Expression<Func<T, bool>> where,
                bool asNoTracking = true
            );
        Task<IEnumerable<T>> GetListAsync
            (
                Expression<Func<T, bool>> where,
                List<Expression<Func<T, bool>>> dateRange,
                bool asNoTracking = true
            );
        Task<IEnumerable<T>> GetListAsync
            (
                Expression<Func<T, bool>> where,
                bool asNoTracking = true
            );
        T GetFirst
            (
                Expression<Func<T, bool>> where,
                bool asNoTracking = true
            );
        Task<T> GetFirstAsync
            (
                Expression<Func<T, bool>> where,
                bool asNoTracking = true
            );
        Task<TDTO> GetFirstAsync<TDTO>
            (
                Expression<Func<T, bool>> where,
                bool asNoTracking = true
            );
        Task<T> GetFirstIncludingDeletedAsync
            (
                Expression<Func<T, bool>> where,
                bool asNoTracking = true
            );
        Task AddAsync(T entity);
        Task AddCollectionAsync(IEnumerable<T> entities);
        Task UpdateAsync(T entity);
        Task UpdateCollectionAsync(IEnumerable<T> entities);
        Task SaveChangesAsync();
    }
}
