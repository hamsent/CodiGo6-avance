using ConexionDB_6.Controladores;
using ConexionDB_6.Entidades;
using System;

namespace ConexionDB_6
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("MENU");
            Console.WriteLine("1. LOGIN");
            Console.WriteLine("2. ¿SIN USUARIO? CREAR USUARIO");

            ControladorUsuario cUsuario = new ControladorUsuario();

            Usuario usu = new Usuario() { Nombre = "Christian", Clave = "123" };
            cUsuario.InsertarUsuario(usu);

            cUsuario.InsertarUsuario(new Usuario() { Nombre = "Yo", Clave = "666" });
            /* SqlConnection con = new SqlConnection();
             con.ConnectionString =
                "Data source = .\\SQLEXPRESS; " + // SERVIDOR DONDE ESTÁN LOS DATOS
                "Initial catalog = BikeStores;" + // LA BASE DE DATOS A DONDE NOS CONECTAMOS
                "Integrated security = true;";

             try
             {
                 con.Open();
                 Console.WriteLine("Se conectó correctamente");
             }
             catch (Exception ex)
             {
                 Console.WriteLine("No se pudo conectar a la base de datos");
             }
             string nombre = "Christian";
             string clave = "1234";

             // SqlCommand cmd = new SqlCommand
             //   ($"SELECT * FROM USUARIOS WHERE nombre = 'Christian' and clave = '1234'");
             SqlCommand cmd = new SqlCommand  // CAMBIAMOS LAS PALABRAS POR VARIABLES
                ($"SELECT * FROM USUARIOS WHERE nombre = '{nombre}' and clave = '{clave}'", con);

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
                 Console.WriteLine(reader[0] + "\t\t" + reader[1]);
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
