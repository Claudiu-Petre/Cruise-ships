# Project title - Cruise-ships

# Overview
A JavaScript project as part of the Software Engineering Fast Track course at Manchester Codes. I have created the JavaScript code to simulate cruise ships sailing around the world and docking at ports along the way. It was an exercise in object-oriented programming, through initially exploring user stories and domain modelling.As a latter stage of the project we have added a Graphical User Interface to display the cruise ships, ports and journeys in the browser. 

# Purpose of the project and concepts covered
The purpose of this project is to build upon the following skills and concepts:
    Domain Modelling
    User stories
    Object-oriented Programming
    DRY
    Single Responsibility Principle
    Dependency inversion
    Test doubles and test isolation
    DOM manipulation
# Technologies 
    JavaScript
    Jest
    Node
    Node Package Manager
    GitHub
    HTML
    CSS
    ESLint
# Getting started
There are three classes that can interact with each other to simulate cruise ships as they travel around the globe.
A user story portrays parts of the functionality an application should have, from the perspective of the person using it. For example:

As a cruise ship captain,
So I can get passengers aboard a ship
I want a ship to have a starting port

A developer takes a user story and splits it up into objects, methods, and properties - this is known as domain modelling. For this project:

Object (generally the noun in the user story): Ship
Property (possessed by the object): startingPort
Method (generally the verb in the user story): setSail / dock

Ship objects will have itinerary and port objects. Ships can set sail and dock at ports. Ports hold records of the ships currently docked. Itineraries contain information about the current and previous ports.

All of this is visually represented by a Graphical User Interface, which includes an animated sea background, multiple 'ports' and a ship icon. With the click of a button, the user is able to launch the ship and sail from port to port.

# Tests
As OOP inherently is interlinked with other objects, using mocks was important to help control the environment and isolate the tests so as not to be affected by other parts of the code. By using jest.fn() we were able to utilise mocks and spies, and use certain methods to test behaviour; for example our setSail method under ‘gets added to port on instantiation’.

# Author
Claudiu Petre

# Acknowledgments
Manchester Codes 