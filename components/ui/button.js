import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  return (
    <Link href={props.href} className={props.className || classes.btn}>
      {props.children}
    </Link>
  );
}

export default Button;
