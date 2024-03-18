import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {
  FaGlasses,
  FaPlus,
  FaEllipsisV,
  FaGripVertical,
  FaEdit,
  FaCheckCircle,
} from "react-icons/fa";
// import "../../style.css";
import { deleteAssignment, setAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";

function Assignments() {
  const { courseId } = useParams();
  const courseAssignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const assignments = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  ).filter((assignment) => assignment.course === courseId);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <span>
              <input
                className="form-control float-start pe-5"
                style={{ width: "50%" }}
                type="text"
                placeholder="Search for Assignments"
              />
            </span>
            <div className="float-end pb-3">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
              >
                <FaPlus />
                Group
              </button>
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments/newAssignment`}
                onClick={() => {
                  dispatch(setAssignment(false));
                }}
              >
                <button type="button" className="btn btn-danger btn-sm">
                  <FaPlus />
                  Assignment
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
              >
                <FaEllipsisV />
              </button>
            </div>
            <hr style={{ clear: "both" }}></hr>
          </div>
        </div>

        <ul className="list-group ">
          <li className="list-group-item-secondary list-group-item">
            <FaGripVertical style={{ color: "grey ", fontSize: "1.5em" }} />
            Assignments
            <span className="float-end ">
              <span className="border-secondary border rounded-pill p-1 mb-1 ">
                40% of Total
              </span>
              <FaPlus style={{ color: "grey ", fontSize: "1.5em" }} />
              <FaEllipsisV style={{ color: "grey ", fontSize: "1.5em" }} />
            </span>
          </li>

          {assignments.map((assignment, index) => (
            <li className="list-group-item" key={index}>
              <div className="row">
                <span className="col pt-4">
                  <i className="fas fa-grip-vertical pe-2"></i>
                  <FaGripVertical
                    style={{ color: "grey ", fontSize: "1.5em" }}
                  />
                  <i className="fas fa-edit grn "></i>
                  <FaEdit style={{ color: "green ", fontSize: "1.5em" }} />
                </span>

                <div className="col-10">
                  <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="hlink text-dark"
                    onClick={() => dispatch(setAssignment(assignment))}
                  >
                    <h5>{assignment.title}</h5>
                  </Link>

                  <p className="m-0 text-secondary">{assignment.description}</p>

                  <p className="m-0 pb-1 text-secondary">
                    Due {assignment.dueDate} at 11:59pm |availableFrom{" "}
                    {assignment.availableFromDate} at 12:00am | Until{" "}
                    {assignment.availableUntilDate} at 11:59pm
                  </p>
                </div>
                <div className="col pt-4">
                  <span className="float-end">
                    <button
                      type="button"
                      onClick={() => dispatch(deleteAssignment(assignment._id))}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>

                    <FaCheckCircle
                      style={{ color: "green ", fontSize: "1.5em" }}
                    />

                    <FaEllipsisV
                      style={{ color: "grey ", fontSize: "1.5em" }}
                    />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Assignments;
