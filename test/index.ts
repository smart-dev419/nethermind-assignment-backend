import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../'

chai.use(chaiHttp)
chai.should()

describe('Router Test', () => {
  it("should return new hash", (done) => {
    const queryString = new URLSearchParams({
      hash: '0xf6568e65381c5fc6a447ddf0dcb848248282b798b2121d9944a87599b7921358'
    }).toString();

    chai.request(app)
        .get(`/new-hash?${queryString}`)
        .end((err, res) => {
          chai.expect(res.body.success).to.be.equal(true)
          done()
        })
  })
})