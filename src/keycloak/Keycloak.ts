import Keycloak from "keycloak-js";

export const keycloak = new Keycloak({
  url: "http://localhost:4000/",
  realm: "naa-lms",
  clientId: "naa-lms",
});

const initKeycloak = (onAuthenticatedCallback: () => void) => {
  keycloak
    .init({
      onLoad: "login-required",
      //   silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
      pkceMethod: "S256",
      redirectUri: "http://localhost:3000",
    })
    .then(() => {
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const _kc = { initKeycloak };

export default _kc;
