import React from "react";
import PropTypes from "prop-types";

const Person = ({ person }) => {
  console.log(person);
  return (
    <div>
      {person.lastname}, {person.firstname}
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.object.isRequired,
};

export default Person;
