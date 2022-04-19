const MissionCommander = require('./app/missionCommander');
const carlo = new MissionCommander("Carlo");
const sergio = new MissionCommander("Sergio");
const luis = new MissionCommander("Luis");
console.log("Nombre de los Mission Comander: " + carlo.name, sergio.name, luis.name);
