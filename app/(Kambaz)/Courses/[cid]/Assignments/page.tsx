"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle, FaSearch } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import * as db from "../../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments">
      <div className="d-flex mb-3">
        <div className="input-group w-50">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <FormControl
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
        </div>
        <div className="ms-auto">
          <Button
            variant="secondary"
            size="lg"
            className="me-1"
            id="wd-add-assignment-group"
          >
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" size="lg" id="wd-add-assignment">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <span id="wd-assignments-title">ASSIGNMENTS</span>
            <span className="float-end">
              <span className="badge bg-secondary text-dark rounded-pill me-2">
                40% of Total
              </span>
              <FaPlus className="me-2" />
              <IoEllipsisVertical className="fs-4" />
            </span>
          </div>
          <ListGroup className="rounded-0" id="wd-assignment-list">
            {assignments
              .filter((assignment) => assignment.course === cid)
              .map((assignment) => (
                <ListGroupItem
                  key={assignment._id}
                  className="wd-assignment-list-item p-3 ps-1"
                >
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdAssignment className="me-3 fs-3 text-success" />
                    <div className="flex-fill">
                      <Link
                        href={`/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link text-dark text-decoration-none fw-bold"
                      >
                        {assignment.title}
                      </Link>
                      <br />
                      <span className="text-muted">
                        <span className="text-danger">Multiple Modules</span> |
                        Not available until {assignment.availableFrom} |
                        <br />
                        Due {assignment.dueDate} | {assignment.points} pts
                      </span>
                    </div>
                    <div className="float-end">
                      <FaCheckCircle className="text-success me-2" />
                      <IoEllipsisVertical className="fs-4" />
                    </div>
                  </div>
                </ListGroupItem>
              ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
