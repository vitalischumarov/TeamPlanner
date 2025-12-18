using System.Text.Json;
using Models.User;

public class UserService : IUser
{
    public string loadAllUser()
    {
        string users = File.ReadAllText("Database/userDatabase.json");
        return users;
    }

    public void saveUser(User user)
    {
        string userString = loadAllUser();
        List<User> allUsers = JsonSerializer.Deserialize<List<User>>( userString);
        allUsers.Add(user);
        userString = JsonSerializer.Serialize(allUsers);
        File.WriteAllText("Database/userDatabase.json", userString);
    }
}