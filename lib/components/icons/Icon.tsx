import classNames from "classnames";
import styles from "./Icon.module.css";

const Icon = ({ width = 48, height = 48, className = undefined, children }) => (
  <span
    className={classNames(styles.icon, className)}
    style={{
      height: `${height}px`,
      width: `${width}px`,
    }}
  >
    {children}
  </span>
);

export default Icon;
