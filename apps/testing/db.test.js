const request = require('supertest');
const mysql = require('mysql');
const { expect } = require('chai');

const connection = require('../middleware/db_connect');
const app = require('../app'); // Replace with the path to your application file

describe('Integration Test', () => {
  let connection;

  beforeEach(() => {
    // Create a connection pool instead of a single connection
    connection = mysql.createPool({
      connectionLimit: 10, // Adjust the limit according to your requirements
      host: '172.17.0.2',
      user: 'peserta',
      password: 'password',
      database: 'training'
    });

    // Set the connection for the application to use
    app.set('connection', connection);
  });
\
  afterEach(() => {
    // Close the connection pool after the tests are done
    connection.end();
  });

  it('should connect to the MySQL database', (done) => {
    request(app)
      .get('/users') // Replace with the endpoint you want to test
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        // Additional assertions based on your application's response
        done();
      });
  });
});