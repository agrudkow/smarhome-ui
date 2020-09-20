import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

export function isGoogleLoginResponseOffline(
  response: GoogleLoginResponse | GoogleLoginResponseOffline
): response is GoogleLoginResponseOffline {
  return (response as GoogleLoginResponseOffline).code !== undefined;
}
