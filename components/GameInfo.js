import Link from 'next/link'

export default function GameInfo(props){

    let gameInfos = props.props;

    let playerGameData;
    gameInfos.element.info.participants.map(participant => {
        if(participant.summonerName == gameInfos.summonerInfos.name){
           playerGameData = participant;
        }
    })
    console.log(playerGameData);

    let queueName;
    if(gameInfos.element.info.queueId == 420){
        queueName == "ranked"
    }

    let cssClass = "gameInfos";
    
    //bg color win or lose
    if(playerGameData.win) cssClass = "gameInfos bg-win"
    else cssClass = "gameInfos bg-lose"

	//display items
	let items = [];
	for(let i = 0; i < 7; i++){
		if(playerGameData[`item${i}`] != 0){
			items.push(playerGameData[`item${i}`]);
		}
	}
    
return(
    <li className={cssClass}>
        <div>
            <p>{playerGameData.championName}</p>
            <p>{}</p>
            </div>
        <div>
			<p>{playerGameData.kills} / {playerGameData.deaths} / {playerGameData.assists}</p>
			<p>{playerGameData.totalMinionsKilled} CS</p>
			<div className='stuff'>
				{
					//display items
					items.map(item =>
						<img className={item} src={`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/item/${item}.png`} alt="item"></img>
					)

				}
			</div>
		</div>
        <div>RECAP TEAM</div>
    </li>
)
    
}