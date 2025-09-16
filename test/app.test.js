import app from '#src/app.js';
import request from 'supertest';

describe('API endpoints', () => {
  describe('GET /health', () => {
    it('should return a health status', async () => {
      const res = await request(app).get('/health').expect(200);
      expect(res.body).toHaveProperty('status', 'ok');
      expect(res.body).toHaveProperty('timestamp');
      expect(res.body).toHaveProperty('uptime');
    });
  });

  describe('GET /nonexistent', () => {
    it('should return a 404 status', async () => {
      const res = await request(app).get('/nonexistent').expect(404);
      expect(res.body).toHaveProperty('error', 'Not Found');
    });
  });
});
