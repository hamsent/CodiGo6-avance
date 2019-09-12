using ConexionDB_6.Controladores;
using ConexionDB_6.Entidades;
using System;
using System.Data.SqlClient;

namespace ConexionDB_6
{
    class Program
    {
        static void Main(string[] args)
        {
           
                Console.WriteLine("INGRESE SU CORREO");
                string correoLogeo = Console.ReadLine();

                Console.WriteLine("INGRESE SU PASSWORD");
                string passwordLogeo = Console.ReadLine();




            ControladorUsuario cUsuario = new ControladorUsuario();
            Usuario usu = new Usuario() { Correo = correoLogeo, Contraseña =passwordLogeo };
            cUsuario.Login(usu);

            //Console.WriteLine("INGRESE SU CORREO");
            //string correoNuevo = Console.ReadLine();

            //Console.WriteLine("INGRESE SU PASSWORD");
            //string contraseñaNuevo = Console.ReadLine();

            //Console.WriteLine("INGRESE SU NOMBRE");
            //string nombreNuevo = Console.ReadLine();

            //Console.WriteLine("INGRESE SU FECHA DE NACIMIENTO");
            //DateTime fechaNuevo = Convert.ToDateTime(Console.ReadLine());

            //Console.WriteLine("INGRESE PRIVILEGIO I(INVITADO) O A(ADMINISTRADOR)  ");
            //char priNuevo = Convert.ToChar(Console.ReadLine());

            //cUsuario.InsertarUsuario(new Usuario() { Correo = correoNuevo, Contraseña = contraseñaNuevo, Nombre1 = nombreNuevo, Fecha_naci = fechaNuevo, Privilegios = priNuevo });

            //bool condition = true;

            //if ()
            //{
            //    Console.WriteLine("The variable is set to true.");
            //}
            //else
            //{
            //    Console.WriteLine("The variable is set to false.");
            //}
            //String numero;
            //switch (num)
            //{
            //    case 1:
            //        numero = "uno";
            //        break;
            //    case 2:
            //        numero = "dos";
            //        break;
            //    case 3:
            //        numero = "tres";
            //        break;
            //    case 4:
            //        numero = "cuatro";
            //        break;
            //    case 5:
            //        numero = "cinco";
            //        break;
            //    default:
            //        numero = "error";
            //        break;
            //}



            /*
            string nombre = "Christian";
            string clave = "1234";

            // SqlCommand cmd = new SqlCommand
            //   ($"SELECT * FROM USUARIOS WHERE nombre = 'Christian' and clave = '1234'");
            SqlCommand cmd = new SqlCommand  // CAMBIAMOS LAS PALABRAS POR VARIABLES
               ($"SELECT * FROM USUARIOS WHERE nombre = '{nombre}' and clave = '{clave}'",con);

            var resultado = cmd.ExecuteScalar(); // ejecuta un comando, devuelve el primer valor

            if (resultado == null)
               Console.WriteLine("No hubo resultados");
            else
               Console.WriteLine(resultado.ToString());


            cmd = new SqlCommand  // CAMBIAMOS LAS PALABRAS POR VARIABLES
               ($"SELECT count(*) FROM USUARIOS WHERE " +
               $"nombre = '{nombre}' and clave = '{clave}'", con);

            int respuesta = Convert.ToInt32(cmd.ExecuteScalar());

            Console.WriteLine($"Se encontraron {respuesta} resultado(s).");

            // INSERT 
            string nuevoNombre, nuevaClave;
            Console.WriteLine("****** Creacion de usuario ******");
            Console.WriteLine("Ingrese nuevo nombre de usuario");
            nuevoNombre = Console.ReadLine();

            Console.WriteLine("Ingrese nueva clave de usuario");
            nuevaClave = Console.ReadLine();

            cmd = new SqlCommand
               ($"INSERT INTO USUARIOS (NOMBRE, CLAVE) " +
               $"VALUES ('{nuevoNombre}', '{nuevaClave}')", con);
            cmd.ExecuteNonQuery();  // EJECUTA UNA INSTRUCCIÓN QUE NO DEVUELVE RESULTADOS

            // UPDATE
            Console.WriteLine("Ingresar nombre de usuario");
            nombre = Console.ReadLine();

            Console.WriteLine("Ingresar nueva contraseña");
            nuevaClave = Console.ReadLine();

            cmd = new SqlCommand
               ($"UPDATE USUARIOS SET CLAVE = '{nuevaClave}' " +
               $"WHERE NOMBRE = '{nombre}'", con);
            cmd.ExecuteNonQuery();

            // DELETE
            Console.WriteLine("Ingresar nombre de usuario");
            nombre = Console.ReadLine();

            cmd = new SqlCommand
               ($"DELETE FROM USUARIOS " +
               $"WHERE NOMBRE = '{nombre}'", con);
            cmd.ExecuteNonQuery();

            // CONSULTA CON RESULTADOS DE VARIAS FILAS
            Console.WriteLine("***** Nombres de los usuarios *****");

            cmd = new SqlCommand
               ($"SELECT NOMBRE, CLAVE FROM USUARIOS", con);

            // DATA READER SE ENCARGA DE LEER Y ALMACENAR DATOS DE UNA CONSULTA
            SqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {
               Console.WriteLine(reader[0]+"\t\t"+ reader[1]);
            }

            try
            {
               con.Close();
            }
            catch (Exception ex)
            {
               Console.WriteLine("No se pudo desconectar.");
            }
            */
        }
    }
}