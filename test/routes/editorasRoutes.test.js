import { afterEach, beforeEach } from '@jest/globals'
import app from '../../src/app.js'

let server

beforeEach(() => {
  const port = 3000
  server = app.listen(port)
})

afterEach(() => {
  server.close()
})
