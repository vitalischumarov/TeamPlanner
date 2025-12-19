using Microsoft.AspNetCore.Mvc;

[ApiController]
public class TaskController: ControllerBase
{
    private readonly ITask _iTask;

    public TaskController(ITask iTask)
    {
        _iTask = iTask;
    }

    [HttpGet("getTasks/{id}")]
    public IActionResult GetTasks(int id)
    {
        string tasks = _iTask.LoadTasks(id);
        return Ok(tasks);
    }
}