import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
export async function getStaticProps() {
  const reponse = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=ha%20noi%20&appid=8b8d7a7c28a8d088b2e824c2217f8c7e"
  );
  return {
    props: {
      weatherInfo: reponse.data[0],
    },
  };
}

export default function Home({ weatherInfo }) {
  console.log(weatherInfo);
  return (
    <div className={styles.container}>
      <h2>CITI : Hà Nội </h2>
      <p>weather :{weatherInfo.weather[0].description}</p>
      <p>temp :{weatherInfo.main.temp - 273.15} C</p>
      <p>wind :{weatherInfo.main.wind} C</p>
    </div>
  );
}
