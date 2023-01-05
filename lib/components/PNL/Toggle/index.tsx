import classNames from "classnames";
import { useState } from "react";
import styles from "./Toggle.module.css";

const Toggle = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(styles.toggle, {
        [styles.toggleIsOpen]: isOpen,
      })}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
    </div>
  );
};

export default Toggle;
