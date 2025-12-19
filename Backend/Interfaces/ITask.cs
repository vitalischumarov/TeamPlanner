public interface ITask
{
    string LoadTasks(int userId);

    void AddTask();

    void DeleteTask();
}