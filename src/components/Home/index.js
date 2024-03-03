import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {
    teams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await response.json()
    const {teams} = teamsData

    const updatedTeams = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImgUrl: eachTeam.team_image_url,
    }))

    this.setState({teams: updatedTeams, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamCards = () => {
    const {teams} = this.state

    return teams.map(eachTeam => (
      <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
    ))
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-bg-container">
        <div className="logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="dashboard-heading">IPL Dashboard</h1>
        </div>
        <ul className="team-list">
          {isLoading ? this.renderLoader() : this.renderTeamCards()}
        </ul>
      </div>
    )
  }
}

export default Home
