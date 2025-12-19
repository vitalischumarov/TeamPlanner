using Models.User;
using Models.TaskModel;
using System.Text.Json;
using System.Linq;

public class TaskService: ITask
{
    private readonly IUser _iUser;

    public TaskService(IUser iUser)
    {
        _iUser = iUser;
    }

    public void AddTask()
    {
        throw new NotImplementedException();
    }

    public void DeleteTask()
    {
        throw new NotImplementedException();
    }

    public string LoadTasks(int userId)
    {
        string tasks_string = File.ReadAllText("Database/taskDatabase.json");
        List<TaskModel> allTasks = JsonSerializer.Deserialize<List<TaskModel>>( tasks_string);
        List<TaskModel> tasks = allTasks.Where((task) => task.userId == userId).ToList();
        tasks_string = JsonSerializer.Serialize(tasks);
        return tasks_string;
    }
}