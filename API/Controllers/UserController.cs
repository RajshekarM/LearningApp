using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private  readonly DataContext _context ;
        public  UserController(DataContext context)
         {
        _context = context;
         }


        [HttpGet]
        public ActionResult<IEnumerable<AppUser>> GetUsers()
        {
        return _context.Users.ToList();
        }

    }


}