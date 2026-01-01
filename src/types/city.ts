export type City = {
  id: number;
  cityName: string;
  country: string;
  emoji: string;
  date: string; // ISO
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
};
