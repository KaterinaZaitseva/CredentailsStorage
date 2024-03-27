using CredentialsStorage.Models;
using Microsoft.EntityFrameworkCore;

namespace CredentialsStorage.Infrastructure;

public class StorageDbContext : DbContext {
    public DbSet<Credential> Credentails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
        optionsBuilder.UseSqlite("Data Source=storage.db");
    }
}