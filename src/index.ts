import express, { Express, Request, Response } from 'express';
import consolidate from 'consolidate';
import civiliansRouter from './routes/civilians.routes';
import copsRouter from './routes/cops.routes';

const app: Express = express();

// Body parsing
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

// Static files + views
app.use(express.static('./src/public'));
app.set('views', './src/views');
app.set('view engine', 'html');
app.engine('html', consolidate.handlebars);

// Routers
app.use(civiliansRouter);
app.use(copsRouter);

// Root route (API homepage)
app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'Police Locator API is running',
    routes: [
      '/civilians',
      '/cops'
    ],
    timestamp: new Date().toISOString()
  });
});

export default app;
