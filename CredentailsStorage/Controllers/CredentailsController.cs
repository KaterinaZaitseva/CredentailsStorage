using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using CredentailsStorage.Infrastructure;
using CredentailsStorage.Models;
using CredentailsStorage.Services.ModelServices.Interfaces;

namespace CredentailsStorage.Controllers;
public class CredentailsController : Controller {

    public CredentailsController(ICredentailsService CredentailsCrudService) {
        _credentailsCrudService = CredentailsCrudService;
    }


    private readonly ICredentailsService _credentailsCrudService;


    public async Task<IActionResult> Index() {
        try {
            var credentails = await _credentailsCrudService.GetAllAsync();
            return credentails is not null ?
                    View(credentails) : Problem("Credentails  is null.");
        }
        catch (Exception) {
            return Problem("Error get Credentails");
        }
    }

    public async Task<IActionResult> Details(int? id) {
        try {
            if (id is null)
                return Problem("Error input id");

            if (await _credentailsCrudService.GetAllAsync() == null)
                return NotFound();

            var credentail = await _credentailsCrudService
                .FirstOrDefaultAsync(c => c.Id == id);

            if (credentail is null) {
                return NotFound();
            }

            return View(credentail);
        }
        catch (Exception) {
            return Problem("Error get Credentail");
        }
    }

    public IActionResult Create() {
        return View();
    }

 
    [HttpPost]
    public async Task<IActionResult> Create([Bind("Login,Password")] CredentailModel credentail) {
        try {
            if (ModelState.IsValid) {
                await _credentailsCrudService.AddAsync(credentail);
                return RedirectToAction(nameof(Index));
            }

            return View(credentail);
        }
        catch (Exception) {
            return Problem("Error add Credentail");
        }
    }

    public async Task<IActionResult> Edit(int? id) {
        try {
            if (id is null)
                return Problem("Error input id");

            if (await _credentailsCrudService.GetAllAsync() is null)
                return NotFound();

            var credentail = await _credentailsCrudService.GetByIdAsync(id);

            if (credentail is null) {
                return NotFound();
            }

            return View(credentail);
        }
        catch (Exception) {
            return Problem("Error edit Credentail");
        }

    }

    [HttpPost]
    public async Task<IActionResult> Edit(int id, [Bind("Login,Password")] CredentailModel credentail) {
        try {
            if (id != credentail.Id)
                return NotFound();

            if (_credentailsCrudService.GetById(id) is null)
                return NotFound();

            if (ModelState.IsValid) {
                await _credentailsCrudService.UpdateAsync(id, credentail);
                return RedirectToAction(nameof(Index));
            }

            return View(credentail);
        }
        catch (Exception) {
            return Problem("Error edit Credentail");
        }
    }

    public async Task<IActionResult> Delete(int? id) {
        try {
            if (id is null)
                return NotFound();

            if (await _credentailsCrudService.GetAllAsync() is null)
                return NotFound();

            var credentail = await _credentailsCrudService
                .FirstOrDefaultAsync(c => c.Id == id);

            if (credentail is null)
                return NotFound();

            return View(credentail);
        }
        catch (Exception) {
            return Problem("Error delete Credentail");
        }
    }

    [HttpPost, ActionName("Delete")]
    public async Task<IActionResult> DeleteConfirmed(int id) {
        try {
            if (await _credentailsCrudService.GetAllAsync() is null)
                return Problem("Credentails is null.");

            var credentail = await _credentailsCrudService.GetByIdAsync(id);
            await _credentailsCrudService.RemoveAsync(id);

            return RedirectToAction(nameof(Index));
        }
        catch (Exception) {
            return Problem("Error delete Credentail");
        }
    }
}