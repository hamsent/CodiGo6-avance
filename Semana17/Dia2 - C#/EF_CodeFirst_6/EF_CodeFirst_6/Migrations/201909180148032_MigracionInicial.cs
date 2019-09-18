namespace EF_CodeFirst_6.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MigracionInicial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Alumnoes",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        nombre = c.String(),
                        ponderado = c.Double(nullable: false),
                        direccion_id = c.Int(),
                    })
                .PrimaryKey(t => t.id)
                .ForeignKey("dbo.Direccions", t => t.direccion_id)
                .Index(t => t.direccion_id);
            
            CreateTable(
                "dbo.Cursoes",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        titulo = c.String(),
                        fechaDeInicio = c.DateTime(nullable: false),
                        Profesor_id = c.Int(),
                    })
                .PrimaryKey(t => t.id)
                .ForeignKey("dbo.Profesors", t => t.Profesor_id)
                .Index(t => t.Profesor_id);
            
            CreateTable(
                "dbo.Profesors",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        nombre = c.String(),
                        facultad = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.Direccions",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        calle = c.String(),
                        numero = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.CursoAlumnoes",
                c => new
                    {
                        Curso_id = c.Int(nullable: false),
                        Alumno_id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Curso_id, t.Alumno_id })
                .ForeignKey("dbo.Cursoes", t => t.Curso_id, cascadeDelete: true)
                .ForeignKey("dbo.Alumnoes", t => t.Alumno_id, cascadeDelete: true)
                .Index(t => t.Curso_id)
                .Index(t => t.Alumno_id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Alumnoes", "direccion_id", "dbo.Direccions");
            DropForeignKey("dbo.Cursoes", "Profesor_id", "dbo.Profesors");
            DropForeignKey("dbo.CursoAlumnoes", "Alumno_id", "dbo.Alumnoes");
            DropForeignKey("dbo.CursoAlumnoes", "Curso_id", "dbo.Cursoes");
            DropIndex("dbo.CursoAlumnoes", new[] { "Alumno_id" });
            DropIndex("dbo.CursoAlumnoes", new[] { "Curso_id" });
            DropIndex("dbo.Cursoes", new[] { "Profesor_id" });
            DropIndex("dbo.Alumnoes", new[] { "direccion_id" });
            DropTable("dbo.CursoAlumnoes");
            DropTable("dbo.Direccions");
            DropTable("dbo.Profesors");
            DropTable("dbo.Cursoes");
            DropTable("dbo.Alumnoes");
        }
    }
}
