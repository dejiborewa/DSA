const users = [
  {
    id: 1,
    name: "Alice",
    roles: ["Admin", "Editor"],
  },
  {
    id: 2,
    name: "Bob",
    roles: ["Viewer"],
  },
  {
    id: 3,
    name: "Charlie",
    roles: ["Editor"],
  },
  {
    id: 4,
    name: "David",
    roles: ["Support", "Viewer"],
  },
];

const permissions = [
  { role: "Admin", permission: "create_user" },
  { role: "Admin", permission: "delete_user" },
  { role: "Admin", permission: "edit_post" },
  { role: "Editor", permission: "edit_post" },
  { role: "Editor", permission: "publish_post" },
  { role: "Viewer", permission: "view_post" },
  { role: "Support", permission: "reply_ticket" },
];

/**
 * Build once.
 * role => Set of permissions
 */
const permissionMap = new Map();

for (const { role, permission } of permissions) {
  if (!permissionMap.has(role)) {
    permissionMap.set(role, new Set());
  }

  permissionMap.get(role).add(permission);
}

/**
 * Build once.
 * userId => user
 */
const userMap = new Map();

for (const user of users) {
  userMap.set(user.id, user);
}

function hasPermission(userId, permission) {
  const user = userMap.get(userId);

  if (!user) {
    return false;
  }

  for (const role of user.roles) {
    const permissions = permissionMap.get(role);

    if (permissions?.has(permission)) {
      return true;
    }
  }

  return false;
}

module.exports = {
  hasPermission,
};
