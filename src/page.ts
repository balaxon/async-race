import { Element } from './element';
import { GetData } from './getdata';
import { Car, SmallCar } from './interfaces';
import { RandomCar } from './randomCar';

export class Page {
  private main = document.getElementsByTagName('main')[0];

  private cars = new GetData();

  private el = new Element();

  private numberWins: number[] = [];

  private currentCar: Car[] = [];

  private randomCar = new RandomCar();

  private winnerID = 0;

  constructor() {
    const carsList = this.cars.getCars();
    for (let i = 0; i < 7; i++) {
      carsList.then((cars: Car[]) => {
        cars.forEach((item) => {
          if (item.id === i + 1) {
            this.currentCar.push(item);
          }
        });
      });
    }
  }

  createDefaultPage() {
    this.createHeader();
    this.createMain();
    this.createFooter();
  }

  createHeader() {
    const header = this.el.createElement({ tag: 'header' });
    const h1 = this.el.createElement({ tag: 'h1', content: 'Async Race' });
    const nav = this.el.createElement({ tag: 'nav' });
    const buttonGarage = this.el.createElement({ tag: 'button', id: 'button__garage', content: 'To Garage' });
    const buttonWinners = this.el.createElement({ tag: 'button', id: 'button__winners', content: 'To Winners' });
    nav.append(buttonGarage, buttonWinners);
    header.append(h1, nav);
    document.body.append(header);
  }

  createMain() {
    const main = document.createElement('main');
    document.body.append(main);
    this.createSetting();
    this.createCarsList();
  }

  createSetting() {
    const setting = this.el.createElement({ tag: 'div', id: 'setting' });
    const buttonMenu1 = this.el.createElement({ tag: 'div', classNote: 'button__menu' });
    const inputCreate = this.el.createInput({ type: 'text', id: 'input__create' });
    const inputCreateColor = this.el.createInput({
      type: 'color',
      id: 'input__create__color',
      name: 'color',
      value: '#ffffff',
    });
    const buttonCreate = this.el.createElement({ tag: 'button', id: 'button__create', content: 'CREATE' });
    buttonMenu1.append(inputCreate, inputCreateColor, buttonCreate);
    const buttonMenu2 = this.el.createElement({ tag: 'div', classNote: 'button__menu' });
    const inputUpdate = this.el.createInput({ type: 'text', id: 'input__update', disable: true });
    const inputUpdateColor = this.el.createInput({
      type: 'color',
      id: 'input__update__color',
      name: 'color',
      value: '#ffffff',
      disable: true,
    });
    const buttonUpdate = this.el.createElement({
      tag: 'button',
      id: 'button__update',
      content: 'UPDATE',
      disable: true,
    });
    buttonMenu2.append(inputUpdate, inputUpdateColor, buttonUpdate);
    const buttonMenu3 = this.el.createElement({ tag: 'div', classNote: 'button__menu' });
    const buttonRace = this.el.createElement({ tag: 'button', id: 'race', content: 'RACE' });
    const buttonReset = this.el.createElement({ tag: 'button', id: 'reset', content: 'RESET', disable: true });
    const buttonGenerate = this.el.createElement({ tag: 'button', content: 'GENERATE CARS' });
    buttonMenu3.append(buttonRace, buttonReset, buttonGenerate);
    setting.append(buttonMenu1, buttonMenu2, buttonMenu3);
    document.getElementsByTagName('main')[0].append(setting);

    buttonCreate.addEventListener('click', () => {
      if (inputCreate) {
        if (inputCreate.value.trim() != '') {
          const newCar: SmallCar = {
            name: inputCreate.value,
            color: inputCreateColor.value,
          };
          this.cars.createCar(newCar);
          document.location.reload();
        }
      }
    });

    buttonUpdate.addEventListener('click', () => {
      if (inputUpdate) {
        if (inputUpdate.value.trim() != '') {
          const newCar: SmallCar = {
            name: inputUpdate.value,
            color: inputUpdateColor.value,
          };
          this.cars.updateCar(Number(inputUpdate.textContent), newCar);
          document.location.reload();
        }
      }
    });

    buttonGenerate.addEventListener('click', () => {
      const cars = this.randomCar.randomCars();
      (buttonGenerate as HTMLButtonElement).disabled = true;
      cars.forEach((item) => {
        this.cars.createCar(item);
      });
      setTimeout(() => {
        document.location.reload();
      }, 300);
    });

    buttonRace.addEventListener('click', async () => {
      (buttonRace as HTMLButtonElement).disabled = true;
      this.numberWins = [];
      (buttonReset as HTMLButtonElement).disabled = false;
      this.currentCar.forEach((it) => {
        const bt = document.getElementById(`button__start__${it.id - 1}`);
        if (bt) {
          bt.dispatchEvent(new Event('click'));
          (bt as HTMLButtonElement).disabled = true;
        }
      });
    });

    buttonReset.addEventListener('click', async () => {
      (buttonRace as HTMLButtonElement).disabled = false;
      (buttonReset as HTMLButtonElement).disabled = true;
      this.currentCar.forEach((it) => {
        const bt = document.getElementById(`button__stop__${it.id - 1}`);
        if (bt) {
          bt.dispatchEvent(new Event('click'));
          (bt as HTMLButtonElement).disabled = true;
        }
      });
    });
  }

