'use strict';

Package('org.quickcorp.custom.backend.helloworld',[
  Class('Microservice',BackendMicroservice,{
    get:function (data){
      let microservice = this;
      var { graphql, buildSchema } = require('graphql');

      // Construct a schema, using GraphQL schema language
      var schema = buildSchema(`
        type Query {
          hello: String
        }
      `);

      // The root provides a resolver function for each API endpoint
      var root = {
        hello: () => {
          return 'Hello world!';
        },
      };

      // Run the GraphQL query '{ hello }' and print out the response
      graphql(schema, '{ hello }', root).then((response) => {
        microservice.body = response;
        microservice.done();
      });

    }
  })
]);
