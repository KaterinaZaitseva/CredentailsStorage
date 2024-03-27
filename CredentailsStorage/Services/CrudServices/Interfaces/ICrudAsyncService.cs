using CredentialsStorage.Models;
using CredentialsStorage.Services.CrudService.Interfaces;
using System.Linq.Expressions;

namespace CredentialsStorage.Services.CrudServices.Interfaces;

public interface ICrudAsyncService<T> : ICrudService<T> where T : BaseModel {
    public Task<IEnumerable<T>?> GetAllAsync();
    public Task<T?> GetByIdAsync(int? id);
    public Task<T?> FirstOrDefaultAsync(Expression<Func<T, bool>> predicate);

    public Task AddAsync(T model);
    public Task UpdateAsync(int id, T model);
    public Task RemoveAsync(int id);
}
