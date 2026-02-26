const fs = require("fs");
const users = Array.from([1, 2, 3, 4]);
const final_users = users.map((index, user) => {
  return {
    id: index,
    name: `User ${index}`,
    email: `user${index}@gmail.com`,
  };
});

let data = JSON.stringify(final_users);
fs.writeFileSync("./users.json", data);
module.exports = final_users;
