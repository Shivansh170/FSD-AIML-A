const http = require("http");
const os = require("os");

function writeData(res, data) {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(data));
}
const data = [];
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    writeData(res, {
      message: "Hello i am the home page for this application",
    });
    return;
  }
  if (req.url === "/contact" && req.method === "GET") {
    writeData(res, {
      message: "Hello i am the contact page for this application",
    });
    return;
  }
  if (req.url === "/system" && req.method === "GET") {
    const sysdata = {
      platform: os.platform(),
      Architecture: os.arch(),
      Cpu_length: os.cpus().length,
      TotalMemory: (os.totalmem() / 1024 ** 3).toFixed(2) + "gb",
      FreeRam: (os.freemem() / 1024 ** 3).toFixed(2) + "gb",
    };
    writeData(res, sysdata);
    return;
  }
  if (req.url === "/senddata" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const parsedData = JSON.parse(body);
        data.push(parsedData);
        console.log(data);
        writeData(res, parsedData);
      } catch (error) {
        writeData(res, { message: "Error in parsing the data" });
      }
    });
    return;
  }
  if (req.url === "/viewdata" && req.method === "GET") {
    writeData(res, data.length === 0 ? "No data found" : data[data.length - 1]);
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
