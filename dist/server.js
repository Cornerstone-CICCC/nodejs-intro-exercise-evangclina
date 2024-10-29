"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    //Home Page
    if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(`<h1>Home</h1>`);
        res.end();
        return;
    }
    //About Page 
    if (req.url === "/about") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(`<h1>About</h1>`);
        res.end();
        return;
    }
    //My account page 
    if (req.url === "/my-account") {
        res.writeHead(200, { "Content-type": "text/plain" });
        res.write(`You have no access to this page`);
        res.end();
        return;
    }
    //404
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(`
        <h1>Page not found :(</h1>
        <img src="https://media.tenor.com/OgIQVzGLDiQAAAAM/annoyed.gif" alt="sad gif">
        `);
    res.end();
});
const PORT = 5500;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
