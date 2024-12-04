export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  label: string;
  showInSidebar: boolean;
  errorElement?: React.ReactNode;
}
