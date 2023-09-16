using CredentailsStorage.Infrastructure;
using CredentailsStorage.Models;
using CredentailsStorage.Services.CrudServices.Implementation;
using CredentailsStorage.Services.ModelServices.Interfaces;

namespace WebAPIShopStudy.Services.CrudService.Implementation;

public class CredentailsService : CrudAsyncService<CredentailModel>, ICredentailsService {

    public CredentailsService(StorageDbContext dbContext)
        : base(dbContext) {
    }

}
