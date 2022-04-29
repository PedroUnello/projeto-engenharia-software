using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using Burndown.Entities;

namespace Burndown.Repositories.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly BurndownDBContext _auroraDbContext;

        public UnitOfWork(BurndownDBContext auroraDbContext)
        {
            _auroraDbContext = auroraDbContext;
        }

        public async Task<T> Execute<T>(Func<Task<T>> action)
        {
            var strategy = _auroraDbContext.Database.CreateExecutionStrategy();

            return await strategy.ExecuteAsync(async () =>
            {
                await using var transaction = await _auroraDbContext.Database
                        .BeginTransactionAsync();
                try
                {
                    var result = await action();
                    transaction.Commit();
                    return result;
                }
                catch
                {
                    transaction.Rollback();
                    throw;
                }
            });
        }
    }
}
