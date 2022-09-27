const Itinerary = require("../src/itinerary.js");
const Port = require("../src/port.js");

describe ('Itinerary', () => {
    it('can be an instantiated', () => {
        const itinerary = new Itinerary();
    expect( itinerary).toBeInstanceOf(Object)
    });

    it('can have ports', () => {
        const dover = new Port(jest.fn());
        const calais = new Port(jest.fn());
        
        const itinerary = new Itinerary([dover, calais]);
        expect(itinerary.ports).toEqual([dover, calais]);
    });
});