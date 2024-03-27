using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CredentialsStorage.Infrastructure;
using CredentialsStorage.Models;
using CredentialsStorage.Services.ModelServices.Interfaces;

namespace CredentialsStorage.Controllers;

public class CredentialController : Controller {

    public CredentialController(ICredentialService credentialCrudService) {
        _credentialCrudService = credentialCrudService;
    }


    private readonly ICredentialService _credentialCrudService;


    public async Task<IActionResult> Index() {
        var modelList = await _credentialCrudService.GetAllAsync();
        return modelList is not null ?
                    View(modelList) :
                    Problem("Entity set 'StorageDbContext.Credentails'  is null.");
    }

    public async Task<IActionResult> Details(int? id) {
        var modelList = await _credentialCrudService.GetAllAsync();
        if (id is null || modelList is null) {
            return NotFound();
        }

        var model = await _credentialCrudService.GetByIdAsync(id); 
        if (model is null) {
            return NotFound();
        }

        return View(model);
    }

    public IActionResult Create() {
        return View();
    }

   
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create([Bind("Login,Password,Id")] Credential model) {
        if (ModelState.IsValid) {
            await _credentialCrudService.AddAsync(model);
            return RedirectToAction(nameof(Index));
        }
        return View(model);
    }

    public async Task<IActionResult> Edit(int? id) {
        if (id is null || await _credentialCrudService.GetAllAsync() is null) {
            return NotFound();
        }

        var model = await _credentialCrudService.GetByIdAsync(id);
        if (model is null) {
            return NotFound();
        }
        return View(model);
    }


    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(int id, [Bind("Login,Password,Id")] Credential model) {
        if (id != model.Id) {
            return NotFound();
        }

        if (ModelState.IsValid) {
            try {
                await _credentialCrudService.UpdateAsync(id, model);
            }
            catch (DbUpdateConcurrencyException) {
                if (await _credentialCrudService.GetByIdAsync(model.Id) is null) {
                    return NotFound();
                }
                else {
                    throw;
                }
            }
            return RedirectToAction(nameof(Index));
        }
        return View(model);
    }

    public async Task<IActionResult> Delete(int? id) {
        if (id is null || await _credentialCrudService.GetAllAsync() is null) {
            return NotFound();
        }

        var model = await _credentialCrudService
            .FirstOrDefaultAsync(m => m.Id == id);
        if (model is null) {
            return NotFound();
        }

        return View(model);
    }

    [HttpPost, ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteConfirmed(int id) {
        if (await _credentialCrudService.GetAllAsync() is null) {
            return Problem("Entity set 'StorageDbContext.Credentails'  is null.");
        }
        var model = await _credentialCrudService.GetByIdAsync(id);
        if (model is not null) {
            await _credentialCrudService.RemoveAsync(id);
        }

        return RedirectToAction(nameof(Index));
    }

}