/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/element.ts":
/*!************************!*\
  !*** ./src/element.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Element = void 0;
class Element {
    createElement({ tag, id, classNote, content, disable = false }) {
        const el = document.createElement(tag);
        if (id) {
            el.id = id;
        }
        if (classNote) {
            el.classList.add(classNote);
        }
        if (content) {
            el.textContent = content;
        }
        if (disable) {
            el.disabled = disable;
        }
        return el;
    }
    createInput({ type, id, classNote, value, content, name, disable = false }) {
        const el = document.createElement('input');
        el.type = type;
        el.disabled = disable;
        if (id) {
            el.id = id;
        }
        if (classNote) {
            el.classList.add(classNote);
        }
        if (value) {
            el.value = value;
        }
        if (content) {
            el.textContent = content;
        }
        if (name) {
            el.name = name;
        }
        return el;
    }
    createCarSVG() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        svg.setAttribute('viewBox', '0 0 511 200');
        path1.setAttribute('d', 'M160,307.5h133.538c14.182,0,27.524-7.554,34.82-19.715l14.501-24.169c2.273-3.789,1.045-8.703-2.744-10.976' +
            'c-3.788-2.273-8.702-1.045-10.976,2.744l-14.501,24.169c-4.421,7.369-12.507,11.947-21.101,11.947H160c-4.418,0-8,3.582-8,8' +
            'S155.582,307.5,160,307.5z');
        path2.setAttribute('d', 'M504,323.569V299.5c0-48.523-39.477-88-88-88h-44.209c-12.392-9.747-62.874-48-91.791-48h-54   c-11.001,0-21.904,1.664-32.403,4.945c-0.204,0.063-0.404,0.135-0.602,0.215l-73.691,29.675   c-11.071,3.427-22.56,5.165-34.152,5.165H58.687c-0.379-0.778-0.884-1.51-1.53-2.157l-7.772-7.772   C57.969,189.897,64,181.368,64,171.455V163.5c0-4.418-3.582-8-8-8H8c-4.418,0-8,3.582-8,8v7.955   C0,184.713,10.787,195.5,24.045,195.5h4.642l8,8h-6.685C17.87,203.5,8,213.37,8,225.502V291.5c0,18.508,13.298,34.094,33.88,39.714   C51.989,345.87,68.888,355.5,88,355.5c15.22,0,29.034-6.112,39.138-16h249.723c10.104,9.888,23.918,16,39.138,16   s29.034-6.112,39.138-16H503c4.418,0,8-3.582,8-8C511,327.421,507.945,324.062,504,323.569z M16,171.5h32   c-0.024,4.416-3.624,8-8.045,8h-15.91C19.624,179.5,16.024,175.916,16,171.5z M356.287,219.763   c-3.571,2.505-6.227,5.165-8.059,7.339l-150.98-14.465C204.31,199.968,218.975,179.5,240,179.5h40   C298.891,179.5,336.321,204.724,356.287,219.763z M24,291.5v-65.998c0-3.31,2.692-6.002,6.002-6.002h55.15   c13.317,0,26.514-2.014,39.225-5.986c0.204-0.063,0.404-0.135,0.602-0.215l73.433-29.571c-1.999,2.142-3.953,4.431-5.85,6.899   c-9.799,12.756-14.805,25.43-15.014,25.963c-0.913,2.336-0.677,4.965,0.638,7.102c1.314,2.136,3.554,3.533,6.051,3.772l167,16   c0.28,0.027,0.559,0.041,0.835,0.041c2.931,0,5.573-1.5,6.942-4.153c0.559-0.939,7.435-11.851,24.986-11.851h32   c39.701,0,72,32.299,72,72v24h-21.414c3.467-7.279,5.414-15.415,5.414-24c0-30.878-25.122-56-56-56s-56,25.122-56,56   c0,8.585,1.947,16.721,5.414,24H138.586c3.467-7.279,5.414-15.415,5.414-24c0-30.878-25.122-56-56-56s-56,25.122-56,56   c0,3.313,0.306,6.554,0.86,9.711C27.217,304.609,24,298.428,24,291.5z M48,299.5c0-22.056,17.944-40,40-40s40,17.944,40,40   s-17.944,40-40,40S48,321.556,48,299.5z M416,339.5c-22.056,0-40-17.944-40-40s17.944-40,40-40s40,17.944,40,40   S438.056,339.5,416,339.5z');
        path3.setAttribute('d', 'M112,291.5c-4.418,0-8,3.582-8,8c0,8.822-7.178,16-16,16s-16-7.178-16-16s7.178-16,16-16c4.418,0,8-3.582,8-8s-3.582-8-8-8   c-17.645,0-32,14.355-32,32s14.355,32,32,32s32-14.355,32-32C120,295.082,116.418,291.5,112,291.5z');
        path4.setAttribute('d', 'M440,291.5c-4.418,0-8,3.582-8,8c0,8.822-7.178,16-16,16s-16-7.178-16-16s7.178-16,16-16c4.418,0,8-3.582,8-8s-3.582-8-8-8   c-17.645,0-32,14.355-32,32s14.355,32,32,32s32-14.355,32-32C448,295.082,444.418,291.5,440,291.5z');
        svg.append(path1, path2, path3, path4);
        return svg;
    }
}
exports.Element = Element;


/***/ }),

/***/ "./src/getdata.ts":
/*!************************!*\
  !*** ./src/getdata.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetData = void 0;
var Links;
(function (Links) {
    Links["server"] = "http://localhost:3000";
    Links["garage"] = "http://localhost:3000/garage";
    Links["engine"] = "http://localhost:3000/engine";
    Links["winners"] = "http://localhost:3000/winners";
})(Links || (Links = {}));
class GetData {
    async getCars() {
        return (await fetch(`${Links.garage}`)).json();
    }
    async getCar(id) {
        return (await fetch(`${Links.garage}/${id}`)).json();
    }
    async createCar(body) {
        (await fetch(`${Links.garage}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();
    }
    async deleteCar(id) {
        (await fetch(`${Links.garage}/${id}`, { method: 'DELETE' })).json();
    }
    async updateCar(id, body) {
        (await fetch(`${Links.garage}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();
    }
    async startEngine(id) {
        return (await fetch(`${Links.engine}?id=${id}&status=started`, { method: 'PATCH' })).json();
    }
    async stopEngine(id) {
        return (await fetch(`${Links.engine}?id=${id}&status=stopped`, { method: 'PATCH' })).json();
    }
    async drive(id, signal) {
        const res = await fetch(`${Links.engine}?id=${id}&status=drive`, { method: 'PATCH', signal }).catch();
        return res.status !== 200 ? { success: false } : { success: true };
    }
    async stopDrive(id) {
        const res = await fetch(`${Links.engine}?id=${id}&status=stopped`, { method: 'PATCH' }).catch();
        return res.status !== 200 ? { success: false } : { ...(await res.json()) };
    }
    getSortOrder() { }
    getWinners() { }
    getWinner() { }
    getWinnerStatus() { }
    deleteWinner() { }
    createWinner() { }
    updateWinner() { }
    saveWinner() { }
}
exports.GetData = GetData;


/***/ }),

