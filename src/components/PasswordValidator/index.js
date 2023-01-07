// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  PasswordContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showErrorMsg = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
      </PasswordContainer>
      <PasswordInput
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      {showErrorMsg && (
        <ErrorMsg>Your Password must be at least 8 characters</ErrorMsg>
      )}
    </MainContainer>
  )
}
export default PasswordValidator
