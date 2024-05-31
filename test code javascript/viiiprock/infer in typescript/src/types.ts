export interface Admin {
  role: string;
}

export interface User {
  name: string;
}

export interface SchoolAdmin extends Admin {
  name: string;
}

export type PermissionType = SchoolAdmin extends Admin ? "admin" : "normal";

// Function to determine permission type
export function getPermissionType(user: Admin | User): string {
  if ("role" in user && user.role === "schoolAdmin") {
    return "admin";
  }
  return "normal";
}
