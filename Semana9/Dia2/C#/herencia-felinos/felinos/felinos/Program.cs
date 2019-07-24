using System;

namespace felinos
{
    class Program
    {
        static void Main(string[] args)
        {
            Felino felino = new Felino("macho");
            felino.Arañar();
            Gato gatito = new Gato("hembra","siamés");
            gatito.Maullar();
            gatito.Arañar();
        }
    }

    class Felino
    {
        protected int patas;
        protected bool bigotes;
        protected string genero;
      

        public Felino(string genero)
        {
            this.genero = genero;
        }
        public void Arañar()
        {
            Console.WriteLine("Zarpazo");
        }
    }
    class Gato : Felino
    {
        
        int vidas = 9;
        string raza;

        public Gato(string genero, string raza):base(genero)
        {
            this.raza=raza;
        }
        public void Maullar()
        {
            Console.WriteLine("Miauuu!!");
        }
        
    }
}
