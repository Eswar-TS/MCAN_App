export const ROLES = {
	ADMIN: "admin",
	USER: "user",
	MANAGER: "manager",
};

export const ROLE_PERMISSIONS = {
	[ROLES.ADMIN]: ["create", "read", "update", "delete"],
	[ROLES.USER]: ["read"],
	[ROLES.MANAGER]: ["create", "read", "update"],
};
