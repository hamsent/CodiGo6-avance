namespace CodeFirstWithDataBase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CambiaColumnaApodoAlumno : DbMigration
    {
        public override void Up()
        {
            RenameColumn("dbo.Alumnos", "apodo", "sobrenombre");
            //AddColumn("dbo.Alumnos", "sobrenombre", c => c.String());
            //DropColumn("dbo.Alumnos", "apodo");
        }
        
        public override void Down()
        {
            RenameColumn("dbo.Alumnos", "sobrenombre","apodo");
            //AddColumn("dbo.Alumnos", "apodo", c => c.String());
            //DropColumn("dbo.Alumnos", "sobrenombre");
        }
    }
}
