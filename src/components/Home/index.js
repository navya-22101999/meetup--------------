import {Link} from 'react-router-dom'
import Header from '../Header'

import {
  HomeContainer,
  HomeHeading,
  HomeDescription,
  HomeRegisterButton,
  MeetUp,
} from './styledComponents'

const Home = () => (
  <>
    <Header />
    <HomeContainer>
      <HomeHeading>Welcome to Meetup</HomeHeading>
      <HomeDescription>Please register for the topic</HomeDescription>
      <Link to="/register">
        <HomeRegisterButton type="button">Register</HomeRegisterButton>
      </Link>

      <MeetUp
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png "
        alt="meetup"
      />
    </HomeContainer>
  </>
)

export default Home
