var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IUser, UserService>();
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("LocalDevPolicy", policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:4200"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();
app.MapControllers();

app.Run();
