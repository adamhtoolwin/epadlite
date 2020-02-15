// defines routes for accessing aims
async function otherRoutes(fastify) {
  fastify.route({
    method: 'POST',
    url: '/files',
    schema: {
      tags: ['files'],
    },
    handler: fastify.saveFile,
  });
  fastify.route({
    method: 'GET',
    url: '/files',
    schema: {
      tags: ['files'],
    },
    handler: fastify.getFiles,
  });
  fastify.route({
    method: 'GET',
    url: '/files/:filename',
    schema: {
      tags: ['files'],
      params: {
        type: 'object',
        properties: {
          filename: {
            type: 'string',
          },
        },
      },
    },
    handler: fastify.getFile,
  });

  fastify.route({
    method: 'GET',
    url: '/notifications',
    handler: fastify.getNotifications,
  });

  fastify.route({
    method: 'GET',
    url: '/epads/stats',
    schema: {
      tags: ['stats'],
      query: {
        type: 'object',
        properties: {
          year: {
            type: 'string',
          },
        },
      },
    },
    handler: fastify.getStats,
  });

  fastify.route({
    method: 'PUT',
    url: '/epad/statistics/templates/',
    schema: {
      tags: ['stats'],
      query: {
        type: 'object',
        properties: {
          host: {
            type: 'string',
          },
          templateCode: {
            type: 'string',
          },
          templateName: {
            type: 'string',
          },
          authors: {
            type: 'string',
          },
          version: {
            type: 'string',
          },
          templateLevelType: {
            type: 'string',
          },
          templateDescription: {
            type: 'string',
          },
          numOfAims: {
            type: 'integer',
          },
        },
        body: {
          type: 'string',
        },
      },
    },
    handler: fastify.saveTemplateStats,
  });

  fastify.route({
    method: 'PUT',
    url: '/epad/statistics/',
    schema: {
      tags: ['stats'],
      query: {
        type: 'object',
        properties: {
          host: {
            type: 'string',
          },
          numOfUsers: {
            type: 'integer',
          },
          numOfProjects: {
            type: 'integer',
          },
          numOfPatients: {
            type: 'integer',
          },
          numOfStudies: {
            type: 'integer',
          },
          numOfSeries: {
            type: 'integer',
          },
          numOfAims: {
            type: 'integer',
          },
          numOfDSOs: {
            type: 'integer',
          },
          numOfWorkLists: {
            type: 'integer',
          },
          numOfFiles: {
            type: 'integer',
          },
          numOfTemplates: {
            type: 'integer',
          },
          numOfPlugins: {
            type: 'integer',
          },
        },
      },
    },
    handler: fastify.saveStats,
  });
}
module.exports = otherRoutes;
