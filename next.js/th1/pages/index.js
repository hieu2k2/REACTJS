import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div class={styles.formContent}>
        <h2>Login</h2>
        <form>
          <input
            class={styles.input}
            type="text"
            id="login"
            name="login"
            placeholder="login"
          />
          <br></br>
          <input
            class={styles.input}
            type="text"
            id="password"
            name="login"
            placeholder="password"
          />
          <br></br>
          <button
            type="button"
            class={styles.button}
            onClick={() => router.push("/")}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
