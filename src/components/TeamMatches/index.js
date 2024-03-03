import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamMatchesData = await response.json()
    const updatedTeamMatchesData = {
      teamBannerUrl: teamMatchesData.team_banner_url,
      latestMatchDetails: {
        id: teamMatchesData.latest_match_details.id,
        competingTeam: teamMatchesData.latest_match_details.competing_team,
        competingTeamLogo:
          teamMatchesData.latest_match_details.competing_team_logo,
        date: teamMatchesData.latest_match_details.date,
        firstInnings: teamMatchesData.latest_match_details.first_innings,
        manOfTheMatch: teamMatchesData.latest_match_details.man_of_the_match,
        matchStatus: teamMatchesData.latest_match_details.match_status,
        result: teamMatchesData.latest_match_details.result,
        secondInnings: teamMatchesData.latest_match_details.second_innings,
        umpires: teamMatchesData.latest_match_details.umpires,
        venue: teamMatchesData.latest_match_details.venue,
      },
      recentMatches: teamMatchesData.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }

    this.setState({teamData: updatedTeamMatchesData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamMatches = () => {
    const {teamData} = this.state

    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData

    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <p className="latest-matches-text">Latest Matches</p>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="recent-matches-list">
          {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoading} = this.state

    return (
      <div className={`app-team-matches-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
