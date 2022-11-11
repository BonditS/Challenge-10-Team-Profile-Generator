const Employee = require('../src/Employee')

describe('Employee', () => {
    it(`should create an object with with Employee property (name, id, email)`, () => {
        //arrange
        const name = "Bondit"
        const id = "1234"
        const email = "bondit@mail.com"
        const employee = new Employee(name, id, email)
        //assert
        expect(employee.name).toEqual(name)
        expect(employee.id).toEqual(id)
        expect(employee.email).toEqual(email)
    } )
})
describe('getName', () =>{
    it(`should return employee name`, ()=>{
        //arrange
        const employeeName = new Employee(name, id, email)

        //assert
        expect(employeeName.getName()).toEqual(name)
    })
})
describe('getId', () =>{
    it(`should return employee id`, ()=>{
        //arrange
        const employeeId = new Employee(name, id, email)
        //assert
        expect(employeeId.getId()).toEqual(id)
    })
})
describe('getEmail',()=>{
    it(`should return employee email`, ()=>{
        //arrange
        const employeeEmail = new Employee(name, id, email)
        //assert
        expect(employeeEmail.getEmail()).toEqual(email)
    })
})
describe('getRole',()=>{
    it(`should return employee role`, ()=>{
        //arrange
        const employeeRole = new Employee(name, id, email)
        expect(employeeRole.getRole()).toEqual('Employee')
    })
})