/***/ "./src/page.ts":
/*!*********************!*\
  !*** ./src/page.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Page = void 0;
const element_1 = __webpack_require__(/*! ./element */ "./src/element.ts");
const getdata_1 = __webpack_require__(/*! ./getdata */ "./src/getdata.ts");
const randomCar_1 = __webpack_require__(/*! ./randomCar */ "./src/randomCar.ts");
class Page {
    constructor() {
        this.main = document.getElementsByTagName('main')[0];
        this.cars = new getdata_1.GetData();
        this.el = new element_1.Element();
        this.numberWins = [];
        this.currentCar = [];
        this.randomCar = new randomCar_1.RandomCar();
        this.winnerID = 0;
        const carsList = this.cars.getCars();
        for (let i = 0; i < 7; i++) {
            carsList.then((cars) => {
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
                    const newCar = {
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
                    const newCar = {
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
            buttonGenerate.disabled = true;
            cars.forEach((item) => {
                this.cars.createCar(item);
            });
            setTimeout(() => {
                document.location.reload();
            }, 300);
        });
        buttonRace.addEventListener('click', async () => {
            buttonRace.disabled = true;
            this.numberWins = [];
            buttonReset.disabled = false;
            this.currentCar.forEach((it) => {
                const bt = document.getElementById(`button__start__${it.id - 1}`);
                if (bt) {
                    bt.dispatchEvent(new Event('click'));
                    bt.disabled = true;
                }
            });
        });
        buttonReset.addEventListener('click', async () => {
            buttonRace.disabled = false;
            buttonReset.disabled = true;
            this.currentCar.forEach((it) => {
                const bt = document.getElementById(`button__stop__${it.id - 1}`);
                if (bt) {
                    bt.dispatchEvent(new Event('click'));
                    bt.disabled = true;
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
        linkGit.href = 'https://github.com/balaxon';
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
    createCarFromData(car) {
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
                const input = document.getElementById('input__update');
                if (input) {
                    input.value = item.name;
                    input.textContent = item.id.toString();
                    input.disabled = false;
                }
                const color = document.getElementById('input__update__color');
                if (color) {
                    color.value = item.color;
                    color.disabled = false;
                }
                const button = document.getElementById('button__update');
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
            function drive(times) {
                if (startAnimation === 0) {
                    startAnimation = times;
                }
                const progress = (times - startAnimation) / time;
                svg.style.marginLeft = `${120 + progress * width}px`;
                if (progress < 1) {
                    request = requestAnimationFrame(drive);
                }
            }
            let controller;
            btA.addEventListener('click', async () => {
                btA.disabled = true;
                const cardlist = document.getElementById('card__list');
                width = 0;
                if (cardlist) {
                    width = +cardlist.offsetWidth - 230;
                }
                time = 0;
                await this.cars.startEngine(item.id).then((items) => {
                    time = Math.abs(items.distance / items.velocity);
                });
                btB.disabled = false;
                startAnimation = 0;
                window.requestAnimationFrame(drive);
                controller = new AbortController();
                await new getdata_1.GetData()
                    .drive(item.id, controller.signal)
                    .then((items) => {
                    cancelAnimationFrame(request);
                    const race = document.getElementById('race');
                    if (race) {
                        if (items.success && race.disabled && this.numberWins.length === 0) {
                            this.winnerID = item.id;
                            this.numberWins.push(item.id);
                            new getdata_1.GetData().getCar(item.id).then((it) => {
                                alert(`Winner: ${it.name} time: ${time}`);
                            });
                        }
                    }
                })
                    .catch(() => {
                });
            });
            btB.addEventListener('click', async () => {
                btB.disabled = true;
                await this.cars.stopEngine(item.id).then(() => {
                });
                svg.style.marginLeft = '120px';
                btA.disabled = false;
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
                        track.childNodes[i].style.display = 'none';
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
                        track.childNodes[i].style.display = 'block';
                        this.currentCar = [];
                        carsList.then((cars) => {
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
                            track.childNodes[i].style.display = 'none';
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
                        track.childNodes[i].style.display = 'block';
                        this.currentCar = [];
                        carsList.then((cars) => {
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
exports.Page = Page;


/***/ }),

/***/ "./src/randomCar.ts":
/*!**************************!*\
  !*** ./src/randomCar.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RandomCar = void 0;
class RandomCar {
    randomName() {
        const cars = [
            'Audi A1',
            'Audi R8',
            'Alfa Romeo Brera',
            'Alfa Romeo GT',
            'Audi A2',
            'Alfa Romeo 156',
            'Audi A3',
            'Audi A4',
            'Alfa Romeo 155',
            'BYD Tang',
            'BMW i8',
            'BMW i3',
            'BYD Qin',
            'BYD e6',
            'BYD F3DM',
            'Bugatti Veyron',
            'BMW X5',
            'BMW Z8',
            'Bugatti EB110',
            'Chrysler Aspen Hybrid',
            'Cadillac ELR',
            'Chevrolet Volt',
            'Chevrolet Cruze',
            'Chrysler Town & Country',
            'Daihatsu Copen',
            'De Tomaso Guarà',
            'Dodge Viper',
            'Dodge Stealth',
            'Dodge Aries/Plymouth Reliant',
            'DMC DeLorean',
            'De Tomaso Longchamp',
            'Ferrari 328',
            'Ferrari F40',
            'Ferrari 348',
            'Ferrari 456',
            'Ferrari 333 SP',
            'Ferrari F355',
            'Ferrari F50',
            'Ferrari 550 Maranello',
            'Ferrari 575M Maranello',
            'Ferrari 360',
            'Enzo Ferrari',
            'Ferrari F430',
            'Ferrari 458',
            'Ferrari FF',
            'LaFerrari',
            'Fisker Karma',
            'Ford Fiesta',
            'Ford Fiesta',
            'Ford Focus',
            'Ford Granada (North America)',
            'Ford GT',
            'Ford LTD',
            'Ford Model A',
            'Ford Model T',
            'Ford Mustang',
            'Ford Puma',
            'Ford Ranchero',
            'Ford Ranger',
            'Jaguar XJ',
            'Jaguar XJS',
            'Jaguar XJR-15',
            'Jaguar XJ220',
            'Jaguar XK',
            'Jaguar X-Type',
            'Jaguar XF',
            'Lamborghini Diablo',
            'Lamborghini Espada',
            'Lamborghini Gallardo',
            'Lamborghini Huracán',
            'Lamborghini Islero',
            'Lamborghini Urus',
            'Land Rover Discovery Sport',
            'Land Rover Range Rover',
            'Range Rover Evoque',
            'Range Rover Sport',
            'McLaren P1',
            'McLaren 12C',
            'Maserati MC12',
            'Maserati GranTurismo',
            'Maybach 57 and 62',
            'Mercury Marauder',
            'Mercury Mariner',
            'Mercury Milan',
            'Mercury Monterey (minivan)',
            'Porsche 911',
            'Porsche 959',
            'Porsche 968',
            'Porsche Boxster',
            'Porsche Cayenne',
            'Porsche Carrera GT',
            'Porsche Panamera',
            'Porsche 918',
            'Porsche Macan',
            'Renault Twingo',
            'Renault Twizy',
            'Renault Zoe',
            'Toyota Prius',
            'Toyota RAV4',
            'Lada',
        ];
        const random = Math.floor(Math.random() * 101);
        return cars[random];
    }
    randomColor() {
        return Math.floor(Math.random() * 16777215).toString(16);
    }
    randomCars() {
        const cars = [];
        for (let i = 0; i < 100; i++) {
            const newCar = {
                name: this.randomName(),
                color: `#${this.randomColor()}`,
            };
            cars.push(newCar);
        }
        return cars;
    }
}
exports.RandomCar = RandomCar;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./style.css */ "./src/style.css");
const page_1 = __webpack_require__(/*! ./page */ "./src/page.ts");
new page_1.Page().createDefaultPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NDcwZWEzZmU5YTRhNjUwYWQ0NC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0VBLE1BQWEsT0FBTztJQUNsQixhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxHQUFHLEtBQUssRUFBb0I7UUFDOUUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLEVBQUUsRUFBRTtZQUNOLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFDRCxJQUFJLFNBQVMsRUFBRTtZQUNiLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxFQUFFLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztTQUMxQjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1YsRUFBd0IsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxHQUFHLEtBQUssRUFBZ0I7UUFDdEYsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNmLEVBQUUsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFO1lBQ04sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDWjtRQUNELElBQUksU0FBUyxFQUFFO1lBQ2IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLEtBQUssRUFBRTtZQUNULEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxFQUFFLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztTQUMxQjtRQUNELElBQUksSUFBSSxFQUFFO1lBQ1IsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDaEI7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxZQUFZO1FBQ1YsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdFLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0UsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdFLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxZQUFZLENBQ2hCLEdBQUcsRUFDSCwwR0FBMEc7WUFDeEcseUhBQXlIO1lBQ3pILDJCQUEyQixDQUM5QixDQUFDO1FBQ0YsS0FBSyxDQUFDLFlBQVksQ0FDaEIsR0FBRyxFQUNILHUwREFBdTBELENBQ3gwRCxDQUFDO1FBQ0YsS0FBSyxDQUFDLFlBQVksQ0FDaEIsR0FBRyxFQUNILDBOQUEwTixDQUMzTixDQUFDO1FBQ0YsS0FBSyxDQUFDLFlBQVksQ0FDaEIsR0FBRyxFQUNILDBOQUEwTixDQUMzTixDQUFDO1FBQ0YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRjtBQXBFRCwwQkFvRUM7Ozs7Ozs7Ozs7Ozs7O0FDcEVELElBQUssS0FLSjtBQUxELFdBQUssS0FBSztJQUNSLHlDQUFnQztJQUNoQyxnREFBdUM7SUFDdkMsZ0RBQXVDO0lBQ3ZDLGtEQUF5QztBQUMzQyxDQUFDLEVBTEksS0FBSyxLQUFMLEtBQUssUUFLVDtBQUVELE1BQWEsT0FBTztJQUVsQixLQUFLLENBQUMsT0FBTztRQUNYLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBVTtRQUNyQixPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFjO1FBQzVCLENBQ0UsTUFBTSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDN0IsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7U0FDRixDQUFDLENBQ0gsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFRCxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQVU7UUFDeEIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RFLENBQUM7SUFFRCxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQVUsRUFBRSxJQUFjO1FBQ3hDLENBQ0UsTUFBTSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQ25DLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzFCLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1NBQ0YsQ0FBQyxDQUNILENBQUMsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFVO1FBQzFCLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUYsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBVTtRQUN6QixPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlGLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVUsRUFBRSxNQUFtQjtRQUN6QyxNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLE9BQU8sRUFBRSxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEcsT0FBTyxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3JFLENBQUM7SUFFRCxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQVU7UUFDeEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRyxPQUFPLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzdFLENBQUM7SUFFRCxZQUFZLEtBQUksQ0FBQztJQUVqQixVQUFVLEtBQUksQ0FBQztJQUVmLFNBQVMsS0FBSSxDQUFDO0lBRWQsZUFBZSxLQUFJLENBQUM7SUFFcEIsWUFBWSxLQUFJLENBQUM7SUFFakIsWUFBWSxLQUFJLENBQUM7SUFFakIsWUFBWSxLQUFJLENBQUM7SUFFakIsVUFBVSxLQUFJLENBQUM7Q0FDaEI7QUF2RUQsMEJBdUVDOzs7Ozs7Ozs7Ozs7OztBQ2hGRCwyRUFBb0M7QUFDcEMsMkVBQW9DO0FBRXBDLGlGQUF3QztBQUV4QyxNQUFhLElBQUk7SUFlZjtRQWRRLFNBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEQsU0FBSSxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBRXJCLE9BQUUsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUVuQixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBRTFCLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFFdkIsY0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBRTVCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFHbkIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFXLEVBQUUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUNwQixJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzVCO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbEQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMxRyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzdHLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxVQUFVO1FBQ1IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxhQUFhO1FBQ1gsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNyRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDL0UsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUMzQyxJQUFJLEVBQUUsT0FBTztZQUNiLEVBQUUsRUFBRSxzQkFBc0I7WUFDMUIsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsU0FBUztTQUNqQixDQUFDLENBQUM7UUFDSCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZHLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNyRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5RixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQzNDLElBQUksRUFBRSxPQUFPO1lBQ2IsRUFBRSxFQUFFLHNCQUFzQjtZQUMxQixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDekMsR0FBRyxFQUFFLFFBQVE7WUFDYixFQUFFLEVBQUUsZ0JBQWdCO1lBQ3BCLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDaEUsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3pGLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDM0csTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQzFGLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdEQsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV6RCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUMxQyxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO29CQUNsQyxNQUFNLE1BQU0sR0FBYTt3QkFDdkIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLO3dCQUN2QixLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSztxQkFDOUIsQ0FBQztvQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDNUIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDNUI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDMUMsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtvQkFDbEMsTUFBTSxNQUFNLEdBQWE7d0JBQ3ZCLElBQUksRUFBRSxXQUFXLENBQUMsS0FBSzt3QkFDdkIsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUs7cUJBQzlCLENBQUM7b0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDN0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDNUI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDNUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN4QyxjQUFvQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNILFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDN0MsVUFBZ0MsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLFdBQWlDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO2dCQUM3QixNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksRUFBRSxFQUFFO29CQUNOLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsRUFBd0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2lCQUMzQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzlDLFVBQWdDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNsRCxXQUFpQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRSxJQUFJLEVBQUUsRUFBRTtvQkFDTixFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLEVBQXdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDM0M7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDM0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNqRCxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsa0NBQWtDLENBQUM7UUFDN0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDdEcsT0FBNkIsQ0FBQyxJQUFJLEdBQUcsNEJBQTRCLENBQUM7UUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxjQUFjO1FBQ1osTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsK0JBQStCO0lBQ2pDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxHQUFVO1FBQzFCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLFdBQVcsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2RyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEYsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV4QixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMxQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDdkUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN2RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDN0UsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN4RSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDM0UsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQ2hDLEdBQUcsRUFBRSxRQUFRO2dCQUNiLFNBQVMsRUFBRSxlQUFlO2dCQUMxQixFQUFFLEVBQUUsa0JBQWtCLEtBQUssRUFBRTtnQkFDN0IsT0FBTyxFQUFFLEdBQUc7YUFDYixDQUFDLENBQUM7WUFDSCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDaEMsR0FBRyxFQUFFLFFBQVE7Z0JBQ2IsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLEVBQUUsRUFBRSxpQkFBaUIsS0FBSyxFQUFFO2dCQUM1QixPQUFPLEVBQUUsR0FBRztnQkFDWixPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztZQUNILFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkMsR0FBRyxDQUFDLEVBQUUsR0FBRyxRQUFRLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQixHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLEdBQUcsR0FBRywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUN0QyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBcUIsQ0FBQztnQkFDM0UsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUN4QixLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3ZDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUN4QjtnQkFDRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFxQixDQUFDO2dCQUNsRixJQUFJLEtBQUssRUFBRTtvQkFDVCxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQ3pCLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUN4QjtnQkFDRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFzQixDQUFDO2dCQUM5RSxJQUFJLE1BQU0sRUFBRTtvQkFDVixNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztpQkFDekI7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzdCLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLFNBQVMsS0FBSyxDQUFDLEtBQWE7Z0JBQzFCLElBQUksY0FBYyxLQUFLLENBQUMsRUFBRTtvQkFDeEIsY0FBYyxHQUFHLEtBQUssQ0FBQztpQkFDeEI7Z0JBQ0QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNqRCxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsR0FBRyxRQUFRLEdBQUcsS0FBSyxJQUFJLENBQUM7Z0JBQ3JELElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtvQkFDaEIsT0FBTyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN4QztZQUNILENBQUM7WUFFRCxJQUFJLFVBQTJCLENBQUM7WUFDaEMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtnQkFDdEMsR0FBeUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUMzQyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2RCxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNWLElBQUksUUFBUSxFQUFFO29CQUNaLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO2lCQUNyQztnQkFDRCxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNULE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUNsRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0YsR0FBeUIsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUU1QyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLFVBQVUsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLElBQUksaUJBQU8sRUFBRTtxQkFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQztxQkFDakMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2Qsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzlCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzdDLElBQUksSUFBSSxFQUFFO3dCQUNSLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSyxJQUEwQixDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7NEJBQ3pGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQzs0QkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUM5QixJQUFJLGlCQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO2dDQUN4QyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxVQUFVLElBQUksRUFBRSxDQUFDLENBQUM7NEJBQzVDLENBQUMsQ0FBQyxDQUFDO3lCQUNKO3FCQUNGO2dCQUNILENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNaLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFFSCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO2dCQUN0QyxHQUF5QixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQzNDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQzlDLENBQUMsQ0FBQyxDQUFDO2dCQUNILEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztnQkFDOUIsR0FBeUIsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUM1QyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2RCxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2FBQ2hDO1lBQ0QsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtZQUNELE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQy9GLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDbEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxJQUFJLElBQUksR0FBRyxPQUFPLEVBQUU7b0JBQ2xCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3BELElBQUksS0FBSyxFQUFFO3dCQUNSLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO3FCQUM3RDtpQkFDRjthQUNGO1lBQ0QsSUFBSSxJQUFJLEdBQUcsT0FBTyxFQUFFO2dCQUNsQixJQUFJLElBQUksQ0FBQyxDQUFDO2FBQ1g7WUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO29CQUNsQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNwRCxJQUFJLEtBQUssRUFBRTt3QkFDUixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzt3QkFDN0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7d0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFXLEVBQUUsRUFBRTs0QkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dDQUNwQixJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtvQ0FDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUNBQzVCOzRCQUNILENBQUMsQ0FBQyxDQUFDO3dCQUNMLENBQUMsQ0FBQyxDQUFDO3FCQUNKO2lCQUNGO2FBQ0Y7WUFDRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELElBQUksUUFBUSxFQUFFO2dCQUNaLFFBQVEsQ0FBQyxXQUFXLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQzthQUN4QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7b0JBQ1osSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRTt3QkFDbEIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDcEQsSUFBSSxLQUFLLEVBQUU7NEJBQ1IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7eUJBQzdEO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7Z0JBQ1osSUFBSSxJQUFJLENBQUMsQ0FBQzthQUNYO1lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO29CQUMvQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNwRCxJQUFJLEtBQUssRUFBRTt3QkFDUixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzt3QkFDN0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7d0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFXLEVBQUUsRUFBRTs0QkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dDQUNwQixJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtvQ0FDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUNBQzVCOzRCQUNILENBQUMsQ0FBQyxDQUFDO3dCQUNMLENBQUMsQ0FBQyxDQUFDO3FCQUNKO2lCQUNGO2FBQ0Y7WUFDRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELElBQUksUUFBUSxFQUFFO2dCQUNaLFFBQVEsQ0FBQyxXQUFXLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQzthQUN4QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsZ0NBQWdDO0lBQ2xDLENBQUM7Q0FDRjtBQWhZRCxvQkFnWUM7Ozs7Ozs7Ozs7Ozs7O0FDbllELE1BQWEsU0FBUztJQUVwQixVQUFVO1FBQ1IsTUFBTSxJQUFJLEdBQWE7WUFDckIsU0FBUztZQUNULFNBQVM7WUFDVCxrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLFNBQVM7WUFDVCxnQkFBZ0I7WUFDaEIsU0FBUztZQUNULFNBQVM7WUFDVCxnQkFBZ0I7WUFDaEIsVUFBVTtZQUNWLFFBQVE7WUFDUixRQUFRO1lBQ1IsU0FBUztZQUNULFFBQVE7WUFDUixVQUFVO1lBQ1YsZ0JBQWdCO1lBQ2hCLFFBQVE7WUFDUixRQUFRO1lBQ1IsZUFBZTtZQUNmLHVCQUF1QjtZQUN2QixjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQix5QkFBeUI7WUFDekIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsZUFBZTtZQUNmLDhCQUE4QjtZQUM5QixjQUFjO1lBQ2QscUJBQXFCO1lBQ3JCLGFBQWE7WUFDYixhQUFhO1lBQ2IsYUFBYTtZQUNiLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLGFBQWE7WUFDYixjQUFjO1lBQ2QsY0FBYztZQUNkLGFBQWE7WUFDYixZQUFZO1lBQ1osV0FBVztZQUNYLGNBQWM7WUFDZCxhQUFhO1lBQ2IsYUFBYTtZQUNiLFlBQVk7WUFDWiw4QkFBOEI7WUFDOUIsU0FBUztZQUNULFVBQVU7WUFDVixjQUFjO1lBQ2QsY0FBYztZQUNkLGNBQWM7WUFDZCxXQUFXO1lBQ1gsZUFBZTtZQUNmLGFBQWE7WUFDYixXQUFXO1lBQ1gsWUFBWTtZQUNaLGVBQWU7WUFDZixjQUFjO1lBQ2QsV0FBVztZQUNYLGVBQWU7WUFDZixXQUFXO1lBQ1gsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsNEJBQTRCO1lBQzVCLHdCQUF3QjtZQUN4QixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixhQUFhO1lBQ2IsZUFBZTtZQUNmLHNCQUFzQjtZQUN0QixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YsNEJBQTRCO1lBQzVCLGFBQWE7WUFDYixhQUFhO1lBQ2IsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsYUFBYTtZQUNiLGNBQWM7WUFDZCxhQUFhO1lBQ2IsTUFBTTtTQUNQLENBQUM7UUFDRixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMvQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxVQUFVO1FBQ1IsTUFBTSxJQUFJLEdBQWUsRUFBRSxDQUFDO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsTUFBTSxNQUFNLEdBQWE7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN2QixLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7YUFDaEMsQ0FBQztZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQTVIRCw4QkE0SEM7Ozs7Ozs7VUM5SEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsMERBQXFCO0FBQ3JCLGtFQUE4QjtBQUU5QixJQUFJLFdBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2dldGRhdGEudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3BhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3JhbmRvbUNhci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IEVsZW1lbnRJbnRlcmZhY2UsIElucHV0RWxlbWVudCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50IHtcbiAgY3JlYXRlRWxlbWVudCh7IHRhZywgaWQsIGNsYXNzTm90ZSwgY29udGVudCwgZGlzYWJsZSA9IGZhbHNlIH06IEVsZW1lbnRJbnRlcmZhY2UpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGVsLmlkID0gaWQ7XG4gICAgfVxuICAgIGlmIChjbGFzc05vdGUpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOb3RlKTtcbiAgICB9XG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGVsLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICB9XG4gICAgaWYgKGRpc2FibGUpIHtcbiAgICAgIChlbCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBkaXNhYmxlO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBjcmVhdGVJbnB1dCh7IHR5cGUsIGlkLCBjbGFzc05vdGUsIHZhbHVlLCBjb250ZW50LCBuYW1lLCBkaXNhYmxlID0gZmFsc2UgfTogSW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVsLnR5cGUgPSB0eXBlO1xuICAgIGVsLmRpc2FibGVkID0gZGlzYWJsZTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGVsLmlkID0gaWQ7XG4gICAgfVxuICAgIGlmIChjbGFzc05vdGUpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOb3RlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgZWwudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIH1cbiAgICBpZiAobmFtZSkge1xuICAgICAgZWwubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGNyZWF0ZUNhclNWRygpIHtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IHBhdGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgY29uc3QgcGF0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICBjb25zdCBwYXRoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIGNvbnN0IHBhdGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgNTExIDIwMCcpO1xuICAgIHBhdGgxLnNldEF0dHJpYnV0ZShcbiAgICAgICdkJyxcbiAgICAgICdNMTYwLDMwNy41aDEzMy41MzhjMTQuMTgyLDAsMjcuNTI0LTcuNTU0LDM0LjgyLTE5LjcxNWwxNC41MDEtMjQuMTY5YzIuMjczLTMuNzg5LDEuMDQ1LTguNzAzLTIuNzQ0LTEwLjk3NicgK1xuICAgICAgICAnYy0zLjc4OC0yLjI3My04LjcwMi0xLjA0NS0xMC45NzYsMi43NDRsLTE0LjUwMSwyNC4xNjljLTQuNDIxLDcuMzY5LTEyLjUwNywxMS45NDctMjEuMTAxLDExLjk0N0gxNjBjLTQuNDE4LDAtOCwzLjU4Mi04LDgnICtcbiAgICAgICAgJ1MxNTUuNTgyLDMwNy41LDE2MCwzMDcuNXonLFxuICAgICk7XG4gICAgcGF0aDIuc2V0QXR0cmlidXRlKFxuICAgICAgJ2QnLFxuICAgICAgJ001MDQsMzIzLjU2OVYyOTkuNWMwLTQ4LjUyMy0zOS40NzctODgtODgtODhoLTQ0LjIwOWMtMTIuMzkyLTkuNzQ3LTYyLjg3NC00OC05MS43OTEtNDhoLTU0ICAgYy0xMS4wMDEsMC0yMS45MDQsMS42NjQtMzIuNDAzLDQuOTQ1Yy0wLjIwNCwwLjA2My0wLjQwNCwwLjEzNS0wLjYwMiwwLjIxNWwtNzMuNjkxLDI5LjY3NSAgIGMtMTEuMDcxLDMuNDI3LTIyLjU2LDUuMTY1LTM0LjE1Miw1LjE2NUg1OC42ODdjLTAuMzc5LTAuNzc4LTAuODg0LTEuNTEtMS41My0yLjE1N2wtNy43NzItNy43NzIgICBDNTcuOTY5LDE4OS44OTcsNjQsMTgxLjM2OCw2NCwxNzEuNDU1VjE2My41YzAtNC40MTgtMy41ODItOC04LThIOGMtNC40MTgsMC04LDMuNTgyLTgsOHY3Ljk1NSAgIEMwLDE4NC43MTMsMTAuNzg3LDE5NS41LDI0LjA0NSwxOTUuNWg0LjY0Mmw4LDhoLTYuNjg1QzE3Ljg3LDIwMy41LDgsMjEzLjM3LDgsMjI1LjUwMlYyOTEuNWMwLDE4LjUwOCwxMy4yOTgsMzQuMDk0LDMzLjg4LDM5LjcxNCAgIEM1MS45ODksMzQ1Ljg3LDY4Ljg4OCwzNTUuNSw4OCwzNTUuNWMxNS4yMiwwLDI5LjAzNC02LjExMiwzOS4xMzgtMTZoMjQ5LjcyM2MxMC4xMDQsOS44ODgsMjMuOTE4LDE2LDM5LjEzOCwxNiAgIHMyOS4wMzQtNi4xMTIsMzkuMTM4LTE2SDUwM2M0LjQxOCwwLDgtMy41ODIsOC04QzUxMSwzMjcuNDIxLDUwNy45NDUsMzI0LjA2Miw1MDQsMzIzLjU2OXogTTE2LDE3MS41aDMyICAgYy0wLjAyNCw0LjQxNi0zLjYyNCw4LTguMDQ1LDhoLTE1LjkxQzE5LjYyNCwxNzkuNSwxNi4wMjQsMTc1LjkxNiwxNiwxNzEuNXogTTM1Ni4yODcsMjE5Ljc2MyAgIGMtMy41NzEsMi41MDUtNi4yMjcsNS4xNjUtOC4wNTksNy4zMzlsLTE1MC45OC0xNC40NjVDMjA0LjMxLDE5OS45NjgsMjE4Ljk3NSwxNzkuNSwyNDAsMTc5LjVoNDAgICBDMjk4Ljg5MSwxNzkuNSwzMzYuMzIxLDIwNC43MjQsMzU2LjI4NywyMTkuNzYzeiBNMjQsMjkxLjV2LTY1Ljk5OGMwLTMuMzEsMi42OTItNi4wMDIsNi4wMDItNi4wMDJoNTUuMTUgICBjMTMuMzE3LDAsMjYuNTE0LTIuMDE0LDM5LjIyNS01Ljk4NmMwLjIwNC0wLjA2MywwLjQwNC0wLjEzNSwwLjYwMi0wLjIxNWw3My40MzMtMjkuNTcxYy0xLjk5OSwyLjE0Mi0zLjk1Myw0LjQzMS01Ljg1LDYuODk5ICAgYy05Ljc5OSwxMi43NTYtMTQuODA1LDI1LjQzLTE1LjAxNCwyNS45NjNjLTAuOTEzLDIuMzM2LTAuNjc3LDQuOTY1LDAuNjM4LDcuMTAyYzEuMzE0LDIuMTM2LDMuNTU0LDMuNTMzLDYuMDUxLDMuNzcybDE2NywxNiAgIGMwLjI4LDAuMDI3LDAuNTU5LDAuMDQxLDAuODM1LDAuMDQxYzIuOTMxLDAsNS41NzMtMS41LDYuOTQyLTQuMTUzYzAuNTU5LTAuOTM5LDcuNDM1LTExLjg1MSwyNC45ODYtMTEuODUxaDMyICAgYzM5LjcwMSwwLDcyLDMyLjI5OSw3Miw3MnYyNGgtMjEuNDE0YzMuNDY3LTcuMjc5LDUuNDE0LTE1LjQxNSw1LjQxNC0yNGMwLTMwLjg3OC0yNS4xMjItNTYtNTYtNTZzLTU2LDI1LjEyMi01Niw1NiAgIGMwLDguNTg1LDEuOTQ3LDE2LjcyMSw1LjQxNCwyNEgxMzguNTg2YzMuNDY3LTcuMjc5LDUuNDE0LTE1LjQxNSw1LjQxNC0yNGMwLTMwLjg3OC0yNS4xMjItNTYtNTYtNTZzLTU2LDI1LjEyMi01Niw1NiAgIGMwLDMuMzEzLDAuMzA2LDYuNTU0LDAuODYsOS43MTFDMjcuMjE3LDMwNC42MDksMjQsMjk4LjQyOCwyNCwyOTEuNXogTTQ4LDI5OS41YzAtMjIuMDU2LDE3Ljk0NC00MCw0MC00MHM0MCwxNy45NDQsNDAsNDAgICBzLTE3Ljk0NCw0MC00MCw0MFM0OCwzMjEuNTU2LDQ4LDI5OS41eiBNNDE2LDMzOS41Yy0yMi4wNTYsMC00MC0xNy45NDQtNDAtNDBzMTcuOTQ0LTQwLDQwLTQwczQwLDE3Ljk0NCw0MCw0MCAgIFM0MzguMDU2LDMzOS41LDQxNiwzMzkuNXonLFxuICAgICk7XG4gICAgcGF0aDMuc2V0QXR0cmlidXRlKFxuICAgICAgJ2QnLFxuICAgICAgJ00xMTIsMjkxLjVjLTQuNDE4LDAtOCwzLjU4Mi04LDhjMCw4LjgyMi03LjE3OCwxNi0xNiwxNnMtMTYtNy4xNzgtMTYtMTZzNy4xNzgtMTYsMTYtMTZjNC40MTgsMCw4LTMuNTgyLDgtOHMtMy41ODItOC04LTggICBjLTE3LjY0NSwwLTMyLDE0LjM1NS0zMiwzMnMxNC4zNTUsMzIsMzIsMzJzMzItMTQuMzU1LDMyLTMyQzEyMCwyOTUuMDgyLDExNi40MTgsMjkxLjUsMTEyLDI5MS41eicsXG4gICAgKTtcbiAgICBwYXRoNC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnZCcsXG4gICAgICAnTTQ0MCwyOTEuNWMtNC40MTgsMC04LDMuNTgyLTgsOGMwLDguODIyLTcuMTc4LDE2LTE2LDE2cy0xNi03LjE3OC0xNi0xNnM3LjE3OC0xNiwxNi0xNmM0LjQxOCwwLDgtMy41ODIsOC04cy0zLjU4Mi04LTgtOCAgIGMtMTcuNjQ1LDAtMzIsMTQuMzU1LTMyLDMyczE0LjM1NSwzMiwzMiwzMnMzMi0xNC4zNTUsMzItMzJDNDQ4LDI5NS4wODIsNDQ0LjQxOCwyOTEuNSw0NDAsMjkxLjV6JyxcbiAgICApO1xuICAgIHN2Zy5hcHBlbmQocGF0aDEsIHBhdGgyLCBwYXRoMywgcGF0aDQpO1xuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNtYWxsQ2FyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZW51bSBMaW5rcyB7XG4gIHNlcnZlciA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICBnYXJhZ2UgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZScsXG4gIGVuZ2luZSA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZW5naW5lJyxcbiAgd2lubmVycyA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvd2lubmVycycsXG59XG5cbmV4cG9ydCBjbGFzcyBHZXREYXRhIHtcblxuICBhc3luYyBnZXRDYXJzKCkge1xuICAgIHJldHVybiAoYXdhaXQgZmV0Y2goYCR7TGlua3MuZ2FyYWdlfWApKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyBnZXRDYXIoaWQ6IG51bWJlcikge1xuICAgIHJldHVybiAoYXdhaXQgZmV0Y2goYCR7TGlua3MuZ2FyYWdlfS8ke2lkfWApKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVDYXIoYm9keTogU21hbGxDYXIpIHtcbiAgICAoXG4gICAgICBhd2FpdCBmZXRjaChgJHtMaW5rcy5nYXJhZ2V9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApLmpzb24oKTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZUNhcihpZDogbnVtYmVyKSB7XG4gICAgKGF3YWl0IGZldGNoKGAke0xpbmtzLmdhcmFnZX0vJHtpZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSkpLmpzb24oKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUNhcihpZDogbnVtYmVyLCBib2R5OiBTbWFsbENhcikge1xuICAgIChcbiAgICAgIGF3YWl0IGZldGNoKGAke0xpbmtzLmdhcmFnZX0vJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyBzdGFydEVuZ2luZShpZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIChhd2FpdCBmZXRjaChgJHtMaW5rcy5lbmdpbmV9P2lkPSR7aWR9JnN0YXR1cz1zdGFydGVkYCwgeyBtZXRob2Q6ICdQQVRDSCcgfSkpLmpzb24oKTtcbiAgfVxuXG4gIGFzeW5jIHN0b3BFbmdpbmUoaWQ6IG51bWJlcikge1xuICAgIHJldHVybiAoYXdhaXQgZmV0Y2goYCR7TGlua3MuZW5naW5lfT9pZD0ke2lkfSZzdGF0dXM9c3RvcHBlZGAsIHsgbWV0aG9kOiAnUEFUQ0gnIH0pKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyBkcml2ZShpZDogbnVtYmVyLCBzaWduYWw6IEFib3J0U2lnbmFsKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TGlua3MuZW5naW5lfT9pZD0ke2lkfSZzdGF0dXM9ZHJpdmVgLCB7IG1ldGhvZDogJ1BBVENIJywgc2lnbmFsIH0pLmNhdGNoKCk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMgIT09IDIwMCA/IHsgc3VjY2VzczogZmFsc2UgfSA6IHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9XG5cbiAgYXN5bmMgc3RvcERyaXZlKGlkOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtMaW5rcy5lbmdpbmV9P2lkPSR7aWR9JnN0YXR1cz1zdG9wcGVkYCwgeyBtZXRob2Q6ICdQQVRDSCcgfSkuY2F0Y2goKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyAhPT0gMjAwID8geyBzdWNjZXNzOiBmYWxzZSB9IDogeyAuLi4oYXdhaXQgcmVzLmpzb24oKSkgfTtcbiAgfVxuXG4gIGdldFNvcnRPcmRlcigpIHt9XG5cbiAgZ2V0V2lubmVycygpIHt9XG5cbiAgZ2V0V2lubmVyKCkge31cblxuICBnZXRXaW5uZXJTdGF0dXMoKSB7fVxuXG4gIGRlbGV0ZVdpbm5lcigpIHt9XG5cbiAgY3JlYXRlV2lubmVyKCkge31cblxuICB1cGRhdGVXaW5uZXIoKSB7fVxuXG4gIHNhdmVXaW5uZXIoKSB7fVxufVxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudCc7XG5pbXBvcnQgeyBHZXREYXRhIH0gZnJvbSAnLi9nZXRkYXRhJztcbmltcG9ydCB7IENhciwgU21hbGxDYXIgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmFuZG9tQ2FyIH0gZnJvbSAnLi9yYW5kb21DYXInO1xuXG5leHBvcnQgY2xhc3MgUGFnZSB7XG4gIHByaXZhdGUgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF07XG5cbiAgcHJpdmF0ZSBjYXJzID0gbmV3IEdldERhdGEoKTtcblxuICBwcml2YXRlIGVsID0gbmV3IEVsZW1lbnQoKTtcblxuICBwcml2YXRlIG51bWJlcldpbnM6IG51bWJlcltdID0gW107XG5cbiAgcHJpdmF0ZSBjdXJyZW50Q2FyOiBDYXJbXSA9IFtdO1xuXG4gIHByaXZhdGUgcmFuZG9tQ2FyID0gbmV3IFJhbmRvbUNhcigpO1xuXG4gIHByaXZhdGUgd2lubmVySUQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGNhcnNMaXN0ID0gdGhpcy5jYXJzLmdldENhcnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgY2Fyc0xpc3QudGhlbigoY2FyczogQ2FyW10pID0+IHtcbiAgICAgICAgY2Fycy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGkgKyAxKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXIucHVzaChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlRGVmYXVsdFBhZ2UoKSB7XG4gICAgdGhpcy5jcmVhdGVIZWFkZXIoKTtcbiAgICB0aGlzLmNyZWF0ZU1haW4oKTtcbiAgICB0aGlzLmNyZWF0ZUZvb3RlcigpO1xuICB9XG5cbiAgY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2hlYWRlcicgfSk7XG4gICAgY29uc3QgaDEgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdoMScsIGNvbnRlbnQ6ICdBc3luYyBSYWNlJyB9KTtcbiAgICBjb25zdCBuYXYgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICduYXYnIH0pO1xuICAgIGNvbnN0IGJ1dHRvbkdhcmFnZSA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGlkOiAnYnV0dG9uX19nYXJhZ2UnLCBjb250ZW50OiAnVG8gR2FyYWdlJyB9KTtcbiAgICBjb25zdCBidXR0b25XaW5uZXJzID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICdidXR0b25fX3dpbm5lcnMnLCBjb250ZW50OiAnVG8gV2lubmVycycgfSk7XG4gICAgbmF2LmFwcGVuZChidXR0b25HYXJhZ2UsIGJ1dHRvbldpbm5lcnMpO1xuICAgIGhlYWRlci5hcHBlbmQoaDEsIG5hdik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyKTtcbiAgfVxuXG4gIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtYWluKTtcbiAgICB0aGlzLmNyZWF0ZVNldHRpbmcoKTtcbiAgICB0aGlzLmNyZWF0ZUNhcnNMaXN0KCk7XG4gIH1cblxuICBjcmVhdGVTZXR0aW5nKCkge1xuICAgIGNvbnN0IHNldHRpbmcgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBpZDogJ3NldHRpbmcnIH0pO1xuICAgIGNvbnN0IGJ1dHRvbk1lbnUxID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xhc3NOb3RlOiAnYnV0dG9uX19tZW51JyB9KTtcbiAgICBjb25zdCBpbnB1dENyZWF0ZSA9IHRoaXMuZWwuY3JlYXRlSW5wdXQoeyB0eXBlOiAndGV4dCcsIGlkOiAnaW5wdXRfX2NyZWF0ZScgfSk7XG4gICAgY29uc3QgaW5wdXRDcmVhdGVDb2xvciA9IHRoaXMuZWwuY3JlYXRlSW5wdXQoe1xuICAgICAgdHlwZTogJ2NvbG9yJyxcbiAgICAgIGlkOiAnaW5wdXRfX2NyZWF0ZV9fY29sb3InLFxuICAgICAgbmFtZTogJ2NvbG9yJyxcbiAgICAgIHZhbHVlOiAnI2ZmZmZmZicsXG4gICAgfSk7XG4gICAgY29uc3QgYnV0dG9uQ3JlYXRlID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICdidXR0b25fX2NyZWF0ZScsIGNvbnRlbnQ6ICdDUkVBVEUnIH0pO1xuICAgIGJ1dHRvbk1lbnUxLmFwcGVuZChpbnB1dENyZWF0ZSwgaW5wdXRDcmVhdGVDb2xvciwgYnV0dG9uQ3JlYXRlKTtcbiAgICBjb25zdCBidXR0b25NZW51MiA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsYXNzTm90ZTogJ2J1dHRvbl9fbWVudScgfSk7XG4gICAgY29uc3QgaW5wdXRVcGRhdGUgPSB0aGlzLmVsLmNyZWF0ZUlucHV0KHsgdHlwZTogJ3RleHQnLCBpZDogJ2lucHV0X191cGRhdGUnLCBkaXNhYmxlOiB0cnVlIH0pO1xuICAgIGNvbnN0IGlucHV0VXBkYXRlQ29sb3IgPSB0aGlzLmVsLmNyZWF0ZUlucHV0KHtcbiAgICAgIHR5cGU6ICdjb2xvcicsXG4gICAgICBpZDogJ2lucHV0X191cGRhdGVfX2NvbG9yJyxcbiAgICAgIG5hbWU6ICdjb2xvcicsXG4gICAgICB2YWx1ZTogJyNmZmZmZmYnLFxuICAgICAgZGlzYWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBjb25zdCBidXR0b25VcGRhdGUgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGlkOiAnYnV0dG9uX191cGRhdGUnLFxuICAgICAgY29udGVudDogJ1VQREFURScsXG4gICAgICBkaXNhYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIGJ1dHRvbk1lbnUyLmFwcGVuZChpbnB1dFVwZGF0ZSwgaW5wdXRVcGRhdGVDb2xvciwgYnV0dG9uVXBkYXRlKTtcbiAgICBjb25zdCBidXR0b25NZW51MyA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsYXNzTm90ZTogJ2J1dHRvbl9fbWVudScgfSk7XG4gICAgY29uc3QgYnV0dG9uUmFjZSA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGlkOiAncmFjZScsIGNvbnRlbnQ6ICdSQUNFJyB9KTtcbiAgICBjb25zdCBidXR0b25SZXNldCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGlkOiAncmVzZXQnLCBjb250ZW50OiAnUkVTRVQnLCBkaXNhYmxlOiB0cnVlIH0pO1xuICAgIGNvbnN0IGJ1dHRvbkdlbmVyYXRlID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgY29udGVudDogJ0dFTkVSQVRFIENBUlMnIH0pO1xuICAgIGJ1dHRvbk1lbnUzLmFwcGVuZChidXR0b25SYWNlLCBidXR0b25SZXNldCwgYnV0dG9uR2VuZXJhdGUpO1xuICAgIHNldHRpbmcuYXBwZW5kKGJ1dHRvbk1lbnUxLCBidXR0b25NZW51MiwgYnV0dG9uTWVudTMpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uYXBwZW5kKHNldHRpbmcpO1xuXG4gICAgYnV0dG9uQ3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGlucHV0Q3JlYXRlKSB7XG4gICAgICAgIGlmIChpbnB1dENyZWF0ZS52YWx1ZS50cmltKCkgIT0gJycpIHtcbiAgICAgICAgICBjb25zdCBuZXdDYXI6IFNtYWxsQ2FyID0ge1xuICAgICAgICAgICAgbmFtZTogaW5wdXRDcmVhdGUudmFsdWUsXG4gICAgICAgICAgICBjb2xvcjogaW5wdXRDcmVhdGVDb2xvci52YWx1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuY2Fycy5jcmVhdGVDYXIobmV3Q2FyKTtcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnV0dG9uVXBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGlucHV0VXBkYXRlKSB7XG4gICAgICAgIGlmIChpbnB1dFVwZGF0ZS52YWx1ZS50cmltKCkgIT0gJycpIHtcbiAgICAgICAgICBjb25zdCBuZXdDYXI6IFNtYWxsQ2FyID0ge1xuICAgICAgICAgICAgbmFtZTogaW5wdXRVcGRhdGUudmFsdWUsXG4gICAgICAgICAgICBjb2xvcjogaW5wdXRVcGRhdGVDb2xvci52YWx1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuY2Fycy51cGRhdGVDYXIoTnVtYmVyKGlucHV0VXBkYXRlLnRleHRDb250ZW50KSwgbmV3Q2FyKTtcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnV0dG9uR2VuZXJhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjYXJzID0gdGhpcy5yYW5kb21DYXIucmFuZG9tQ2FycygpO1xuICAgICAgKGJ1dHRvbkdlbmVyYXRlIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBjYXJzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdGhpcy5jYXJzLmNyZWF0ZUNhcihpdGVtKTtcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9KTtcblxuICAgIGJ1dHRvblJhY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAoYnV0dG9uUmFjZSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5udW1iZXJXaW5zID0gW107XG4gICAgICAoYnV0dG9uUmVzZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmN1cnJlbnRDYXIuZm9yRWFjaCgoaXQpID0+IHtcbiAgICAgICAgY29uc3QgYnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnV0dG9uX19zdGFydF9fJHtpdC5pZCAtIDF9YCk7XG4gICAgICAgIGlmIChidCkge1xuICAgICAgICAgIGJ0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgICAgICAoYnQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBidXR0b25SZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIChidXR0b25SYWNlIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgKGJ1dHRvblJlc2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmN1cnJlbnRDYXIuZm9yRWFjaCgoaXQpID0+IHtcbiAgICAgICAgY29uc3QgYnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnV0dG9uX19zdG9wX18ke2l0LmlkIC0gMX1gKTtcbiAgICAgICAgaWYgKGJ0KSB7XG4gICAgICAgICAgYnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xuICAgICAgICAgIChidCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdmb290ZXInIH0pO1xuICAgIGNvbnN0IGNvbnRlbnRJbWFnZSA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicgfSk7XG4gICAgY29uc3QgbGluayA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2EnIH0pO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi9hc3NldHMvaW1hZ2VzL2xvZ29fcnNfdGV4dC5zdmcnO1xuICAgIGNvbnN0IGxpbmtHaXQgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdhJywgY2xhc3NOb3RlOiAnZm9vdGVyX19naXQnLCBjb250ZW50OiAnYmFsYXhvbiAyMDIzJyB9KTtcbiAgICAobGlua0dpdCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vYmFsYXhvbic7XG4gICAgbGluay5hcHBlbmQoaW1nKTtcbiAgICBjb250ZW50SW1hZ2UuYXBwZW5kKGxpbmspO1xuICAgIGZvb3Rlci5hcHBlbmQoY29udGVudEltYWdlLCBsaW5rR2l0KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChmb290ZXIpO1xuICB9XG5cbiAgY3JlYXRlQ2Fyc0xpc3QoKSB7XG4gICAgY29uc3QgY2Fyc0xpc3QgPSB0aGlzLmNhcnMuZ2V0Q2FycygpO1xuICAgIGNhcnNMaXN0LnRoZW4oKGNhcnMpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlQ2FyRnJvbURhdGEoY2Fycyk7XG4gICAgfSk7XG4gICAgLy90aGlzLmNyZWF0ZUNhckZyb21EYXRhKGNhcnMpO1xuICB9XG5cbiAgY3JlYXRlQ2FyRnJvbURhdGEoY2FyOiBDYXJbXSkge1xuICAgIGNvbnN0IG1heFBhZ2UgPSBNYXRoLmNlaWwoY2FyLmxlbmd0aCAvIDcpO1xuICAgIGxldCBwYWdlID0gMTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXTtcbiAgICBjb25zdCBoMiA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2gyJywgaWQ6ICdnYXJhZ2VfX3RleHQnLCBjb250ZW50OiBgR2FyYWdlICgke2Nhci5sZW5ndGh9KWAgfSk7XG4gICAgY29uc3QgcCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ3AnLCBpZDogJ3BhZ2UnLCBjb250ZW50OiBgUGFnZSAjJHtwYWdlfWAgfSk7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgaWQ6ICdjYXJkX19saXN0JyB9KTtcbiAgICBtYWluLmFwcGVuZChoMiwgcCwgZGl2KTtcblxuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBjYXIuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNhckNhcmQgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBpZDogJ2Nhcl9fY2FyZCcgfSk7XG4gICAgICBjb25zdCBmaXJzdERpdiA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicgfSk7XG4gICAgICBjb25zdCBidFNlbGVjdCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGNvbnRlbnQ6ICdTRUxFQ1QnIH0pO1xuICAgICAgY29uc3QgYnRSZW1vdmUgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdidXR0b24nLCBjb250ZW50OiAnUkVNT1ZFJyB9KTtcbiAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzcGFuJywgY29udGVudDogYCR7aXRlbS5uYW1lfWAgfSk7XG4gICAgICBjb25zdCB0cmFjayA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsYXNzTm90ZTogJ3RyYWNrJyB9KTtcbiAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnc3RhcnRfX3N0b3AnIH0pO1xuICAgICAgY29uc3QgYnRBID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NOb3RlOiAnYnV0dG9uX19zdGFydCcsXG4gICAgICAgIGlkOiBgYnV0dG9uX19zdGFydF9fJHtpbmRleH1gLFxuICAgICAgICBjb250ZW50OiAnQScsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGJ0QiA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzTm90ZTogJ2J1dHRvbl9fc3RvcCcsXG4gICAgICAgIGlkOiBgYnV0dG9uX19zdG9wX18ke2luZGV4fWAsXG4gICAgICAgIGNvbnRlbnQ6ICdCJyxcbiAgICAgICAgZGlzYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgYnV0dG9uRGl2LmFwcGVuZChidEEsIGJ0Qik7XG4gICAgICBjb25zdCBzdmcgPSB0aGlzLmVsLmNyZWF0ZUNhclNWRygpO1xuICAgICAgc3ZnLmlkID0gYHN2Z19fJHtpdGVtLmlkfWA7XG4gICAgICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgYCR7aXRlbS5jb2xvcn1gKTtcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdmaW5pc2gnKTtcbiAgICAgIGltYWdlLnNyYyA9ICdhc3NldHMvaW1hZ2VzL2ZpbmlzaC5wbmcnO1xuICAgICAgZmlyc3REaXYuYXBwZW5kKGJ0U2VsZWN0LCBidFJlbW92ZSwgc3Bhbik7XG4gICAgICB0cmFjay5hcHBlbmQoYnV0dG9uRGl2LCBzdmcsIGltYWdlKTtcbiAgICAgIGNhckNhcmQuYXBwZW5kKGZpcnN0RGl2LCB0cmFjayk7XG4gICAgICBidFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfX3VwZGF0ZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gaXRlbS5uYW1lO1xuICAgICAgICAgIGlucHV0LnRleHRDb250ZW50ID0gaXRlbS5pZC50b1N0cmluZygpO1xuICAgICAgICAgIGlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfX3VwZGF0ZV9fY29sb3InKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICBjb2xvci52YWx1ZSA9IGl0ZW0uY29sb3I7XG4gICAgICAgICAgY29sb3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uX191cGRhdGUnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGJ0UmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNhcnMuZGVsZXRlQ2FyKGl0ZW0uaWQpO1xuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgcmVxdWVzdCA9IDA7XG4gICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgbGV0IHRpbWUgPSAwO1xuICAgICAgbGV0IHN0YXJ0QW5pbWF0aW9uID0gMDtcbiAgICAgIGZ1bmN0aW9uIGRyaXZlKHRpbWVzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHN0YXJ0QW5pbWF0aW9uID09PSAwKSB7XG4gICAgICAgICAgc3RhcnRBbmltYXRpb24gPSB0aW1lcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9ICh0aW1lcyAtIHN0YXJ0QW5pbWF0aW9uKSAvIHRpbWU7XG4gICAgICAgIHN2Zy5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7MTIwICsgcHJvZ3Jlc3MgKiB3aWR0aH1weGA7XG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyaXZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgY29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyO1xuICAgICAgYnRBLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAoYnRBIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGNhcmRsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRfX2xpc3QnKTtcbiAgICAgICAgd2lkdGggPSAwO1xuICAgICAgICBpZiAoY2FyZGxpc3QpIHtcbiAgICAgICAgICB3aWR0aCA9ICtjYXJkbGlzdC5vZmZzZXRXaWR0aCAtIDIzMDtcbiAgICAgICAgfVxuICAgICAgICB0aW1lID0gMDtcbiAgICAgICAgYXdhaXQgdGhpcy5jYXJzLnN0YXJ0RW5naW5lKGl0ZW0uaWQpLnRoZW4oKGl0ZW1zKSA9PiB7XG4gICAgICAgICAgdGltZSA9IE1hdGguYWJzKGl0ZW1zLmRpc3RhbmNlIC8gaXRlbXMudmVsb2NpdHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgKGJ0QiBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICBzdGFydEFuaW1hdGlvbiA9IDA7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJpdmUpO1xuICAgICAgICBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICBhd2FpdCBuZXcgR2V0RGF0YSgpXG4gICAgICAgICAgLmRyaXZlKGl0ZW0uaWQsIGNvbnRyb2xsZXIuc2lnbmFsKVxuICAgICAgICAgIC50aGVuKChpdGVtcykgPT4ge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdCk7XG4gICAgICAgICAgICBjb25zdCByYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhY2UnKTtcbiAgICAgICAgICAgIGlmIChyYWNlKSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtcy5zdWNjZXNzICYmIChyYWNlIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCAmJiB0aGlzLm51bWJlcldpbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aW5uZXJJRCA9IGl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJXaW5zLnB1c2goaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgbmV3IEdldERhdGEoKS5nZXRDYXIoaXRlbS5pZCkudGhlbigoaXQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGFsZXJ0KGBXaW5uZXI6ICR7aXQubmFtZX0gdGltZTogJHt0aW1lfWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGJ0Qi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgKGJ0QiBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLmNhcnMuc3RvcEVuZ2luZShpdGVtLmlkKS50aGVuKCgpID0+IHtcbiAgICAgICAgfSk7XG4gICAgICAgIHN2Zy5zdHlsZS5tYXJnaW5MZWZ0ID0gJzEyMHB4JztcbiAgICAgICAgKGJ0QSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdCk7XG4gICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY2FyZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZF9fbGlzdCcpO1xuICAgICAgaWYgKGNvdW50ZXIgPiA2KSB7XG4gICAgICAgIGNhckNhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICAgIGlmIChjYXJkTGlzdCkge1xuICAgICAgICBjYXJkTGlzdC5hcHBlbmQoY2FyQ2FyZCk7XG4gICAgICB9XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgfSk7XG4gICAgY29uc3QgcHJldmlvdXNOZXh0ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgaWQ6ICdwcmV2aW91c19fbmV4dCcgfSk7XG4gICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdidXR0b24nLCBpZDogJ3ByZXZpb3VzJywgY29udGVudDogJ3ByZXZpb3VzJyB9KTtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICduZXh0JywgY29udGVudDogJ25leHQnIH0pO1xuICAgIHByZXZpb3VzTmV4dC5hcHBlbmQocHJldmlvdXMsIG5leHQpO1xuICAgIG1haW4uYXBwZW5kKHByZXZpb3VzTmV4dCk7XG5cbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY2Fyc0xpc3QgPSB0aGlzLmNhcnMuZ2V0Q2FycygpO1xuICAgICAgZm9yIChsZXQgaSA9IHBhZ2UgKiA3IC0gNzsgaSA8IDcgKiBwYWdlOyBpKyspIHtcbiAgICAgICAgaWYgKHBhZ2UgPCBtYXhQYWdlKSB7XG4gICAgICAgICAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZF9fbGlzdCcpO1xuICAgICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgICAgKHRyYWNrLmNoaWxkTm9kZXNbaV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGFnZSA8IG1heFBhZ2UpIHtcbiAgICAgICAgcGFnZSArPSAxO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IHBhZ2UgKiA3IC0gNzsgaSA8IDcgKiBwYWdlOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPCBjYXIubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZF9fbGlzdCcpO1xuICAgICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgICAgKHRyYWNrLmNoaWxkTm9kZXNbaV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FyID0gW107XG4gICAgICAgICAgICBjYXJzTGlzdC50aGVuKChjYXJzOiBDYXJbXSkgPT4ge1xuICAgICAgICAgICAgICBjYXJzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaSArIDEpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENhci5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHRQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UnKTtcbiAgICAgIGlmICh0ZXh0UGFnZSkge1xuICAgICAgICB0ZXh0UGFnZS50ZXh0Q29udGVudCA9IGBQYWdlICMke3BhZ2V9YDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByZXZpb3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY2Fyc0xpc3QgPSB0aGlzLmNhcnMuZ2V0Q2FycygpO1xuICAgICAgZm9yIChsZXQgaSA9IHBhZ2UgKiA3IC0gNzsgaSA8IDcgKiBwYWdlOyBpKyspIHtcbiAgICAgICAgaWYgKHBhZ2UgPiAxKSB7XG4gICAgICAgICAgaWYgKGkgPCBjYXIubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkX19saXN0Jyk7XG4gICAgICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICAgICAgKHRyYWNrLmNoaWxkTm9kZXNbaV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGFnZSA+IDEpIHtcbiAgICAgICAgcGFnZSAtPSAxO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IHBhZ2UgKiA3IC0gNzsgaSA8IDcgKiBwYWdlOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPCBjYXIubGVuZ3RoICYmIHBhZ2UgPj0gMSkge1xuICAgICAgICAgIGNvbnN0IHRyYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRfX2xpc3QnKTtcbiAgICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICAgICh0cmFjay5jaGlsZE5vZGVzW2ldIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENhciA9IFtdO1xuICAgICAgICAgICAgY2Fyc0xpc3QudGhlbigoY2FyczogQ2FyW10pID0+IHtcbiAgICAgICAgICAgICAgY2Fycy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGkgKyAxKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXIucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJyk7XG4gICAgICBpZiAodGV4dFBhZ2UpIHtcbiAgICAgICAgdGV4dFBhZ2UudGV4dENvbnRlbnQgPSBgUGFnZSAjJHtwYWdlfWA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy9uZXcgQWJvcnRDb250cm9sbGVyKCkuYWJvcnQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU21hbGxDYXIgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgUmFuZG9tQ2FyIHtcblxuICByYW5kb21OYW1lKCkge1xuICAgIGNvbnN0IGNhcnM6IHN0cmluZ1tdID0gW1xuICAgICAgJ0F1ZGkgQTEnLFxuICAgICAgJ0F1ZGkgUjgnLFxuICAgICAgJ0FsZmEgUm9tZW8gQnJlcmEnLFxuICAgICAgJ0FsZmEgUm9tZW8gR1QnLFxuICAgICAgJ0F1ZGkgQTInLFxuICAgICAgJ0FsZmEgUm9tZW8gMTU2JyxcbiAgICAgICdBdWRpIEEzJyxcbiAgICAgICdBdWRpIEE0JyxcbiAgICAgICdBbGZhIFJvbWVvIDE1NScsXG4gICAgICAnQllEIFRhbmcnLFxuICAgICAgJ0JNVyBpOCcsXG4gICAgICAnQk1XIGkzJyxcbiAgICAgICdCWUQgUWluJyxcbiAgICAgICdCWUQgZTYnLFxuICAgICAgJ0JZRCBGM0RNJyxcbiAgICAgICdCdWdhdHRpIFZleXJvbicsXG4gICAgICAnQk1XIFg1JyxcbiAgICAgICdCTVcgWjgnLFxuICAgICAgJ0J1Z2F0dGkgRUIxMTAnLFxuICAgICAgJ0NocnlzbGVyIEFzcGVuIEh5YnJpZCcsXG4gICAgICAnQ2FkaWxsYWMgRUxSJyxcbiAgICAgICdDaGV2cm9sZXQgVm9sdCcsXG4gICAgICAnQ2hldnJvbGV0IENydXplJyxcbiAgICAgICdDaHJ5c2xlciBUb3duICYgQ291bnRyeScsXG4gICAgICAnRGFpaGF0c3UgQ29wZW4nLFxuICAgICAgJ0RlIFRvbWFzbyBHdWFyw6AnLFxuICAgICAgJ0RvZGdlIFZpcGVyJyxcbiAgICAgICdEb2RnZSBTdGVhbHRoJyxcbiAgICAgICdEb2RnZSBBcmllcy9QbHltb3V0aCBSZWxpYW50JyxcbiAgICAgICdETUMgRGVMb3JlYW4nLFxuICAgICAgJ0RlIFRvbWFzbyBMb25nY2hhbXAnLFxuICAgICAgJ0ZlcnJhcmkgMzI4JyxcbiAgICAgICdGZXJyYXJpIEY0MCcsXG4gICAgICAnRmVycmFyaSAzNDgnLFxuICAgICAgJ0ZlcnJhcmkgNDU2JyxcbiAgICAgICdGZXJyYXJpIDMzMyBTUCcsXG4gICAgICAnRmVycmFyaSBGMzU1JyxcbiAgICAgICdGZXJyYXJpIEY1MCcsXG4gICAgICAnRmVycmFyaSA1NTAgTWFyYW5lbGxvJyxcbiAgICAgICdGZXJyYXJpIDU3NU0gTWFyYW5lbGxvJyxcbiAgICAgICdGZXJyYXJpIDM2MCcsXG4gICAgICAnRW56byBGZXJyYXJpJyxcbiAgICAgICdGZXJyYXJpIEY0MzAnLFxuICAgICAgJ0ZlcnJhcmkgNDU4JyxcbiAgICAgICdGZXJyYXJpIEZGJyxcbiAgICAgICdMYUZlcnJhcmknLFxuICAgICAgJ0Zpc2tlciBLYXJtYScsXG4gICAgICAnRm9yZCBGaWVzdGEnLFxuICAgICAgJ0ZvcmQgRmllc3RhJyxcbiAgICAgICdGb3JkIEZvY3VzJyxcbiAgICAgICdGb3JkIEdyYW5hZGEgKE5vcnRoIEFtZXJpY2EpJyxcbiAgICAgICdGb3JkIEdUJyxcbiAgICAgICdGb3JkIExURCcsXG4gICAgICAnRm9yZCBNb2RlbCBBJyxcbiAgICAgICdGb3JkIE1vZGVsIFQnLFxuICAgICAgJ0ZvcmQgTXVzdGFuZycsXG4gICAgICAnRm9yZCBQdW1hJyxcbiAgICAgICdGb3JkIFJhbmNoZXJvJyxcbiAgICAgICdGb3JkIFJhbmdlcicsXG4gICAgICAnSmFndWFyIFhKJyxcbiAgICAgICdKYWd1YXIgWEpTJyxcbiAgICAgICdKYWd1YXIgWEpSLTE1JyxcbiAgICAgICdKYWd1YXIgWEoyMjAnLFxuICAgICAgJ0phZ3VhciBYSycsXG4gICAgICAnSmFndWFyIFgtVHlwZScsXG4gICAgICAnSmFndWFyIFhGJyxcbiAgICAgICdMYW1ib3JnaGluaSBEaWFibG8nLFxuICAgICAgJ0xhbWJvcmdoaW5pIEVzcGFkYScsXG4gICAgICAnTGFtYm9yZ2hpbmkgR2FsbGFyZG8nLFxuICAgICAgJ0xhbWJvcmdoaW5pIEh1cmFjw6FuJyxcbiAgICAgICdMYW1ib3JnaGluaSBJc2xlcm8nLFxuICAgICAgJ0xhbWJvcmdoaW5pIFVydXMnLFxuICAgICAgJ0xhbmQgUm92ZXIgRGlzY292ZXJ5IFNwb3J0JyxcbiAgICAgICdMYW5kIFJvdmVyIFJhbmdlIFJvdmVyJyxcbiAgICAgICdSYW5nZSBSb3ZlciBFdm9xdWUnLFxuICAgICAgJ1JhbmdlIFJvdmVyIFNwb3J0JyxcbiAgICAgICdNY0xhcmVuIFAxJyxcbiAgICAgICdNY0xhcmVuIDEyQycsXG4gICAgICAnTWFzZXJhdGkgTUMxMicsXG4gICAgICAnTWFzZXJhdGkgR3JhblR1cmlzbW8nLFxuICAgICAgJ01heWJhY2ggNTcgYW5kIDYyJyxcbiAgICAgICdNZXJjdXJ5IE1hcmF1ZGVyJyxcbiAgICAgICdNZXJjdXJ5IE1hcmluZXInLFxuICAgICAgJ01lcmN1cnkgTWlsYW4nLFxuICAgICAgJ01lcmN1cnkgTW9udGVyZXkgKG1pbml2YW4pJyxcbiAgICAgICdQb3JzY2hlIDkxMScsXG4gICAgICAnUG9yc2NoZSA5NTknLFxuICAgICAgJ1BvcnNjaGUgOTY4JyxcbiAgICAgICdQb3JzY2hlIEJveHN0ZXInLFxuICAgICAgJ1BvcnNjaGUgQ2F5ZW5uZScsXG4gICAgICAnUG9yc2NoZSBDYXJyZXJhIEdUJyxcbiAgICAgICdQb3JzY2hlIFBhbmFtZXJhJyxcbiAgICAgICdQb3JzY2hlIDkxOCcsXG4gICAgICAnUG9yc2NoZSBNYWNhbicsXG4gICAgICAnUmVuYXVsdCBUd2luZ28nLFxuICAgICAgJ1JlbmF1bHQgVHdpenknLFxuICAgICAgJ1JlbmF1bHQgWm9lJyxcbiAgICAgICdUb3lvdGEgUHJpdXMnLFxuICAgICAgJ1RveW90YSBSQVY0JyxcbiAgICAgICdMYWRhJyxcbiAgICBdO1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMSk7XG4gICAgcmV0dXJuIGNhcnNbcmFuZG9tXTtcbiAgfVxuXG4gIHJhbmRvbUNvbG9yKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICB9XG5cbiAgcmFuZG9tQ2FycygpIHtcbiAgICBjb25zdCBjYXJzOiBTbWFsbENhcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgY29uc3QgbmV3Q2FyOiBTbWFsbENhciA9IHtcbiAgICAgICAgbmFtZTogdGhpcy5yYW5kb21OYW1lKCksXG4gICAgICAgIGNvbG9yOiBgIyR7dGhpcy5yYW5kb21Db2xvcigpfWAsXG4gICAgICB9O1xuICAgICAgY2Fycy5wdXNoKG5ld0Nhcik7XG4gICAgfVxuICAgIHJldHVybiBjYXJzO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcblxubmV3IFBhZ2UoKS5jcmVhdGVEZWZhdWx0UGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9