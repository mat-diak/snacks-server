const request = require('supertest');
const app = require('../app.js')

describe('POST /api/tasks', () => {
  
  describe('given content', () => {
    // the test to the database
    // respond with an object with task id
    // should respond with status code 200
    it('responds with status code 200', async () => {
      const response = await request(app).post("/api/tasks").send({
       
      })
      expect(response.statusCode).toBe(200)
    });
    // should sepcify json in the content type header

  });

  describe('when the text is missing', () => {
    // should respond with code 400
  });

});