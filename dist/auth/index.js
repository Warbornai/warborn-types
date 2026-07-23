"use strict";
/**
 * Authentication, Authorization, Role-Based Access Control (RBAC).
 * @module @warborn/types/auth
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["SUPER_ADMIN"] = "SUPER_ADMIN";
    UserRole["ORG_ADMIN"] = "ORG_ADMIN";
    UserRole["DEVELOPER"] = "DEVELOPER";
    UserRole["MEMBER"] = "MEMBER";
    UserRole["GUEST"] = "GUEST";
})(UserRole || (exports.UserRole = UserRole = {}));
var Permission;
(function (Permission) {
    Permission["MANAGE_ORG"] = "org:manage";
    Permission["MANAGE_AGENTS"] = "agents:manage";
    Permission["EXECUTE_WORKFLOW"] = "workflow:execute";
    Permission["READ_METRICS"] = "metrics:read";
    Permission["WRITE_SETTINGS"] = "settings:write";
    Permission["ACCESS_API"] = "api:access";
})(Permission || (exports.Permission = Permission = {}));
//# sourceMappingURL=index.js.map