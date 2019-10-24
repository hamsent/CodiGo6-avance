using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PrimeraWebAPI_6.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PrimeraWebAPI_6.Controllers
{
   [Route("api/[controller]")]  // api/books
   [ApiController]
   public class BooksController : Controller
   {
      List<Book> books = new List<Book>()
      {
         new Book { id = 1 , author = "M. Douglas", title = "Trading", price=20.03 },
         new Book { id = 2 , author = "Anónimo", title = "Un libro",price=15.99},
         new Book { id = 3 , author = "Peter", title = "Before fall", price=89.89},
         new Book { id = 4 , author = "Emma Cline", title = "The Martian", price=24.55},
      };

      // TODOS LOS LIBROS
      [HttpGet]
      public ActionResult<IEnumerable<Book>> Get()
      {
         return Ok(books);
      }

      // LIBRO POR ID
      //[HttpGet("buscarporid/{id}")]   //  api/books/4
      public ActionResult<Book> GetById(int id)
      {
         /*
         Book libro = new Book();
         for (int i = 0; i < books.Count; i++)
         {
            if (books[i].id == id)
            {
               libro = books[i];
               break;
            }
         }
         return libro;
         */

         var miLibro = books.Where(x => x.id == id).FirstOrDefault();
         if (miLibro == null)
            return BadRequest();
         else
            return Ok(miLibro);

         // si no hay este registro
         // return BadRequest();
         

      }

        // crear la accion BuscarPorTitulo
        // recibe una cadena
        [HttpGet("buscarportitulo/{title}")]   //  api/books/4
        public ActionResult<Book> GetById(string title)
        {

            var miLibro = books.Where(x => x.title == title).FirstOrDefault();
            if (miLibro == null)
                return BadRequest();
            else
                return Ok(miLibro);

            // si no hay este registro
            // return BadRequest();


        }

        //busqueda por precio
        //[HttpGet]   //  api/BOOKS/?precio=89.89
        //public ActionResult<Book> GetByPrice(double precio)
        //{

        //    var miLibro = books.Where(x => x.price == precio).FirstOrDefault();
        //    if (miLibro == null)
        //        return BadRequest();
        //    else
        //        return Ok(miLibro);

        //    // si no hay este registro
        //    // return BadRequest();


        //}

        [HttpPost]
        public ActionResult AddBook([FromBody] Book libro)
        {
            books.Add(libro);
            return Ok();
        }
    }
}
