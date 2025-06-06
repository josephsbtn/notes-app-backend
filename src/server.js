/* eslint-disable quotes */
require("dotenv").config();

const Hapi = require("@hapi/hapi");
const routes = require("./routes.js");
const process = require("process");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== "production" ? "0.0.0.0" : "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);
  server.start();
  console.log(`host : ${process.env.STATUS} `);
  console.log(`host : ${process.env.NODE_ENV} `);

  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
