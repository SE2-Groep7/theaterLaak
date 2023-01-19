using Microsoft.EntityFrameworkCore;

var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<DatabaseContext>(options =>{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DatabaseContext") ?? throw new InvalidOperationException("Connection string 'DatabaseContext' not found."));
    options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);});
    
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy  =>
                      {
                                policy.AllowAnyOrigin()
                                        .AllowAnyMethod()
                                        .AllowAnyHeader();
                      });
});

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<DatabaseContext>(opt =>
    opt.UseInMemoryDatabase("TodoList"));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();

var app = builder.Build();

// Configure the HTTP request pipeline.

    app.UseSwagger();
    app.UseSwaggerUI();


app.UseHttpsRedirection();
app.UseRouting();
    app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
// app.UseCors(policy => policy.WithOrigins("http://localhost", "http://localhost:3000","https://mohieddin.nl/","http://mohieddin.nl").AllowAnyMethod().AllowAnyHeader().AllowCredentials().SetPreflightMaxAge(TimeSpan.FromMinutes(10)).Build());app.UseAuthorization();
app.UseEndpoints(endpoints =>
    {
        endpoints.MapHub<ShowHub>("/showHub");
        // ...
    });
    
app.UseAuthorization();
app.MapControllers();

app.Run();
