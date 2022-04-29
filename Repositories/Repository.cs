using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Burndown.Entities;
using Burndown.Extensions;

namespace Burndown.Repositories
{
    public abstract class Repository<T> : IRepository<T> where T : BaseEntity
    {
        protected readonly BurndownDBContext _context;
        protected readonly IMapper _mapper;
        protected DbSet<T> DbSet;

        protected Repository(BurndownDBContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
            DbSet = context.Set<T>();
        }

        public virtual async Task<IEnumerable<TDTO>> GetAllNotDeletedAsync<TDTO>
            (
            bool asNoTracking = true
            )
        {
            if (asNoTracking)
            {
                return await DbSet
                    .AsNoTracking()
                    .Where(x => !x.Deleted)
                    .ProjectTo<TDTO>(_mapper.ConfigurationProvider)
                    .ToListAsync();
            }

            return await DbSet
                    .Where(x => !x.Deleted)
                    .ProjectTo<TDTO>(_mapper.ConfigurationProvider)
                    .ToListAsync();
        }

        public async virtual Task<IEnumerable<TDTO>> GetListAsync<TDTO>
            (
                Expression<Func<T, bool>> where,
                bool asNoTracking = true
            )
        {
            if (asNoTracking)
            {
                return await DbSet
                    .AsNoTracking()
                    .Where(where)
                    .Where(T => !T.Deleted)
                    .ProjectTo<TDTO>(_mapper.ConfigurationProvider)
                    .ToListAsync();
            }

            return await DbSet
                .Where(where)
                .Where(T => !T.Deleted)
                .ProjectTo<TDTO>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        public virtual async Task<IEnumerable<T>> GetListAsync
            (
                Expression<Func<T, bool>> where,
                bool asNoTracking = true
            )
        {
            if (asNoTracking)
            {
                return await DbSet
                    .AsNoTracking()
                    .Where(where)
                    .Where(T => !T.Deleted)
                    .ToListAsync();
            }

            return await DbSet
                .Where(where)
                .Where(T => !T.Deleted)
                .ToListAsync();
        }

        public virtual async Task<IEnumerable<T>> GetListAsync
            (
                Expression<Func<T, bool>> where,
                List<Expression<Func<T, bool>>> dateRange,
                bool asNoTracking = true
            )
        {
            if (asNoTracking)
            {
                return await DbSet
                    .AsNoTracking()
                    .Where(where)
                    .Where(dateRange[0])
                    .Where(dateRange[1])
                    .Where(T => !T.Deleted)
                    .ToListAsync();
            }

            return await DbSet
                    .Where(where)
                    .Where(dateRange[0])
                    .Where(dateRange[1])
                    .Where(T => !T.Deleted)
                .ToListAsync();
        }

        public virtual T GetFirst
            (
                Expression<Func<T, bool>> where,
                bool asNoTracking = true
            )
        {
            if (asNoTracking)
            {
                return DbSet
                    .AsNoTracking()
                    .Where(where)
                    .Where(T => !T.Deleted)
                    .FirstOrDefault();
            }

            return DbSet
                .Where(where)
                .Where(T => !T.Deleted)
                .FirstOrDefault();
        }

        public virtual async Task<T> GetFirstAsync
            (
                Expression<Func<T, bool>> where,
                bool asNoTracking = true
            )
        {
            if (asNoTracking)
            {
                return await DbSet
                    .AsNoTracking()
                    .Where(where)
                    .Where(T => !T.Deleted)
                    .FirstOrDefaultAsync();
            }

            return await DbSet
                .Where(where)
                .Where(T => !T.Deleted)
                .FirstOrDefaultAsync();
        }

        public async virtual Task<TDTO> GetFirstAsync<TDTO>
            (
                Expression<Func<T, bool>> where,
                bool asNoTracking = true
            )
        {
            if (asNoTracking)
            {
                return await DbSet
                    .AsNoTracking()
                    .Where(where)
                    .Where(T => !T.Deleted)
                    .ProjectTo<TDTO>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync();
            }

            return await DbSet
                .Where(where)
                .Where(T => !T.Deleted)
                .ProjectTo<TDTO>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync();
        }

        public async virtual Task<T> GetFirstIncludingDeletedAsync
            (
                Expression<Func<T, bool>> where,
                bool asNoTracking = true
            )
        {
            if (asNoTracking)
            {
                return await DbSet
                    .AsNoTracking()
                    .Where(where)
                    .FirstOrDefaultAsync();
            }

            return await DbSet
                .Where(where)
                .FirstOrDefaultAsync();
        }

        public virtual async Task AddAsync(T entity)
        {
            await DbSet.AddAsync(entity).ConfigureAwait(false);
        }

        public virtual async Task AddCollectionAsync(IEnumerable<T> entities)
        {
            await DbSet.AddRangeAsync(entities).ConfigureAwait(false);
        }

        public virtual Task UpdateAsync(T entity)
        {
            DbSet.Update(entity);
            return Task.CompletedTask;
        }

        public virtual Task UpdateCollectionAsync(IEnumerable<T> entities)
        {
            DbSet.UpdateRange(entities);
            return Task.CompletedTask;
        }

        public virtual async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
