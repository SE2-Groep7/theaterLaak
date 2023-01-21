using System.ComponentModel.DataAnnotations;

public class UpdateProfileDTO
{
    [Required]
    public string Email { get; set; }

    [Required]
    public string PhoneNumber { get; set; }

    [Required]
    public string FirstName { get; set; }
    
    [Required]
    public string SurName { get; set; }
}
