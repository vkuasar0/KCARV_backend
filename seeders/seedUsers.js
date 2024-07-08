const { User } = require('../models');
const bcrypt = require('bcryptjs');

const seedUsers = async () => {
  const hashedPassword = await bcrypt.hash('password', 10);
  await User.bulkCreate([
    { name: 'Admin User', email: 'admin@example.com', role: 'admin', password: hashedPassword },
    { name: 'Member User', email: 'member@example.com', role: 'member', password: hashedPassword }
  ]);
};

seedUsers().then(() => {
  console.log('Users seeded');
  process.exit();
});
