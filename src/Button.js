import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faHeart, faHeartBroken);
const Button = ({ icon, onClick }) => {
  return (
      <FontAwesomeIcon icon={icon} onClick={onClick} />
  );
};

export default Button;
