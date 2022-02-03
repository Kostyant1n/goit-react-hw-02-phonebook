import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.ContactsList}>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.ContactListItem} key={id}>
        {name + ":" + number}
        {
          <button
            className={styles.btnDelete}
            type="button"
            name="delte"
            onClick={() => onRemoveContact(id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
