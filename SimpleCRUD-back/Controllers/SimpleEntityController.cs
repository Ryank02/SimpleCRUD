using Microsoft.AspNetCore.Mvc;
using SimpleCRUD_back.Entities;

namespace SimpleCRUD_back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SimpleEntityController : ControllerBase
    {
        private static readonly SimpleEntity[] SimpleEntities =
        [
            new SimpleEntity { Id = 1, Name = "Entity 1" },
            new SimpleEntity { Id = 2, Name = "Entity 2" }
        ];

        [HttpGet("Get")]
        public IEnumerable<SimpleEntity> Get()
        {
            return SimpleEntities;
        }
    }
}
