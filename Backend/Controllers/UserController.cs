using Microsoft.AspNetCore.Mvc;
using Models.User;

[ApiController]
public class UserController: ControllerBase
{
    private readonly IUser _iUser;

    public UserController(IUser iUser)
    {
        _iUser = iUser;
    }

    [HttpGet("getAllUser")]
    public IActionResult GetAllUser()
    {
        string users = _iUser.loadAllUser();
        return Ok(users);
    }

    [HttpPost( "addUser")]
    public IActionResult AddNewUser([FromBody] string username)
    {
        Random random = new Random();
        int userId = random.Next();
        User user = new User()
        {
            Id = userId,
            Name = username
        };
        _iUser.saveUser(user);
        return Ok( "saved");
    }

    [HttpDelete("deleteUser/{id}")]
    public IActionResult DeleteUser(int id)
    {
        _iUser.DeleteUser(id);
        return Ok("User was deleted");
    }
}