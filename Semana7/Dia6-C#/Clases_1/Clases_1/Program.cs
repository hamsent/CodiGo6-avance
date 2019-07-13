using System;

namespace Clases_1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr=new int[10];
            //creación de un objeto - instanciacción de clase
            Auto miAuto = new Auto();
            miAuto.marca = "VolksWagen";
            miAuto.modelo = "Golf GTi";
            miAuto.año = 2020;

            Console.WriteLine($"Este es mi {miAuto.modelo} del año {miAuto.año}");
            //acceso a los metodos de la clase clase con el operador punto
            miAuto.Arrancar();
            miAuto.Atropellar("Jorge");
            miAuto.Atropellar("Jorge","Osmar");
            Console.WriteLine($"Apunta la placa, es: {miAuto.placa}");
            //constructor auto
            Auto superAuto= new Auto("Toyota", "Corrolla", 2020, "AGE-483");
            Console.WriteLine($"Este es mi superauto {superAuto.marca} modelo {superAuto.modelo} del año {superAuto.año} con placa {superAuto.placa}");
        }
    }
}
