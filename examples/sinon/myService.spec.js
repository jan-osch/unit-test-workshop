const { expect } = require('chai')
const sinon = require('sinon')

const { DashboardService, User } = require('./myService')

describe('DashboardService', () => {
    let sandbox

    beforeEach(() => {
        sandbox = sinon.sandbox.create()
    })

    afterEach(() => {
        sandbox.restore()
    })

    describe('prepareUser', () => {
        it('should assign user first name and second name if name param is present', () => {
            const user = new User('programmer')
            sandbox.spy(user, 'setFirstName')
            sandbox.spy(user, 'setSecondName')

            DashboardService.prepareUser(user, { name: 'Robert Kubica' })

            expect(user.setFirstName.callCount).to.equal(1)
            expect(user.setFirstName.getCall(0).args[0]).to.equal('Robert')
            expect(user.setSecondName.callCount).to.equal(1)
            expect(user.setSecondName.getCall(0).args[0]).to.equal('Kubica')
        })
    })

    describe('createGroup', () => {
        xit('should create a dashboard with widgets for each given type', async function testWithTimeout() {
            this.timeout(10000)
            const expected = {
                name: 'Dashboard Home',
                widgets: [
                    { widgetType: 'a', config: 'config' },
                    { widgetType: 'b', config: 'config' },
                    { widgetType: 'c', config: 'config' },
                ],
            }

            const actual = await DashboardService.createDashboard('home', ['a', 'b', 'c'])

            expect(actual).to.deep.equal(expected)
        }) // very long test

        it('should create a dashboard with widgets for each given type, using createWidget', async () => {
            const expected = {
                name: 'Dashboard Home',
                widgets: [
                    { widgetType: 'a', config: 'config' },
                    { widgetType: 'b', config: 'config' },
                    { widgetType: 'c', config: 'config' },
                ],
            }
            sandbox.stub(DashboardService, 'createWidget')
                .callsFake(widgetType => Promise.resolve({ widgetType, config: 'config' }))

            const actual = await DashboardService.createDashboard('home', ['a', 'b', 'c'])

            expect(actual).to.deep.equal(expected)
        })
    })
})
