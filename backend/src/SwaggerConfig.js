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
    '/api/auth/signup': {
        post: {
        summary: 'Ingresa los nuevos datos de los usuarios en la base de datos',
        tags: ['Authentificacion'],
        requestBody: {
        required: true,
        content: {
            'application/json': {
            schema: {
                type: 'object',
                $ref: '#/components/schemas/Authentificacion'
            },
            example: {
                nombre_usuario: "Miguel Angel Niño",
                correo: 'miguel1@gmail.com',
                contraseña: 'miguel12345'
            },
            },
        },
        },
        responses: {
        '200': {
            description: 'Usuario creado correctamente',
            content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/Authentificacion'
                },
                example: {
                    nombre_usuario: "Miguel Angel Niño",
                    correo: 'miguel1@gmail.com',
                    contraseña: 'miguel12345'
                },
            },
            },
        },
        '400': {
            description: 'Solicitud Incorrecta / Error en la solicitud',
        },
        '500': {
            description: 'Error interno del servidor',
        },
        },
        },
    },
    '/api/auth/signin': {
        post: {
        summary: 'Authentifica los datos del Usuario',
        tags: ['Authentificacion'],
        requestBody: {
        required: true,
        content: {
            'application/json': {
            schema: {
                type: 'object',
                $ref: '#/components/schemas/Authentificacion'
            },
            example: {
                correo: 'miguel1@gmail.com',
                contraseña: 'miguel12345'
            },
            },
        },
        },
        responses: {
        '200': {
            description: 'Usuario Logueado',
            content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/Authentificacion'
                },
                example: {
                    correo: 'miguel1@gmail.com',
                    contraseña: 'miguel12345'
                },
            },
            },
        },
        '400': {
            description: 'Solicitud Incorrecta / Error en la solicitud',
        },
        '401': {
            description: 'Contraseña incorrecta',
        },
        '404':{
            description: 'Usuario no encontrado'
        },
        '500': {
            description: 'Error al iniciar sesión',
        },
        },
        },
    },
    '/api/usuario': {
        get: {
        summary: 'Retorna todas los usuarios disponibles en la base de datos',
        tags: ['Usuario'],
        parameters: [
            {
                name: 'x-access-token',
                in: 'header', // Indica que se proporciona como un parámetro de consulta
                description: 'Token de autenticación',
                required: true,
                schema: {
                type: 'string',
                },
            },
        ],
        responses: {
            '200': {
            description: 'Todas los Usuario disponibles en la base de datos han sido retornados',
            content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Usuario',
                    },
                },
                example: {
                    nombre_usuario: "Miguel Angel Niño",
                    correo: 'miguel1@gmail.com',
                    contraseña: 'miguel12345'
                },
                },
            },
            },
            '401': {
                description: 'Token expirado',
            },
            '403':{
                description: 'Requiere rol de Administrador'
            },
            '404':{
                description: 'Usuario no encontrado'
            },
            '500':{
                description: 'Error al obtener los Usuarios'
            },
        },
        },
    },
    '/api/usuario/{id}': {
        patch: {
        summary: 'Actualizar un Usuario',
        tags: ['Usuario'],
        parameters: [
            {
            in: 'path',
            name: 'id',
            schema: {
                type: 'string',
            },
            required: true,
            description: 'El ID del Usuario',
            },
            {
                name: 'x-access-token',
                in: 'header', // Indica que se proporciona como un parámetro de consulta
                description: 'Token de autenticación',
                required: true,
                schema: {
                type: 'string',
                },
            },
        ],
        requestBody: {
            required: true,
            content: {
            'application/json': {
                schema: {
                type: 'object',
                $ref: '#/components/schemas/Usuario',
                },
            },
            },
        },
        responses: {
            '200': {
                description: 'Usuario Actualizado',
                content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Ayuda',
                    },
                },
                example: {
                    nombre_usuario: "Miguel Angel Niño",
                    correo: 'miguel1@gmail.com',
                    contraseña: 'miguel12345'
                },
                },
            },
            },
            '403': {
                description: 'No se ha proporcionado un token'
            },
            '404': {
                description: 'Recurso no encontrado',
            },
            '500': {
                description: 'Error al actualizar la solicitud de ayuda',
            },
        },
        },
    },  
    '/api/rol': {
        get: {
        summary: 'Retorna todas los roles disponibles en la base de datos',
        tags: ['Rol'],
        parameters: [
            {
                name: 'x-access-token',
                in: 'header', // Indica que se proporciona como un parámetro de consulta
                description: 'Token de autenticación',
                required: true,
                schema: {
                type: 'string',
                },
            },
        ],
        responses: {
            '200': {
            description: 'Todas los Roles disponibles en la base de datos han sido retornados',
            content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Rol',
                    },
                },
                example: [
                    {
                        nombre_rol: "Empleado",
                    },
                ],
                },
            },
            },
            '401': {
                description: 'Token expirado',
            },
            '403':{
                description: 'Requiere rol de Administrador'
            },
            '404':{
                description: 'Usuario no encontrado'
            },
            '500':{
                description: 'Error al obtener los roles'
            },
        },
        },
    },
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
            '404':{
                description: 'Recurso no encontrado'
            },
            '500':{
                description: 'Error al obtener las Areas'
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
            '404':{
                description: 'Recurso no encontrado'
            },
            '500':{
                description: 'Error al obtener la Categoria'
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
            '404':{
                description: 'Recurso no encontrado'
            },
            '500':{
                description: 'Error al obtener las Formulas de los Proyectos'
            },
        },
        },
    },
    '/api/ayuda': {
        get: {
        summary: 'Retorna todas las solicitudes de ayuda de la base de datos',
        tags: ['Ayuda'],
        responses: {
            '200': {
            description: 'Todas las solicitudes de la base de datos han sido retornadas',
            content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Ayuda',
                    },
                },
                example: [
                    {
                        titulo_ayuda: "Cambios en el proyecto",
                        descripcion_ayuda: "Necesito cambiar el alcance de mi proyecto para incluir nuevas características.",
                        fecha_creacion_ayuda: "2023-09-20T00:00:00.000Z",
                        id_usuario_ayuda: "65240951378a3ba512a6db6e"
                    },
                ],
                },
            },
            },
            '404':{
                description: 'Recurso no encontrado'
            },
            '500':{
                description: 'Error al obtener las solicitudes de ayuda'
            },
        },
        },
    },
    '/api/ayuda/{id}': {
        get: {
        summary: 'Retornar una ayuda en específico según su Id',
        tags: ['Ayuda'],
        parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'ID de la solicitud',
            required: true,
            schema: {
            type: 'string',
            },
        },
        ],
        responses: {
        '200': {
            description: 'La solicitud de ayuda ha sido retornada',
            content: {
            'application/json': {
                schema: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/Ayuda',
                },
                },
                example: [
                {
                    titulo_ayuda: 'Cambios en el proyecto',
                    descripcion_ayuda: 'Necesito cambiar el alcance de mi proyecto para incluir nuevas características.',
                    fecha_creacion_ayuda: '2023-09-20T00:00:00.000Z',
                    id_usuario_ayuda: '65240951378a3ba512a6db6e',
                },
                ],
            },
            },
        },
        '404': {
            description: 'Recurso no encontrado',
        },
        '500': {
            description: 'Error al obtener las solicitudes de ayuda',
        },
        },
    },
    },
    '/api/ayuda/post': {
        post: {
          summary: 'Crear una nueva ayuda',
          tags: ['Ayuda'],
          parameters: [
            {
                name: 'x-access-token',
                in: 'header', // Indica que se proporciona como un parámetro de consulta
                description: 'Token de autenticación',
                required: true,
                schema: {
                type: 'string',
                },
            },
        ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/Ayuda',
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Ayuda Creada',
              content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Ayuda',
                    },
                },
                example: [
                    {
                        titulo_ayuda: "Cambios en el proyecto",
                        descripcion_ayuda: "Necesito cambiar el alcance de mi proyecto para incluir nuevas características.",
                        fecha_creacion_ayuda: "2023-09-20T00:00:00.000Z",
                        id_usuario_ayuda: "65240951378a3ba512a6db6e"
                    },
                ],
                },
            },
            },
            '401': {
                description: 'Token expirado'
            },
            '403': {
                description: 'No se ha proporcionado un token'
            },
            '404': {
              description: 'Error al crear el usuario',
            },
            '500': {
                description: 'Error al obtener las solicitudes de ayuda',
            },
          },
        },
    },
    '/api/ayuda/del/{id}': {
        delete: {
        summary: 'Eliminar una Solicitud de ayuda',
        tags: ['Ayuda'],
        parameters: [
            {
            in: 'path',
            name: 'id',
            schema: {
                type: 'string',
            },
            required: true,
            description: 'El ID de la ayuda',
            },
            {
                name: 'x-access-token',
                in: 'header', // Indica que se proporciona como un parámetro de consulta
                description: 'Token de autenticación',
                required: true,
                schema: {
                type: 'string',
                },
            },
        ],
        responses: {
        '200': {
            description: 'Ayuda Eliminada',
        },
        '403': {
            description: 'No se ha proporcionado un token'
        },
        '404': {
            description: 'Recurso no encontrado',
        },
        '500': {
            description: 'Error al obtener las solicitudes de ayuda',
        },
        },
    },
    },
    '/api/ayuda/patch/{id}': {
        patch: {
        summary: 'Actualizar una ayuda',
        tags: ['Ayuda'],
        parameters: [
            {
            in: 'path',
            name: 'id',
            schema: {
                type: 'string',
            },
            required: true,
            description: 'El ID de la ayuda',
            },
            {
                name: 'x-access-token',
                in: 'header', // Indica que se proporciona como un parámetro de consulta
                description: 'Token de autenticación',
                required: true,
                schema: {
                type: 'string',
                },
            },
        ],
        requestBody: {
            required: true,
            content: {
            'application/json': {
                schema: {
                type: 'object',
                $ref: '#/components/schemas/Ayuda',
                },
            },
            },
        },
        responses: {
            '200': {
                description: 'Ayuda Actualizada',
                content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Ayuda',
                    },
                },
                example: [
                    {
                        titulo_ayuda: "Cambios en el proyecto",
                        descripcion_ayuda: "Necesito cambiar el alcance de mi proyecto para incluir nuevas características.",
                        fecha_creacion_ayuda: "2023-09-20T00:00:00.000Z",
                        id_usuario_ayuda: "65240951378a3ba512a6db6e"
                    },
                ],
                },
            },
            },
            '403': {
                description: 'No se ha proporcionado un token'
            },
            '404': {
                description: 'Recurso no encontrado',
            },
            '500': {
                description: 'Error al actualizar la solicitud de ayuda',
            },
        },
        },
    },  
    '/api/proyecto': {
        get: {
        summary: 'Retorna todas los proyectos de ayuda de la base de datos',
        tags: ['Proyectos'],
        responses: {
            '200': {
            description: 'Todas los proyectos de la base de datos han sido retornadas',
            content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Proyectos',
                    },
                },
                example:   {
                    indicador_proyecto: "Modelado 3D",
                    descripcion_proyecto: "Enfoque en realizar una serie de diseñoa para produccion en una empresa de estilistas",
                    fecha_inicio_proyecto: "2023-09-01",
                    fecha_terminacion_proyecto: "2023-11-23",
                    lider_proyecto: "652591b1e8238bcf9ac2d1b4",
                    id_usuario_proyecto: "652591b1e8238bcf9ac2d1b4",
                    formula_proyecto: "6524058d378a3ba512a6db47",
                    categoria_proyecto: "6524054d378a3ba512a6db43",
                    area_proyecto: "65240515378a3ba512a6db3c"
                },
                },
            },
            },
            '404':{
                description: 'Recurso no encontrado'
            },
            '500':{
                description: 'Error al obtener los proyectos de ayuda'
            },
        },
        },
    },
    '/api/proyecto/{id}': {
        get: {
        summary: 'Retornar un proyecto en específico según su Id',
        tags: ['Proyectos'],
        parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'ID de la solicitud',
            required: true,
            schema: {
            type: 'string',
            },
        },
        ],
        responses: {
        '200': {
            description: 'La solicitud de proyecto ha sido retornada',
            content: {
            'application/json': {
                schema: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/Proyectos',
                },
                },
                example:   {
                    indicador_proyecto: "Modelado 3D",
                    descripcion_proyecto: "Enfoque en realizar una serie de diseñoa para produccion en una empresa de estilistas",
                    fecha_inicio_proyecto: "2023-09-01",
                    fecha_terminacion_proyecto: "2023-11-23",
                    lider_proyecto: "652591b1e8238bcf9ac2d1b4",
                    id_usuario_proyecto: "652591b1e8238bcf9ac2d1b4",
                    formula_proyecto: "6524058d378a3ba512a6db47",
                    categoria_proyecto: "6524054d378a3ba512a6db43",
                    area_proyecto: "65240515378a3ba512a6db3c"
                },
            },
            },
        },
        '404': {
            description: 'Recurso no encontrado',
        },
        '500': {
            description: 'Error al obtener las solicitudes de ayuda',
        },
        },
    },
    },
    '/api/proyecto/post': {
        post: {
          summary: 'Crear un nuevo proyecto',
          tags: ['Proyectos'],
          parameters: [
            {
                name: 'x-access-token',
                in: 'header', // Indica que se proporciona como un parámetro de consulta
                description: 'Token de autenticación',
                required: true,
                schema: {
                type: 'string',
                },
            },
        ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/Proyectos',
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Proyecto Creada',
              content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Ayuda',
                    },
                },
                example:   {
                    indicador_proyecto: "Modelado 3D",
                    descripcion_proyecto: "Enfoque en realizar una serie de diseñoa para produccion en una empresa de estilistas",
                    fecha_inicio_proyecto: "2023-09-01",
                    fecha_terminacion_proyecto: "2023-11-23",
                    lider_proyecto: "652591b1e8238bcf9ac2d1b4",
                    id_usuario_proyecto: "652591b1e8238bcf9ac2d1b4",
                    formula_proyecto: "6524058d378a3ba512a6db47",
                    categoria_proyecto: "6524054d378a3ba512a6db43",
                    area_proyecto: "65240515378a3ba512a6db3c"
                },
                },
            },
            },
            '401': {
                description: 'Token expirado'
            },
            '403': {
                description: 'No se ha proporcionado un token'
            },
            '404': {
              description: 'Error al crear el usuario',
            },
            '500': {
                description: 'Error al obtener las solicitudes de ayuda',
            },
          },
        },
    },
    '/api/proyecto/del/{id}': {
        delete: {
        summary: 'Eliminar una proyecto',
        tags: ['Proyectos'],
        parameters: [
            {
            in: 'path',
            name: 'id',
            schema: {
                type: 'string',
            },
            required: true,
            description: 'El ID de la ayuda',
            },
            {
                name: 'x-access-token',
                in: 'header', // Indica que se proporciona como un parámetro de consulta
                description: 'Token de autenticación',
                required: true,
                schema: {
                type: 'string',
                },
            },
        ],
        responses: {
        '200': {
            description: 'Ayuda Eliminada',
        },
        '403': {
            description: 'No se ha proporcionado un token'
        },
        '404': {
            description: 'Recurso no encontrado',
        },
        '500': {
            description: 'Error al obtener las solicitudes de ayuda',
        },
        },
    },
    },
    '/api/proyecto/patch/{id}': {
        patch: {
        summary: 'Actualizar un Proyecto',
        tags: ['Proyectos'],
        parameters: [
            {
            in: 'path',
            name: 'id',
            schema: {
                type: 'string',
            },
            required: true,
            description: 'El ID de la ayuda',
            },
            {
                name: 'x-access-token',
                in: 'header', // Indica que se proporciona como un parámetro de consulta
                description: 'Token de autenticación',
                required: true,
                schema: {
                type: 'string',
                },
            },
        ],
        requestBody: {
            required: true,
            content: {
            'application/json': {
                schema: {
                type: 'object',
                $ref: '#/components/schemas/Proyectos',
                },
            },
            },
        },
        responses: {
            '200': {
                description: 'Proyecto Actualizado',
                content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Proyectos',
                    },
                },
                example:   {
                    indicador_proyecto: "Modelado 3D",
                    descripcion_proyecto: "Enfoque en realizar una serie de diseñoa para produccion en una empresa de estilistas",
                    fecha_inicio_proyecto: "2023-09-01",
                    fecha_terminacion_proyecto: "2023-11-23",
                    lider_proyecto: "652591b1e8238bcf9ac2d1b4",
                    id_usuario_proyecto: "652591b1e8238bcf9ac2d1b4",
                    formula_proyecto: "6524058d378a3ba512a6db47",
                    categoria_proyecto: "6524054d378a3ba512a6db43",
                    area_proyecto: "65240515378a3ba512a6db3c"
                },
                },
            },
            },
            '403': {
                description: 'No se ha proporcionado un token'
            },
            '404': {
                description: 'Recurso no encontrado',
            },
            '500': {
                description: 'Error al actualizar la solicitud de ayuda',
            },
        },
        },
    },
    '/api/reporte': {
        get: {
        summary: 'Retorna todas los reportes de ayuda de la base de datos',
        tags: ['Reporte'],
        responses: {
            '200': {
            description: 'Todas los reportes de la base de datos han sido retornadas',
            content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Reporte',
                    },
                },
                example: {
                    titulo_reporte: "Proyecto Hackeado",
                    descripcion_reporte: "Un externo ingreso en mi proyecto sin mi conocimiento y altero los datos que se encontraban dentro del proyecto",
                    fecha_creacion_reporte: "2023-09-09",
                    id_usuario_reporte: "652403f7378a3ba512a6db2d"
                },
                },
            },
            },
            '404':{
                description: 'Recurso no encontrado'
            },
            '500':{
                description: 'Error al obtener los reportes'
            },
        },
        },
    },
    '/api/reporte/{id}': {
        get: {
        summary: 'Retornar un reporte en específico según su Id',
        tags: ['Reporte'],
        parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'ID de la solicitud',
            required: true,
            schema: {
            type: 'string',
            },
        },
        ],
        responses: {
        '200': {
            description: 'El reporte ha sido retornada',
            content: {
            'application/json': {
                schema: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/Reporte',
                },
                },
                example: [
                {
                    titulo_ayuda: 'Cambios en el proyecto',
                    descripcion_ayuda: 'Necesito cambiar el alcance de mi proyecto para incluir nuevas características.',
                    fecha_creacion_ayuda: '2023-09-20T00:00:00.000Z',
                    id_usuario_ayuda: '65240951378a3ba512a6db6e',
                },
                ],
            },
            },
        },
        '404': {
            description: 'Recurso no encontrado',
        },
        '500': {
            description: 'Error al obtener El Reporte',
        },
        },
    },
    },
    '/api/reporte/post': {
        post: {
          summary: 'Crear un nuevo reporte',
          tags: ['Reporte'],
          parameters: [
            {
                name: 'x-access-token',
                in: 'header', // Indica que se proporciona como un parámetro de consulta
                description: 'Token de autenticación',
                required: true,
                schema: {
                type: 'string',
                },
            },
        ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/Reporte',
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Reporte Creado',
              content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Reporte',
                    },
                },
                example: {
                    titulo_reporte: "Proyecto Hackeado",
                    descripcion_reporte: "Un externo ingreso en mi proyecto sin mi conocimiento y altero los datos que se encontraban dentro del proyecto",
                    fecha_creacion_reporte: "2023-09-09",
                    id_usuario_reporte: "652403f7378a3ba512a6db2d"
                },
                },
            },
            },
            '401': {
                description: 'Token expirado'
            },
            '403': {
                description: 'No se ha proporcionado un token'
            },
            '404': {
              description: 'Error al crear el reporte',
            },
            '500': {
                description: 'Error interno del servidor',
            },
          },
        },
    },
    '/api/reporte/del/{id}': {
        delete: {
        summary: 'Eliminar un reporte',
        tags: ['Reporte'],
        parameters: [
            {
            in: 'path',
            name: 'id',
            schema: {
                type: 'string',
            },
            required: true,
            description: 'El ID del reporte',
            },
            {
                name: 'x-access-token',
                in: 'header', // Indica que se proporciona como un parámetro de consulta
                description: 'Token de autenticación',
                required: true,
                schema: {
                type: 'string',
                },
            },
        ],
        responses: {
        '200': {
            description: 'Reporte Eliminada',
        },
        '403': {
            description: 'No se ha proporcionado un token'
        },
        '404': {
            description: 'Recurso no encontrado',
        },
        '500': {
            description: 'Error al obtener los reportes',
        },
        },
    },
    },
    '/api/reporte/patch/{id}': {
        patch: {
        summary: 'Actualizar un reporte',
        tags: ['Reporte'],
        parameters: [
            {
            in: 'path',
            name: 'id',
            schema: {
                type: 'string',
            },
            required: true,
            description: 'El ID del reporte',
            },
            {
                name: 'x-access-token',
                in: 'header', // Indica que se proporciona como un parámetro de consulta
                description: 'Token de autenticación',
                required: true,
                schema: {
                type: 'string',
                },
            },
        ],
        requestBody: {
            required: true,
            content: {
            'application/json': {
                schema: {
                type: 'object',
                $ref: '#/components/schemas/Reporte',
                },
            },
            },
        },
        responses: {
            '200': {
                description: 'Reporte Actualizada',
                content: {
                'application/json': {
                schema: {
                    type: 'array',
                    items: {
                    $ref: '#/components/schemas/Reporte',
                    },
                },
                example: {
                    titulo_reporte: "Proyecto Hackeado",
                    descripcion_reporte: "Un externo ingreso en mi proyecto sin mi conocimiento y altero los datos que se encontraban dentro del proyecto",
                    fecha_creacion_reporte: "2023-09-09",
                    id_usuario_reporte: "652403f7378a3ba512a6db2d"
                },
                },
            },
            },
            '403': {
                description: 'No se ha proporcionado un token'
            },
            '404': {
                description: 'Recurso no encontrado',
            },
            '500': {
                description: 'Error al actualizar el reporte',
            },
        },
        },
    },  
    '/api/reporte': {
        get: {
        summary: 'Retorna todos reportes de la base de datos',
        tags: ['Reporte'],
        parameters: [
            {
                name: 'x-access-token',
                in: 'header', // Indica que se proporciona como un parámetro de consulta
                description: 'Token de autenticación',
                required: true,
                schema: {
                type: 'string',
                },
            },
        ],
        responses: {
            '200': {
            description: 'Ayuda eliminado',
            },
            '401': {
                description: 'Token expirado',
            },
            '403':{
                description: 'No se ha proporcionado un token'
            },
            '404':{
                description: 'Usuario no encontrado'
            },
            '500':{
                description: 'Error al obtener los Reportes'
            },
        },
        },
    },
    }, // Fin de la sección paths
    components: {
    schemas: {
        Authentificacion: {
        type: 'object',
        properties: {
            nombre_usuario: {
            type: 'string',
            description: 'Nombre completo del Usuario',
            },
            correo: {
                type: 'string',
                description: 'Correo del Usuario',
            },
            imagen: {
                type: 'string',
                description: 'Imagen del Usuario',
            },
            contraseña: {
                type: 'string',
                description: 'Contraseña del usuario',
            },
        },
        required: [
            'nombre_usuario',
            'correo',
            'contraseña'
        ],
        example: {
            nombre_usuario: 'Jose Daniel Vargas',
            correo: 'jose@gmail.com',
            contraseña: 'jose12345'
        },
        },
        Usuario: {
        type: 'object',
        properties: {
            nombre_usuario: {
            type: 'string',
            description: 'Nombre completo del Usuario',
            },
            correo: {
                type: 'string',
                description: 'Correo del Usuario',
            },
            imagen: {
                type: 'string',
                description: 'Imagen del Usuario',
            },
            contraseña: {
                type: 'string',
                description: 'Contraseña del usuario',
            },
        },
        required: [
            'nombre_usuario',
            'correo',
            'contraseña'
        ],
        example: {
            nombre_usuario: 'Jose Daniel Vargas',
            correo: 'jose@gmail.com',
            contraseña: 'jose12345'
        },
        },
        Rol: {
        type: 'object',
        properties: {
            nombre_rol: {
            type: 'string',
            description: 'Nombre de los roles de un Usuario',
            },
        },
        required: ['nombre_rol'],
        example: {
            nombre_rol: 'Empleado',
        },
        },
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
            lider_proyecto: "652591b1e8238bcf9ac2d1b4",
            id_usuario_proyecto: "652591b1e8238bcf9ac2d1b4",
            formula_proyecto: "6524058d378a3ba512a6db47",
            categoria_proyecto: "6524054d378a3ba512a6db43",
            area_proyecto: "65240515378a3ba512a6db3c"
        },
        },
        Ayuda: {
        type: 'object',
        properties: {
            titulo_ayuda: {
            type: 'String',
            description: 'Titulo de la ayuda solicitada',
            },
            descripcion_ayuda: {
            type: 'String',
            description: 'Descripcion de la ayuda solicitada',
            },
            fecha_creacion_ayuda: {
            type: 'Date',
            description: 'Fecha en la que se solicita la ayuda',
            },
            id_usuario_ayuda: {
            type: 'ObjectId',
            description: 'Id del usuario que esta solicitando la ayuda',
            },
        },
        required: [
            'titulo_ayuda',
            'descripcion_ayuda',
        ],
        example: {
            titulo_ayuda: "Modificacion del proyecto",
            descripcion_ayuda: "Quiero modificar las bases de mi proyecto pero no puedo hacerlo",
            fecha_creacion_ayuda: "2023-09-10",
            id_usuario_ayuda: "652403f7378a3ba512a6db2d"
        },
        },
        Reporte: {
            type: 'object',
            properties: {
                titulo_reporte: {
                type: 'String',
                description: 'Titulo del reporte en relacion al indicador del proyecto',
                },
                descripcion_reporte: {
                type: 'String',
                description: 'Descripcion del reporte en relacion al proyecto',
                },
                fecha_creacion_reporte: {
                type: 'Date',
                description: 'Fecha en la que se hizo el reporte',
                },
                id_usuario_reporte: {
                type: 'ObjectId',
                description: 'Id del usuario que esta haciendo el reporte',
                },
            },
            required: [
                'titulo_reporte',
                'descripcion_reporte',
            ],
            example: {
                titulo_reporte: "Proyecto Hackeado",
                descripcion_reporte: "Un externo ingreso en mi proyecto sin mi conocimiento y altero los datos que se encontraban dentro del proyecto",
                fecha_creacion_reporte: "2023-09-09",
                id_usuario_reporte: "652403f7378a3ba512a6db2d"
            },
            },
    },
    },  
}, // Fin de la sección swaggerDefinition
apis: ['./routes/*.js'], 
}
  

const swaggerSpec = swaggerJsDoc(options);

export default swaggerSpec;
