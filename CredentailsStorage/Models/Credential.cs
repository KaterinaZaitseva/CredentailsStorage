namespace CredentialsStorage.Models;

public class Credential : BaseModel {
    public String Login { get; set; } = "";
    public String Password { get; set; } = "";
    public String ServiceName { get; set; } = "";
}
