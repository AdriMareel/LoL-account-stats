import Link from 'next/link'

export default function GameInfo(props){

    let gameInfos = props.props;
    console.log(gameInfos);

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
    
return(
    <li className={cssClass}>
        <div>
            <p>{playerGameData.championName}</p>
            <p></p>
            </div>
        <div>PERSO STUFF</div>
        <div>RECAP TEAM</div>
    </li>
)
    
}