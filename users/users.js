const users = Array.from({ length: 5 });

const final_users = users.map((_, i) => {
  return {
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@gmail.com`,
  };
});

module.exports = final_users;
