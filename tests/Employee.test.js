const Employee = require('../Employee')

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
    it(`getName() method should return employee name`)
})
