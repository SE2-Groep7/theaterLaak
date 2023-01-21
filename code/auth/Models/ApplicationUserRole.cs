using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;


public class ApplicationUserRole : IdentityRole
{
    public ApplicationUserRole() : base() { }
    public ApplicationUserRole(string name) : base(name) { }
    public string Description { get; set; }
    public virtual ApplicationUser User { get; set; }
    public virtual IdentityRole Role { get; set; }
}