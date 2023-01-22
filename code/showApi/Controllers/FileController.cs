using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;

[Route("api/[controller]")]
[ApiController]
public class FileController : ControllerBase
{
     private readonly DatabaseContext _context;

        public FileController(DatabaseContext context)
        {
            _context = context;
        }
    [HttpPost]
    public ActionResult Post([FromForm] ShowDTO file)
    {
        try
        {
            string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", file.FormFile.FileName);
            using (Stream stream = new FileStream(path, FileMode.Create))
            {
                file.FormFile.CopyTo(stream);
                FileModel fm = new FileModel{Id = file.Id, showName = file.showName, FileName = file.FormFile.FileName, fotoAlt = file.fotoAlt, beschrijving = file.beschrijving};
                _context.FileModels.Add(fm);
                _context.SaveChanges();
            }
            return StatusCode(StatusCodes.Status201Created);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpGet("Show/{fileName}")]
    public ActionResult GetFile(string fileName)
    {
        try
        {
            string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", fileName);
            byte[] fileBytes = System.IO.File.ReadAllBytes(path);
            return File(fileBytes, "application/octet-stream", fileName);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

        [HttpGet("Show")]
 public async Task<ActionResult<FileModel>> GetShow(string showName)
{
    var show = await _context.FileModels.FirstOrDefaultAsync(f => f.showName == showName);

    if (show == null)
    {
        return NotFound();
    }

    return show;
}
[HttpGet("Show/perID/{id}")]
public async Task<ActionResult<FileModel>> GetShowById(int id)
{
    var show = await _context.FileModels.FirstOrDefaultAsync(f => f.Id == id);

    if (show == null)
    {
        return NotFound();
    }

    return show;
}

    [HttpGet]
    public ActionResult<List<FileModel>> Get()
    {
        try
        {
            return _context.FileModels.ToList();
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}