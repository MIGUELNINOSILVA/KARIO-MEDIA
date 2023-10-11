import swaggerJsDoc from 'swagger-jsdoc';

const options = {
swaggerDefinition: {
    openapi: '3.0.0',
    info: {
    title: 'API Kario Media',
    version: '3.0.0',
    description: 'Documentación de la API del software administrativo de proyectos Kario Media',
    },
    servers: [
    {
        url: 'http://localhost:4000',
    },
    ],
    paths: {
    '/api/area': {
        get: {
        summary: 'Retorna todas las áreas de la base de datos',
        tags: ['Areas'],
        responses: {
            '200': {
            description: 'Todas las áreas de la base de datos han sido retornadas',
            content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Areas',
                    },
                },
                example: [
                    {
                    nombre_area: 'Artes',
                    },
                    {
                    nombre_area: 'Tecnología',
                    },
                ],
                },
            },
            },
        },
        },
    },
    '/api/categoria': {
        get: {
        summary: 'Retorna todas las categorías de la base de datos',
        tags: ['Categorias'],
        responses: {
            '200': {
            description: 'Todas las categorías de la base de datos han sido retornadas',
            content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Categorias',
                    },
                },
                example: [
                    {
                    nombre_categoria: 'Baja',
                    }
                ],
                },
            },
            },
        },
        },
    },
    '/api/formulaProyecto': {
        get: {
        summary: 'Retorna todas las Formulas de la base de datos',
        tags: ['Formula_Proyecto'],
        responses: {
            '200': {
            description: 'Todas las formulas de la base de datos han sido retornadas',
            content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Formula_Proyecto',
                    },
                },
                example: [
                    {
                    nombre_formula: 'Metodologia Scrum',
                    }
                ],
                },
            },
            },
        },
        },
    },
    '/api/proyecto': {
        get: {
        summary: 'Retorna todas los proyectos de la base de datos',
        tags: ['Proyectos'],
        responses: {
            '200': {
            description: 'Todas los proyectos de la base de datos han sido retornados',
            content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Proyectos',
                    },
                },
                example: [
                    {
                        indicador_proyecto: "Desarrollo de Software",
                        descripcion_proyecto: "Creación de una nueva aplicación móvil para la gestión de tareas y proyectos",
                        fecha_inicio_proyecto: "2023-08-15T00:00:00.000Z",
                        fecha_terminacion_proyecto: "2023-12-10T00:00:00.000Z",
                        lider_proyecto: "65240951378a3ba512a6db6e",
                        id_usuario_proyecto: "652409a8378a3ba512a6db6f",
                        formula_proyecto: "652405c0378a3ba512a6db49",
                        categoria_proyecto: "65240548378a3ba512a6db42",
                        area_proyecto: "6524051d378a3ba512a6db3d"
                    },
                ],
                },
            },
            },
        },
        },
    },
    }, // Fin de la sección paths
    components: {
    schemas: {
        Areas: {
        type: 'object',
        properties: {
            nombre_area: {
            type: 'string',
            description: 'Nombre del Área del proyecto',
            },
        },
        required: ['nombre_area'],
        example: {
            nombre_area: 'Artes',
        },
        },
        Categorias: {
        type: 'object',
        properties: {
            nombre_categoria: {
            type: 'string',
            description: 'Nombre de la categoría de proyecto',
            },
        },
        required: ['nombre_categoria'],
        example: {
            nombre_categoria: 'Baja',
        },
        },
        Formula_Proyecto: {
        type: 'object',
        properties: {
            nombre_formula: {
            type: 'string',
            description: 'Nombre de la Formula del proyecto',
            },
        },
        required: ['nombre_formula'],
        example: {
            nombre_formula: 'Metodologia Agíl',
        },
        },
        Proyectos: {
        type: 'object',
        properties: {
            indicador_proyecto: {
            type: 'string',
            description: 'Indicador del proyecto',
            },
            descripcion_proyecto: {
                type:'string',
                description: 'Descripción del proyecto',
            },
            fecha_inicio_proyecto: {
                type:'date',
                description: 'Fecha de inicio del proyecto',
            },
            fecha_terminacion_proyecto: {
                type:'date',
                description: 'Fecha de terminación del proyecto',
            },
            lider_proyecto: {
                type:'ObjectId',
                description: 'Nombre del lider del proyecto',
            },
            id_usuario_proyecto: {
                type:'ObjectId',
                description: 'Nombre del lider del proyecto',
            },
            formula_proyecto: {
                type:'ObjectId',
                description: 'Formula del proyecto',
            },
            categoria_proyecto: {
                type:'ObjectId',
                description: 'Categoria del proyecto',
            },
            area_proyecto: {
                type:'ObjectId',
                description: 'Area del proyecto',
            },
        },
        required: [
            'indicador_proyecto',
            'descripcion_proyecto',
            'fecha_inicio_proyecto',
            'fecha_terminacion_proyecto',
            'lider_proyecto',
            'id_usuario_proyecto',
            'formula_proyecto',
            'categoria_proyecto',
            'area_proyecto',
        ],
        example:   {
            indicador_proyecto: "Modelado 3D",
            descripcion_proyecto: "Enfoque en realizar una serie de diseñoa para produccion en una empresa de estilistas",
            fecha_inicio_proyecto: "2023-09-01",
            fecha_terminacion_proyecto: "2023-11-23",
            lider_proyecto: "65253622a1d9acf6e3d82023",
            id_usuario_proyecto: "65253622a1d9acf6e3d82023",
            formula_proyecto: "6524058d378a3ba512a6db47",
            categoria_proyecto: "6524054d378a3ba512a6db43",
            area_proyecto: "65240515378a3ba512a6db3c"
        },
        },
    },
    },
}, // Fin de la sección swaggerDefinition
apis: ['./routes/*.js'], // Otras rutas que deseas documentar
};
  

const swaggerSpec = swaggerJsDoc(options);

export default swaggerSpec;
