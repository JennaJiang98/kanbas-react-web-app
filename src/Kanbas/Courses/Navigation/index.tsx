import { Link, useLocation, useParams } from "react-router-dom";
import db from "../../Database";
import "../../../index.css";
import "./index.css";

function Navigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Progress Reports (EAB Navigate)",
    "Settings",
  ];

  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find((course) => course._id === courseId);

  return (
    <div className="wd-course-navigation">
      <div className="wd-ellipsis mb-3">
        {(course as any).number} {(course as any).name}{" "}
        {(course as any).startDate}
      </div>
      <div className="list-group">
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item bg-transparent wd-course-navigation-item ${
              pathname.includes(link) && "active wd-active"
            }`}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
