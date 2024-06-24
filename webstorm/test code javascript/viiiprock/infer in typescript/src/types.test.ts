import { Admin, getPermissionType, SchoolAdmin, User } from "./types";

describe("getPermissionType", () => {
  test('should return "admin" for SchoolAdmin', () => {
    const schoolAdmin: SchoolAdmin = {
      name: "John Doe",
      role: "schoolAdmin",
    };
    expect(getPermissionType(schoolAdmin)).toBe("admin");
  });

  test('should return "normal" for User', () => {
    const regularUser: User = {
      name: "Jane Doe",
    };
    expect(getPermissionType(regularUser)).toBe("normal");
  });

  test('should return "normal" for Admin with different role', () => {
    const admin: Admin = {
      role: "anotherRole",
    };
    expect(getPermissionType(admin)).toBe("normal");
  });
});
