import { car, smallCar } from "./interfaces";
import { Page } from "./page";

enum links {
  server = 'http://localhost:3000',
  garage = 'http://localhost:3000/garage',
  engine = 'http://localhost:3000/engine',
  winners = 'http://localhost:3000/winners',
}

export class GetData {
  constructor() {
    
  }
  
  async getCars() {

    const arr: car[] = [
      {
        name: 'Tesla',
        color: '#e6e6fa',
        id: 1,
      },
      {
        name: 'BMW',
        color: '#fede00',
        id: 2,
      },
      {
        name: 'Mersedes',
        color: '#6c779f',
        id: 3,
      },
      {
        name: 'Ford',
        color: '#ef3c40',
        id: 4,
      },
    ]

    // const cars = new Page();
    // const aa = (await fetch(`${links.garage}`)).json();
    // aa.then((item) => {
    //   cars.createCarFromData(item);
    //   console.log(item);
    // });
    // const counter = (await (await fetch(`${links.garage}`)).json());
    // console.log(counter.length);
    //return arr;
    return (await fetch(`${links.garage}`)).json();
  }

  async getCar(id: number) {
    // let car: car;
    // console.log(`${links.garage}/${id}`);
    // const aa = (await fetch(`${links.garage}/${id}`)).json();
    // aa.then(async (it) => {
    //   car = it;
    // });
    return (await fetch(`${links.garage}/${id}`)).json()
  }

  async createCar(body: smallCar) {
    (await fetch(`${links.garage}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
    })).json();
  }

  async deleteCar(id: number) {
    (await fetch(`${links.garage}/${id}`, { method: 'DELETE' })).json();
  }

  async updateCar(id: number, body: smallCar) {
    (await fetch(`${links.garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
    })).json();
  }

  async startEngine(id: number) {
    return (await fetch(`${links.engine}?id=${id}&status=started`, { method: 'PATCH' })).json();
  }

  async stopEngine(id: number) {
    return (await fetch(`${links.engine}?id=${id}&status=stopped`, { method: 'PATCH' })).json();
  }

  async drive(id: number, signal: AbortSignal) {
    const res = await fetch(`${links.engine}?id=${id}&status=drive`, { method: 'PATCH', signal }).catch();
    return res.status !== 200 ? { success: false } : { success: true};
  }

  async stopDrive(id: number) {
    const res = await fetch(`${links.engine}?id=${id}&status=stopped`, { method: 'PATCH' }).catch();
    return res.status !== 200 ? { success: false } : { ...(await res.json())};
  }

  getSortOrder() {

  }

  getWinners() {

  }

  getWinner() {

  }

  getWinnerStatus() {

  }

  deleteWinner() {

  }

  createWinner() {

  }

  updateWinner() {

  }

  saveWinner() {

  }
}