import React from 'react';

const Alert = ({ className, children }) => {
  const [showAlert, setShowAlert] = React.useState(true);
  return (
    <>
      {showAlert ? (
        <div className={`flex flex-row px-6 py-4 border-0 rounded shadow-lg mb-4 ` + className}>
          {children}
          <button
            className="w-auto ml-auto bg-transparent text-2xl font-semibold leading-none outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Alert;
