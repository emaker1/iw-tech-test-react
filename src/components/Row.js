import React from "react";
import PropTypes from "prop-types";

export const EstablishmentsTableRow = ({ establishment }) => (
  <tr>
    <td>{establishment.BusinessName}</td>
    <td>{establishment.RatingValue}</td>
  </tr>
);

EstablishmentsTableRow.propTypes = {
  establishment: PropTypes.shape({
    BusinessName: PropTypes.string,
    RatingValue: PropTypes.string,
  }),
};
