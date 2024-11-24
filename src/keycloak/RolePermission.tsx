import { hasRole } from "./roles";

const RolePermission: React.FC<any> = ({ roles, children, showNotAllowed }) =>
  hasRole(roles) ? children : showNotAllowed ? <h1>403</h1> : null;

export default RolePermission;
