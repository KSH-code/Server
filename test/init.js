/* global describe, it */
const request = require('async-request')
const { expect } = require('chai')

module.exports = () => {
  describe('init.js', () => {
    it('test', async () => {
      const res = await request('http://localhost:7070')
      expect(res.statusCode).to.equal(200)
    })
  })
}
