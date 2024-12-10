export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  label: string;
  sidebar: {
    show: boolean;
    icon?: React.ReactNode;
  };
  errorElement?: React.ReactNode;
}

export type SortDirection = "asc" | "desc";
