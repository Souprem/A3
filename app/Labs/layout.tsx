import { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="container-fluid">
      <TOC />
      <hr />
      {children}
    </div>
  );
}