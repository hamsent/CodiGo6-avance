using System;

namespace herencia_2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            ActorDeVoz marioCastañeda = new ActorDeVoz();
            marioCastañeda.TipoDeVoz = "Goku";
            Console.WriteLine(marioCastañeda.TipoDeVoz);
            Actor actor = new Actor("christian","triller");

        }
    }
    class Actor
    {
        //por defecto todo es privado
        //    protected: es heredado a clases hijas e inaccesible para el publico
        protected string nombre;
        protected string genero;
        protected string[] personajes;

        public Actor(string nombre, string genero)
        {
            this.nombre = nombre;
            this.genero = genero;
        }

        public string Nombre { get => nombre; set => nombre = value; }
        public string Genero { get => genero; set => genero = value; }
        public string[] Personajes { get => personajes; set => personajes = value; }
    }

    //herencia: clase hija: clase padre
    //los atributos de la clase padre se transfieren a la clase hija
    //los metodos tambien son heredados
    class ActorDeVoz:Actor
    {

        //cuando usamos "base" nos referimos al padre
        public ActorDeVoz():base("christian","thriller")
        {
           
            //tenemos acceso a los atributos privados atraves de funciones
            Nombre = "chistian";
        }

        public ActorDeVoz(string nombre, string genero, string tipoDeVoz):base (nombre,genero)
        {
            this.TipoDeVoz = tipoDeVoz;
        }

        public string TipoDeVoz { get; set; }
    }
}
