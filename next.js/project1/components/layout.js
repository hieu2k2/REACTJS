import styles from "../styles/Layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout-content">
      <ul className={styles.ul}>
        <li>
          <link href="/home">Home</link>
        </li>
        <li>
          <link href="#Login">Login</link>
        </li>
      </ul>
      {children}
    </div>
  );
}
