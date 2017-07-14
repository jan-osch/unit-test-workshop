const request = require('supertest')

const app = require('./server')

describe('myserver POST /user', () => {
    it('should respond with 400 if body name is missing', (done) => {
        request(app)
            .post('/user')
            .send({})
            .expect(400, done)
    })

    it('should respond with 201 and newly created user when name is present', (done) => {
        const expected = { name: 'Kuba', id: 1 }

        request(app)
            .post('/user')
            .send({ name: 'Kuba' })
            .expect(expected)
            .expect(201, done)
    })
})
