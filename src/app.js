import express from 'express';
import logger from '#config/logger.js';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from '#routes/auth.routes.js';
import userRoutes from '#routes/users.routes.js';
import dbTestRouter from '#routes/dbtest.routes.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  morgan('combined', { stream: { write: msg => logger.info(msg.trim()) } })
);

app.get('/', (req, res) => {
  logger.info('Hello from acquisitions api!');
  res.status(200).send('Hello from acquisitions api!');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Acquisitions API is working' });
});

app.use('/api', dbTestRouter);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Catch-all 404 handler for unmatched routes
app.use((req, res) => {
  logger.warn(`404 Not Found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: 'Not Found' });
});

// Error-handling middleware for 500 errors and others
app.use((err, req, res) => {
  logger.error('Internal server error:', err);
  res
    .status(err.status || 500)
    .json({ error: err.message || 'Internal Server Error' });
});

export default app;
