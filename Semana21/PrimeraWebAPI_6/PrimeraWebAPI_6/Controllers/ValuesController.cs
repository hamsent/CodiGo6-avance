using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PrimeraWebAPI_6.Controllers
{

   // mipagina.com/api/alumnos
   [Route("api/[controller]")]  // api/values
   [ApiController]
   public class ValuesController : ControllerBase // CLASE CONTROLADOR
   {
      // GET api/values
      [HttpGet]   // DECORADOR QUE INDICA EL TIPO DE PETICIÓN
      // ActionResult: Respuesta de petición
      public ActionResult<string> Get()  // SE PUEDE DEVOLVER UN OK O UNA STRING
      {
         if (true)
            return "Cadena";
         else
            return NotFound("Christian"); // RESPUESTA DEL SERVIDOR 200 OK
      }

      // GET api/values/5
      [HttpGet("{id}")]
      public ActionResult<int> Get(int id)
      {
         return id;
      }

      // POST api/values
      [HttpPost]
      public void Post([FromBody] string value)
      {
      }

      // PUT api/values/5
      [HttpPut("{id}")]
      public void Put(int id, [FromBody] string value)
      {
      }

      // DELETE api/values/5
      [HttpDelete("{id}")]
      public void Delete(int id)
      {
      }
   }
}
