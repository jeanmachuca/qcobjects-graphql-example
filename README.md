# Making a GraphQL Micro-service with QCObjects HTTP2 Built-In Server

In the following step-by-step tutorial I'll show you how to make a fancy, clean and quick micro-service using QCObjects HTTP2 Built-In Server and GraphQL

If you want to know more about GraphQL go to [https://graphql.org](https://graphql.org)

If you want to learn more about QCObjects go to [https://qcobjects.dev](https://qcobjects.dev)

1.- Create a progressive web app using the command line of QCObjects CLI Tool (you should be inside the project's folder):

```shell
> qcobjects create --pwa mynewmicroservice
```

2.- Install GraphQL inside the project's folder:

```shell
> npm install graphql --save
```

3.- Create/Edit a config.json file inside the project's folder

```shell
> vi config.json
```
4.- In the new config.json file add the following lines:

```json
{
  "relativeImportPath": "js/packages/",
  "domain": "0.0.0.0",
  "backend": {
    "routes": [{
      "path": "/helloworld",
      "microservice": "org.quickcorp.custom.backend.helloworld"
    }]
  }
}
```

5.- Then create/edit a new package inside the js/packages folder:

```shell
> vi js/packages/org.quickcorp.custom.backend.helloworld.js
```

6.- The following animation shows the basic code of a Microservice using GraphQL and QCObjects HTTP2 Built-In Server

![QCOBJECTS GRAPHQL Microservice Code.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1575682660790/4myNi0KFu.gif)

7.- Launch the QCObjects HTTP2 Built-In Server using the following command line:

```shell
> qcobjects launch mynewmicroservice
```

8.- Then open a browser in the address https://127.0.0.1/helloworld and you should see a result like this:



![QCObjects GraphQL Microservice Result.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1575747441007/TriqW76r8.png)
