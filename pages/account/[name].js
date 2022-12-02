import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav";
import styles from "../../styles/Account.module.css";
import GameInfo from "../../components/GameInfo";

export default function Profile(props){

	let summonerInfos = props.summonerInfos;

	//create an async function
	async function getSummonerInfos(){
		//get summonerRankedInfos
		const encryptedSummonerId = summonerInfos.id;
		let query_second = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${API_KEY}`);
		let summonerRankedInfos = await query_second.json();
		console.log("summonerRankedInfos");
		console.table(summonerRankedInfos);

		//getMatchesIds
		const puuid = summonerInfos.puuid;
		let query_third = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=2&api_key=${API_KEY}`);
		let matchesIds = await query_third.json()
		console.log("matchesIds");
		console.table(matchesIds);

		//getMatchesData
		let matchesInfos = new Array();
		for (const element of matchesIds) {
			let query_fourth = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${element}?api_key=${API_KEY}`);
			let jsonTmp = await query_fourth.json();
			matchesInfos.push(jsonTmp);
		}
		console.log("matchesInfos");
		console.table(matchesInfos);


		//get data for front side
		let summonerSoloQInfos;
		let summonerFlexQInfos;
		summonerRankedInfos.forEach(element => {
			if(element.queueType == 'RANKED_SOLO_5x5')  summonerSoloQInfos = element;
			if(element.queueType == 'RANKED_FLEX_SR')  summonerFlexQInfos = element;
		});

		let rankedEmblemSrc = `/images/ranked-emblems/Emblem_${summonerSoloQInfos.tier}.png`


		return Promise("data feteched");
	}

	return(

		//await getSummonerInfos
		
		<>
			{getSummonerInfos().then((value) => {
				console.log(value);
			})}
			<Nav></Nav>
			<div className={styles.wrapper}>
				<div className={styles.ranked_infos}>
					<div className={styles.ranked_infos__text}>
						<span>{summonerSoloQInfos.summonerName}</span>
						<p></p>
						<span>{summonerSoloQInfos.tier} {summonerSoloQInfos.rank}</span>
						<p></p>
						<span>{summonerSoloQInfos.leaguePoints} LP</span>
					</div>
					<Image src={rankedEmblemSrc} width={100} height={104.24} alt="rankedEmblem"></Image>
				</div>

				<div className={styles.ranked_games}>
					
					{matchesInfos.map((element) => 
						<GameInfo props={{element,summonerInfos}}></GameInfo>
					)}
				</div>
			</div>
		</>
	)
}

export async function getServerSideProps({ params }) {
	let API_KEY = "RGAPI-499066a1-aa38-488f-a30a-93d92dc3db58";

	//get summonerInfos
	let nonEncodedName = params.name;
	let name = encodeURI(nonEncodedName);
	let query = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`);
	let summonerInfos = await query.json();
	console.log("summonerInfos");
	console.table(summonerInfos);

  	return { 
		props:  {
			"summonerInfos" : summonerInfos
		}
  	};
}
