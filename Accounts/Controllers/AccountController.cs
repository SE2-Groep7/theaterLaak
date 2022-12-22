using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;


[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
    private readonly dbContext _context;
    private readonly IHttpClientFactory _httpClientFactory;

    public AccountController(dbContext context, IHttpClientFactory httpClientFactory)
    {
        _context = context;
        _httpClientFactory = httpClientFactory;
    }

    [HttpGet]
    public async Task<ActionResult<IList<AccountDTO>>> GetAccounts()
    {
        List<Account> accounts =  await _context.Account
            .Include(x => x.AankoopGeschiedenis).Include(x => x.Intresses)
            .ToListAsync();
       List<AccountDTO> accountDTOs = new List<AccountDTO>();
            foreach(Account a in accounts){
                accountDTOs.Add(new AccountDTO{
                    Id = a.Id,
                    naam = a.naam,
                    email = a.email
                });
            }
            return accountDTOs;
    }

    [HttpPut("{accountId}/genres")]
    public async Task<IActionResult> AddGenres(int accountId, [FromBody]int[] genreIds)
    {
        var account = await _context.Account
            .Include(x => x.Intresses)
            .SingleOrDefaultAsync(x => x.Id == accountId);

        if (account == null)
        {
            return NotFound();
        }

        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri("http://localhost:5254/api/Genre/");

        foreach (var genreId in genreIds)
        {
            var existingGenre = account.Intresses
                .SingleOrDefault(x => x.GenreId == genreId);

            if (existingGenre == null)
            {
                var genreResponse = await client.GetAsync($"{genreId}");
                if (genreResponse.IsSuccessStatusCode)
                {
                    var genre = await genreResponse.Content.ReadAsAsync<GenreDTO>();

                    account.Intresses.Add(new AccountGenre
                    {
                        AccountId = accountId,
                        GenreId = genreId,

                    });
                }
            }
        }

        await _context.SaveChangesAsync();

        return NoContent();
    }
}
