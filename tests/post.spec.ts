var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('Post unit tests:', () => {
    it('Should create a Post instance', (done: Function) => {
        api.post('/Posts').send({
            title: 'test',
            author: 'test',
            contents: 'test',
            like: 12345,
            live: 12345,
            created: 'Fri Feb 17 2017 12:08:58 GMT+0700 (ICT)',
            updated: 'Fri Feb 17 2017 12:08:58 GMT+0700 (ICT)'
        }).expect(200, done);
    });
});
