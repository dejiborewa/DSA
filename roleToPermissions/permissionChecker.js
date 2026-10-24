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

const hasPermission = (id, permission) => {
   const currentUser = users.find(user => user.id === id);
   if (!currentUser) return false;

   const permissionsMap = new Map();
   const allPermissionsForUser = []

   // permissionsMap.get(role).push(permission.permission);
   permissions.forEach((permission) => {
      if (permissionsMap.has(permission.role)) {
         const current = permissionsMap.get(permission.role);
         permissionsMap.set(permission.role, [...current, permission.permission])
      } else {
         permissionsMap.set(permission.role, [permission.permission]);
      }
   });

   currentUser.roles.forEach((role) => {
      const permissionsToRole = permissionsMap.get(role);
      allPermissionsForUser.push(...permissionsToRole)
   })

   return allPermissionsForUser.some((allPermissions) => allPermissions === permission)
}

/*
console.log(hasPermission(1, "delete_user")); // true
console.log(hasPermission(1, "publish_post")); // true
console.log(hasPermission(2, "edit_post")); // false
console.log(hasPermission(3, "publish_post")); // true
console.log(hasPermission(4, "view_post")); // true
console.log(hasPermission(4, "delete_user")); // false


*/


module.exports = {
  hasPermission,
};
