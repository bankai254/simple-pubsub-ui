// MessageList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Badge } from "../Badge/Badge";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  function fetchMessages() {
    // Make a request for a user with a given ID
    axios
      .get(`${process.env.REACT_APP_MESSAGE_SERVER}/list.php`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  return messages && messages.length > 0 ? (
    <div className="p-4" data-testid="message-list">
      <table className="min-w-full">
        <colgroup>
          <col className="w-full sm:w-1/2" />
          <col className="sm:w-1/6" />
          <col className="sm:w-1/6" />
          <col className="sm:w-1/6" />
        </colgroup>
        <thead className="border-b border-gray-300 text-gray-900">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Message
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Status
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Created
            </th>
            <th
              scope="col"
              className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
            >
              Updated
            </th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id} className="border-b border-gray-200">
              <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                <div className="font-medium text-gray-900">
                  {message.subject}
                </div>
                <div className=" truncate text-gray-700">{message.to}</div>
                <div className="mt-3 text-gray-500">{message.message}</div>
              </td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                <Badge status={message.status} />
              </td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                {message?.created_at || "N/A"}
              </td>
              <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                {message?.updated_at || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  ) : (
    <div className="bg-white px-4 py-12">
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-semibold text-gray-900">
          No messages
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by sending a new message
        </p>
      </div>
    </div>
  );
};

export default MessageList;
