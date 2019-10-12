using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PrimerWebAPI_6.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PrimerWebAPI_6.Controllers
{
    [Route("api/[controller]")] //api/books
    [ApiController]
    public class BooksController : Controller
    {
        List<book> books = new List<book>()
        {
            new book  {id=1, author="M. Douglas", title="Trading"},
            new book  {id=2, author="M. Douglas", title="Trading"},
            new book  {id=3, author="M. Douglas", title="Trading"},
            new book  {id=4, author="M. Douglas", title="Trading"},

        };

        // GET: /<controller>/
        [HttpGet]
        public ActionResult<IEnumerable<book>> Get()
        {
            return Ok(books);
            //return View();
        }
        [HttpGet("{id}")]
        public ActionResult<book> GetById(int id)
        {
            //book libro = new book();
            //for(int i=0; i<books.Count; i++)
            //{
            //    if(books[i].id==id)
            //    {
            //        libro = books[i];
            //        break;
            //    }

            //}
            ////si no hay este registro 
            ////return BadRequest();
            //return libro;

            var miLibro= books.Where(x=>x.id==id).FirstOrDefault();
            if (miLibro == null)
                return BadRequest();
            else
                return Ok(miLibro);
        }
    }
}
