using System;

namespace clases
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Celular miLadrillo = new Celular("NOKIA", "8110", "Celeste", "941090977","89098783959454");
            miLadrillo.llamar("956948745");
           
            Celular miCel = new Celular("NOKIA", "8010", "Negro", "941090977", "89098783959454");
            miLadrillo.llamar("956948745");

            miLadrillo.Colgar();
            Console.WriteLine($"Has credo {Celular.numeroDeCelulares } celulares");
            Console.WriteLine($"Mi numero es {miLadrillo.Numero}");
            Console.WriteLine($"Mi otro numero es {miCel.Numero}, marca {miCel.GetMarca()}");
            miCel.SetColor("Rojo");
        }
    }
    class Celular
        {
            string marca;
            string modelo;
            string color;
            string numero;
            string IMEI;
        //ATRIBUTO DE CLASE ESTATICO
        //es un atributo propio de la classe por eso static
        public static int numeroDeCelulares = 0;


        //control+. encapsular y seguir usandolo
        public string Marca { get => marca; set => marca = value; }
        public string Marca1 { get => marca; set => marca = value; }
        public string Modelo { get => modelo; set => modelo = value; }
        public string Color { get => color; set => color = value; }
        public string Numero { get => numero; set => numero = value; }
        public string IMEI1 { get => IMEI; set => IMEI = value; }

        // GET y SET
        // obtener y establecer, poner


        public String GetMarca()
        {
            return marca;

        }
        public String GetColor()
        {
            return color;

        }
        public void SetColor(string color)
        {
            this.color = color;
        }
        public Celular(string marca, string modelo, string color, string numero, string iMEI)
            {
                this.marca = marca;
                this.modelo = modelo;
                this.color = color;
                this.numero = numero;
                IMEI = iMEI;
                numeroDeCelulares++;
            }

            public void llamar(string numero)
            {

            }
            public int Colgar()
            {
                return (0);
            }
       
    }
}
