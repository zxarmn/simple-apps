const request = require('supertest');
const mysql = require('mysql');
//const { expect } = require('chai');
require('dotenv').config();

const connection = require('../middleware/db_connect');
const app = require('../app'); // Replace with the path to your application file

describe('Unit Test /', () => {
  it('should respond with index.html', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

describe('Unit Test /app1', () => {
    it('should respond with "Hello App1!"', async () => {
      const response = await request(app).get('/app1');
      expect(response.status).toBe(200);
    });
  });

  describe('Unit Test /app2', () => {
    it('should respond with "Hello App2!"', async () => {
      const response = await request(app).get('/app2');
      expect(response.status).toBe(200);
    });
  });

describe('Integration Test Connect Database', () => {
  let connection;

  beforeEach(() => {
    // Create a connection pool instead of a single connection
    connection = mysql.createPool({
      connectionLimit: 10, // Adjust the limit according to your requirements
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });

    // Set the connection for the application to use
    app.set('connection', connection);
  });

  afterEach(() => {
    // Close the connection pool after the tests are done
    connection.end();
  });

  it('should respond with users data', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });
});