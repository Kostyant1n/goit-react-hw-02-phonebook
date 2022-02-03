import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.scss";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.filterBlock}>
      Find contacts by name
      <input
        className={styles.filterInput}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func,
};
