using CredentailsStorage.Infrastructure;
using CredentailsStorage.Services.ModelServices.Interfaces;
using WebAPIShopStudy.Services.CrudService.Implementation;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<StorageDbContext>();

builder.Services.AddScoped<ICredentailsService, CredentailsService>();

builder.Services.AddControllersWithViews();

var app = builder.Build();

if (!app.Environment.IsDevelopment()) {
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
