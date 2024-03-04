// Badge.js
import React from "react";

export const Badge = ({status}) => {
  const statusShade =
    status === "sent" ? "green" : status === "failed" ? "red" : "gray";

  return (
    <span
      className={`inline-flex items-center rounded-md bg-${statusShade}-50 px-2 py-1 text-xs font-medium text-${statusShade}-600 ring-1 ring-inset ring-${statusShade}-500/10`}
    >
      {String(status).toUpperCase()}
    </span>
  );
};
