import React from 'react'

const ContextValue = React.createContext({
  inputName: '',
  topics: '',
  showErrorMsg: '',
  onChangeName: () => {},
  onChangeOption: () => {},
})

export default ContextValue
