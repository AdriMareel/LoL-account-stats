import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
		<Head>
			<title>Get stats of LoL account</title>
			<meta viewport="width=device-width, initial-scale=1.0" />
		</Head>

		<Nav>
		</Nav>

		<div className={styles.center}>
			<h1>Get stats of your <span className={styles.textPrimary}>League of Legends Account </span> !</h1>
		</div>

		<div className={styles.center}>
			<input className={styles.mainInput} type="text" placeholder="Enter your summoner name" />
			<button><Image src="/public/images/search-icon.png" width={50} height={50}></Image></button>
		</div>
	</>
  )
}
