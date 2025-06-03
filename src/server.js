/* eslint-disable quotes */
const Hapi = require("@hapi/hapi");
const routes = require("./routes.js");
const process = require("process");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.STATUS !== "production" ? "0.0.0.0" : "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);
  server.start();

  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
