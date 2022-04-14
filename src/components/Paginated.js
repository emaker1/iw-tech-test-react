import React, { useState } from "react";
import { EstablishmentsTable } from "./Table";
import { EstablishmentsTableNavigation } from "./Navigation";

const tableStyle = {
  background: "rgba(51, 51, 51, 0.9)",
  padding: "10px",
  width: "max-content",
  marginLeft: "50px",
  color: "white",
};

export const PaginatedEstablishmentsTable = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const pageCount = 100;

  function handlePreviousPage() {
    pageNumber > 1 && setPageNumber(pageNumber - 1);
  }

  function handleNextPage() {
    pageNumber < pageCount && setPageNumber(pageNumber + 1);
  }

  return (
    <div style={tableStyle}>
      <h2>Food Hygiene Ratings</h2>
      <EstablishmentsTable pageNumber={pageNumber} />
      <EstablishmentsTableNavigation
        pageNumber={pageNumber}
        pageCount={pageCount}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
};
