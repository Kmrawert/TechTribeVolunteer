const axios = require('axios')

const chai = require('chai')
const expect = chai.expect

const serverUrl = 'http://localhost:3001'

describe('GET/events', () => {

    it('should get all the events', done => {
        axios.get(`${serverUrl}/api/events`)
            .then(res => {
                // console.log(res.data)
                const events = res.data
                expect(events).to.be.instanceOf(Array)
                events.forEach(event => {
                    expect(event).to.have.property('eventdate').to.be.a('string')
                    expect(event).to.have.property('description').to.be.a('string')
                    expect(event).to.have.property('organization').to.be.a('string')
                    expect(event).to.have.property('experience').to.be.a('string')
                    expect(event).to.have.property('title').to.be.a('string')
                    expect(event).to.have.property('zipcode').to.be.a('number')
                })
                done()
            })
    })

    it('should get all the events given a zipcode', done => {
        axios.get(`${serverUrl}/api/events?zipcode=88551`)
            .then(res => {
                // console.log(res.data)
                const events = res.data
                expect(events).to.be.instanceOf(Array)
                events.forEach(event => {
                    expect(event).to.have.property('eventdate').to.be.a('string')
                    expect(event).to.have.property('description').to.be.a('string')
                    expect(event).to.have.property('organization').to.be.a('string')
                    expect(event).to.have.property('experience').to.be.a('string')
                    expect(event).to.have.property('title').to.be.a('string')
                    expect(event).to.have.property('zipcode').to.be.a('number')
                })
                done()
            })
    })

})


describe('POST/events', () => {

    it('should create a new event', done => {

        const event = {
            posteddate: '2019-11-21T03:12:57.215Z',
            eventdate: '2020-05-04T00:00:00.000Z',
            title: 'church',
            description: '`',
            eventtime: '00:00',
            organization: 'school',
            experience: 'none',
            zipcode: Date.now(),
            numberofspots: Date.now(),
            link: 'nope',
        }

        axios.post(`${serverUrl}/api/events`, event)
            .then(dbResponse => {
        
                const savedEvent = dbResponse.data
                expect(savedEvent).to.have.property('_id').to.be.a('string')
                expect(savedEvent).to.have.property('eventdate').to.be.a('string')
                expect(savedEvent).to.have.property('description').to.be.a('string')
                expect(savedEvent).to.have.property('organization').to.be.a('string')
                expect(savedEvent).to.have.property('experience').to.be.a('string')
                expect(savedEvent).to.have.property('title').to.be.a('string')
                expect(savedEvent).to.have.property('zipcode').to.be.a('number')


                done()
            })
            .catch(err => {
                console.error(err)
                done(err)
            })



    })


})