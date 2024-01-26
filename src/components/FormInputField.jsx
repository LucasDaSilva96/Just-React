import React from "react";

function FormInputField({ ...Props }) {
  return (
    <div>
      <input {...Props} />
    </div>
  );
}

export default FormInputField;
