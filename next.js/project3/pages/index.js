import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
export async function getStaticProps() {
  const reponse = await axios.get(
    "https://covid19-api.com/country?name=Vietnam&format=json"
  );
  return {
    props: {
      covidInfo: reponse.data[0],
    },
  };
}
export default function Home({ covidInfo }) {
  return (
    <div className={styles.container}>
      <h2>COVID 19</h2>
      {Object.keys(covidInfo).map((key) => (
        <p key={key}>{`${key} : ${covidInfo[key]}`}></p>
      ))}
    </div>
  );
}
