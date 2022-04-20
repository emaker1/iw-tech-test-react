import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { Filter } from "./Filter";

import { EstablishmentsTableRow } from "./Row";
import { Loading } from "./Loading";

const headerStyle = {
  paddingBottom: "10px",
  textAlign: "left",
  fontSize: "20px",
};

export const EstablishmentsTable = ({ pageNumber }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [authorities, setAuthorities] = useState([]);
  const url = `https://api.ratings.food.gov.uk/Authorities/basic`;
  fetch(url, { headers: { "x-api-version": "2" } })
    .then((res) => res.json())
    .then((data) => setAuthorities(data));

  useEffect(() => {
    setLoading(true);
    const url = `https://api.ratings.food.gov.uk/Establishments/basic/${pageNumber}/10`;
     fetch(url, { headers: { "x-api-version": "2" } })
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => setError(err))
      .finally(() => {setLoading(false)});
  }, [pageNumber]);

  const { establishments } = data || {};

  if (error) return <div>Error: {error}</div>;
  return (
    <table>
      <div>Filter by Region ID:</div>
      <tbody>
        <tr>
          <th style={headerStyle}>Business Name</th>
          <th style={headerStyle}>Rating Value</th>
        </tr>
        {loading ? 
          <Loading />
         : 
          establishments?.map((establishment, index) => (
            <EstablishmentsTableRow key={index} establishment={establishment} />
          ))
        }
      </tbody>
    </table>
  );
};

EstablishmentsTable.propTypes = {
  pageNumber: PropTypes.number,
};
