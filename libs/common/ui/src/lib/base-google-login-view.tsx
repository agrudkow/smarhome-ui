import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import OvalBoxContainer from './oval-box-container';
import P from './p';
import { NavLink } from 'react-router-dom';

export interface BaseGoogleLoginViewProps {
  /**Google project client id.*/
  clientId: string;
  /**Callback funcion called on success of login request.*/
  onSuccess?: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  /**Callback funcion called on failure of login request.*/
  onFailure?: (error: unknown) => void;
  /**Navlink route.*/
  navlinkRoute: string;
  /**Main button text.*/
  mainButtonText: string;
  /**Navlink button text.*/
  navlinkText: string;
}

const StyledBaseGoogleLoginView = styled.div`
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

const CustomParagraph = styled(P)`
  color: white;
  text-decoration: underline;
`;

/**
 * BaseGoogleLoginView component displays login box with `Login in with Google` capability.
 *
 * Component displays main button which allow to call GoogleOauth2 API and second button which allow to redirect to different page (eg. sign up/ register).
 *
 * @param props BaseGoogleLoginViewProps
 */
export const BaseGoogleLoginView: FC<BaseGoogleLoginViewProps> = ({
  onSuccess,
  onFailure,
  clientId,
  navlinkRoute,
  navlinkText,
  mainButtonText,
}) => {
  const {
    palette: { secondaryBackground },
  } = useContext(ThemeContext);

  return (
    <StyledBaseGoogleLoginView>
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
              buttonText={mainButtonText}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
            />
          </ButtonContainer>
          <NavLink to={navlinkRoute}>
            <CustomParagraph>{navlinkText}</CustomParagraph>
          </NavLink>
        </SingInForm>
      </OvalBoxContainer>
    </StyledBaseGoogleLoginView>
  );
};

export default BaseGoogleLoginView;
