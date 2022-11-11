const Intern = require('../src/Intern')

describe('Intern', ()=>{
    it('should create object', ()=>{
        //arrange
        const name = "Bondit"
        const id = "1234"
        const email = "bondit@mail.com"
        const school = "umn bootcamp"
        const intern = new Intern(name, id, email, school)
        //assert
        expect(intern.name).toEqual(name)
        expect(intern.id).toEqual(id)
        expect(intern.email).toEqual(email)
        expect(intern.school).toEqual(school)
    })
})
describe('getName', ()=>{
    it('should return employee name', ()=>{
        //arrange
        const internName = new Intern(name, id, email, school)
        //assert
        expect(internName.getName()).toEqual(name)
    })
})
describe('getId', ()=>{
    it('should get employee id', ()=>{
        //arrange
        const internId = new Engineer(name, id, email, school)
        //assert
        expect(internId.getId()).toEqual(id)
    })
})
describe('getEmail', ()=>{
    it('should get employee email', ()=>{
        //arrange
        const internEmail = new Engineer(name, id, email, school)
        //assert
        expect(internEmail.getEmail()).toEqual(email)
    })
})
describe('getSchool', ()=>{
    it('should get employee school', ()=>{
        //arrange
        const internSchool = new Intern(name, id, email, school)
        //assert
        expect(internSchool.getSchool()).toEqual(school)
    })
})
describe('getRole',()=>{
    it('should get employee role', ()=>{
        //arrange
        const internRole = new Intern(name, id, email, school)
        //assert
        expect(internRole.getRole()).toEqual("Intern")
    })
})