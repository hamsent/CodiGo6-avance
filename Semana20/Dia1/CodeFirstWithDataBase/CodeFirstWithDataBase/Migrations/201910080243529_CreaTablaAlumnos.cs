namespace CodeFirstWithDataBase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreaTablaAlumnos : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Alumnos",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        nombre = c.String(maxLength: 20),
                        nota = c.Int(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Alumnos");
        }
    }
}
