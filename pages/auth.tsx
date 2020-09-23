import React from 'react';
import {
  Button,
  ButtonToolbar,
  Container,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Schema,
} from 'rsuite';
import authApi from '../api/auth';
import TextField from '../component/formElement/textField';

const { StringType } = Schema.Types;
const loginModel = Schema.Model({
  username: StringType().isRequired('Username is required.'),
  password: StringType()
    .minLength(6, 'Password must be at least 6 character long')
    .isRequired('Password is required.'),
});

const Auth: React.FC = () => {
  const onLogin = async () => {
    const result = await authApi.login({
      username: 'ddedd',
      password: 'pass1234',
    });

    console.log(result);
  };

  return (
    <Container>
      <Form model={loginModel} onSubmit={onLogin}>
        <TextField name="username" label="Email" />

        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl name="password" type="password" />
        </FormGroup>

        <FormGroup>
          <ButtonToolbar>
            <Button appearance="primary" type="submit">
              Submit
            </Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Auth;
