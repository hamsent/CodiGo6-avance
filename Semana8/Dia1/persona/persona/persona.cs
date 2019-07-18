using System;
using System.Collections.Generic;
using System.Text;

namespace persona
{
    class persona
    {
        string nombre;
        int edad;
        char sexo;
        string dni;
        double peso;
        double altura;

        //constructor por defecto
        public persona()
        {
            this.nombre = "";
            this.edad = 0;
            this.dni = "";
            this.sexo = 'M';
            this.peso = 0;
            this.altura =0;
        }

        public persona(string nombre, int edad, char sexo)
        {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
        }

        public persona(string nombre, int edad, char sexo, /*string dni*/ double peso, double altura)
        {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            //this.dni = dni;
            this.peso = peso;
            this.altura = altura;
        }

        public string Nombre { get => nombre; set => nombre = value; }
        public int Edad { get => edad; set => edad = value; }
        public string Dni { get => dni; set => dni = value; }
        public char Sexo { get => sexo; set => sexo = value; }
        public double Peso { get => peso; set => peso = value; }
        public double Altura { get => altura; set => altura = value; }

        public void CalcularPesoIdeal()
        {
            double pesoIdeal = peso / (Math.Pow(altura, 2));
            if (pesoIdeal < 20)
                Console.WriteLine("Esta bajo de peso");
            if (pesoIdeal>=20 && pesoIdeal<=25)
                Console.WriteLine("Tienen el peso ideal");
            if (pesoIdeal>25)
                Console.WriteLine("Sobrepeso");
        }
       
        public void EsMayorDeEdad()
        {
            if(edad>=18)
                Console.WriteLine("Es mayor de edad");
            else
                Console.WriteLine("No es mayor de edad");
        }

        public void ComprobarSexo()
        {
            if(sexo=='M'||sexo=='F')
                Console.WriteLine("El genero es correcto");
            else
            {
                Console.WriteLine("El genero es invalido, se cambio el valor por defecto");
                sexo = 'M';
            }
               
        }
        public void MostrarInformacion()
        {
            Console.WriteLine($"Nombre: {nombre}\nDNI: {dni}\nEdad: {edad}\nSexo: {sexo}\nPeso: {peso}\nAltura: {altura}");
           
        }

        public void GenerarDNI()
        {
            //Random r = new Random();
            //int numeroGenerdo=r.Next(1000000, 100000000);
            //string dniGenerado = "";
            //if (numeroGenerdo >= 1000000 && numeroGenerdo <= 9999999)
            //    dniGenerado = "0" + numeroGenerdo;
            //else
            //    dniGenerado = numeroGenerdo.ToString();

            //dni = dniGenerado;

            //Console.WriteLine(dniGenerado);
            Random r = new Random();
            int numeroGenerado = r.Next(1000000, 100000000);
           
            if (numeroGenerado.ToString().Length ==7)
                dni = "0" + numeroGenerado;
            else
                dni= numeroGenerado.ToString();
              

            Console.WriteLine(numeroGenerado);

        }
    }
}
