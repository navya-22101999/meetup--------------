import {Component} from 'react'
import Header from '../Header'

import {
  MainContainer,
  FormAndImageContainer,
  RegisterLogo,
  FormContainer,
  Heading,
  Label,
  Name,
  Select,
  Options,
  RegisterButton,
  ErrorMsg,
} from './styledComponents'
// import ContextValue from '../../context/ContextValue'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    inputName: '',
    topic: '',
    showErrorMsg: false,
  }

  onChangeName = event => {
    this.setState({inputName: event.target.value})
  }

  onChangeOption = event => {
    this.setState({topic: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {inputName} = this.state

    if (inputName !== '') {
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({showErrorMsg: true})
    }
  }

  render() {
    const {inputName, topic, showErrorMsg} = this.state
    console.log(inputName)
    console.log(topic)

    return (
      <>
        <Header />
        <MainContainer>
          <FormAndImageContainer>
            <RegisterLogo
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <FormContainer onSubmit={this.onSubmitForm}>
              <Heading>Let us join</Heading>
              <Label htmlFor="name">Name</Label>
              <Name
                id="name"
                type="text"
                placeholder="Your name"
                onChange={this.onChangeName}
              />
              <Label htmlFor="name">Topics</Label>
              <Select id="options" onChange={this.onChangeOption}>
                {topicsList.map(each => (
                  <Options key={each.id} value={each.id}>
                    {each.displayText}
                  </Options>
                ))}
              </Select>
              <RegisterButton>Register Now</RegisterButton>
              {showErrorMsg ? <ErrorMsg>Please enter your name</ErrorMsg> : ''}
            </FormContainer>
          </FormAndImageContainer>
        </MainContainer>
      </>
    )
  }
}

export default Register
