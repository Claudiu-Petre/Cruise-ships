/* globals describe it expect */

const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/itinerary.js");

describe ('Ship', () => {
    describe('with ports and an itinerary', () => {
        let dover;
        let calais;
        
        beforeEach(() => {
            dover = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Dover',
                ships: []
            }; 
            
            calais = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Calais',
                ships: []
            },
           
            itinerary = {
                ports: [dover, calais]
            },

            ship = new Ship (itinerary);
        }); 

        it('can be an instantiated', () => {
            const port = new Port('Dover');
            const itinerary = new Itinerary([port]);
            const ship = new Ship(itinerary);
    
            expect(ship).toBeInstanceOf(Object)
        });
    
        it('has a starting port', () => {
            const port = new Port ('Dover')
            const itinerary =new Itinerary([port]);
            const ship = new Ship (itinerary);
            expect(ship.currentPort).toBe(port);
        });
    
        it('can set sail', () => {
            /*const dover = new Port('Dover')
            const calais = new Port('Calais');
            const itinerary = new Itinerary([dover, calais]);
            const ship = new Ship (itinerary); */
                
            ship.setSail();
    
            expect(ship.currentPort).toBeFalsy();
            expect(dover.removeShip).toHaveBeenCalledWith(ship);
        });

        it('gets added to port on instantiation', () => {
            /*const dover = new Port('Dover');
            const itinerary = new Itinerary([dover]);
            const ship = new Ship(itinerary); */
            expect(dover.addShip).toHaveBeenCalledWith(ship);
        });

        it('can dock at a different port', () => {
            ship.setSail();
            ship.dock();

            expect(ship.currentPort).toBe(calais);
            expect(calais.addShip).toHaveBeenCalledWith(ship);
    
        });
    });
    /*it('can be an instantiated', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object)
    });

    it('has a starting port', () => {
        const port = new Port ('Dover')
        const itinerary =new Itinerary([port]);
        const ship = new Ship (itinerary);
        expect(ship.currentPort).toBe(port);
    });

    it('can set sail', () => {
        const dover = new Port('Dover')
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship (itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(dover.ships).not.toContain(ship);
        
    });*/

   /* it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais'); */
        /*const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary); 
        
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(calais);
        expect(calais.addShip).toHaveBeenCalledWith(ship);

    });*/

    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });

    /*it('gets added to port on instantiation', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover]);
        const ship = new Ship(itinerary);
        expect(dover.ships).toContain(ship);
    }); */
});