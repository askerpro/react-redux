export interface NavSection {
  title: string;
  isActive: boolean;
}

export interface NavState {
  sections: NavSection[];
  active: string;
}
