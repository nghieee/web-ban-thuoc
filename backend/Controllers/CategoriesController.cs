using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using web_ban_thuoc.Models;
using web_ban_thuoc.DTOs;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;

[Route("api/[controller]")]
[ApiController]
public class CategoriesController : ControllerBase
{
    private readonly AppDbContext _context;

    public CategoriesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CategoryDto>>> GetCategories()
    {
        var categories = await _context.Categories
            .Include(c => c.InverseParentCategory)
            .ThenInclude(sc => sc.InverseParentCategory) // Bao gồm danh mục cấp 3
            .Where(c => c.ParentCategoryId == null) // Chỉ lấy danh mục cấp 1
            .Select(c => new CategoryDto
            {
                CategoryId = c.CategoryId,
                CategoryName = c.CategoryName,
                Description = c.Description,
                ImageUrl = c.ImageUrl,
                ParentCategoryId = c.ParentCategoryId,
                SubCategories = c.InverseParentCategory.Select(sc => new CategoryDto
                {
                    CategoryId = sc.CategoryId,
                    CategoryName = sc.CategoryName,
                    Description = sc.Description,
                    ImageUrl = sc.ImageUrl,
                    ParentCategoryId = sc.ParentCategoryId,
                    SubCategories = sc.InverseParentCategory.Select(ssc => new CategoryDto
                    {
                        CategoryId = ssc.CategoryId,
                        CategoryName = ssc.CategoryName,
                        Description = ssc.Description,
                        ImageUrl = ssc.ImageUrl,
                        ParentCategoryId = ssc.ParentCategoryId
                    }).ToList()
                }).ToList()
            })
            .ToListAsync();

        return Ok(categories);
    }
}