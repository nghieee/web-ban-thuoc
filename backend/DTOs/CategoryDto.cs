using System.Collections.Generic;

namespace web_ban_thuoc.DTOs
{
    public class CategoryDto
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public int? ParentCategoryId { get; set; }
        public List<CategoryDto> SubCategories { get; set; } = new List<CategoryDto>();
    }
}