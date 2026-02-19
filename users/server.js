const http = require("http");
const users = require("./users");

function writeData(res, statuscode, data) {
  res.writeHead(statuscode, { "content-type": "application/json" });
  res.end(
    JSON.stringify({
      //   success: true,
      message: data,
    }),
  );
}
const server = http.createServer((req, res) => {
  if (req.url == "/" && req.method == "GET") {
    writeData(res, 200, "Hello I am the homepage of this website");
  }
  if (req.url === "/users" && req.method == "GET") {
    writeData(res, 200, users);
  }
  if (req.method === "GET" && req.url.startsWith("/users/")) {
    const id = req.url.split("/")[2];
    const required_user = users.find((u) => u.id == id);
    if (!required_user) {
      writeData(res, 400, "No such user found");
    } else {
      writeData(res, 200, required_user);
    }
  }
  if (req.method == "POST" && req.url == "/createuser") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const data = JSON.parse(body);
      const existing_user = users.some((user) => {
        return user.id === data.id;
      });
      if (existing_user) {
        writeData(res, 400, "User already exists");
      } else {
        data.id = users.length + 1;
        users.push(data);
        writeData(res, 200, data);
      }
    });
  }
  if (req.method === "PUT" && req.url.startsWith("/users/")) {
    const user_id = parseInt(req.url.split("/")[2]);

    const required_user = users.find((user) => user.id === user_id);

    if (!required_user) {
      return writeData(res, 404, "No such user found");
    }

    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      let data;

      try {
        data = JSON.parse(body);
      } catch (err) {
        return writeData(res, 400, "Invalid JSON");
      }

      // ✅ Update fields (only if provided)
      if (data.name) required_user.name = data.name;
      if (data.email) required_user.email = data.email;

      writeData(res, 200, required_user);
    });
  }
});
try {
  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
} catch (error) {
  console.log("Error occured in starting the server");
  console.error(error.message);
}
