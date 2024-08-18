const { User } = require('../models');
const bcrypt = require('bcryptjs');

const seedUsers = async () => {
  try {
    const hashedAdminPassword = await bcrypt.hash('password', 10);
    const hashedMemberPassword = await bcrypt.hash('password', 10);

    await User.bulkCreate([
      {
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin',
        password: hashedAdminPassword // Manually hashed password
      },
      {
        name: 'Member User',
        email: 'member@example.com',
        role: 'member',
        password: hashedMemberPassword // Manually hashed password
      }
    ]);
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

seedUsers().then(() => {
  process.exit();
});
