import React from "react";

const Form = () => {
  return (
    <form id="form">
      <fieldset>
        <legend>What kind of Tea do you like?</legend>
        <input type="checkbox" id="teaq1" name="teaq1" value="black"></input>
        <label> Black Tea</label>
        <input type="checkbox" id="teaq2" name="teaq2" value="white"></input>
        <label> White Tea</label>
        <input type="checkbox" id="teaq3" name="teaq3" value="coffee"></input>
        <label> None, I like Coffee</label>
      </fieldset>
    </form>
  );
};

export default Form;
