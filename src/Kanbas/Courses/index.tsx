import db from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseTopNavigation from "./NavigationTop";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { useState } from "react";
import "../../index.css";
import "./index.css";

function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const [activePageName, setActivePageName] = useState("");
  const updateActivePageName = (name: any) => {
    setActivePageName(name);
  };

  return (
    <div>
      <CourseTopNavigation />
      <hr className="mb-3 mx-3" />
      <div>
        <CourseNavigation />
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "70px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
