import { describe, expect } from '@jest/globals'
import Editora from '../../src/models/editora.js'

describe("Modelo Editora", () => {
  const objEditora = {
    nome: "CDC",
    cidade: "Sao Paulo",
    email: 'casaCodigo@gmail.com'
  }

  it.skip("Objeto Editora", () => {
    const editora = new Editora(objEditora)

    expect(editora).toEqual(
      expect.objectContaining(objEditora)
    )
  })

  it("Salvar Editora", async () => {
    const editora = new Editora(objEditora)

    const data = await editora.salvar()
    const result = await Editora.pegarPeloId(data.id)

    expect(result).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String)
      })
    )

  })
})