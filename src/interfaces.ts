export interface car {
  color: string;
  id: number;
  name: string;
}

export interface smallCar {
  color: string;
  name: string;
}

export interface element {
  tag: string;
  id?: string;
  classNote?: string;
  content?: string;
  disable?: boolean;
}

export interface inputElement {
  type: string;
  id?: string;
  classNote?: string;
  value?: string;
  content?: string;
  name?: string;
  disable?: boolean;
}

export interface timeSpeed {
  time: number;
  speed: number;
}