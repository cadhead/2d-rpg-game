import * as Colyseus from "colyseus.js";

const host = window.document.location.host.replace(/:.*/, '');
const port = "8080";
const client = new Colyseus.Client(location.protocol.replace("http", "ws") + "//" + host + (port ? ':'+port : ''));

client.joinOrCreate("default").then(room => {
  console.log(room.sessionId, "joined", room.name);

  room.onStateChange.once(function(state) {
    console.log("initial room state:", state);
  })
}).catch(e => {
  console.log("JOIN ERROR", e);
});