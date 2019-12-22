using System;
using Microsoft.AspNetCore.Mvc;

namespace MovieApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public void Post([FromForm]string username, [FromForm]string password)
        {
            Console.WriteLine(username);
            Console.WriteLine(password);
        }
    }
}
