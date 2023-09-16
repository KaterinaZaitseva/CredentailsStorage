using Microsoft.AspNetCore.Identity;

namespace CredentailsStorage.Models;

public class CredentailModel : BaseModel {
    public String Login { get; set; } = "";
    public String Password { get; set; } = "";
}
