import React from "react";

function CommonLayout({ heading, code }) {
  return (
    <>
      <div className="static-info">
        <h3>{heading}</h3>
        <pre>{code}</pre>
      </div>
    </>
  );
}

export default CommonLayout;
