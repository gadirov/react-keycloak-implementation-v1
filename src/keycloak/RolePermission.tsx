import { hasRole } from "./roles";

const RolePermission: React.FC<any> = ({ roles, children }) =>
  hasRole(roles) ? children : null;

export default RolePermission;
