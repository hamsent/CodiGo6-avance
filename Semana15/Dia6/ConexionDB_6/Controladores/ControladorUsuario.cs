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
         cmd = new SqlCommand
            ($"INSERT INTO USUARIOS (NOMBRE, CLAVE) " +
            $"VALUES ('{usuario.Nombre}', '{usuario.Clave}')", 
            con.GetConexion());  // METODO GETCONEXION OBTIENE SqlConnection
         con.AbrirConexion();  // ANTES DE HACER CONSULTAS, ABRIR CONEXION
         cmd.ExecuteNonQuery();  // EJECUCIÓN DE LA INSTRUCCIÓN
         con.CerrarConexion();
      }

      public void CambiarContraseña (Usuario usuario)
      {
         cmd = new SqlCommand
            ($"UPDATE USUARIOS SET CLAVE = '{usuario.Clave}' " +
            $"WHERE NOMBRE = '{usuario.Nombre}'", con.GetConexion());
         con.AbrirConexion();
         cmd.ExecuteNonQuery();
         con.CerrarConexion();
      }
   }
}
