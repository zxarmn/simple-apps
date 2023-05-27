const request = require('supertest')
const express = require('express')

// Import the app file
const app = require('../app')

describe('Test /', () => {
  it('should respond with index.html', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

describe('Test /app1', () => {
    it('should respond with "Hello App1!"', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
    });
  });

  describe('Test /app2', () => {
    it('should respond with "Hello App2!"', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
    });
  });