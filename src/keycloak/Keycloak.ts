import Keycloak from "keycloak-js";

export const keycloak = new Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: "naa-lms",
  clientId: "naa-lms",
});

const initKeycloak = (onAuthenticatedCallback: () => void) => {
  keycloak
    .init({
      onLoad: "login-required",
      //   silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
      pkceMethod: "S256",
      redirectUri: process.env.REACT_APP_KEYCLOAK_REDIRECT_URL,
    })
    .then(() => {
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const _kc = { initKeycloak };

export default _kc;
