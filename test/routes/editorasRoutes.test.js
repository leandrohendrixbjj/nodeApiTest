import { describe, expect } from '@jest/globals'
import app from '../../src/app.js'
import request from 'supertest'

let server

beforeEach(() => {
  const port = 3001
  server = app.listen(port)
})

afterEach(() => {
  server.close()
})

describe('GET em editoras', () => {
  
  it.skip("GET /api/editoras", async () => {
    const data = await request(app)
      .get('/api/editoras')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200)

      expect(typeof data.body).toBe('object')
  })

  it("GET /api/editoras/{id}", async() => {
    const data = await request(app)
    .get('/api/editoras/1')
    .expect(200)

    expect(data.body).toBeTruthy()
  })

  it.skip("POST /api/editoras", async () => {
    const data = await request(app)
    .post('/api/editoras')
    .send({
      nome:'Alura_01',
      cidade: 'Sao Paulo',
      email: 'alura01@gmail.com'
    }).expect(201)
    expect(data.body.content.email).toEqual('alura02@gmail.com')
  }) 

  it.skip("POST /api/editoras", async () => {
    const data = await request(app)
    .post('/api/editoras')
    .send({})
    .expect(400)
  })

  it("PUT /api/editoras/{id}", async () => {
    const data = await request(app)
    .put('/api/editoras/4')
    .send({nome: "House of The Dragon"})
    .expect(204)
  })

  it.skip("DELETE /api/editoras/{id}", async () => {
    const data = await request(app)
    .delete('/api/editoras/5')
    .expect(200)
  })  
})
