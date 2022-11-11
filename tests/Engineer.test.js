const Engineer = require('../src/Engineer')

describe('Engineer', () => {
it('should create object', ()=>{
    //arrange
    const name = "Bondit"
    const id = "1234"
    const email = "bondit@mail.com" 
    const git = "BonditS"    
    const engineer = new Engineer(name, id, email, git)
    //assert
    expect(engineer.name).toEqual(name)
    expect(engineer.id).toEqual(id)
    expect(engineer.email).toEqual(email)
    expect(engineer.git).toEqual(git)
    })         
});
describe('getName', () =>{
    it('should get employee name', ()=>{
        //arrange
        const engineerName = new Engineer(name, id, email, git)
        //assert
        expect(engineerName.getName()).toEqual(name)    
  })  
})
describe('getId', ()=>{
    it('should get employee id', ()=>{
        //arrange
        const engineerId = new Engineer(name, id, email, git)
        //assert
        expect(engineerId.getId()).toEqual(id)
    })
})
describe('getEmail', ()=>{
    it('should get employee email', ()=>{
        //arrange
        const engineerEmail = new Engineer(name, id, email, git)
        //assert
        expect(engineerEmail.getEmail()).toEqual(email)
    })
})
describe('getGitHub', ()=>{
    it('should get employee GitHub username', ()=>{
        //arrange
        const engineerGitHub = new Engineer(name, id, email, git)
        //assert
        expect(engineerGitHub.getGitHub()).toEqual(git)
    })
})
describe('getRole', ()=>{
    it('should get employees role', ()=>{
        //arrange
        const engineerRole = new Engineer(name, id, email, git)
        //assert
        extect(engineerRole.getRole()).toEqual('Engineer')
    })
})