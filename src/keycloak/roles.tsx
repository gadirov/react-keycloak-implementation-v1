import { keycloak } from "./Keycloak";

export const hasRole = (roles: string[]) => {
  // const userRoles = keycloak.tokenParsed.realm_access.roles;
  // if (roles.some((role) => userRoles.includes(role))) {
  //   return true;
  // }
  const resourceRoles = keycloak?.tokenParsed?.resource_access;
  for (const resource in resourceRoles) {
    const resourceRoleList = resourceRoles[resource]?.roles;
    if (roles.some((role) => resourceRoleList.includes(role))) {
      return true;
    }
  }
  return false;
};
