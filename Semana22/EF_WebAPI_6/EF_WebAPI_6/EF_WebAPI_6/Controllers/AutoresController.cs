using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EF_WebAPI_6.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EF_WebAPI_6.Controllers
{
   [Route("api/[controller]")]
   public class AutoresController : Controller
   {
      private readonly BibliotecaContext context;

      public AutoresController(BibliotecaContext context)
      {
         this.context = context;
      }

      // GET: api/<controller>
      [HttpGet]
      public ActionResult<List<Autor>>  Get()
      {
         var autores = context.Autores.ToList(); // SE HACE LA CONSULTA A LA BD
         return Ok(autores);
      }

      // GET api/<controller>/5    API/AUTORES/5
      [HttpGet("{id}")]
      public ActionResult<Autor> Get(int id)
      {
         return Ok();
      }

      // POST api/<controller>
      [HttpPost]
      public ActionResult Post([FromBody]Autor autor)
      {
            context.Autores.Add(autor);
            context.SaveChanges();
      }

      // PUT api/<controller>/5
      [HttpPut("{id}")]
      public void Put(int id, [FromBody]string value)
      {
      }

      // DELETE api/<controller>/5
      [HttpDelete("{id}")]
      public void Delete(int id)
      {
      }
   }
}
