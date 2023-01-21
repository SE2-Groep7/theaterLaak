using System.ComponentModel.DataAnnotations;

public class UpdateUserDTO
{
    [Required]
    public string Email { get; set; }

    [Required]
    public string UserName { get; set; }
}
