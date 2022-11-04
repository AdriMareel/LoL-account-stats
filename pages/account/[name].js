import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav";
import styles from "../../styles/Account.module.css";


export async function getServerSideProps({ params }) {
	let API_KEY = "RGAPI-5aa800d4-4845-4d34-82a6-e55c14192607";

	let nonEncodedName = params.name;
	let name = encodeURI(nonEncodedName);
	let query = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`);
	let response = await query.json();

	const encryptedSummonerId = response.id;
	let query_second = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${API_KEY}`);
	let response_second = await query_second.json();
	
	console.log(response_second);

  	return { 
		props:  {"response" : response_second }
  	};
}

export default function Profile(props){
	
	let result = props.response[0];
	return(
		<>
			<Nav></Nav>
			<div className={styles.wrapper}>
				<div className={styles.ranked_infos}>
					<div className={styles.ranked_infos__text}>
						<span>{result.summonerName}</span>
						<p></p>
						<span>{result.tier} {result.rank}</span>
						<p></p>
						<span>{result.leaguePoints} LP</span>
					</div>
					<Image src="/images/ranked-emblems/Emblem_Diamond.png" width={100} height={104.24}></Image>
				</div>

				<div className={styles.ranked_stats}>
					a
				</div>
			</div>
		</>
	)
}
