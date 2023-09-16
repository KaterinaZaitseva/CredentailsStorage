using CredentailsStorage.Models;
using Microsoft.EntityFrameworkCore;

namespace CredentailsStorage.Infrastructure;

public class StorageDbContext : DbContext {
    public DbSet<CredentailModel> Credentails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
        optionsBuilder.UseSqlite("Data Source=storage.db");
    }
}