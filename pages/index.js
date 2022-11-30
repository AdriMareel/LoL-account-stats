import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'
import Router from 'next/router'

export default function Home() {

	const [summonerName, setSummonerName] = useState('');

	function handleChange(event){
		setSummonerName(event.target.value);
	}
	
  return (
    <>
		<Head>
			<title>Get stats of LoL account</title>
			<meta viewport="width=device-width, initial-scale=1.0" />
		</Head>

		<Nav>
		</Nav>

		<div>
			<div className={styles.center}>
				<h1>Get stats of your <span className={styles.textPrimary}>League of Legends Account </span> !</h1>
			</div>

			<form className={styles.mainInput} action={`account/${summonerName}`}>
				<input value={summonerName} onChange={handleChange} type="text" placeholder="Enter your summoner name" />
				<button type="submit"><Image src="/images/search-icon.png" width={25} height={25}></Image></button>
			</form>
		</div>
		
	</>
  )
}
