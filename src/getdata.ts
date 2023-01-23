import { SmallCar } from './interfaces';

enum Links {
  server = 'http://localhost:3000',
  garage = 'http://localhost:3000/garage',
  engine = 'http://localhost:3000/engine',
  winners = 'http://localhost:3000/winners',
}

export class GetData {

  async getCars() {
    return (await fetch(`${Links.garage}`)).json();
  }

  async getCar(id: number) {
    return (await fetch(`${Links.garage}/${id}`)).json();
  }

  async createCar(body: SmallCar) {
    (
      await fetch(`${Links.garage}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async deleteCar(id: number) {
    (await fetch(`${Links.garage}/${id}`, { method: 'DELETE' })).json();
  }

  async updateCar(id: number, body: SmallCar) {
    (
      await fetch(`${Links.garage}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async startEngine(id: number) {
    return (await fetch(`${Links.engine}?id=${id}&status=started`, { method: 'PATCH' })).json();
  }

  async stopEngine(id: number) {
    return (await fetch(`${Links.engine}?id=${id}&status=stopped`, { method: 'PATCH' })).json();
  }

  async drive(id: number, signal: AbortSignal) {
    const res = await fetch(`${Links.engine}?id=${id}&status=drive`, { method: 'PATCH', signal }).catch();
    return res.status !== 200 ? { success: false } : { success: true };
  }

  async stopDrive(id: number) {
    const res = await fetch(`${Links.engine}?id=${id}&status=stopped`, { method: 'PATCH' }).catch();
    return res.status !== 200 ? { success: false } : { ...(await res.json()) };
  }

  getSortOrder() {}

  getWinners() {}

  getWinner() {}

  getWinnerStatus() {}

  deleteWinner() {}

  createWinner() {}

  updateWinner() {}

  saveWinner() {}
}
