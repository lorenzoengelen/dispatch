// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const mongoose = require('mongoose');
// const expect = chai.expect;
// const request = require('supertest');
// const app = require('../app.js');

// chai.use(chaiHttp);

// const dbURI = 'mongodb://localhost/dispatchtest';

// const getBody = res => {
//   return JSON.parse(res.text);
// };

// const clearDB = done => {
//   mongoose.connection.collections['requests'].remove(done);
// };

// describe('Request Controller', () => {

//   var server;

//   // before(done => {
//   //   if (mongoose.connection.db) {
//   //     return done(); 
//   //   }
//   //   mongoose.connect(dbURI, done);
//   // });

//   beforeEach(done => {
//     server = app.listen(3000, () => {
//       done();
//       // clearDB(() => {
//       //   // Reqest.create(requestExample, done);
//       //   done();
//       // });
//     });
//   });

//   afterEach((done) => {
//     server.close(() => {
//       done();
//     });
//   });

//   it('POST /requests should add a request to the database', (done) => {
    
//     chai.request(server)
//       .post('/requests')
//       .send({
//         type: 'service'
//       })
//       .end((err, res) => {
//         expect(err).to.be.null;
//         expect(res).to.have.status(200);
//         // console.log(res.body);
//         done();
//       });
//   });

//   it('GET /requests should read a request from the database', (done) => {
    
//     chai.request(server)
//       .get('/requests')
//       .end((err, res) => {
//         expect(err).to.be.null;
//         expect(res).to.have.status(200);
//         done();
//       });
//   });

//   it('PUT /requests should update a request in the database', (done) => {
    
//     chai.request(server)
//       .put('/requests')
//       .send({
//         _id: '1',
//         type: 'pickup'
//       })
//       .end((err, res) => {
//         expect(err).to.be.null;
//         expect(res).to.have.status(200);
//         done();
//       });
//   });

//   it('DELETE /requests should delete a request from the database', (done) => {
//     var answer = 42;
//     expect(answer).to.equal(42);
//     done()
//   });
// });