import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  return (
    <li className="match-card-list-item">
      <div className="match-card-part-1">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="match-card-logo"
        />
        <p className="match-card-team-name">{competingTeam}</p>
      </div>
      <div className="match-card-part-2">
        <p className="match-card-result">{result}</p>
        <p className={`match-card-status ${matchStatus}`}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
