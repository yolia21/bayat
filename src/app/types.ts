export interface LocationMarker {
  id: string;
  title: string;
  subtitle: string;
  lat: number;
  lng: number;
  historicalPeriod: string;
  description: string;
  significance: string;
  branches: string[];
  empires: string[];
  imageUrl?: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  branch: string;
  empire: string;
  locationId?: string;
}

export interface ClanBranch {
  id: string;
  name: string;
  translation: string;
  regions: string[];
  history: string;
  significance: string;
}

export interface FamousFigure {
  id: string;
  name: string;
  century: string;
  role: string;
  locationId: string;
  branch: string;
  quote: string;
  bio: string;
  legacy: string;
}
