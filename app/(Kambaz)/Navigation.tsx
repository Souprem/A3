"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      <br />
      <ListGroupItem
        className={`border-0 text-center ${
          pathname?.includes("Account") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Account"
          id="wd-account-link"
          className={`text-decoration-none ${
            pathname?.includes("Account") ? "text-danger" : "text-white"
          }`}
        >
          <FaRegCircleUser
            className={`fs-1 ${
              pathname?.includes("Account") ? "text-danger" : "text-white"
            }`}
          />
          <br />
          Account
        </Link>
      </ListGroupItem>
      <br />
      <ListGroupItem
        className={`border-0 text-center ${
          pathname?.includes("Dashboard") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className={`text-decoration-none ${
            pathname?.includes("Dashboard") ? "text-danger" : "text-white"
          }`}
        >
          <AiOutlineDashboard
            className={`fs-1 ${
              pathname?.includes("Dashboard") ? "text-danger" : "text-danger"
            }`}
          />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>
      <br />
      <ListGroupItem
        className={`border-0 text-center ${
          pathname?.includes("Courses") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Dashboard"
          id="wd-course-link"
          className={`text-decoration-none ${
            pathname?.includes("Courses") ? "text-danger" : "text-white"
          }`}
        >
          <LiaBookSolid
            className={`fs-1 ${
              pathname?.includes("Courses") ? "text-danger" : "text-danger"
            }`}
          />
          <br />
          Courses
        </Link>
      </ListGroupItem>
      <br />
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Calendar"
          id="wd-calendar-link"
          className="text-white text-decoration-none"
        >
          <IoCalendarOutline className="fs-1 text-danger" />
          <br />
          Calendar
        </Link>
      </ListGroupItem>
      <br />
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Inbox"
          id="wd-inbox-link"
          className="text-white text-decoration-none"
        >
          <FaInbox className="fs-1 text-danger" />
          <br />
          Inbox
        </Link>
      </ListGroupItem>
      <br />
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Labs"
          id="wd-labs-link"
          className="text-white text-decoration-none"
        >
          <LiaBookSolid className="fs-1 text-danger" />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
