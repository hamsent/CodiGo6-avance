USE [BikeStores]
GO

/****** Object:  Table [dbo].[Usuarios]    Script Date: 9/09/2019 22:11:52 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Usuarios](
	[correo] [varchar](20) NULL,
	[contraseña] [varchar](15) NULL,
	[nombre] [varchar](15) NULL,
	[fecha_naci] [datetime] NULL,
	[privilegios] [char](1) NULL
) ON [PRIMARY]
GO

