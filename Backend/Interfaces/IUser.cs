using Models.User;

public interface IUser
{
    string loadAllUser();
    void saveUser(User user);

    void DeleteUser(int id);
}