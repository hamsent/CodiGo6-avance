using ConexionDB_6.Entidades;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace ConexionDB_6.Controladores
{
    // UN CONTROLADOR CONTIENE TODAS LAS FUNCIONES REFERIDAS A UNA
    // ENTIDAD QUE ESTÁ EN UNA BASE DE DATOS
    class ControladorUsuario
    {
        ConexionBD con = new ConexionBD(); // USAREMOS LA BASE DE DATOS
        SqlCommand cmd;

        public void InsertarUsuario(Usuario usuario)
        {
            con.AbrirConexion();  // ANTES DE HACER CONSULTAS, ABRIR CONEXION
            cmd = new SqlCommand
               ($"INSERT INTO USUARIOS (CORREO, CONTRASEÑA, NOMBRE,FECHA_NACI, PRIVILEGIOS) " +
               $"VALUES ('{usuario.Correo}', '{usuario.Contraseña}','{usuario.Nombre1}','{usuario.Fecha_naci}','{usuario.Privilegios}')",
               con.GetConexion());  // METODO GETCONEXION OBTIENE SqlConnection
         
            cmd.ExecuteNonQuery();  // EJECUCIÓN DE LA INSTRUCCIÓN
            con.CerrarConexion();
        }
        public void BorrarUsuario(Usuario usuario)
        {
            //con.AbrirConexion();  // ANTES DE HACER CONSULTAS, ABRIR CONEXION
            //                      // DELETE
            

            //cmd = new SqlCommand
            //   ($"DELETE FROM USUARIOS WHERE CORREO = '{usuario.Correo}'", con.GetConexion());
            //cmd.ExecuteNonQuery();  // EJECUCIÓN DE LA INSTRUCCIÓN
            //con.CerrarConexion();
        }

        //public void CambiarContraseña(Usuario usuario)
        //{
        //    cmd = new SqlCommand
        //       ($"UPDATE USUARIOS SET CLAVE = '{usuario.Clave}' " +
        //       $"WHERE NOMBRE = '{usuario.Nombre}'", con.GetConexion());
        //    con.AbrirConexion();
        //    cmd.ExecuteNonQuery();
        //    con.CerrarConexion();
        //}
        public void Login(Usuario usuario)
        {
            con.AbrirConexion();
            cmd = new SqlCommand
               ($"SELECT  nombre, privilegios FROM USUARIOS WHERE correo='{usuario.Correo}' AND contraseña='{usuario.Contraseña}'", con.GetConexion());
           
           
            //var acceso = cmd.ExecuteScalar(); // ejecuta un comando, devuelve el primer valor
            SqlDataReader reader = cmd.ExecuteReader();
            reader.Read();

            string privilegios=(Convert.ToString(reader[1]));
            if (reader == null)
                Console.WriteLine("No hubo resultados");
            else
            {
                
                if (privilegios == "a")
                    privilegios = "ADMNISTRADOR";
                else
                    privilegios = "INVITADO";


                Console.WriteLine("*****ACCESO CORRECTO***\t\t" + reader[0]+ " ERES BIENVENIDO \t\t\t\t ERES UN USUARIOS "+privilegios);
                
                Console.WriteLine("*********ELIJA LA OPRERACION A REALIZAR**********");
                Console.WriteLine("1. CREAR USUARIOS");
                Console.WriteLine("2. BORRADO DE USUARIOS");
                Console.WriteLine("3. CAMBIO CONTRASEÑA");
                Console.WriteLine("4. LISTAR A TODOS LOS USUARIOS");
                Console.WriteLine("5. LOGOUT");
                

                int numero = int.Parse(Console.ReadLine());
                switch (numero)
                {
                    case 1:

                        Console.WriteLine("INGRESE SU CORREO");
                        string correoNuevo = Console.ReadLine();

                        Console.WriteLine("INGRESE SU PASSWORD");
                        string contraseñaNuevo = Console.ReadLine();

                        Console.WriteLine("INGRESE SU NOMBRE");
                        string nombreNuevo = Console.ReadLine();

                        Console.WriteLine("INGRESE SU FECHA DE NACIMIENTO");
                        DateTime fechaNuevo = Convert.ToDateTime(Console.ReadLine());

                        Console.WriteLine("INGRESE PRIVILEGIO I(INVITADO) O A(ADMINISTRADOR)  ");
                        char priNuevo = Convert.ToChar(Console.ReadLine());

                        InsertarUsuario(new Usuario() { Correo = correoNuevo, Contraseña = contraseñaNuevo, Nombre1 = nombreNuevo, Fecha_naci = fechaNuevo, Privilegios = priNuevo });

                        break;
                    case 2:
                        //Console.WriteLine("INGRESE CORREO DE USUARIO A ELIMINAR");
                        //string correoEli = Console.ReadLine();
                        //BorrarUsuario(new Usuario() {Correo=correoEli});



                        break;
                    case 3:
                        Console.WriteLine("EN CONSTRUCCIÓN");
                        break;
                    case 4:
                        Console.WriteLine("EN CONSTRUCCIÓN");
                        break;
                    case 5:
                        Console.WriteLine("EN CONSTRUCCIÓN");
                        break;
                    default:
                    
                        break;
                }
            }

            cmd.ExecuteNonQuery();
            con.CerrarConexion();
            
        }
    }
}
