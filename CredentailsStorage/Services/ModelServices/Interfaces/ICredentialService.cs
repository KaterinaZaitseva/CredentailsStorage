using CredentialsStorage.Models;
using CredentialsStorage.Services.CrudServices.Interfaces;

namespace CredentialsStorage.Services.ModelServices.Interfaces;

public interface ICredentialService : ICrudAsyncService<Credential> { }