const Port = require("../src/port.js");

describe ('Port', () => {
    describe('with port', () => {
        let port;

        beforeEach(() => {
            port = new Port('Dover');
        });
        
        it('can be an instantiated', () => {
            const port = new Port('Dover');
            expect( port).toBeInstanceOf(Object)
        });
    
        it('can add ship', () => {
            const port = new Port('Dover');
            const ship = jest.fn();
    
            port.addShip(ship);
            expect(port.ships).toContain(ship);
        });
    
        it('can remove a ship', () => {
            const port = new Port('Dover');
            const titanic = {};
            const queenMary = jest.fn();
    
            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(queenMary);
            expect(port.ships).toEqual([titanic]);
        })
    });

    /*it('can be an instantiated', () => {
        const port = new Port('Dover');
        expect( port).toBeInstanceOf(Object)
    });

    it('can add ship', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);
        expect(port.ships).toContain(ship);
    });

    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary ={}

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.ships).toEqual([titanic]);
    });*/
});