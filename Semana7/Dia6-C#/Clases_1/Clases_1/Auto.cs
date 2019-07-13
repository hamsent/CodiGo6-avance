using System;
using System.Collections.Generic;
using System.Text;

namespace Clases_1
{
    class Auto
    {
        //variables, caracteristicas del objeto, atributos de clase
        //accesibilidad privad y pública
        //todos los metodos y atributos son por defecto privados
        //    privado:solo se puede usar dentro de la clase
        //    púclico: cualquiera puede usar los metodos y atributos
        public string marca;
        public string modelo;
        public int año;
        public string placa;

        //seleccionar los atributos, ctrl+. , generar constructor
        public Auto(string marca, string modelo, int año, string placa)
        {
            this.marca = marca;
            this.modelo = modelo;
            this.año = año;
            this.placa = placa;
            Console.WriteLine("Se creo un auto con sus caracteristicas");
        }
        public Auto()
        {
            Console.WriteLine("Se creo un auto");
        }
        


        //funciones, comportamiento del objeto, metodos de clase
        public void Arrancar()
        {
            Console.WriteLine("RUMMM");
        }
        public void Atropellar(string nombre)
        {
            Console.WriteLine($"{nombre} grita out!!!");
        }
        //sobrecarga de funcion atropellar, esta recibe dos cadenas
        public void Atropellar(string atropellador, string sapo)
        {
            Console.WriteLine($"{atropellador} grita out!!!");
            Console.WriteLine($"{sapo} Policia!!!");
          
        }
        //el constructor se llama cada vez que se crea un objeto constructor sin parámetros
        
    }
}
