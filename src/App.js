// App.js
import React, { useState } from "react";
import MessageList from "./components/MessageList";
import AddMessageModal from "./components/AddMessageModal";

import "./App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-none">
          <div className="overflow-hidden bg-white sm:rounded-lg sm:shadow">
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
              <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-2">
                  <h2 className="font-semibold leading-6 text-gray-900">
                    Message List
                  </h2>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    data-testid="btn-add-message"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Add Message
                  </button>
                </div>
              </div>
            </div>
            <MessageList />
            <AddMessageModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
