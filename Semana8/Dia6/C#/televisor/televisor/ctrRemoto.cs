using System;
using System.Collections.Generic;
using System.Text;

namespace televisor
{
    class ctrRemoto
    {
        bool encender;


        public void Encender()
        {
            encender = true;
            Console.WriteLine("Encendido");
        }
        public void Apagar()
        {
            encender = false;
            Console.WriteLine("Apagado");
        }
    }
}
