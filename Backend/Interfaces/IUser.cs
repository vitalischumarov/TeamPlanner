using Models.User;

public interface IUser
{
    string loadAllUser();
    void saveUser(User user);
}