import React from "react";

export default ({ subTitle, pubDate }) => (
  <h5 className="text-muted mb-5">
    {subTitle && <span className="subTitle">{subTitle}</span>}
    {pubDate && (
      <span className="text-muted" style={{ fontSize: "0.85em" }}>
        {new Date(pubDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </span>
    )}
  </h5>
);
