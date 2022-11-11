const Manager = require('../src/Manager')

describe('Manager', () => {
    it('should create an object', ()=>{
        //arrange
        const name = "Bondit"
        const id = "1234"
        const email = "bondit@mail.com"
        const office = "321"
        const role = "Manager"
        const manager = new Manager(name, id, email, office, role)
        //assert
        expect(manager.name).toEqual(name)
        expect(manager.id).toEqual(id)
        expect(manager.email).toEqual(email)
        expect(manager.office).toEqual(office)
        expect(manager.role).toEqual(role)
    })
});
describe('getName', ()=>{
    it('should return employee name', ()=>{
        //arrange
        const managerName = new Manager(name, id, email, office, role)
        //assert
        expect(managerName.getName()).toEqual(name)
    })
})
describe('getId', ()=>{
    it('should return employee id', ()=>{
        //arrange
        const managerId = new Manager(name, id, email, office, role)
        //assert
        expect(managerId.getId().toEqual(id))
    })
})
describe('getEmail', ()=>{
    it('should return employee email', ()=>{
        //arrange
        const managerEmail = new Manager(name, id, email, office, role)
        //assert
        expect(managerEmail.getEmail()).toEqual(email)
    })
})
describe('getOffice', () => {
    it('should return employee office number', ()=>{
        //arrange
        const mangerOffice = new Manager(name, id, email, office, role)
        //assert
        expect(mangerOffice.getOffice()).toEqual(office)
    })
});
describe('getRole', ()=>{
    it('should return employees role', ()=>{
        //arrange
        const employeeRole = new Manager(name, id, email, office, role)
        //assert
        expect(employeeRole.getRole()).toEqual(role)
    })
})