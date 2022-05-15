const User = require(`./../../App/Models/User`)
describe ("Prueba de unidad para clase 'User'", () =>{
    test(`Crea un objeto de clase User`, () => {
        const user = new User(1, "Dvashe" , "Daniel", "bio", "DataCreated", "LastUpdate")

        expect(user.id).toBe(1)
        expect(user.username).toBe("Dvashe")
        expect(user.name).toBe("Daniel")
        expect(user.bio).toBe("bio")
        expect(user.DataCreated).toBe("DataCreated")
        expect(user.LastUpdate).toBe("LastUpdate")
    })
})