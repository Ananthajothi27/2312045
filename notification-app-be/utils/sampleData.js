const notifications = [
  {
    id: 1,
    title: "Welcome",
    message: "Welcome to the Notification Application",
    category: "General",
    priority: "Low",
    read: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Exam Reminder",
    message: "Test starts tomorrow.",
    category: "Academic",
    priority: "High",
    read: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Assignment",
    message: "Submit your Full Stack project.",
    category: "Assignment",
    priority: "Medium",
    read: true,
    createdAt: new Date().toISOString()
  }
];

export default notifications;