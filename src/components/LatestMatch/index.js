import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="latest-match-top-container">
        <div className="match-result-container">
          <p className="opponent-name">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="opponent-logo"
        />
      </div>
      <div className="latest-match-bottom-container">
        <p className="latest-match-info-label">First Innings</p>
        <p className="latest-match-info-value">{firstInnings}</p>
        <p className="latest-match-info-label">Second Innings</p>
        <p className="latest-match-info-value">{secondInnings}</p>
        <p className="latest-match-mom-label">Man Of The Match</p>
        <p className="latest-match-info-value">{manOfTheMatch}</p>
        <p className="latest-match-info-label">Umpires</p>
        <p className="latest-match-info-value">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
