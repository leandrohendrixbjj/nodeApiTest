import { describe, expect } from '@jest/globals'
import app from '../../src/app.js'
import request from 'supertest'

let server

beforeEach(() => {
  const port = 3000
  server = app.listen(port)
})

afterEach(() => {
  server.close()
})

describe('GET em editoras', () => {
  
  it.skip("Deve retornar lista de Editoras", async () => {
    const data = await request(app)
      .get('/api/editoras')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200)

      expect(typeof data.body).toBe('object')
  })

  it.skip("Deve add uma Editora", async () => {
    const data = await request(app)
    .post('/api/editoras')
    .send({
      nome:'Alura_01',
      cidade: 'Sao Paulo',
      email: 'alura01@gmail.com'
    })
    .expect(201)
  }) 

  it.skip("Deve remover uma Editora", async () => {
    const data = await request(app)
    .delete('/api/editoras/5')
    .expect(200)
  })

  it("Deve retornar uma editora", async() => {
    const data = await request(app)
    .get('/api/editoras/1')
    .expect(200)

    expect(data.body).toBeTruthy()
  })
})
