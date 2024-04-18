import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
const Button = ({ icon }) => {
  return (
    <div className={icon}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default Button;
