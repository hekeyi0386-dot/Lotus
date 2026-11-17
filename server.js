const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const basePath = (process.env.BASE_PATH || "").replace(/\/+$/, "");
const contentTypes = {
	".html": "text/html; charset=utf-8",
	".css": "text/css; charset=utf-8",
	".js": "text/javascript; charset=utf-8",
	".png": "image/png",
	".svg": "image/svg+xml"
};

http.createServer((request, response) => {
	const requestPath = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
	const pathname = basePath && (requestPath === basePath || requestPath.startsWith(`${basePath}/`))
		? requestPath.slice(basePath.length) || "/"
		: requestPath;
	const requestedFile = path.resolve(root, `.${pathname}`);
	const route = pathname === "/" || pathname === "/shop" || pathname === "/deals";
	if (!route && !requestedFile.startsWith(`${root}${path.sep}`)) {
		response.writeHead(403);
		response.end("Forbidden");
		return;
	}

	const filePath = route ? path.join(root, "index.html") : requestedFile;
	fs.readFile(filePath, (error, contents) => {
		if (error) {
			response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
			response.end("Not found");
			return;
		}
		response.writeHead(200, { "Content-Type": contentTypes[path.extname(filePath)] || "application/octet-stream", "Cache-Control": "no-store" });
		response.end(contents);
	});
}).listen(port, "127.0.0.1", () => {
	console.log(`Lotus Food local server running at http://127.0.0.1:${port}`);
});