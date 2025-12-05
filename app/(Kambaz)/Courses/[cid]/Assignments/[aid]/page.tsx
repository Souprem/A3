"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Button,
  Form,
  FormControl,
  FormSelect,
  Row,
  Col,
  FormLabel,
  FormCheck,
} from "react-bootstrap";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find((a) => a._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3">
          <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
          <FormControl id="wd-name" defaultValue={assignment.title} />
        </Form.Group>

        <Form.Group className="mb-3">
          <FormControl
            as="textarea"
            id="wd-description"
            rows={5}
            defaultValue={assignment.description}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-points" className="float-end">
              Points
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormControl
              id="wd-points"
              type="number"
              defaultValue={assignment.points}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-group" className="float-end">
              Assignment Group
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormSelect id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-display-grade-as" className="float-end">
              Display Grade as
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormSelect id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-submission-type" className="float-end">
              Submission Type
            </FormLabel>
          </Col>
          <Col md={9}>
            <div className="border p-3 rounded">
              <FormSelect id="wd-submission-type" className="mb-3">
                <option value="Online">Online</option>
                <option value="Paper">Paper</option>
              </FormSelect>
              <FormLabel className="fw-bold">Online Entry Options</FormLabel>
              <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" />
              <FormCheck
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
                defaultChecked
              />
              <FormCheck
                type="checkbox"
                id="wd-media-recordings"
                label="Media Recordings"
              />
              <FormCheck
                type="checkbox"
                id="wd-student-annotation"
                label="Student Annotation"
              />
              <FormCheck
                type="checkbox"
                id="wd-file-upload"
                label="File Uploads"
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-assign-to" className="float-end">
              Assign
            </FormLabel>
          </Col>
          <Col md={9}>
            <div className="border p-3 rounded">
              <FormLabel htmlFor="wd-assign-to" className="fw-bold">
                Assign to
              </FormLabel>
              <FormControl
                id="wd-assign-to"
                defaultValue="Everyone"
                className="mb-3"
              />
              <FormLabel htmlFor="wd-due-date" className="fw-bold">
                Due
              </FormLabel>
              <FormControl
                type="date"
                id="wd-due-date"
                defaultValue={assignment.dueDate}
                className="mb-3"
              />
              <Row>
                <Col>
                  <FormLabel htmlFor="wd-available-from" className="fw-bold">
                    Available from
                  </FormLabel>
                  <FormControl
                    type="date"
                    id="wd-available-from"
                    defaultValue={assignment.availableFrom}
                  />
                </Col>
                <Col>
                  <FormLabel htmlFor="wd-available-until" className="fw-bold">
                    Until
                  </FormLabel>
                  <FormControl
                    type="date"
                    id="wd-available-until"
                    defaultValue={assignment.availableUntil}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr />
        <div className="float-end">
          <Link
            href={`/Courses/${cid}/Assignments`}
            className="btn btn-secondary me-2"
          >
            Cancel
          </Link>
          <Button variant="danger" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
