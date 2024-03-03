import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImgUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-card-link">
      <li className="team-card-item">
        <img src={teamImgUrl} alt={name} className="team-card-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
