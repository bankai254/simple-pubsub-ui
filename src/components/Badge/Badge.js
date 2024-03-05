// Badge.js
import React from "react";

const SuccessBadge = ({status}) =>(
  <span
    className={`inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-500/10`}
  >
    {String(status).toUpperCase()}
  </span>
)

const FailBadge = ({status}) => (
  <span
    className={`inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-600 ring-1 ring-inset ring-red-500/10`}
  >
    {String(status).toUpperCase()}
  </span>
)


const DefaultBadge = ({status}) => (
  <span
    className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10`}
  >
    {String(status).toUpperCase()}
  </span>
)

export const Badge = ({status}) => {
  
    return status === "sent" ? (<SuccessBadge status={status}/>) : status === "failed" ? <FailBadge status={status}/> : <DefaultBadge status={status}/>;
  
  
};
