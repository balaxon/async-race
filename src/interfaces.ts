export interface Car {
  color: string;
  id: number;
  name: string;
}

export interface SmallCar {
  color: string;
  name: string;
}

export interface ElementInterface {
  tag: string;
  id?: string;
  classNote?: string;
  content?: string;
  disable?: boolean;
}

export interface InputElement {
  type: string;
  id?: string;
  classNote?: string;
  value?: string;
  content?: string;
  name?: string;
  disable?: boolean;
}

export interface TimeSpeed {
  time: number;
  speed: number;
}
