const { hasPermission } = require("./permissionChecker");

describe("Permission Checker", () => {
  test("Admin can delete users", () => {
    expect(hasPermission(1, "delete_user")).toBe(true);
  });

  test("Admin can publish posts through Editor role", () => {
    expect(hasPermission(1, "publish_post")).toBe(true);
  });

  test("Viewer cannot edit posts", () => {
    expect(hasPermission(2, "edit_post")).toBe(false);
  });

  test("Editor can publish posts", () => {
    expect(hasPermission(3, "publish_post")).toBe(true);
  });

  test("Support can reply to tickets", () => {
    expect(hasPermission(4, "reply_ticket")).toBe(true);
  });

  test("Viewer can view posts", () => {
    expect(hasPermission(4, "view_post")).toBe(true);
  });

  test("Support cannot delete users", () => {
    expect(hasPermission(4, "delete_user")).toBe(false);
  });

  test("Unknown user returns false", () => {
    expect(hasPermission(999, "view_post")).toBe(false);
  });

  test("Unknown permission returns false", () => {
    expect(hasPermission(1, "fly_plane")).toBe(false);
  });

  test("Permission names are case-sensitive", () => {
    expect(hasPermission(1, "Delete_User")).toBe(false);
  });
});
