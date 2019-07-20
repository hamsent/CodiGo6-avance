using System;
using System.Collections.Generic;
using System.Text;

namespace televisor
{
    class Televisor
    {
        double precio;
        string color;
        char consumo;
        string pulgadas;
        ctrRemoto ctrRemoto=new ctrRemoto();
        //bool encendido;

        public double Precio { get => precio; set => precio = value; }
        public string Color { get => color; set => color = value; }
        public char Consumo { get => consumo; set => consumo = value; }
        public string Pulgadas { get => pulgadas; set => pulgadas = value; }
        internal ctrRemoto CtrRemoto { get => ctrRemoto; set => ctrRemoto = value; }
       

        public Televisor(double precio, string pulgadas)
        {
            this.precio = precio;
            this.color = "Blanco";
            this.consumo = 'F';
            this.pulgadas = pulgadas;
            
        }

        public Televisor()
        {
            this.precio = 1000;
            this.color = "Blanco";
            this.consumo = 'F';
            this.pulgadas = "32";
           
        }

        public Televisor(double precio, string color, char consumo, string pulgadas)
        {
            this.precio = precio;
            this.color = color;
            this.consumo = consumo;
            this.pulgadas = pulgadas;
          
        }
        public override string ToString()
        {
            return $"Mi tele es: {color} con {pulgadas}\" de consumo {consumo} ";
        }
        public void ComprobarConsumo()
        {
            if (this.consumo=='A'|| this.consumo == 'B' || this.consumo == 'C' || this.consumo == 'D' || this.consumo == 'E' || this.consumo == 'F')
            {
                Console.WriteLine($"El valor que tiene es: {this.consumo}");
            }
            else
            {
                Console.WriteLine("No existe el consumo:");
                this.Consumo = 'F';
            }
        }

        public void PrecioFinal()
        {
            double precioC = 0;
            switch (this.consumo)
            {
                case 'A':
                    precioC=100;
                    break;
                case 'B':
                    precioC = 80;
                    break;
                case 'C':
                    precioC = 60;
                    break;
                case 'D':
                    precioC = 40;
                    break;
                case 'E':
                    precioC = 30;
                    break;
                case 'F':
                    precioC = 20;
                    break;
            }
            double precioP = 0;
            switch (this.pulgadas)
            {
                case "32":
                    precioP = 100;
                    break;
                case "55":
                    precioP = 250;
                    break;
                case "60":
                    precioP = 300;
                    break;

            }
            Console.WriteLine($"el precio final es: {this.precio + precioC + precioP}");
            //this.precio = this.precio + precioC + precioP;
        }
    }
}
