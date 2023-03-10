using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using TodoApi.Models;
using Microsoft.Extensions.Configuration.EnvironmentVariables;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);
var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.
var config = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json").Build();
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
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = config.GetValue<string>("JWT:Issuer"),
        ValidAudience = config.GetValue<string>("JWT:Audience"),
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.GetValue<string>("JWT:SigningKey")))
           };
});

builder.Services.AddControllers();

// builder.Services.AddDbContext<TodoContext>(opt =>
//     opt.UseInMemoryDatabase("TodoList"));
builder.Services.AddDbContext<TodoContext>(options =>{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DatabaseContext") ?? throw new InvalidOperationException("Connection string 'DatabaseContext' not found."));
    options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(c =>
{
  c.SwaggerDoc("v1", new OpenApiInfo { 
    Title = "My API", 
    Version = "v1" 
  });
  c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme {
    In = ParameterLocation.Header, 
    Description = "Insert \"Bearer <JWT>\" into field",
    Name = "Authorization",
    Type = SecuritySchemeType.ApiKey,
    Scheme = "Bearer"
  });
  c.AddSecurityRequirement(new OpenApiSecurityRequirement {
   { 
     new OpenApiSecurityScheme 
     { 
       Reference = new OpenApiReference 
       { 
         Type = ReferenceType.SecurityScheme,
         Id = "Bearer" 
       } 
      },
      new string[] { } 
    } 
  });
});

builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
    app.UseSwagger();
    app.UseSwaggerUI();
// }

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors(policy => policy.WithOrigins("http://localhost", "http://localhost:3000","https://mohieddin.nl/","http://mohieddin.nl").AllowAnyMethod().AllowAnyHeader().AllowCredentials().SetPreflightMaxAge(TimeSpan.FromMinutes(10)).Build());app.UseAuthorization();

app.MapControllers();

app.Run();
