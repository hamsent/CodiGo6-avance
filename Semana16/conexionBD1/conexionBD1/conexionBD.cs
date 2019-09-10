using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace ConexionDB_6
{
    // CLASE ENCARGADA DE GESTIONAR LA CONEXION A LA BASE DE DATOS
    class ConexionBD
    {
        SqlConnection con;
        string cadenaConexion = "Data source = .\\SQLEXPRESS; " +
              "Initial catalog = BikeStores;" +
              "Integrated security = true;";

        public ConexionBD()
        {
            con = new SqlConnection(cadenaConexion);
        }

        public void AbrirConexion()
        {
            try
            {
                con.Open();
                Console.WriteLine("Se abrió la conexión");
            }
            catch (Exception ex)
            {
                Console.WriteLine("No se pudo abrir la conexion.");
            }

        }
        public void CerrarConexion()
        {
            try
            {
                con.Close();
                Console.WriteLine("Se cerró la conexión");
            }
            catch (Exception ex)
            {
                Console.WriteLine("No se pudo cerrar la conexión");
            }
        }

        public SqlConnection GetConexion()
        {
            return con;
        }

    }
}