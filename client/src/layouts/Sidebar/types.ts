import type { ReactNode } from "react";

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon: ReactNode;
  path?: string;
  badge?: string | number;
  children?: SidebarMenuItem[];
}

export interface SidebarGroup {
  id: string;
  title: string;
  items: SidebarMenuItem[];
}