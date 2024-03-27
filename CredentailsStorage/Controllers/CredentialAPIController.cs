using CredentialsStorage.Models;
using CredentialsStorage.Services.ModelServices.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CredentialsStorage.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CredentialAPIController : ControllerBase {

    public CredentialAPIController(ICredentialService credentialCrudService) {
        _credentialCrudService = credentialCrudService;
    }


    private readonly ICredentialService _credentialCrudService;


    [HttpGet]
    public async Task<IActionResult> GetAll() {
        return Ok(await _credentialCrudService.GetAllAsync());
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id) {
        return Ok(await _credentialCrudService.GetByIdAsync(id));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Credential model) {
        await _credentialCrudService.UpdateAsync(id, model);
        return Ok();      
    }

    [HttpPost]
    public async Task<IActionResult> Add(Credential model) {
        await _credentialCrudService.AddAsync(model);
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Remove(int id) {
        await _credentialCrudService.RemoveAsync(id);
        return Ok();
    }
}
