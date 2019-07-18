using System;

namespace persona
{
    class Program
    {
        static void Main(string[] args)
        {
            persona unaPersona = new persona();

            unaPersona.Altura = 1.75;
            unaPersona.Peso = 68;
            unaPersona.Nombre = "Ronald";
            unaPersona.CalcularPesoIdeal();
            

            unaPersona.ComprobarSexo();
            unaPersona.MostrarInformacion();
            unaPersona.GenerarDNI();
            unaPersona.MostrarInformacion();
            // FUNCION ESMAYORDEEDAD()
            // FUNCION COMPROBARSEXO()
            // FUNCION MOSTRARDATOS()    
            //clase random
            Random random = new Random();
            Console.WriteLine();
            Console.WriteLine(random.Next(100));
            
            Console.WriteLine(random.Next(64, 99));
            //imprimir numero aleatorio entre 64 y 98 incluidos


            //int numero = random.Next(99);
            //if (numero >= 64)
            //    Console.WriteLine(numero);
            //Console.ReadKey();

            //int aleatorio = random.Next(35)+64;
            //Console.WriteLine(aleatorio);


            
        }

    }
}
