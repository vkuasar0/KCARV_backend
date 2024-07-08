const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const adminRoutes = require('./routes/adminRoutes');
const memberRoutes = require('./routes/memberRoutes');
const pdRoutes = require('./routes/pdRoutes');
const eventRoutes = require('./routes/eventRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const { authenticateUser, isAdmin } = require('./middlewares/authMiddleware');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api', adminRoutes);
app.use('/api', memberRoutes);
app.use('/api', pdRoutes);
app.use('/api', eventRoutes);
app.use('/api', announcementRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
