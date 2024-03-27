using CredentialsStorage.Infrastructure;
using CredentialsStorage.Services.ModelServices.Interfaces;
using WebAPIShopStudy.Services.CrudService.Implementation;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

builder.Services.AddDbContext<StorageDbContext>();

builder.Services.AddScoped<ICredentialService, CredentialService>();

builder.Services.AddControllersWithViews();

var app = builder.Build();

if (!app.Environment.IsDevelopment()) {
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseCors(builder => builder.WithOrigins("http://localhost:3000")
    .WithMethods("GET", "POST", "DELETE", "PUT"));

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
