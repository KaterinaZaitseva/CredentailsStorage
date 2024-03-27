using CredentialsStorage.Infrastructure;
using CredentialsStorage.Models;
using CredentialsStorage.Services.CrudServices.Implementation;
using CredentialsStorage.Services.ModelServices.Interfaces;

namespace WebAPIShopStudy.Services.CrudService.Implementation;

public class CredentialService : CrudAsyncService<Credential>, ICredentialService {

    public CredentialService(StorageDbContext dbContext)
        : base(dbContext) {
    }

}
