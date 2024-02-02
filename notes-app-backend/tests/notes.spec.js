const mongoose = require('mongoose')
const supertest = require('supertest')
const notesModel = require('../models/notesModel')
const app = require('../app')

const api = supertest(app)

afterAll(async () => {
  await mongoose.connection.close()
})

beforeAll(async () => {
    await notesModel.deleteMany()
})

beforeEach(async () => {
    await notesModel.deleteMany()
})

test('Notes are returned as json', async () => {
  const getRes = await api
    .get('/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})


describe("Create note", () => {
    it("succeeds when payload is right", async () => {
        const res = await api.post('/notes/create').send({
            note: "Hi my name is test",
            imporant: true,
            title: 'Test title'
        }).expect(201);

        const body = res._body;

        expect(res.ok).toBe(true)
        expect(body.note).toBe("Hi my name is test")
        // expect(body.important).toBe(true)
        expect(body.title).toBe("Test title")

        const getRes = await api
        .get('/notes')
        .expect(200)
        .expect('Content-Type', /application\/json/)

        expect(getRes._body.length).toBe(1)
    });
})

describe("Update note", () => {
    it("succeeds when payload is right", async () => {
        const createRes = await api.post('/notes/create').send({
            note: "Hi my name is test",
            imporant: true,
            title: 'Test title'
        }).expect(201);
    
        const { id } = createRes._body;

        const updateRes = await api.post('/notes/update').send({
            id,
            title: "New Test title",
        })
        expect(updateRes.ok).toBe(true)

        const body = updateRes._body;
        expect(body.note).toBe("Hi my name is test")
        expect(body.title).toBe("New Test title")
    })
})

describe("Delete note", () => {
    it("succeeds when payload is right", async () => {
        const createRes = await api.post('/notes/create').send({
            note: "Hi my name is test",
            imporant: true,
            title: 'Test title'
        }).expect(201);
    
        const { id } = createRes._body;

        const deleteRes = await api.delete(`/notes/${id}`).expect(204)
        expect(deleteRes.ok).toBe(true)

        const getRes = await api
        .get('/notes')
        .expect(200)
        .expect('Content-Type', /application\/json/)

        expect(getRes._body.length).toBe(0)
    })
})
