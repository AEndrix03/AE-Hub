export interface MenuItem {
  id: number;
  title: string;
  path: string;
  icon?: string;
  children?: MenuItem[];
}
