export const env = {
  project : {
    name : 'App API',
    description: 'App API',
    poweredBy: 'App',
    email: 'hi@app.es',
    port: 3000
  },
  microservices: {
    headers: { 'content-type': 'application/json'},
  },
  api: {
    morgan: 'dev',
    responseTime : {
      header : false,
      flag : 'response-timer'
    },
    pagination: {
      limit: 10,
      page: 1,
      skip: 0
    },
  },
  upload : {
    path : '../data/uploads',
    size : '10mb'
  },
  cors : {
    origin: true,
    methods: ['GET', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length'],
    exposedHeaders: ['x-provider', 'limit', 'page', 'count', 'X-Response-Time']
  },
  mongodb : {
    uri: 'mongodb://database:27017/rexpo',
    uriTest: 'mongodb://database:27017/rexpo-test',
    debug: false,
  },

};