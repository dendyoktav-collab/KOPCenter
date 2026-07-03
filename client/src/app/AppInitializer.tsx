import type { PropsWithChildren } from "react";

export default function AppInitializer({
  children,
}: PropsWithChildren) {

  /**
   * Nanti file ini akan menangani:
   *
   * - Restore Session
   * - Refresh Token
   * - Load Profile
   * - Load Permission
   * - Load Company
   * - Load Branch
   * - Load Workspace
   * - Load Sidebar State
   * - Feature Flag
   */

  return <>{children}</>;
}