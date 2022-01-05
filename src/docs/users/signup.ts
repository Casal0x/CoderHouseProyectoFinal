export default {
  post: {
    tags: ['User'],
    description: 'Sign up to the DB.',
    operationId: 'postLogin',
    parameters: [],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              telefono: {
                type: 'string',
                description: 'User phone number',
                example: '+5493814686869',
              },
              email: {
                type: 'string',
                description: 'User email.',
                example: 'example@gmail.com',
              },
              password: {
                type: 'string',
                description: ' ',
                example: 'bokitaCampeon',
              },
              repeat_password: {
                type: 'string',
                description: ' Must be the same as password.',
                example: 'bokitaCampeon',
              },
              nombre: {
                type: 'string',
                description: 'User name.',
                example: 'Martin Palermo',
              },
              calle: {
                type: 'string',
                description: 'User address street.',
                example: 'Siempre Viva',
              },
              altura: {
                type: 'string',
                description: 'User address street number.',
                example: '123',
              },
              cp: {
                type: 'string',
                description: 'User postal code.',
                example: '4000',
              },
              piso: {
                type: 'string',
                description: 'User address floor number, optional.',
                example: '2',
              },
              departamento: {
                type: 'string',
                description: 'User address department number, optional.',
                example: '205',
              },
              admin: {
                type: 'boolean',
                description: 'User permission',
                example: 'true',
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Successful signup.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/User',
            },
          },
        },
      },
      400: {
        description: 'One of the input body must be wrong',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorValidate',
            },
          },
        },
      },
    },
  },
};
