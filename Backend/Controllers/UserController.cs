using Microsoft.AspNetCore.Mvc;

[ApiController]
public class UserController: ControllerBase
{
    private readonly IUser _iUser;

    public UserController(IUser iUser)
    {
        _iUser = iUser;
    }

    [HttpGet("getAllUser")]
    public IActionResult getAllUser()
    {
        string users = _iUser.loadAllUser();
        return Ok(users);
    }
}