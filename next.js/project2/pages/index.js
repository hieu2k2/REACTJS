import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.h22}>Login</h2>
      <form>
        <input
          className={styles.input}
          type="text"
          id="login"
          name="login"
          placeholder="login"
        />
        <br></br>
        <input
          className={styles.input}
          type="text"
          id="password"
          name="login"
          placeholder="password"
        />
        <br></br>
        <button
          className={styles.button}
          type="button"
          onClick={() => router.push("/")}
        >
          Log In
        </button>
      </form>
    </div>
  );
}
