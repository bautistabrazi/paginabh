import React from "react";
import { LAYOUTS } from "./layouts";
import "../../css/layouts.css";

export default function Layout({ layout, header, body, foot, bodyRef }) {
  return (
    <div className={`layout ${layout}`}>
      {header && <div className="header">{header}</div>}
      <div className="body" ref={bodyRef} style={{ overflowY: 'auto', height: '100vh' }}>
        {body}
      </div>
      {foot && <div className="foot">{foot}</div>}
    </div>
  );
}