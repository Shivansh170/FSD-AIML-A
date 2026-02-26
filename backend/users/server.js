const http = require("http");
const fs = require("fs");
const path = require("path");
const usersFile = path.join(__dirname, "users.json");
const writeData = (res, statusCode, data) => {
  res.writeHead(statusCode, { "content-type": "application/json" });
  res.end(
    JSON.stringify({
      success: statusCode < 400,
      data: data,
    }),
  );
};
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    return writeData(res, 200, "Homepage");
  } else if (req.url === "/users" && req.method === "GET") {
    const users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
    return writeData(res, 200, users);
  } else if (req.method === "GET" && req.url.startsWith("/users/")) {
    const users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
    const user_id = req.url.split("/")[2];

    const user = users.find((u) => u.id == user_id);

    if (!user) {
      return writeData(res, 404, "No such user found");
    }

    return writeData(res, 200, user);
  } else if (req.method === "POST" && req.url === "/createUser") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const newUser = JSON.parse(body);

        const users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));

        const exists = users.find((u) => u.id === newUser.id);

        if (exists) {
          return writeData(res, 400, "User with this ID already exists");
        }

        users.push(newUser);

        fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), "utf-8");

        return writeData(res, 201, newUser);
      } catch (err) {
        return writeData(res, 400, "Invalid JSON");
      }
    });
  } else {
    return writeData(res, 404, "Route not found");
  }
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
