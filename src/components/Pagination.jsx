import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  setCurrentPage,
}) {
  //handlePageClick
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  return (
    <div className="mt-3">
      <nav aria-label="Page navigation example" className="mt-4">
      <ul className="inline-flex flex-wrap -space-x-px text-xs sm:text-sm">
      {/* Previous Button */}
          <li>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-blue-800 border border-e-0 border-gray-300 rounded-l-lg hover:bg-blue-800 hover:text-gray-100 
            ${currentPage === 1 ? "cursor-not-allowed opacity-40" : ""}`}
            >
              Previous
            </button>
          </li>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (number) => (
              <li key={number}>
                <button
                  onClick={() => handlePageChange(number)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-white bg-custom-dark border border-e-0 hover:bg-blue-800 hover:text-gray-100 
              ${
                currentPage === number
                  ? "text-white bg-blue-900 hover:bg-blue-800"
                  : ""
              }`}
                >
                  {number}
                </button>
              </li>
            )
          )}

          {/* Next Button */}
          <li>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-white bg-blue-800 border border-e-0 border-gray-300 rounded-r-lg hover:bg-blue-800 hover:text-gray-100 
            ${
              currentPage === totalPages ? "cursor-not-allowed opacity-40" : ""
            }`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
