const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const adminRoutes = require('./routes/adminRoutes');
const memberRoutes = require('./routes/memberRoutes');
const pdRoutes = require('./routes/pdRoutes');
const eventRoutes = require('./routes/eventRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());

// Documentation Endpoint
app.get('/', (req, res) => {
  res.json({
    message: "Theatre Club Management System API Documentation",
    endpoints: [
      {
        method: "POST",
        path: "/api/login/admin",
        description: "Login as an admin. Requires email and password in the request body."
      },
      {
        method: "POST",
        path: "/api/login/member",
        description: "Login as a member. Requires email and password in the request body."
      },
      {
        method: "POST",
        path: "/api/admins",
        description: "Create a new admin. Requires admin details in the request body."
      },
      {
        method: "POST",
        path: "/api/members",
        description: "Create a new member. Requires member details in the request body."
      },
      {
        method: "POST",
        path: "/api/pd-items",
        description: "Create a new production design item. Requires item details in the request body."
      },
      {
        method: "GET",
        path: "/api/pd-items",
        description: "Get a list of all production design items."
      },
      {
        method: "POST",
        path: "/api/events",
        description: "Create a new event. Requires event details in the request body."
      },
      {
        method: "GET",
        path: "/api/events",
        description: "Get a list of all events."
      },
      {
        method: "POST",
        path: "/api/announcements",
        description: "Create a new announcement. Requires announcement details in the request body."
      },
      {
        method: "GET",
        path: "/api/announcements",
        description: "Get a list of all announcements."
      }
    ]
  });
});

// Authentication Routes
app.use('/api', authRoutes);

// Other Routes
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
