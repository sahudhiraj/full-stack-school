// Universal mock auth function for demo/testing

type Role = "admin" | "teacher" | "student" | "parent";

interface SessionClaims {
  metadata: {
    role: Role;
  };
}

interface AuthResult {
  userId: string;
  sessionClaims: SessionClaims;
}

// Change these values to simulate different users/roles
export function auth(): AuthResult {
  // --- Admin user (matches seed: id "admin1") ---
  // return { userId: "admin1", sessionClaims: { metadata: { role: "admin" } } };

  // --- Teacher user (matches seed: id "teacher1") ---
  // return { userId: "teacher1", sessionClaims: { metadata: { role: "teacher" } } };

  // --- Student user (matches seed: id "student1") ---
  // return { userId: "student1", sessionClaims: { metadata: { role: "student" } } };

  // --- Parent user (matches seed: id "parentId1") ---
  return { userId: "parentId1", sessionClaims: { metadata: { role: "parent" } } };
}