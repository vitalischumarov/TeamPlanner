public class UserService : IUser
{
    public string loadAllUser()
    {
        string users = File.ReadAllText("Database/userDatabase.json");
        return users;
    }
}