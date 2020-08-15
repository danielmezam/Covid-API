import React from "react";

import "../assets/styles/Form.css";

const Form = ({ handleChange, handleSubmit }) => {
  return (
    <React.Fragment>
      <form action="" onSubmit={handleSubmit}>
        <div className="row-input">
          <input
            type="text"
            className="country-input"
            placeholder="Select Country"
            name="country"
            onChange={handleChange}
          />
          <input type="submit" value="Go !" className="country-submit" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
