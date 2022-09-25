import React from 'react';
import AdminDashboard from './admin';
import "./index.css";
import InstructorDashboard from './instructor';
import StudentDashboard from './student';

export default function Home() {
  const role = "student";

  if (role === "admin") {
    return <AdminDashboard />;

  } else if (role === "student") {
    return <StudentDashboard />;

  } else if (role === "instructor") {
    return <InstructorDashboard />;
  } else
    throw new Error("Invalid Role");
}