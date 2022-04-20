import React from "react";
import PropTypes from "prop-types";

export const MenuOption = ({ options }) => (
    <option>{options.Name}</option>
);

MenuOption.propTypes = {
  establishment: PropTypes.shape({
    BusinessName: PropTypes.string,
    RatingValue: PropTypes.string,
  }),
};