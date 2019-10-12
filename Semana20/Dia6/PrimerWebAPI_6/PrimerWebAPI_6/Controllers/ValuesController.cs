using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PrimerWebAPI_6.Controllers
{
    //mipagina.com/api/alumnos
    [Route("api/[controller]")] //puede ser "api/[controller]" o "api/values" ambos hacen referencia a la class ValuesController
    [ApiController]
    public class ValuesController : ControllerBase //CLASE CONTROLADOR
    {
        // GET api/values
        [HttpGet]//DECORADOR QUE INDICA EL TIPO DE PETICION
        //ActionResult: Respuesta de peticion

        public ActionResult<string> Get()
        {
            if (true)
                return "Cadena";
            else
                return NotFound("Ronald");//erespuesta del servidor 200

            //return Ok("Ronald");//RESPUESTA DEL SERVIDOR 200
            //return new string[] { "Ronald", "Toledo " };
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
