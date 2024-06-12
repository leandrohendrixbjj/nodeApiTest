console.clear()

import { describe, expect, jest } from '@jest/globals'
import Editora from '../../src/models/editora.js'

describe("Modelo Editora", () => {
  const objEditora = {
    nome: "CDC",
    cidade: "Sao Paulo",
    email: 'casaCodigo@gmail.com'
  }

  it("Objeto Editora", () => {
    const editora = new Editora(objEditora)

    expect(editora).toEqual(
      expect.objectContaining(objEditora)
    )
  })

  it.skip("Salvar Editora", async () => {
    const editora = new Editora(objEditora)

    const data = await editora.salvar()
    const seek = await Editora.pegarPeloId(data.id)

    expect(seek).toEqual(
      expect.objectContaining({
         id: expect.any(Number),
        ...objEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String)
      })
    )
  })

  it.skip("Salvar Editora II", async () => {
    const editora = new Editora(objEditora)

    const data = await editora.salvar()
    const seek = await Editora.pegarPeloId(data.id)

    expect(seek).toBeTruthy()
  })

  it.skip("Deve Salvar uma chamada simulada no BD", async () => {
    const editora = new Editora(objEditora)

    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: "CDC",
      cidade: "Sao Paulo",
      email: "casaCodigo@gmail.com",
      created_at: "2024-05-13",
      updated_at: "2024-05-13"
    })

    const data = editora.salvar()

    expect(data).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String)
      })
    )
  })
})