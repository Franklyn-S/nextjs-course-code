import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={props.className || classes.btn}>
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={props.className || classes.btn}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}

export default Button;