  createFooter() {
    const footer = this.el.createElement({ tag: 'footer' });
    const contentImage = this.el.createElement({ tag: 'div' });
    const link = this.el.createElement({ tag: 'a' });
    const img = new Image();
    img.src = './assets/images/logo_rs_text.svg';
    const linkGit = this.el.createElement({ tag: 'a', classNote: 'footer__git', content: 'balaxon 2023' });
    (linkGit as HTMLAnchorElement).href = 'https://github.com/balaxon';
    link.append(img);
    contentImage.append(link);
    footer.append(contentImage, linkGit);
    document.body.append(footer);
  }

  createCarsList() {
    const carsList = this.cars.getCars();
    carsList.then((cars) => {
      this.createCarFromData(cars);
    });
    //this.createCarFromData(cars);
  }

  createCarFromData(car: Car[]) {
    const maxPage = Math.ceil(car.length / 7);
    let page = 1;
    const main = document.getElementsByTagName('main')[0];
    const h2 = this.el.createElement({ tag: 'h2', id: 'garage__text', content: `Garage (${car.length})` });
    const p = this.el.createElement({ tag: 'p', id: 'page', content: `Page #${page}` });
    const div = this.el.createElement({ tag: 'div', id: 'card__list' });
    main.append(h2, p, div);

    let counter = 0;
    car.forEach((item, index) => {
      const carCard = this.el.createElement({ tag: 'div', id: 'car__card' });
      const firstDiv = this.el.createElement({ tag: 'div' });
      const btSelect = this.el.createElement({ tag: 'button', content: 'SELECT' });
      const btRemove = this.el.createElement({ tag: 'button', content: 'REMOVE' });
      const span = this.el.createElement({ tag: 'span', content: `${item.name}` });
      const track = this.el.createElement({ tag: 'div', classNote: 'track' });
      const buttonDiv = this.el.createElement({ tag: 'div', id: 'start__stop' });
      const btA = this.el.createElement({
        tag: 'button',
        classNote: 'button__start',
        id: `button__start__${index}`,
        content: 'A',
      });
      const btB = this.el.createElement({
        tag: 'button',
        classNote: 'button__stop',
        id: `button__stop__${index}`,
        content: 'B',
        disable: true,
      });
      buttonDiv.append(btA, btB);
      const svg = this.el.createCarSVG();
      svg.id = `svg__${item.id}`;
      svg.setAttribute('fill', `${item.color}`);
      const image = new Image();
      image.classList.add('finish');
      image.src = 'assets/images/finish.png';
      firstDiv.append(btSelect, btRemove, span);
      track.append(buttonDiv, svg, image);
      carCard.append(firstDiv, track);
      btSelect.addEventListener('click', () => {
        const input = document.getElementById('input__update') as HTMLInputElement;
        if (input) {
          input.value = item.name;
          input.textContent = item.id.toString();
          input.disabled = false;
        }
        const color = document.getElementById('input__update__color') as HTMLInputElement;
        if (color) {
          color.value = item.color;
          color.disabled = false;
        }
        const button = document.getElementById('button__update') as HTMLButtonElement;
        if (button) {
          button.disabled = false;
        }
      });
      btRemove.addEventListener('click', () => {
        this.cars.deleteCar(item.id);
        document.location.reload();
      });

      let request = 0;
      let width = 0;
      let time = 0;
      let startAnimation = 0;
      function drive(times: number) {
        if (startAnimation === 0) {
          startAnimation = times;
        }
        const progress = (times - startAnimation) / time;
        svg.style.marginLeft = `${120 + progress * width}px`;
        if (progress < 1) {
          request = requestAnimationFrame(drive);
        }
      }

      let controller: AbortController;
      btA.addEventListener('click', async () => {
        (btA as HTMLButtonElement).disabled = true;
        const cardlist = document.getElementById('card__list');
        width = 0;
        if (cardlist) {
          width = +cardlist.offsetWidth - 230;
        }
        time = 0;
        await this.cars.startEngine(item.id).then((items) => {
          time = Math.abs(items.distance / items.velocity);
        });
        (btB as HTMLButtonElement).disabled = false;

        startAnimation = 0;
        window.requestAnimationFrame(drive);
        controller = new AbortController();
        await new GetData()
          .drive(item.id, controller.signal)
          .then((items) => {
            cancelAnimationFrame(request);
            const race = document.getElementById('race');
            if (race) {
              if (items.success && (race as HTMLButtonElement).disabled && this.numberWins.length === 0) {
                this.winnerID = item.id;
                this.numberWins.push(item.id);
                new GetData().getCar(item.id).then((it) => {
                  alert(`Winner: ${it.name} time: ${time}`);
                });
              }
            }
          })
          .catch(() => {
          });
      });

      btB.addEventListener('click', async () => {
        (btB as HTMLButtonElement).disabled = true;
        await this.cars.stopEngine(item.id).then(() => {
        });
        svg.style.marginLeft = '120px';
        (btA as HTMLButtonElement).disabled = false;
        cancelAnimationFrame(request);
        controller.abort();
      });
      const cardList = document.getElementById('card__list');
      if (counter > 6) {
        carCard.style.display = 'none';
      }
      if (cardList) {
        cardList.append(carCard);
      }
      counter += 1;
    });
    const previousNext = this.el.createElement({ tag: 'div', id: 'previous__next' });
    const previous = this.el.createElement({ tag: 'button', id: 'previous', content: 'previous' });
    const next = this.el.createElement({ tag: 'button', id: 'next', content: 'next' });
    previousNext.append(previous, next);
    main.append(previousNext);

    next.addEventListener('click', () => {
      const carsList = this.cars.getCars();
      for (let i = page * 7 - 7; i < 7 * page; i++) {
        if (page < maxPage) {
          const track = document.getElementById('card__list');
          if (track) {
            (track.childNodes[i] as HTMLElement).style.display = 'none';
          }
        }
      }
      if (page < maxPage) {
        page += 1;
      }
      for (let i = page * 7 - 7; i < 7 * page; i++) {
        if (i < car.length) {
          const track = document.getElementById('card__list');
          if (track) {
            (track.childNodes[i] as HTMLElement).style.display = 'block';
            this.currentCar = [];
            carsList.then((cars: Car[]) => {
              cars.forEach((item) => {
                if (item.id === i + 1) {
                  this.currentCar.push(item);
                }
              });
            });
          }
        }
      }
      const textPage = document.getElementById('page');
      if (textPage) {
        textPage.textContent = `Page #${page}`;
      }
    });

    previous.addEventListener('click', () => {
      const carsList = this.cars.getCars();
      for (let i = page * 7 - 7; i < 7 * page; i++) {
        if (page > 1) {
          if (i < car.length) {
            const track = document.getElementById('card__list');
            if (track) {
              (track.childNodes[i] as HTMLElement).style.display = 'none';
            }
          }
        }
      }
      if (page > 1) {
        page -= 1;
      }
      for (let i = page * 7 - 7; i < 7 * page; i++) {
        if (i < car.length && page >= 1) {
          const track = document.getElementById('card__list');
          if (track) {
            (track.childNodes[i] as HTMLElement).style.display = 'block';
            this.currentCar = [];
            carsList.then((cars: Car[]) => {
              cars.forEach((item) => {
                if (item.id === i + 1) {
                  this.currentCar.push(item);
                }
              });
            });
          }
        }
      }
      const textPage = document.getElementById('page');
      if (textPage) {
        textPage.textContent = `Page #${page}`;
      }
    });
    //new AbortController().abort();
  }
}
