console.clear()
const Hapi = require("@hapi/hapi");
const routes = require("./routes.js")

const port = 5000;
const host = "localhost";

const init = async () => {
	const server = Hapi.server({
		port,
		host,
		routes :{
			cors :{
				origin : ["*"]
			}
		}
	});

    server.route(routes)


    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`);
};


init()