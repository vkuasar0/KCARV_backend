const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const adminRoutes = require('./routes/adminRoutes');
const memberRoutes = require('./routes/memberRoutes');
const pdRoutes = require('./routes/pdRoutes');
const eventRoutes = require('./routes/eventRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const authRoutes = require('./routes/authRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

const app = express();
app.use(bodyParser.json());

// Documentation Endpoint
app.get('/', (req, res) => {
  res.json({
    "message": "Theatre Club Management System API Documentation",
    "endpoints": [
      {
        "method": "POST",
        "path": "/api/login/admin",
        "description": "Login as an admin. Requires email and password in the request body."
      },
      {
        "method": "POST",
        "path": "/api/login/member",
        "description": "Login as a member. Requires email and password in the request body."
      },
      {
        "method": "POST",
        "path": "/api/admins",
        "description": "Create a new admin. Requires admin details in the request body."
      },
      {
        "method": "POST",
        "path": "/api/members",
        "description": "Create a new member. Requires member details in the request body."
      },
      {
        "method": "POST",
        "path": "/api/pd-items",
        "description": "Create a new production design item. Requires item details in the request body."
      },
      {
        "method": "GET",
        "path": "/api/pd-items",
        "description": "Get a list of all production design items."
      },
      {
        "method": "PUT",
        "path": "/api/pd-items/:id",
        "description": "Edit an existing production design item by ID. Requires updated item details in the request body."
      },
      {
        "method": "DELETE",
        "path": "/api/pd-items/:id",
        "description": "Delete a production design item by ID."
      },
      {
        "method": "POST",
        "path": "/api/events",
        "description": "Create a new event. Requires event details in the request body."
      },
      {
        "method": "GET",
        "path": "/api/events",
        "description": "Get a list of all events."
      },
      {
        "method": "PUT",
        "path": "/api/events/:id/participants",
        "description": "Add participants to an event. Requires participant details in the request body."
      },
      {
        "method": "GET",
        "path": "/api/events/:id",
        "description": "Get details of a specific event by ID."
      },
      {
        "method": "PUT",
        "path": "/api/events/:id/complete",
        "description": "Mark an event as complete. No more participants can be added once the event is marked as complete."
      },
      {
        "method": "PUT",
        "path": "/api/events/:id/library",
        "description": "Update the event library. Requires library contents in the request body."
      },
      {
        "method": "POST",
        "path": "/api/announcements",
        "description": "Create a new announcement. Requires announcement details in the request body."
      },
      {
        "method": "GET",
        "path": "/api/announcements",
        "description": "Get a list of all announcements."
      },
      {
        "method": "DELETE",
        "path": "/api/announcements/:id",
        "description": "Delete a specific announcement by ID."
      },
      {
        "method": "POST",
        "path": "/api/borrow",
        "description": "Request to borrow an item. Requires itemId in the request body."
      },
      {
        "method": "PUT",
        "path": "/api/borrow/approve/:requestId",
        "description": "Approve a borrow request by ID (Admin only)."
      },
      {
        "method": "PUT",
        "path": "/api/borrow/reject/:requestId",
        "description": "Reject a borrow request by ID (Admin only)."
      },
      {
        "method": "PUT",
        "path": "/api/borrow/return/:requestId",
        "description": "Return a borrowed item by request ID."
      },
      {
        "method": "GET",
        "path": "/api/borrow",
        "description": "Get a list of all borrow requests (Admin only)."
      }
    ]
  }
  );
});

app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', memberRoutes);
app.use('/api', pdRoutes);
app.use('/api', eventRoutes);
app.use('/api', announcementRoutes);
app.use('/api', borrowRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
