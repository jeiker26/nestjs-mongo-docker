import { NestFactory } from '@nestjs/core';
import * as responseTime from 'response-time';
import * as compression from 'compression';
import * as cors from 'cors';
import * as helmet from 'helmet';
import { Request, Response } from 'express';
import * as debug from 'debug';
import { env } from './environments/environments';
import { AppModule } from './app.module';

// Set debug
const log: debug.IDebugger = debug('app:server');

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // Compress all responses
  app.use(compression());

  // ResponseTime
  app.use(responseTime((request: Request, response: Response, time: number ) => {

    if (env.api.responseTime.header ||
      request.query[env.api.responseTime.flag]) {
      const timeFixed = time.toFixed(3);

      response.set('X-Response-Time', `${timeFixed}ms`);
    }

  }));

  // Log every request to the console
  // app.use(morgan(env.api.morgan));

  // Enable CORS middleware
  app.use(cors(env.cors));

  // Set Helmet
  app.use(helmet.hidePoweredBy({ setTo: env.project.poweredBy }));
  app.use(helmet.frameguard({ action: 'sameorigin' }));
  app.use(helmet.xssFilter());

  // Launch the app
  await app.listen(env.project.port);
}
bootstrap();
