import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import OvalBoxContainer from './oval-box-container';

export interface GoogleSignInProps {
  clientId: string;
  onSuccess?: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  onFailure?: (error: unknown) => void;
}

const StyledSignIn = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({
    theme: {
      palette: { primaryBackground },
    },
  }) => primaryBackground};
`;

const SingInForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin: 30px;
  padding: 1px;
  border: 2px solid
    ${({
      theme: {
        palette: { primary },
      },
    }) => primary};
  border-radius: ${({
    theme: {
      layout: { borderRadius },
    },
  }) => borderRadius}px;

  & .google-sign-in-button {
    box-shadow: none !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    padding-right: 10px !important;
  }
`;

const Header = styled.div`
  color: ${({ theme }) => theme.palette.primaryBackground};
  white-space: nowrap;
  margin: 30px;
  display: flex;
  justify-content: center;
  font-size: 30px;
  line-height: 30px;
`;

export const GoogleSignIn: FC<GoogleSignInProps> = ({
  onSuccess,
  onFailure,
  clientId,
}) => {
  const {
    palette: { secondaryBackground },
  } = useContext(ThemeContext);

  return (
    <StyledSignIn>
      <OvalBoxContainer
        width={300}
        height={300}
        backgroundColor={secondaryBackground}
      >
        <SingInForm>
          <Header>Smarthome</Header>
          <ButtonContainer>
            <GoogleLogin
              className="google-sign-in-button"
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
            />
          </ButtonContainer>
        </SingInForm>
      </OvalBoxContainer>
    </StyledSignIn>
  );
};

export default GoogleSignIn;
