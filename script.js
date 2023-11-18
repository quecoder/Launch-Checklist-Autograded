// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function () {
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);

    }).then(function () {
        console.log(listedPlanets);
        let selectedPlanet = pickPlanet(listedPlanets);
        console.log(selectedPlanet) // New variable to hold pickPlanet function taking listedPlanets as parameter
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl); // Execute addDest function taking a document and the randomly selectedPlanet variable as a parameter

    })

    document.addEventListener("submit", function(event) {
       event.preventDefault();

        const pilotName = document.querySelector("input[name=pilotName]").value;
        const copilotName = document.querySelector("input[name=copilotName]").value;
        const fuelLevel = Number(document.querySelector("input[name=fuelLevel").value);
        const cargoMass = Number(document.querySelector("input[name=cargoMass").value);

        const faultyItems = document.getElementById('faultyItems');

        formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
    })

});