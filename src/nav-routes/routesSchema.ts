export interface Route {
  path: string;
  title: string;
  excludedFromNav?: boolean;
  children?: Route[];
}

export const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'array',
  definitions: {
    route: {
      title: 'route',
      description: 'Route element',
      type: 'object',
      properties: {
        path: {
          type: 'string',
        },
        title: {
          type: 'string',
        },
        excludedFromNav: {
          type: 'boolean',
        },
        children: {
          type: 'array',
          items: {
            $ref: '#/definitions/route',
          },
        },
      },
      required: ['path', 'title'],
    },
  },
  items: {
    items: {
      $ref: '#/definitions/route',
    },
  },
};
