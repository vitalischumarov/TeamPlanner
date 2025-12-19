var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IUser, UserService>();
builder.Services.AddScoped<ITask, TaskService>();
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev", policy =>
    {
        policy
            .WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();
app.MapControllers();
app.UseHttpsRedirection();
app.UseCors("AllowAngularDev");
app.UseAuthorization();

app.Run();
