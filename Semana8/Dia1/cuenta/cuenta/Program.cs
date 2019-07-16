using System;

namespace cuenta
{
    class Program
    {
        static void Main(string[] args)
        {
            Cuenta miCuenta = new Cuenta("Ronald",25);
            Cuenta miCuenta1 = new Cuenta("Carlos");
            Console.WriteLine($" la cantidad del ususario {miCuenta.Titular} es:  {miCuenta.Cantidad}");
            Console.WriteLine($" la cantidad del ususario {miCuenta1.Titular} es:  {miCuenta1.Cantidad}");
            Console.WriteLine("**********************************************");
            miCuenta.Retirar(24);
            Console.WriteLine($" la cantidad restante del usuario {miCuenta.Titular} es: {miCuenta.Cantidad}");
            Console.WriteLine("**********************************************");
            miCuenta.Ingresar(-32);
            Console.WriteLine($" la cantidad del ususario {miCuenta.Titular} es: {miCuenta.Cantidad}");
        }
    }
    class Cuenta
    {
        string titular;
        double cantidad;

        public Cuenta(string titular, double cantidad=0)
        {
            this.Titular = titular;
            this.Cantidad = cantidad;
        }

        public string Titular { get => titular; set => titular = value; }
        public double Cantidad { get => cantidad; set => cantidad = value; }

        public  void Ingresar(double cantidad)
        {
            if (cantidad > 0)
                this.Cantidad = Cantidad+cantidad;
            else
                Console.WriteLine("La cantidad no puede ser negativa");
            
        }
        public void Retirar(double cantidad)
        {
            if((Cantidad-cantidad)<=0)
            this.Cantidad = 0;
            else
            this.Cantidad = Cantidad - cantidad;
        }
    }
}
