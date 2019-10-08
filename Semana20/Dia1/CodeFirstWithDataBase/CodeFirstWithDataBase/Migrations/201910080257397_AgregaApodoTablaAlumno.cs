namespace CodeFirstWithDataBase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AgregaApodoTablaAlumno : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Alumnos", "apodo", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Alumnos", "apodo");
        }
    }
}
