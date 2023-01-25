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
var Method;
(function (Method) {
    Method["post"] = "POST";
    Method["put"] = "PUT";
    Method["get"] = "GET";
    Method["delete"] = "DELETE";
    Method["patch"] = "PATCH";
})(Method || (Method = {}));
var Arguments;
(function (Arguments) {
    Arguments[Arguments["limit"] = 10] = "limit";
})(Arguments || (Arguments = {}));
var Status;
(function (Status) {
    Status[Status["ok"] = 200] = "ok";
    Status["start"] = "started";
    Status["stop"] = "stopped";
    Status["drive"] = "drive";
})(Status || (Status = {}));
class GetData {
    async getCars() {
        return (await fetch(`${Links.garage}`)).json();
    }
    async getCar(id) {
        return (await fetch(`${Links.garage}/${id}`)).json();
    }
    async createCar(body) {
        (await fetch(`${Links.garage}`, {
            method: Method.post,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();
    }
    async deleteCar(id) {
        (await fetch(`${Links.garage}/${id}`, { method: Method.delete })).json();
    }
    async updateCar(id, body) {
        (await fetch(`${Links.garage}/${id}`, {
            method: Method.put,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();
    }
    async startEngine(id) {
        return (await fetch(`${Links.engine}?id=${id}&status=${Status.start}`, { method: Method.patch })).json();
    }
    async stopEngine(id) {
        return (await fetch(`${Links.engine}?id=${id}&status=${Status.stop}`, { method: Method.patch })).json();
    }
    async drive(id, signal) {
        const res = await fetch(`${Links.engine}?id=${id}&status=${Status.drive}`, { method: Method.patch, signal }).catch();
        return res.status !== Status.ok ? { success: false } : { success: true };
    }
    async stopDrive(id) {
        const res = await fetch(`${Links.engine}?id=${id}&status=${Status.stop}`, { method: Method.patch }).catch();
        return res.status !== Status.ok ? { success: false } : { ...(await res.json()) };
    }
    getSortOrder(sort, order) {
        let res = '';
        if (sort && order) {
            res = `&_sort=${sort}&_order=${order}`;
        }
        else {
            res = '';
        }
        return res;
    }
    async getWinners({ page, limit = Arguments.limit, sort, order }) {
        return (await fetch(`${Links.winners}?_page=${page}&_limit=${limit}${this.getSortOrder(sort, order)}`)).json();
    }
    async getWinnersCount() {
        return (await fetch(`${Links.winners}`)).json();
    }
    async getWinner(id) {
        return (await fetch(`${Links.winners}/${id}`)).json();
    }
    async deleteWinner(id) {
        (await fetch(`${Links.winners}/${id}`, { method: Method.delete })).json();
    }
    async createWinner(body) {
        (await fetch(`${Links.winners}`, {
            method: Method.post,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();
    }
    async updateWinner(id, body) {
        (await fetch(`${Links.winners}/${id}`, {
            method: Method.put,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();
    }
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
var TopDown;
(function (TopDown) {
    TopDown["top"] = " \u2191";
    TopDown["donw"] = " \u2193";
    TopDown["id"] = "Id";
    TopDown["idTop"] = "Id \u2191";
    TopDown["idDown"] = "Id \u2193";
    TopDown["wins"] = "Wins";
    TopDown["winsTop"] = "Wins \u2191";
    TopDown["winsDown"] = "Wins \u2193";
    TopDown["time"] = "Time";
    TopDown["timeTop"] = "Time \u2191";
    TopDown["timeDown"] = "Time \u2193";
})(TopDown || (TopDown = {}));
var SrcImages;
(function (SrcImages) {
    SrcImages["logo"] = "./assets/images/logo_rs_text.svg";
    SrcImages["finish"] = "assets/images/finish.png";
})(SrcImages || (SrcImages = {}));
var Sort;
(function (Sort) {
    Sort["id"] = "id";
    Sort["wins"] = "wins";
    Sort["time"] = "time";
})(Sort || (Sort = {}));
var Order;
(function (Order) {
    Order["asc"] = "ASC";
    Order["desc"] = "DESC";
})(Order || (Order = {}));
var Arguments;
(function (Arguments) {
    Arguments[Arguments["page"] = 1] = "page";
    Arguments[Arguments["limit"] = 10] = "limit";
})(Arguments || (Arguments = {}));
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["page"] = "\u041D\u0435 \u043D\u0430 \u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0432\u0435\u0440\u043D\u0443\u043B\u0438 \u043C\u0430\u0448\u0438\u043D\u044B \u0432 \u0433\u0430\u0440\u0430\u0436! \u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443!";
})(ErrorMessage || (ErrorMessage = {}));
class Page {
    constructor() {
        this.sort = {
            page: Arguments.page,
            limit: Arguments.limit,
            sort: Sort.id,
            order: Order.asc,
        };
        this.cars = new getdata_1.GetData();
        this.el = new element_1.Element();
        this.numberWins = [];
        this.currentCar = [];
        this.randomCar = new randomCar_1.RandomCar();
        this.winnerID = 0;
        const carsList = this.cars.getCars();
        for (let i = 0; i < 7; i++) {
            carsList.then((cars) => {
                cars.forEach((item, index) => {
                    if (index === i) {
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
        buttonWinners.addEventListener('click', () => {
            buttonWinners.disabled = true;
            this.cars.getWinners({ page: this.sort.page, limit: this.sort.limit, sort: this.sort.sort, order: this.sort.order }).then((winners) => {
                this.createWinners(winners);
                const main = document.getElementsByTagName('main')[0];
                if (main) {
                    main.hidden = true;
                }
            });
        });
        header.append(h1, nav);
        document.body.append(header);
        buttonGarage.addEventListener('click', () => {
            buttonWinners.disabled = false;
            const main = document.getElementsByTagName('main')[0];
            if (main) {
                main.hidden = false;
            }
            const winners = document.getElementById('winners__block');
            if (winners) {
                winners.remove();
            }
        });
    }
    createWinners(winners) {
        const header = document.getElementsByTagName('header')[0];
        const winnersBlock = this.el.createElement({ tag: 'div', id: 'winners__block' });
        header.after(winnersBlock);
        let maxPage = 0;
        const h2 = this.el.createElement({ tag: 'h2', id: 'winners__text', content: `Winners (${winners.length})` });
        this.cars.getWinnersCount().then((leng) => {
            h2.textContent = `Winners (${leng.length})`;
            maxPage = Math.ceil(leng.length / 10);
        });
        const p = this.el.createElement({ tag: 'p', id: 'page', content: `Page #${this.sort.page}` });
        winnersBlock.append(h2, p);
        const sortMenu = this.el.createElement({ tag: 'div', id: 'sort__list' });
        const btId = this.el.createElement({ tag: 'button', id: 'button__id', content: TopDown.id });
        const btName = this.el.createElement({ tag: 'button', id: 'button__name', content: 'Name', disable: true });
        const btCar = this.el.createElement({ tag: 'button', id: 'button__car', content: 'Car', disable: true });
        const btWins = this.el.createElement({ tag: 'button', id: 'button__wins', content: TopDown.wins });
        const btTime = this.el.createElement({ tag: 'button', id: 'button__time', content: TopDown.time });
        sortMenu.append(btId, btName, btCar, btWins, btTime);
        switch (this.sort.sort) {
            case Sort.id:
                btId.textContent += this.sort.order === Order.asc ? TopDown.top : TopDown.donw;
                break;
            case Sort.wins:
                btWins.textContent += this.sort.order === Order.asc ? TopDown.top : TopDown.donw;
                break;
            case Sort.time:
                btTime.textContent += this.sort.order === Order.asc ? TopDown.top : TopDown.donw;
                break;
            default:
                break;
        }
        this.createWinnersList(winners);
        winnersBlock.append(sortMenu, this.createWinnersList(winners));
        const previousNext = this.el.createElement({ tag: 'div', id: 'winners__previous__next' });
        const previous = this.el.createElement({ tag: 'button', id: 'winners__previous', content: 'previous' });
        const next = this.el.createElement({ tag: 'button', id: 'winners__next', content: 'next' });
        previousNext.append(previous, next);
        winnersBlock.append(previousNext);
        btId.addEventListener('click', () => {
            this.sort.sort = Sort.id;
            this.sort.order = this.sort.order === Order.asc ? this.sort.order = Order.desc : this.sort.order = Order.asc;
            btId.textContent = this.sort.order === Order.asc ? TopDown.idTop : TopDown.idDown;
            btWins.textContent = TopDown.wins;
            btWins.textContent = TopDown.time;
            this.cars.getWinners({ page: this.sort.page, limit: this.sort.limit, sort: this.sort.sort, order: this.sort.order }).then((winnersF) => {
                const winnersList = document.getElementById('winners__list');
                if (winnersList) {
                    winnersList.remove();
                }
                const winBlock = document.getElementById('winners__block');
                if (winBlock) {
                    previousNext.before(this.createWinnersList(winnersF));
                }
            });
        });
        btWins.addEventListener('click', () => {
            this.sort.sort = Sort.wins;
            this.sort.order = this.sort.order === Order.asc ? this.sort.order = Order.desc : this.sort.order = Order.asc;
            btWins.textContent = this.sort.order === Order.asc ? TopDown.winsTop : TopDown.winsDown;
            btId.textContent = TopDown.id;
            btTime.textContent = TopDown.time;
            this.cars.getWinners({ page: this.sort.page, limit: this.sort.limit, sort: this.sort.sort, order: this.sort.order }).then((winnersF) => {
                const winnersList = document.getElementById('winners__list');
                if (winnersList) {
                    winnersList.remove();
                }
                const winBlock = document.getElementById('winners__block');
                if (winBlock) {
                    previousNext.before(this.createWinnersList(winnersF));
                }
            });
        });
        btTime.addEventListener('click', () => {
            this.sort.sort = Sort.time;
            this.sort.order = this.sort.order === Order.asc ? this.sort.order = Order.desc : this.sort.order = Order.asc;
            btTime.textContent = this.sort.order === Order.asc ? TopDown.timeTop : TopDown.timeDown;
            btId.textContent = TopDown.id;
            btWins.textContent = TopDown.wins;
            this.cars.getWinners({ page: this.sort.page, limit: this.sort.limit, sort: this.sort.sort, order: this.sort.order }).then((winnersF) => {
                const winnersList = document.getElementById('winners__list');
                if (winnersList) {
                    winnersList.remove();
                }
                const winBlock = document.getElementById('winners__block');
                if (winBlock) {
                    previousNext.before(this.createWinnersList(winnersF));
                }
            });
        });
        next.addEventListener('click', () => {
            if (this.sort.page !== maxPage) {
                this.sort.page += 1;
                p.textContent = `Page #${this.sort.page}`;
                this.cars.getWinners({ page: this.sort.page, limit: this.sort.limit, sort: this.sort.sort, order: this.sort.order }).then((winnersF) => {
                    const winnersList = document.getElementById('winners__list');
                    if (winnersList) {
                        winnersList.remove();
                    }
                    previousNext.before(this.createWinnersList(winnersF));
                });
            }
        });
        previous.addEventListener('click', () => {
            if (this.sort.page !== 1) {
                this.sort.page -= 1;
                p.textContent = `Page #${this.sort.page}`;
                this.cars.getWinners({ page: this.sort.page, limit: this.sort.limit, sort: this.sort.sort, order: this.sort.order }).then((winnersF) => {
                    const winnersList = document.getElementById('winners__list');
                    if (winnersList) {
                        winnersList.remove();
                    }
                    previousNext.before(this.createWinnersList(winnersF));
                });
            }
        });
    }
    createWinnersList(winners) {
        const winnersList = this.el.createElement({ tag: 'div', id: 'winners__list' });
        winners.forEach((winner) => {
            const winId = this.el.createElement({ tag: 'div', content: `${winner.id}` });
            const winName = this.el.createElement({ tag: 'div', content: `${winner.id}` });
            const svg = this.el.createCarSVG();
            svg.classList.add('svg__wins');
            const winWins = this.el.createElement({ tag: 'span', content: `${winner.wins}` });
            const winTime = this.el.createElement({ tag: 'span', content: `${winner.time}` });
            this.cars.getCar(winner.id).then((car) => {
                winName.textContent = car.name;
                svg.setAttribute('fill', `${car.color}`);
            });
            winnersList.append(winId, winName, svg, winWins, winTime);
        });
        return winnersList;
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
                const bt = document.getElementById(`button__start__${it.id}`);
                if (bt) {
                    bt.dispatchEvent(new Event('click'));
                    bt.disabled = true;
                }
            });
        });
        buttonReset.addEventListener('click', async () => {
            buttonRace.disabled = false;
            buttonReset.disabled = true;
            this.currentCar.forEach((it, index) => {
                const bt = document.getElementById(`button__stop__${it.id}`);
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
        img.src = SrcImages.logo;
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
            //console.log(item.id)
            const btA = this.el.createElement({
                tag: 'button',
                classNote: 'button__start',
                id: `button__start__${item.id}`,
                content: 'A',
            });
            const btB = this.el.createElement({
                tag: 'button',
                classNote: 'button__stop',
                id: `button__stop__${item.id}`,
                content: 'B',
                disable: true,
            });
            buttonDiv.append(btA, btB);
            const svg = this.el.createCarSVG();
            svg.id = `svg__${item.id}`;
            svg.setAttribute('fill', `${item.color}`);
            const image = new Image();
            image.classList.add('finish');
            image.src = SrcImages.finish;
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
                this.cars.getWinner(item.id).then((winner) => {
                    if (Object.keys(winner).length != 0) {
                        this.cars.deleteWinner(item.id);
                    }
                });
                this.cars.deleteCar(item.id);
                setTimeout(() => {
                    document.location.reload();
                }, 300);
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
                await this.cars.startEngine(item.id).then((items) => time = Math.abs(items.distance / items.velocity));
                btB.disabled = false;
                startAnimation = 0;
                window.requestAnimationFrame(drive);
                controller = new AbortController();
                await new getdata_1.GetData().drive(item.id, controller.signal).then((items) => {
                    cancelAnimationFrame(request);
                    const race = document.getElementById('race');
                    if (race) {
                        if (items.success && race.disabled && this.numberWins.length === 0) {
                            this.winnerID = item.id;
                            this.numberWins.push(item.id);
                            new getdata_1.GetData().getCar(item.id).then((singlecar) => {
                                this.cars.getWinner(singlecar.id).then((winner) => {
                                    if (Object.keys(winner).length === 0) {
                                        const newWinner = { id: singlecar.id, wins: 1, time: +(time / 1000).toFixed(2) };
                                        this.cars.createWinner(newWinner);
                                    }
                                    else {
                                        let bestTime = 0;
                                        bestTime = winner.time > +(time / 1000).toFixed(2) ? bestTime = +(time / 1000).toFixed(2) : bestTime = winner.time;
                                        const updateWinner = { wins: winner.wins + 1, time: bestTime };
                                        this.cars.updateWinner(singlecar.id, updateWinner);
                                    }
                                });
                                this.createModal(singlecar.name, +(time / 1000).toFixed(2));
                            });
                        }
                    }
                })
                    .catch(() => {
                });
            });
            btB.addEventListener('click', async () => {
                try {
                    btB.disabled = true;
                    await this.cars.stopEngine(item.id).then(() => { });
                    svg.style.marginLeft = '120px';
                    btA.disabled = false;
                    cancelAnimationFrame(request);
                    controller.abort();
                }
                catch (error) {
                    console.log(ErrorMessage.page);
                }
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
                            cars.forEach((item, index) => {
                                if (index === i) {
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
                            cars.forEach((item, index) => {
                                if (index === i) {
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
    }
    createModal(name, time) {
        const modalOverlay = this.el.createElement({ tag: 'div', id: 'modal__overlay' });
        const modal = this.el.createElement({ tag: 'div', id: 'modal' });
        const text = this.el.createElement({ tag: 'h2', content: `Winner: ${name} time: ${time}` });
        const bt = this.el.createElement({ tag: 'button', id: 'modal__bt', content: 'OK' });
        modal.append(text, bt);
        modalOverlay.append(modal);
        document.body.append(modalOverlay);
        bt.addEventListener('click', () => {
            modalOverlay.remove();
        });
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
const newPage = new page_1.Page();
newPage.createDefaultPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsMERBQXFCO0FBQ3JCLGtFQUE4QjtBQUU5QixNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBRTNCLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9lbGVtZW50LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9nZXRkYXRhLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9yYW5kb21DYXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBFbGVtZW50SW50ZXJmYWNlLCBJbnB1dEVsZW1lbnQgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgRWxlbWVudCB7XG4gIGNyZWF0ZUVsZW1lbnQoeyB0YWcsIGlkLCBjbGFzc05vdGUsIGNvbnRlbnQsIGRpc2FibGUgPSBmYWxzZSB9OiBFbGVtZW50SW50ZXJmYWNlKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICBlbC5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOb3RlKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTm90ZSk7XG4gICAgfVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBlbC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgfVxuICAgIGlmIChkaXNhYmxlKSB7XG4gICAgICAoZWwgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gZGlzYWJsZTtcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgY3JlYXRlSW5wdXQoeyB0eXBlLCBpZCwgY2xhc3NOb3RlLCB2YWx1ZSwgY29udGVudCwgbmFtZSwgZGlzYWJsZSA9IGZhbHNlIH06IElucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlbC50eXBlID0gdHlwZTtcbiAgICBlbC5kaXNhYmxlZCA9IGRpc2FibGU7XG4gICAgaWYgKGlkKSB7XG4gICAgICBlbC5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOb3RlKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTm90ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGVsLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICB9XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGVsLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBjcmVhdGVDYXJTVkcoKSB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBjb25zdCBwYXRoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIGNvbnN0IHBhdGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgY29uc3QgcGF0aDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICBjb25zdCBwYXRoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDUxMSAyMDAnKTtcbiAgICBwYXRoMS5zZXRBdHRyaWJ1dGUoXG4gICAgICAnZCcsXG4gICAgICAnTTE2MCwzMDcuNWgxMzMuNTM4YzE0LjE4MiwwLDI3LjUyNC03LjU1NCwzNC44Mi0xOS43MTVsMTQuNTAxLTI0LjE2OWMyLjI3My0zLjc4OSwxLjA0NS04LjcwMy0yLjc0NC0xMC45NzYnICtcbiAgICAgICAgJ2MtMy43ODgtMi4yNzMtOC43MDItMS4wNDUtMTAuOTc2LDIuNzQ0bC0xNC41MDEsMjQuMTY5Yy00LjQyMSw3LjM2OS0xMi41MDcsMTEuOTQ3LTIxLjEwMSwxMS45NDdIMTYwYy00LjQxOCwwLTgsMy41ODItOCw4JyArXG4gICAgICAgICdTMTU1LjU4MiwzMDcuNSwxNjAsMzA3LjV6JyxcbiAgICApO1xuICAgIHBhdGgyLnNldEF0dHJpYnV0ZShcbiAgICAgICdkJyxcbiAgICAgICdNNTA0LDMyMy41NjlWMjk5LjVjMC00OC41MjMtMzkuNDc3LTg4LTg4LTg4aC00NC4yMDljLTEyLjM5Mi05Ljc0Ny02Mi44NzQtNDgtOTEuNzkxLTQ4aC01NCAgIGMtMTEuMDAxLDAtMjEuOTA0LDEuNjY0LTMyLjQwMyw0Ljk0NWMtMC4yMDQsMC4wNjMtMC40MDQsMC4xMzUtMC42MDIsMC4yMTVsLTczLjY5MSwyOS42NzUgICBjLTExLjA3MSwzLjQyNy0yMi41Niw1LjE2NS0zNC4xNTIsNS4xNjVINTguNjg3Yy0wLjM3OS0wLjc3OC0wLjg4NC0xLjUxLTEuNTMtMi4xNTdsLTcuNzcyLTcuNzcyICAgQzU3Ljk2OSwxODkuODk3LDY0LDE4MS4zNjgsNjQsMTcxLjQ1NVYxNjMuNWMwLTQuNDE4LTMuNTgyLTgtOC04SDhjLTQuNDE4LDAtOCwzLjU4Mi04LDh2Ny45NTUgICBDMCwxODQuNzEzLDEwLjc4NywxOTUuNSwyNC4wNDUsMTk1LjVoNC42NDJsOCw4aC02LjY4NUMxNy44NywyMDMuNSw4LDIxMy4zNyw4LDIyNS41MDJWMjkxLjVjMCwxOC41MDgsMTMuMjk4LDM0LjA5NCwzMy44OCwzOS43MTQgICBDNTEuOTg5LDM0NS44Nyw2OC44ODgsMzU1LjUsODgsMzU1LjVjMTUuMjIsMCwyOS4wMzQtNi4xMTIsMzkuMTM4LTE2aDI0OS43MjNjMTAuMTA0LDkuODg4LDIzLjkxOCwxNiwzOS4xMzgsMTYgICBzMjkuMDM0LTYuMTEyLDM5LjEzOC0xNkg1MDNjNC40MTgsMCw4LTMuNTgyLDgtOEM1MTEsMzI3LjQyMSw1MDcuOTQ1LDMyNC4wNjIsNTA0LDMyMy41Njl6IE0xNiwxNzEuNWgzMiAgIGMtMC4wMjQsNC40MTYtMy42MjQsOC04LjA0NSw4aC0xNS45MUMxOS42MjQsMTc5LjUsMTYuMDI0LDE3NS45MTYsMTYsMTcxLjV6IE0zNTYuMjg3LDIxOS43NjMgICBjLTMuNTcxLDIuNTA1LTYuMjI3LDUuMTY1LTguMDU5LDcuMzM5bC0xNTAuOTgtMTQuNDY1QzIwNC4zMSwxOTkuOTY4LDIxOC45NzUsMTc5LjUsMjQwLDE3OS41aDQwICAgQzI5OC44OTEsMTc5LjUsMzM2LjMyMSwyMDQuNzI0LDM1Ni4yODcsMjE5Ljc2M3ogTTI0LDI5MS41di02NS45OThjMC0zLjMxLDIuNjkyLTYuMDAyLDYuMDAyLTYuMDAyaDU1LjE1ICAgYzEzLjMxNywwLDI2LjUxNC0yLjAxNCwzOS4yMjUtNS45ODZjMC4yMDQtMC4wNjMsMC40MDQtMC4xMzUsMC42MDItMC4yMTVsNzMuNDMzLTI5LjU3MWMtMS45OTksMi4xNDItMy45NTMsNC40MzEtNS44NSw2Ljg5OSAgIGMtOS43OTksMTIuNzU2LTE0LjgwNSwyNS40My0xNS4wMTQsMjUuOTYzYy0wLjkxMywyLjMzNi0wLjY3Nyw0Ljk2NSwwLjYzOCw3LjEwMmMxLjMxNCwyLjEzNiwzLjU1NCwzLjUzMyw2LjA1MSwzLjc3MmwxNjcsMTYgICBjMC4yOCwwLjAyNywwLjU1OSwwLjA0MSwwLjgzNSwwLjA0MWMyLjkzMSwwLDUuNTczLTEuNSw2Ljk0Mi00LjE1M2MwLjU1OS0wLjkzOSw3LjQzNS0xMS44NTEsMjQuOTg2LTExLjg1MWgzMiAgIGMzOS43MDEsMCw3MiwzMi4yOTksNzIsNzJ2MjRoLTIxLjQxNGMzLjQ2Ny03LjI3OSw1LjQxNC0xNS40MTUsNS40MTQtMjRjMC0zMC44NzgtMjUuMTIyLTU2LTU2LTU2cy01NiwyNS4xMjItNTYsNTYgICBjMCw4LjU4NSwxLjk0NywxNi43MjEsNS40MTQsMjRIMTM4LjU4NmMzLjQ2Ny03LjI3OSw1LjQxNC0xNS40MTUsNS40MTQtMjRjMC0zMC44NzgtMjUuMTIyLTU2LTU2LTU2cy01NiwyNS4xMjItNTYsNTYgICBjMCwzLjMxMywwLjMwNiw2LjU1NCwwLjg2LDkuNzExQzI3LjIxNywzMDQuNjA5LDI0LDI5OC40MjgsMjQsMjkxLjV6IE00OCwyOTkuNWMwLTIyLjA1NiwxNy45NDQtNDAsNDAtNDBzNDAsMTcuOTQ0LDQwLDQwICAgcy0xNy45NDQsNDAtNDAsNDBTNDgsMzIxLjU1Niw0OCwyOTkuNXogTTQxNiwzMzkuNWMtMjIuMDU2LDAtNDAtMTcuOTQ0LTQwLTQwczE3Ljk0NC00MCw0MC00MHM0MCwxNy45NDQsNDAsNDAgICBTNDM4LjA1NiwzMzkuNSw0MTYsMzM5LjV6JyxcbiAgICApO1xuICAgIHBhdGgzLnNldEF0dHJpYnV0ZShcbiAgICAgICdkJyxcbiAgICAgICdNMTEyLDI5MS41Yy00LjQxOCwwLTgsMy41ODItOCw4YzAsOC44MjItNy4xNzgsMTYtMTYsMTZzLTE2LTcuMTc4LTE2LTE2czcuMTc4LTE2LDE2LTE2YzQuNDE4LDAsOC0zLjU4Miw4LThzLTMuNTgyLTgtOC04ICAgYy0xNy42NDUsMC0zMiwxNC4zNTUtMzIsMzJzMTQuMzU1LDMyLDMyLDMyczMyLTE0LjM1NSwzMi0zMkMxMjAsMjk1LjA4MiwxMTYuNDE4LDI5MS41LDExMiwyOTEuNXonLFxuICAgICk7XG4gICAgcGF0aDQuc2V0QXR0cmlidXRlKFxuICAgICAgJ2QnLFxuICAgICAgJ000NDAsMjkxLjVjLTQuNDE4LDAtOCwzLjU4Mi04LDhjMCw4LjgyMi03LjE3OCwxNi0xNiwxNnMtMTYtNy4xNzgtMTYtMTZzNy4xNzgtMTYsMTYtMTZjNC40MTgsMCw4LTMuNTgyLDgtOHMtMy41ODItOC04LTggICBjLTE3LjY0NSwwLTMyLDE0LjM1NS0zMiwzMnMxNC4zNTUsMzIsMzIsMzJzMzItMTQuMzU1LDMyLTMyQzQ0OCwyOTUuMDgyLDQ0NC40MTgsMjkxLjUsNDQwLDI5MS41eicsXG4gICAgKTtcbiAgICBzdmcuYXBwZW5kKHBhdGgxLCBwYXRoMiwgcGF0aDMsIHBhdGg0KTtcbiAgICByZXR1cm4gc3ZnO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHZXRXaW5uZXJzLCBTbWFsbENhciwgVXBkYXRlV2lubmVyLCBXaW5uZXJzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZW51bSBMaW5rcyB7XG4gIHNlcnZlciA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICBnYXJhZ2UgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZScsXG4gIGVuZ2luZSA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZW5naW5lJyxcbiAgd2lubmVycyA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvd2lubmVycycsXG59XG5cbmVudW0gTWV0aG9kIHtcbiAgcG9zdCA9ICdQT1NUJyxcbiAgcHV0ID0gJ1BVVCcsXG4gIGdldCA9ICdHRVQnLFxuICBkZWxldGUgPSAnREVMRVRFJyxcbiAgcGF0Y2ggPSAnUEFUQ0gnLFxufVxuXG5lbnVtIEFyZ3VtZW50cyB7XG4gIGxpbWl0ID0gMTAsXG59XG5cbmVudW0gU3RhdHVzIHtcbiAgb2sgPSAyMDAsXG4gIHN0YXJ0ID0gJ3N0YXJ0ZWQnLFxuICBzdG9wID0gJ3N0b3BwZWQnLFxuICBkcml2ZSA9ICdkcml2ZScsXG59XG5cbmV4cG9ydCBjbGFzcyBHZXREYXRhIHtcblxuICBhc3luYyBnZXRDYXJzKCkge1xuICAgIHJldHVybiAoYXdhaXQgZmV0Y2goYCR7TGlua3MuZ2FyYWdlfWApKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyBnZXRDYXIoaWQ6IG51bWJlcikge1xuICAgIHJldHVybiAoYXdhaXQgZmV0Y2goYCR7TGlua3MuZ2FyYWdlfS8ke2lkfWApKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVDYXIoYm9keTogU21hbGxDYXIpIHtcbiAgICAoXG4gICAgICBhd2FpdCBmZXRjaChgJHtMaW5rcy5nYXJhZ2V9YCwge1xuICAgICAgICBtZXRob2Q6IE1ldGhvZC5wb3N0LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICkuanNvbigpO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlQ2FyKGlkOiBudW1iZXIpIHtcbiAgICAoYXdhaXQgZmV0Y2goYCR7TGlua3MuZ2FyYWdlfS8ke2lkfWAsIHsgbWV0aG9kOiBNZXRob2QuZGVsZXRlIH0pKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyB1cGRhdGVDYXIoaWQ6IG51bWJlciwgYm9keTogU21hbGxDYXIpIHtcbiAgICAoXG4gICAgICBhd2FpdCBmZXRjaChgJHtMaW5rcy5nYXJhZ2V9LyR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6IE1ldGhvZC5wdXQsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyBzdGFydEVuZ2luZShpZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIChhd2FpdCBmZXRjaChgJHtMaW5rcy5lbmdpbmV9P2lkPSR7aWR9JnN0YXR1cz0ke1N0YXR1cy5zdGFydH1gLCB7IG1ldGhvZDogTWV0aG9kLnBhdGNoIH0pKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyBzdG9wRW5naW5lKGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGF3YWl0IGZldGNoKGAke0xpbmtzLmVuZ2luZX0/aWQ9JHtpZH0mc3RhdHVzPSR7U3RhdHVzLnN0b3B9YCwgeyBtZXRob2Q6IE1ldGhvZC5wYXRjaCB9KSkuanNvbigpO1xuICB9XG5cbiAgYXN5bmMgZHJpdmUoaWQ6IG51bWJlciwgc2lnbmFsOiBBYm9ydFNpZ25hbCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0xpbmtzLmVuZ2luZX0/aWQ9JHtpZH0mc3RhdHVzPSR7U3RhdHVzLmRyaXZlfWAsIHsgbWV0aG9kOiBNZXRob2QucGF0Y2gsIHNpZ25hbCB9KS5jYXRjaCgpO1xuICAgIHJldHVybiByZXMuc3RhdHVzICE9PSBTdGF0dXMub2sgPyB7IHN1Y2Nlc3M6IGZhbHNlIH0gOiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfVxuXG4gIGFzeW5jIHN0b3BEcml2ZShpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TGlua3MuZW5naW5lfT9pZD0ke2lkfSZzdGF0dXM9JHtTdGF0dXMuc3RvcH1gLCB7IG1ldGhvZDogTWV0aG9kLnBhdGNoIH0pLmNhdGNoKCk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMgIT09IFN0YXR1cy5vayA/IHsgc3VjY2VzczogZmFsc2UgfSA6IHsgLi4uKGF3YWl0IHJlcy5qc29uKCkpIH07XG4gIH1cblxuICBnZXRTb3J0T3JkZXIoc29ydD86IHN0cmluZywgb3JkZXI/OiBzdHJpbmcpIHtcbiAgICBsZXQgcmVzID0gJyc7XG4gICAgaWYgKHNvcnQgJiYgb3JkZXIpIHtcbiAgICAgIHJlcyA9IGAmX3NvcnQ9JHtzb3J0fSZfb3JkZXI9JHtvcmRlcn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGFzeW5jIGdldFdpbm5lcnMoeyBwYWdlLCBsaW1pdCA9IEFyZ3VtZW50cy5saW1pdCwgc29ydCwgb3JkZXIgfTogR2V0V2lubmVycykge1xuICAgIHJldHVybiAoYXdhaXQgZmV0Y2goYCR7TGlua3Mud2lubmVyc30/X3BhZ2U9JHtwYWdlfSZfbGltaXQ9JHtsaW1pdH0ke3RoaXMuZ2V0U29ydE9yZGVyKHNvcnQsIG9yZGVyKX1gKSkuanNvbigpO1xuICB9XG5cbiAgYXN5bmMgZ2V0V2lubmVyc0NvdW50KCkge1xuICAgIHJldHVybiAoYXdhaXQgZmV0Y2goYCR7TGlua3Mud2lubmVyc31gKSkuanNvbigpO1xuICB9XG5cbiAgYXN5bmMgZ2V0V2lubmVyKGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGF3YWl0IGZldGNoKGAke0xpbmtzLndpbm5lcnN9LyR7aWR9YCkpLmpzb24oKTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZVdpbm5lcihpZDogbnVtYmVyKSB7XG4gICAgKGF3YWl0IGZldGNoKGAke0xpbmtzLndpbm5lcnN9LyR7aWR9YCwgeyBtZXRob2Q6IE1ldGhvZC5kZWxldGUgfSkpLmpzb24oKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVdpbm5lcihib2R5OiBXaW5uZXJzKSB7XG4gICAgKFxuICAgICAgYXdhaXQgZmV0Y2goYCR7TGlua3Mud2lubmVyc31gLCB7XG4gICAgICAgIG1ldGhvZDogTWV0aG9kLnBvc3QsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyB1cGRhdGVXaW5uZXIoaWQ6IG51bWJlciwgYm9keTogVXBkYXRlV2lubmVyKSB7XG4gICAgKFxuICAgICAgYXdhaXQgZmV0Y2goYCR7TGlua3Mud2lubmVyc30vJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogTWV0aG9kLnB1dCxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApLmpzb24oKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50JztcbmltcG9ydCB7IEdldERhdGEgfSBmcm9tICcuL2dldGRhdGEnO1xuaW1wb3J0IHsgQ2FyLCBFbmdpbmUsIEdldFdpbm5lcnMsIFNtYWxsQ2FyLCBVcGRhdGVXaW5uZXIsIFdpbm5lcnMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmFuZG9tQ2FyIH0gZnJvbSAnLi9yYW5kb21DYXInO1xuXG5lbnVtIFRvcERvd24ge1xuICB0b3AgPSAnIOKGkScsXG4gIGRvbncgPSAnIOKGkycsXG4gIGlkID0gJ0lkJyxcbiAgaWRUb3AgPSAnSWQg4oaRJyxcbiAgaWREb3duID0gJ0lkIOKGkycsXG4gIHdpbnMgPSAnV2lucycsXG4gIHdpbnNUb3AgPSAnV2lucyDihpEnLFxuICB3aW5zRG93biA9ICdXaW5zIOKGkycsXG4gIHRpbWUgPSAnVGltZScsXG4gIHRpbWVUb3AgPSAnVGltZSDihpEnLFxuICB0aW1lRG93biA9ICdUaW1lIOKGkycsXG59XG5cbmVudW0gU3JjSW1hZ2VzIHtcbiAgbG9nbyA9ICcuL2Fzc2V0cy9pbWFnZXMvbG9nb19yc190ZXh0LnN2ZycsXG4gIGZpbmlzaCA9ICdhc3NldHMvaW1hZ2VzL2ZpbmlzaC5wbmcnLFxufVxuXG5lbnVtIFNvcnQge1xuICBpZCA9ICdpZCcsXG4gIHdpbnMgPSAnd2lucycsXG4gIHRpbWUgPSAndGltZScsXG59XG5cbmVudW0gT3JkZXIge1xuICBhc2MgPSAnQVNDJyxcbiAgZGVzYyA9ICdERVNDJyxcbn1cblxuZW51bSBBcmd1bWVudHMge1xuICBwYWdlID0gMSxcbiAgbGltaXQgPSAxMCxcbn1cblxuZW51bSBFcnJvck1lc3NhZ2Uge1xuICBwYWdlID0gJ9Cd0LUg0L3QsCDRgtC+0Lkg0YHRgtGA0LDQvdC40YbQtSDQstC10YDQvdGD0LvQuCDQvNCw0YjQuNC90Ysg0LIg0LPQsNGA0LDQtiEg0J/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0LUg0YHRgtGA0LDQvdC40YbRgyEnLFxufVxuXG5leHBvcnQgY2xhc3MgUGFnZSB7XG5cbiAgcHJpdmF0ZSBzb3J0OiBHZXRXaW5uZXJzID0ge1xuICAgIHBhZ2U6IEFyZ3VtZW50cy5wYWdlLFxuICAgIGxpbWl0OiBBcmd1bWVudHMubGltaXQsXG4gICAgc29ydDogU29ydC5pZCxcbiAgICBvcmRlcjogT3JkZXIuYXNjLFxuICB9O1xuXG4gIHByaXZhdGUgY2FycyA9IG5ldyBHZXREYXRhKCk7XG5cbiAgcHJpdmF0ZSBlbCA9IG5ldyBFbGVtZW50KCk7XG5cbiAgcHJpdmF0ZSBudW1iZXJXaW5zOiBudW1iZXJbXSA9IFtdO1xuXG4gIHByaXZhdGUgY3VycmVudENhcjogQ2FyW10gPSBbXTtcblxuICBwcml2YXRlIHJhbmRvbUNhciA9IG5ldyBSYW5kb21DYXIoKTtcblxuICBwcml2YXRlIHdpbm5lcklEID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBjYXJzTGlzdCA9IHRoaXMuY2Fycy5nZXRDYXJzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGNhcnNMaXN0LnRoZW4oKGNhcnM6IENhcltdKSA9PiB7XG4gICAgICAgIGNhcnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENhci5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVEZWZhdWx0UGFnZSgpIHtcbiAgICB0aGlzLmNyZWF0ZUhlYWRlcigpO1xuICAgIHRoaXMuY3JlYXRlTWFpbigpO1xuICAgIHRoaXMuY3JlYXRlRm9vdGVyKCk7XG4gIH1cblxuICBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnaGVhZGVyJyB9KTtcbiAgICBjb25zdCBoMSA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2gxJywgY29udGVudDogJ0FzeW5jIFJhY2UnIH0pO1xuICAgIGNvbnN0IG5hdiA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ25hdicgfSk7XG4gICAgY29uc3QgYnV0dG9uR2FyYWdlID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICdidXR0b25fX2dhcmFnZScsIGNvbnRlbnQ6ICdUbyBHYXJhZ2UnIH0pO1xuICAgIGNvbnN0IGJ1dHRvbldpbm5lcnMgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdidXR0b24nLCBpZDogJ2J1dHRvbl9fd2lubmVycycsIGNvbnRlbnQ6ICdUbyBXaW5uZXJzJyB9KTtcbiAgICBuYXYuYXBwZW5kKGJ1dHRvbkdhcmFnZSwgYnV0dG9uV2lubmVycyk7XG4gICAgYnV0dG9uV2lubmVycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIChidXR0b25XaW5uZXJzIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmNhcnMuZ2V0V2lubmVycyh7IHBhZ2U6IHRoaXMuc29ydC5wYWdlLCBsaW1pdDogdGhpcy5zb3J0LmxpbWl0LCBzb3J0OiB0aGlzLnNvcnQuc29ydCwgb3JkZXI6IHRoaXMuc29ydC5vcmRlciB9KS50aGVuKCh3aW5uZXJzOiBXaW5uZXJzW10pID0+IHtcbiAgICAgICAgdGhpcy5jcmVhdGVXaW5uZXJzKHdpbm5lcnMpO1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXTtcbiAgICAgICAgaWYgKG1haW4pIHtcbiAgICAgICAgICBtYWluLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgfSk7XG4gICAgaGVhZGVyLmFwcGVuZChoMSwgbmF2KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIpO1xuICAgIGJ1dHRvbkdhcmFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIChidXR0b25XaW5uZXJzIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF07XG4gICAgICBpZiAobWFpbikge1xuICAgICAgICBtYWluLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3Qgd2lubmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXJzX19ibG9jaycpO1xuICAgICAgaWYgKHdpbm5lcnMpIHtcbiAgICAgICAgd2lubmVycy5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVdpbm5lcnMod2lubmVyczogV2lubmVyc1tdKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWRlcicpWzBdO1xuICAgIGNvbnN0IHdpbm5lcnNCbG9jayA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnd2lubmVyc19fYmxvY2snIH0pO1xuICAgIGhlYWRlci5hZnRlcih3aW5uZXJzQmxvY2spO1xuICAgIGxldCBtYXhQYWdlID0gMDtcbiAgICBjb25zdCBoMiA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2gyJywgaWQ6ICd3aW5uZXJzX190ZXh0JywgY29udGVudDogYFdpbm5lcnMgKCR7d2lubmVycy5sZW5ndGh9KWAgfSk7XG4gICAgdGhpcy5jYXJzLmdldFdpbm5lcnNDb3VudCgpLnRoZW4oKGxlbmc6IFdpbm5lcnNbXSkgPT4ge1xuICAgICAgaDIudGV4dENvbnRlbnQgPSBgV2lubmVycyAoJHtsZW5nLmxlbmd0aH0pYDtcbiAgICAgIG1heFBhZ2UgPSBNYXRoLmNlaWwobGVuZy5sZW5ndGggLyAxMCk7XG4gICAgfSk7XG4gICAgY29uc3QgcCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ3AnLCBpZDogJ3BhZ2UnLCBjb250ZW50OiBgUGFnZSAjJHt0aGlzLnNvcnQucGFnZX1gIH0pO1xuICAgIHdpbm5lcnNCbG9jay5hcHBlbmQoaDIsIHApO1xuICAgIGNvbnN0IHNvcnRNZW51ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgaWQ6ICdzb3J0X19saXN0JyB9KTtcbiAgICBjb25zdCBidElkID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICdidXR0b25fX2lkJywgY29udGVudDogVG9wRG93bi5pZCB9KTtcbiAgICBjb25zdCBidE5hbWUgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdidXR0b24nLCBpZDogJ2J1dHRvbl9fbmFtZScsIGNvbnRlbnQ6ICdOYW1lJywgZGlzYWJsZTogdHJ1ZSB9KTtcbiAgICBjb25zdCBidENhciA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGlkOiAnYnV0dG9uX19jYXInLCBjb250ZW50OiAnQ2FyJywgZGlzYWJsZTogdHJ1ZSB9KTtcbiAgICBjb25zdCBidFdpbnMgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdidXR0b24nLCBpZDogJ2J1dHRvbl9fd2lucycsIGNvbnRlbnQ6IFRvcERvd24ud2lucyB9KTtcbiAgICBjb25zdCBidFRpbWUgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdidXR0b24nLCBpZDogJ2J1dHRvbl9fdGltZScsIGNvbnRlbnQ6IFRvcERvd24udGltZSB9KTtcblxuICAgIHNvcnRNZW51LmFwcGVuZChidElkLCBidE5hbWUsIGJ0Q2FyLCBidFdpbnMsIGJ0VGltZSk7XG4gICAgc3dpdGNoICh0aGlzLnNvcnQuc29ydCkge1xuICAgICAgY2FzZSBTb3J0LmlkOiBcbiAgICAgICAgYnRJZC50ZXh0Q29udGVudCArPSB0aGlzLnNvcnQub3JkZXIgPT09IE9yZGVyLmFzYyA/IFRvcERvd24udG9wIDogVG9wRG93bi5kb253O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU29ydC53aW5zOlxuICAgICAgICBidFdpbnMudGV4dENvbnRlbnQgKz0gdGhpcy5zb3J0Lm9yZGVyID09PSBPcmRlci5hc2MgPyBUb3BEb3duLnRvcCA6IFRvcERvd24uZG9udztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNvcnQudGltZTpcbiAgICAgICAgYnRUaW1lLnRleHRDb250ZW50ICs9IHRoaXMuc29ydC5vcmRlciA9PT0gT3JkZXIuYXNjID8gVG9wRG93bi50b3AgOiBUb3BEb3duLmRvbnc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVXaW5uZXJzTGlzdCh3aW5uZXJzKTtcbiAgICB3aW5uZXJzQmxvY2suYXBwZW5kKHNvcnRNZW51LCB0aGlzLmNyZWF0ZVdpbm5lcnNMaXN0KHdpbm5lcnMpKTtcblxuICAgIGNvbnN0IHByZXZpb3VzTmV4dCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnd2lubmVyc19fcHJldmlvdXNfX25leHQnIH0pO1xuICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICd3aW5uZXJzX19wcmV2aW91cycsIGNvbnRlbnQ6ICdwcmV2aW91cycgfSk7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGlkOiAnd2lubmVyc19fbmV4dCcsIGNvbnRlbnQ6ICduZXh0JyB9KTtcbiAgICBwcmV2aW91c05leHQuYXBwZW5kKHByZXZpb3VzLCBuZXh0KTtcbiAgICB3aW5uZXJzQmxvY2suYXBwZW5kKHByZXZpb3VzTmV4dCk7XG5cbiAgICBidElkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zb3J0LnNvcnQgPSBTb3J0LmlkO1xuICAgICAgdGhpcy5zb3J0Lm9yZGVyID0gdGhpcy5zb3J0Lm9yZGVyID09PSBPcmRlci5hc2MgPyB0aGlzLnNvcnQub3JkZXIgPSBPcmRlci5kZXNjIDogdGhpcy5zb3J0Lm9yZGVyID0gT3JkZXIuYXNjO1xuICAgICAgYnRJZC50ZXh0Q29udGVudCA9IHRoaXMuc29ydC5vcmRlciA9PT0gT3JkZXIuYXNjID8gVG9wRG93bi5pZFRvcCA6IFRvcERvd24uaWREb3duO1xuICAgICAgYnRXaW5zLnRleHRDb250ZW50ID0gVG9wRG93bi53aW5zO1xuICAgICAgYnRXaW5zLnRleHRDb250ZW50ID0gVG9wRG93bi50aW1lO1xuICAgICAgdGhpcy5jYXJzLmdldFdpbm5lcnMoeyBwYWdlOiB0aGlzLnNvcnQucGFnZSwgbGltaXQ6IHRoaXMuc29ydC5saW1pdCwgc29ydDogdGhpcy5zb3J0LnNvcnQsIG9yZGVyOiB0aGlzLnNvcnQub3JkZXIgfSkudGhlbigod2lubmVyc0Y6IFdpbm5lcnNbXSkgPT4ge1xuICAgICAgICBjb25zdCB3aW5uZXJzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXJzX19saXN0Jyk7XG4gICAgICAgIGlmICh3aW5uZXJzTGlzdCkge1xuICAgICAgICAgIHdpbm5lcnNMaXN0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpbkJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lcnNfX2Jsb2NrJyk7XG4gICAgICAgIGlmICh3aW5CbG9jaykge1xuICAgICAgICAgIHByZXZpb3VzTmV4dC5iZWZvcmUodGhpcy5jcmVhdGVXaW5uZXJzTGlzdCh3aW5uZXJzRikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGJ0V2lucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc29ydC5zb3J0ID0gU29ydC53aW5zO1xuICAgICAgdGhpcy5zb3J0Lm9yZGVyID0gdGhpcy5zb3J0Lm9yZGVyID09PSBPcmRlci5hc2MgPyB0aGlzLnNvcnQub3JkZXIgPSBPcmRlci5kZXNjIDogdGhpcy5zb3J0Lm9yZGVyID0gT3JkZXIuYXNjO1xuICAgICAgYnRXaW5zLnRleHRDb250ZW50ID0gdGhpcy5zb3J0Lm9yZGVyID09PSBPcmRlci5hc2MgPyBUb3BEb3duLndpbnNUb3AgOiBUb3BEb3duLndpbnNEb3duO1xuICAgICAgYnRJZC50ZXh0Q29udGVudCA9IFRvcERvd24uaWQ7XG4gICAgICBidFRpbWUudGV4dENvbnRlbnQgPSBUb3BEb3duLnRpbWU7XG4gICAgICB0aGlzLmNhcnMuZ2V0V2lubmVycyh7IHBhZ2U6IHRoaXMuc29ydC5wYWdlLCBsaW1pdDogdGhpcy5zb3J0LmxpbWl0LCBzb3J0OiB0aGlzLnNvcnQuc29ydCwgb3JkZXI6IHRoaXMuc29ydC5vcmRlciB9KS50aGVuKCh3aW5uZXJzRjogV2lubmVyc1tdKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpbm5lcnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lcnNfX2xpc3QnKTtcbiAgICAgICAgaWYgKHdpbm5lcnNMaXN0KSB7XG4gICAgICAgICAgd2lubmVyc0xpc3QucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2luQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyc19fYmxvY2snKTtcbiAgICAgICAgaWYgKHdpbkJsb2NrKSB7XG4gICAgICAgICAgcHJldmlvdXNOZXh0LmJlZm9yZSh0aGlzLmNyZWF0ZVdpbm5lcnNMaXN0KHdpbm5lcnNGKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYnRUaW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zb3J0LnNvcnQgPSBTb3J0LnRpbWU7XG4gICAgICB0aGlzLnNvcnQub3JkZXIgPSB0aGlzLnNvcnQub3JkZXIgPT09IE9yZGVyLmFzYyA/IHRoaXMuc29ydC5vcmRlciA9IE9yZGVyLmRlc2MgOiB0aGlzLnNvcnQub3JkZXIgPSBPcmRlci5hc2M7XG4gICAgICBidFRpbWUudGV4dENvbnRlbnQgPSB0aGlzLnNvcnQub3JkZXIgPT09IE9yZGVyLmFzYyA/IFRvcERvd24udGltZVRvcCA6IFRvcERvd24udGltZURvd247XG4gICAgICBidElkLnRleHRDb250ZW50ID0gVG9wRG93bi5pZDtcbiAgICAgIGJ0V2lucy50ZXh0Q29udGVudCA9IFRvcERvd24ud2lucztcbiAgICAgIHRoaXMuY2Fycy5nZXRXaW5uZXJzKHsgcGFnZTogdGhpcy5zb3J0LnBhZ2UsIGxpbWl0OiB0aGlzLnNvcnQubGltaXQsIHNvcnQ6IHRoaXMuc29ydC5zb3J0LCBvcmRlcjogdGhpcy5zb3J0Lm9yZGVyIH0pLnRoZW4oKHdpbm5lcnNGOiBXaW5uZXJzW10pID0+IHtcbiAgICAgICAgY29uc3Qgd2lubmVyc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyc19fbGlzdCcpO1xuICAgICAgICBpZiAod2lubmVyc0xpc3QpIHtcbiAgICAgICAgICB3aW5uZXJzTGlzdC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3aW5CbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXJzX19ibG9jaycpO1xuICAgICAgICBpZiAod2luQmxvY2spIHtcbiAgICAgICAgICBwcmV2aW91c05leHQuYmVmb3JlKHRoaXMuY3JlYXRlV2lubmVyc0xpc3Qod2lubmVyc0YpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc29ydC5wYWdlICE9PSBtYXhQYWdlKSB7XG4gICAgICAgIHRoaXMuc29ydC5wYWdlICs9IDE7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgUGFnZSAjJHt0aGlzLnNvcnQucGFnZX1gO1xuICAgICAgICB0aGlzLmNhcnMuZ2V0V2lubmVycyh7IHBhZ2U6IHRoaXMuc29ydC5wYWdlLCBsaW1pdDogdGhpcy5zb3J0LmxpbWl0LCBzb3J0OiB0aGlzLnNvcnQuc29ydCwgb3JkZXI6IHRoaXMuc29ydC5vcmRlciB9KS50aGVuKCh3aW5uZXJzRjogV2lubmVyc1tdKSA9PiB7XG4gICAgICAgICAgY29uc3Qgd2lubmVyc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyc19fbGlzdCcpO1xuICAgICAgICAgIGlmICh3aW5uZXJzTGlzdCkge1xuICAgICAgICAgICAgd2lubmVyc0xpc3QucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHByZXZpb3VzTmV4dC5iZWZvcmUodGhpcy5jcmVhdGVXaW5uZXJzTGlzdCh3aW5uZXJzRikpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByZXZpb3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc29ydC5wYWdlICE9PSAxKSB7XG4gICAgICAgIHRoaXMuc29ydC5wYWdlIC09IDE7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgUGFnZSAjJHt0aGlzLnNvcnQucGFnZX1gO1xuICAgICAgICB0aGlzLmNhcnMuZ2V0V2lubmVycyh7IHBhZ2U6IHRoaXMuc29ydC5wYWdlLCBsaW1pdDogdGhpcy5zb3J0LmxpbWl0LCBzb3J0OiB0aGlzLnNvcnQuc29ydCwgb3JkZXI6IHRoaXMuc29ydC5vcmRlciB9KS50aGVuKCh3aW5uZXJzRjogV2lubmVyc1tdKSA9PiB7XG4gICAgICAgICAgY29uc3Qgd2lubmVyc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyc19fbGlzdCcpO1xuICAgICAgICAgIGlmICh3aW5uZXJzTGlzdCkge1xuICAgICAgICAgICAgd2lubmVyc0xpc3QucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHByZXZpb3VzTmV4dC5iZWZvcmUodGhpcy5jcmVhdGVXaW5uZXJzTGlzdCh3aW5uZXJzRikpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVdpbm5lcnNMaXN0KHdpbm5lcnM6IFdpbm5lcnNbXSkge1xuICAgIGNvbnN0IHdpbm5lcnNMaXN0ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgaWQ6ICd3aW5uZXJzX19saXN0JyB9KTtcbiAgICB3aW5uZXJzLmZvckVhY2goKHdpbm5lcikgPT4ge1xuICAgICAgY29uc3Qgd2luSWQgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBjb250ZW50OiBgJHt3aW5uZXIuaWR9YCB9KTtcbiAgICAgIGNvbnN0IHdpbk5hbWUgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBjb250ZW50OiBgJHt3aW5uZXIuaWR9YCB9KTtcbiAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuZWwuY3JlYXRlQ2FyU1ZHKCk7XG4gICAgICBzdmcuY2xhc3NMaXN0LmFkZCgnc3ZnX193aW5zJyk7XG4gICAgICBjb25zdCB3aW5XaW5zID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnc3BhbicsIGNvbnRlbnQ6IGAke3dpbm5lci53aW5zfWAgfSk7XG4gICAgICBjb25zdCB3aW5UaW1lID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnc3BhbicsIGNvbnRlbnQ6IGAke3dpbm5lci50aW1lfWAgfSk7XG4gICAgICB0aGlzLmNhcnMuZ2V0Q2FyKHdpbm5lci5pZCkudGhlbigoY2FyOiBDYXIpID0+IHtcbiAgICAgICAgd2luTmFtZS50ZXh0Q29udGVudCA9IGNhci5uYW1lO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgYCR7Y2FyLmNvbG9yfWApO1xuICAgICAgfSk7XG4gICAgICB3aW5uZXJzTGlzdC5hcHBlbmQod2luSWQsIHdpbk5hbWUsIHN2Zywgd2luV2lucywgd2luVGltZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHdpbm5lcnNMaXN0O1xuICB9XG5cbiAgY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW4pO1xuICAgIHRoaXMuY3JlYXRlU2V0dGluZygpO1xuICAgIHRoaXMuY3JlYXRlQ2Fyc0xpc3QoKTtcbiAgfVxuXG4gIGNyZWF0ZVNldHRpbmcoKSB7XG4gICAgY29uc3Qgc2V0dGluZyA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnc2V0dGluZycgfSk7XG4gICAgY29uc3QgYnV0dG9uTWVudTEgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBjbGFzc05vdGU6ICdidXR0b25fX21lbnUnIH0pO1xuICAgIGNvbnN0IGlucHV0Q3JlYXRlID0gdGhpcy5lbC5jcmVhdGVJbnB1dCh7IHR5cGU6ICd0ZXh0JywgaWQ6ICdpbnB1dF9fY3JlYXRlJyB9KTtcbiAgICBjb25zdCBpbnB1dENyZWF0ZUNvbG9yID0gdGhpcy5lbC5jcmVhdGVJbnB1dCh7XG4gICAgICB0eXBlOiAnY29sb3InLFxuICAgICAgaWQ6ICdpbnB1dF9fY3JlYXRlX19jb2xvcicsXG4gICAgICBuYW1lOiAnY29sb3InLFxuICAgICAgdmFsdWU6ICcjZmZmZmZmJyxcbiAgICB9KTtcbiAgICBjb25zdCBidXR0b25DcmVhdGUgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdidXR0b24nLCBpZDogJ2J1dHRvbl9fY3JlYXRlJywgY29udGVudDogJ0NSRUFURScgfSk7XG4gICAgYnV0dG9uTWVudTEuYXBwZW5kKGlucHV0Q3JlYXRlLCBpbnB1dENyZWF0ZUNvbG9yLCBidXR0b25DcmVhdGUpO1xuICAgIGNvbnN0IGJ1dHRvbk1lbnUyID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xhc3NOb3RlOiAnYnV0dG9uX19tZW51JyB9KTtcbiAgICBjb25zdCBpbnB1dFVwZGF0ZSA9IHRoaXMuZWwuY3JlYXRlSW5wdXQoeyB0eXBlOiAndGV4dCcsIGlkOiAnaW5wdXRfX3VwZGF0ZScsIGRpc2FibGU6IHRydWUgfSk7XG4gICAgY29uc3QgaW5wdXRVcGRhdGVDb2xvciA9IHRoaXMuZWwuY3JlYXRlSW5wdXQoe1xuICAgICAgdHlwZTogJ2NvbG9yJyxcbiAgICAgIGlkOiAnaW5wdXRfX3VwZGF0ZV9fY29sb3InLFxuICAgICAgbmFtZTogJ2NvbG9yJyxcbiAgICAgIHZhbHVlOiAnI2ZmZmZmZicsXG4gICAgICBkaXNhYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnN0IGJ1dHRvblVwZGF0ZSA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7XG4gICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgaWQ6ICdidXR0b25fX3VwZGF0ZScsXG4gICAgICBjb250ZW50OiAnVVBEQVRFJyxcbiAgICAgIGRpc2FibGU6IHRydWUsXG4gICAgfSk7XG4gICAgYnV0dG9uTWVudTIuYXBwZW5kKGlucHV0VXBkYXRlLCBpbnB1dFVwZGF0ZUNvbG9yLCBidXR0b25VcGRhdGUpO1xuICAgIGNvbnN0IGJ1dHRvbk1lbnUzID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xhc3NOb3RlOiAnYnV0dG9uX19tZW51JyB9KTtcbiAgICBjb25zdCBidXR0b25SYWNlID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICdyYWNlJywgY29udGVudDogJ1JBQ0UnIH0pO1xuICAgIGNvbnN0IGJ1dHRvblJlc2V0ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICdyZXNldCcsIGNvbnRlbnQ6ICdSRVNFVCcsIGRpc2FibGU6IHRydWUgfSk7XG4gICAgY29uc3QgYnV0dG9uR2VuZXJhdGUgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdidXR0b24nLCBjb250ZW50OiAnR0VORVJBVEUgQ0FSUycgfSk7XG4gICAgYnV0dG9uTWVudTMuYXBwZW5kKGJ1dHRvblJhY2UsIGJ1dHRvblJlc2V0LCBidXR0b25HZW5lcmF0ZSk7XG4gICAgc2V0dGluZy5hcHBlbmQoYnV0dG9uTWVudTEsIGJ1dHRvbk1lbnUyLCBidXR0b25NZW51Myk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5hcHBlbmQoc2V0dGluZyk7XG5cbiAgICBidXR0b25DcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoaW5wdXRDcmVhdGUpIHtcbiAgICAgICAgaWYgKGlucHV0Q3JlYXRlLnZhbHVlLnRyaW0oKSAhPSAnJykge1xuICAgICAgICAgIGNvbnN0IG5ld0NhcjogU21hbGxDYXIgPSB7XG4gICAgICAgICAgICBuYW1lOiBpbnB1dENyZWF0ZS52YWx1ZSxcbiAgICAgICAgICAgIGNvbG9yOiBpbnB1dENyZWF0ZUNvbG9yLnZhbHVlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5jYXJzLmNyZWF0ZUNhcihuZXdDYXIpO1xuICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBidXR0b25VcGRhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoaW5wdXRVcGRhdGUpIHtcbiAgICAgICAgaWYgKGlucHV0VXBkYXRlLnZhbHVlLnRyaW0oKSAhPSAnJykge1xuICAgICAgICAgIGNvbnN0IG5ld0NhcjogU21hbGxDYXIgPSB7XG4gICAgICAgICAgICBuYW1lOiBpbnB1dFVwZGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIGNvbG9yOiBpbnB1dFVwZGF0ZUNvbG9yLnZhbHVlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5jYXJzLnVwZGF0ZUNhcihOdW1iZXIoaW5wdXRVcGRhdGUudGV4dENvbnRlbnQpLCBuZXdDYXIpO1xuICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBidXR0b25HZW5lcmF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGNhcnMgPSB0aGlzLnJhbmRvbUNhci5yYW5kb21DYXJzKCk7XG4gICAgICAoYnV0dG9uR2VuZXJhdGUgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGNhcnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICB0aGlzLmNhcnMuY3JlYXRlQ2FyKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9LCAzMDApO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uUmFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIChidXR0b25SYWNlIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLm51bWJlcldpbnMgPSBbXTtcbiAgICAgIChidXR0b25SZXNldCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY3VycmVudENhci5mb3JFYWNoKChpdCkgPT4ge1xuICAgICAgICBjb25zdCBidCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidXR0b25fX3N0YXJ0X18ke2l0LmlkfWApO1xuICAgICAgICBpZiAoYnQpIHtcbiAgICAgICAgICBidC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICAgICAgKGJ0IGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAoYnV0dG9uUmFjZSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIChidXR0b25SZXNldCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jdXJyZW50Q2FyLmZvckVhY2goKGl0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBidCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidXR0b25fX3N0b3BfXyR7aXQuaWR9YCk7XG4gICAgICAgIGlmIChidCkge1xuICAgICAgICAgIGJ0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgICAgICAoYnQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZm9vdGVyJyB9KTtcbiAgICBjb25zdCBjb250ZW50SW1hZ2UgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnIH0pO1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdhJyB9KTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gU3JjSW1hZ2VzLmxvZ287XG4gICAgY29uc3QgbGlua0dpdCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2EnLCBjbGFzc05vdGU6ICdmb290ZXJfX2dpdCcsIGNvbnRlbnQ6ICdiYWxheG9uIDIwMjMnIH0pO1xuICAgIChsaW5rR2l0IGFzIEhUTUxBbmNob3JFbGVtZW50KS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9iYWxheG9uJztcbiAgICBsaW5rLmFwcGVuZChpbWcpO1xuICAgIGNvbnRlbnRJbWFnZS5hcHBlbmQobGluayk7XG4gICAgZm9vdGVyLmFwcGVuZChjb250ZW50SW1hZ2UsIGxpbmtHaXQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGZvb3Rlcik7XG4gIH1cblxuICBjcmVhdGVDYXJzTGlzdCgpIHtcbiAgICBjb25zdCBjYXJzTGlzdCA9IHRoaXMuY2Fycy5nZXRDYXJzKCk7XG4gICAgY2Fyc0xpc3QudGhlbigoY2FyczpDYXJbXSkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVDYXJGcm9tRGF0YShjYXJzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNhckZyb21EYXRhKGNhcjogQ2FyW10pIHtcbiAgICBjb25zdCBtYXhQYWdlID0gTWF0aC5jZWlsKGNhci5sZW5ndGggLyA3KTtcbiAgICBsZXQgcGFnZSA9IDE7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF07XG4gICAgY29uc3QgaDIgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdoMicsIGlkOiAnZ2FyYWdlX190ZXh0JywgY29udGVudDogYEdhcmFnZSAoJHtjYXIubGVuZ3RofSlgIH0pO1xuICAgIGNvbnN0IHAgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdwJywgaWQ6ICdwYWdlJywgY29udGVudDogYFBhZ2UgIyR7cGFnZX1gIH0pO1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnY2FyZF9fbGlzdCcgfSk7XG4gICAgbWFpbi5hcHBlbmQoaDIsIHAsIGRpdik7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGNhci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2FyQ2FyZCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnY2FyX19jYXJkJyB9KTtcbiAgICAgIGNvbnN0IGZpcnN0RGl2ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JyB9KTtcbiAgICAgIGNvbnN0IGJ0U2VsZWN0ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgY29udGVudDogJ1NFTEVDVCcgfSk7XG4gICAgICBjb25zdCBidFJlbW92ZSA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGNvbnRlbnQ6ICdSRU1PVkUnIH0pO1xuICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ3NwYW4nLCBjb250ZW50OiBgJHtpdGVtLm5hbWV9YCB9KTtcbiAgICAgIGNvbnN0IHRyYWNrID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xhc3NOb3RlOiAndHJhY2snIH0pO1xuICAgICAgY29uc3QgYnV0dG9uRGl2ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgaWQ6ICdzdGFydF9fc3RvcCcgfSk7XG4gICAgICAvL2NvbnNvbGUubG9nKGl0ZW0uaWQpXG4gICAgICBjb25zdCBidEEgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05vdGU6ICdidXR0b25fX3N0YXJ0JyxcbiAgICAgICAgaWQ6IGBidXR0b25fX3N0YXJ0X18ke2l0ZW0uaWR9YCxcbiAgICAgICAgY29udGVudDogJ0EnLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBidEIgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05vdGU6ICdidXR0b25fX3N0b3AnLFxuICAgICAgICBpZDogYGJ1dHRvbl9fc3RvcF9fJHtpdGVtLmlkfWAsXG4gICAgICAgIGNvbnRlbnQ6ICdCJyxcbiAgICAgICAgZGlzYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgYnV0dG9uRGl2LmFwcGVuZChidEEsIGJ0Qik7XG4gICAgICBjb25zdCBzdmcgPSB0aGlzLmVsLmNyZWF0ZUNhclNWRygpO1xuICAgICAgc3ZnLmlkID0gYHN2Z19fJHtpdGVtLmlkfWA7XG4gICAgICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgYCR7aXRlbS5jb2xvcn1gKTtcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdmaW5pc2gnKTtcbiAgICAgIGltYWdlLnNyYyA9IFNyY0ltYWdlcy5maW5pc2g7XG4gICAgICBmaXJzdERpdi5hcHBlbmQoYnRTZWxlY3QsIGJ0UmVtb3ZlLCBzcGFuKTtcbiAgICAgIHRyYWNrLmFwcGVuZChidXR0b25EaXYsIHN2ZywgaW1hZ2UpO1xuICAgICAgY2FyQ2FyZC5hcHBlbmQoZmlyc3REaXYsIHRyYWNrKTtcbiAgICAgIGJ0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF9fdXBkYXRlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgaW5wdXQudGV4dENvbnRlbnQgPSBpdGVtLmlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF9fdXBkYXRlX19jb2xvcicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgIGNvbG9yLnZhbHVlID0gaXRlbS5jb2xvcjtcbiAgICAgICAgICBjb2xvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25fX3VwZGF0ZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYnRSZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2Fycy5nZXRXaW5uZXIoaXRlbS5pZCkudGhlbigod2lubmVyOiBXaW5uZXJzKSA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHdpbm5lcikubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2Fycy5kZWxldGVXaW5uZXIoaXRlbS5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYXJzLmRlbGV0ZUNhcihpdGVtLmlkKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICAgIFxuICAgICAgfSk7XG5cbiAgICAgIGxldCByZXF1ZXN0ID0gMDtcbiAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICBsZXQgdGltZSA9IDA7XG4gICAgICBsZXQgc3RhcnRBbmltYXRpb24gPSAwO1xuICAgICAgZnVuY3Rpb24gZHJpdmUodGltZXM6IG51bWJlcikge1xuICAgICAgICBpZiAoc3RhcnRBbmltYXRpb24gPT09IDApIHtcbiAgICAgICAgICBzdGFydEFuaW1hdGlvbiA9IHRpbWVzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gKHRpbWVzIC0gc3RhcnRBbmltYXRpb24pIC8gdGltZTtcbiAgICAgICAgc3ZnLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHsxMjAgKyBwcm9ncmVzcyAqIHdpZHRofXB4YDtcbiAgICAgICAgaWYgKHByb2dyZXNzIDwgMSkge1xuICAgICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJpdmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgY29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyO1xuXG4gICAgICBidEEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIChidEEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgY2FyZGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZF9fbGlzdCcpO1xuICAgICAgICB3aWR0aCA9IDA7XG4gICAgICAgIGlmIChjYXJkbGlzdCkge1xuICAgICAgICAgIHdpZHRoID0gK2NhcmRsaXN0Lm9mZnNldFdpZHRoIC0gMjMwO1xuICAgICAgICB9XG4gICAgICAgIHRpbWUgPSAwO1xuICAgICAgICBhd2FpdCB0aGlzLmNhcnMuc3RhcnRFbmdpbmUoaXRlbS5pZCkudGhlbigoaXRlbXM6IEVuZ2luZSkgPT4gdGltZSA9IE1hdGguYWJzKGl0ZW1zLmRpc3RhbmNlIC8gaXRlbXMudmVsb2NpdHkpKTtcbiAgICAgICAgKGJ0QiBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgc3RhcnRBbmltYXRpb24gPSAwO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyaXZlKTtcbiAgICAgICAgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgYXdhaXQgbmV3IEdldERhdGEoKS5kcml2ZShpdGVtLmlkLCBjb250cm9sbGVyLnNpZ25hbCkudGhlbigoaXRlbXMpID0+IHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0KTtcbiAgICAgICAgICBjb25zdCByYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhY2UnKTtcbiAgICAgICAgICBpZiAocmFjZSkge1xuICAgICAgICAgICAgaWYgKGl0ZW1zLnN1Y2Nlc3MgJiYgKHJhY2UgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkICYmIHRoaXMubnVtYmVyV2lucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy53aW5uZXJJRCA9IGl0ZW0uaWQ7XG4gICAgICAgICAgICAgIHRoaXMubnVtYmVyV2lucy5wdXNoKGl0ZW0uaWQpO1xuICAgICAgICAgICAgICBuZXcgR2V0RGF0YSgpLmdldENhcihpdGVtLmlkKS50aGVuKChzaW5nbGVjYXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnMuZ2V0V2lubmVyKHNpbmdsZWNhci5pZCkudGhlbigod2lubmVyOiBXaW5uZXJzKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMod2lubmVyKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3V2lubmVyOiBXaW5uZXJzID0geyBpZDogc2luZ2xlY2FyLmlkLCB3aW5zOiAxLCB0aW1lOiArKHRpbWUgLyAxMDAwKS50b0ZpeGVkKDIpIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2Fycy5jcmVhdGVXaW5uZXIobmV3V2lubmVyKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiZXN0VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RUaW1lID0gd2lubmVyLnRpbWUgPiArKHRpbWUgLyAxMDAwKS50b0ZpeGVkKDIpID8gYmVzdFRpbWUgPSArKHRpbWUgLyAxMDAwKS50b0ZpeGVkKDIpIDogYmVzdFRpbWUgPSB3aW5uZXIudGltZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlV2lubmVyOiBVcGRhdGVXaW5uZXIgPSB7IHdpbnM6IHdpbm5lci53aW5zICsgMSwgdGltZTogYmVzdFRpbWUgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJzLnVwZGF0ZVdpbm5lcihzaW5nbGVjYXIuaWQsIHVwZGF0ZVdpbm5lcik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb2RhbChzaW5nbGVjYXIubmFtZSwgKyh0aW1lIC8gMTAwMCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGJ0Qi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAoYnRCIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5jYXJzLnN0b3BFbmdpbmUoaXRlbS5pZCkudGhlbigoKSA9PiB7fSk7XG4gICAgICAgICAgc3ZnLnN0eWxlLm1hcmdpbkxlZnQgPSAnMTIwcHgnO1xuICAgICAgICAgIChidEEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdCk7XG4gICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKEVycm9yTWVzc2FnZS5wYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNhcmRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRfX2xpc3QnKTtcbiAgICAgIGlmIChjb3VudGVyID4gNikge1xuICAgICAgICBjYXJDYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgICBpZiAoY2FyZExpc3QpIHtcbiAgICAgICAgY2FyZExpc3QuYXBwZW5kKGNhckNhcmQpO1xuICAgICAgfVxuICAgICAgY291bnRlciArPSAxO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJldmlvdXNOZXh0ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgaWQ6ICdwcmV2aW91c19fbmV4dCcgfSk7XG4gICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdidXR0b24nLCBpZDogJ3ByZXZpb3VzJywgY29udGVudDogJ3ByZXZpb3VzJyB9KTtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICduZXh0JywgY29udGVudDogJ25leHQnIH0pO1xuICAgIHByZXZpb3VzTmV4dC5hcHBlbmQocHJldmlvdXMsIG5leHQpO1xuICAgIG1haW4uYXBwZW5kKHByZXZpb3VzTmV4dCk7XG5cbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY2Fyc0xpc3QgPSB0aGlzLmNhcnMuZ2V0Q2FycygpO1xuICAgICAgZm9yIChsZXQgaSA9IHBhZ2UgKiA3IC0gNzsgaSA8IDcgKiBwYWdlOyBpKyspIHtcbiAgICAgICAgaWYgKHBhZ2UgPCBtYXhQYWdlKSB7XG4gICAgICAgICAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZF9fbGlzdCcpO1xuICAgICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgICAgKHRyYWNrLmNoaWxkTm9kZXNbaV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGFnZSA8IG1heFBhZ2UpIHtcbiAgICAgICAgcGFnZSArPSAxO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IHBhZ2UgKiA3IC0gNzsgaSA8IDcgKiBwYWdlOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPCBjYXIubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZF9fbGlzdCcpO1xuICAgICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgICAgKHRyYWNrLmNoaWxkTm9kZXNbaV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FyID0gW107XG4gICAgICAgICAgICBjYXJzTGlzdC50aGVuKChjYXJzOiBDYXJbXSkgPT4ge1xuICAgICAgICAgICAgICBjYXJzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXIucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJyk7XG4gICAgICBpZiAodGV4dFBhZ2UpIHtcbiAgICAgICAgdGV4dFBhZ2UudGV4dENvbnRlbnQgPSBgUGFnZSAjJHtwYWdlfWA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGNhcnNMaXN0ID0gdGhpcy5jYXJzLmdldENhcnMoKTtcbiAgICAgIGZvciAobGV0IGkgPSBwYWdlICogNyAtIDc7IGkgPCA3ICogcGFnZTsgaSsrKSB7XG4gICAgICAgIGlmIChwYWdlID4gMSkge1xuICAgICAgICAgIGlmIChpIDwgY2FyLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZF9fbGlzdCcpO1xuICAgICAgICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgICAgICAgICh0cmFjay5jaGlsZE5vZGVzW2ldIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBhZ2UgPiAxKSB7XG4gICAgICAgIHBhZ2UgLT0gMTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSBwYWdlICogNyAtIDc7IGkgPCA3ICogcGFnZTsgaSsrKSB7XG4gICAgICAgIGlmIChpIDwgY2FyLmxlbmd0aCAmJiBwYWdlID49IDEpIHtcbiAgICAgICAgICBjb25zdCB0cmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkX19saXN0Jyk7XG4gICAgICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgICAgICAodHJhY2suY2hpbGROb2Rlc1tpXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXIgPSBbXTtcbiAgICAgICAgICAgIGNhcnNMaXN0LnRoZW4oKGNhcnM6IENhcltdKSA9PiB7XG4gICAgICAgICAgICAgIGNhcnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENhci5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHRQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UnKTtcbiAgICAgIGlmICh0ZXh0UGFnZSkge1xuICAgICAgICB0ZXh0UGFnZS50ZXh0Q29udGVudCA9IGBQYWdlICMke3BhZ2V9YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU1vZGFsKG5hbWU6IHN0cmluZywgdGltZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbW9kYWxPdmVybGF5ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgaWQ6ICdtb2RhbF9fb3ZlcmxheScgfSk7XG4gICAgY29uc3QgbW9kYWwgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBpZDogJ21vZGFsJyB9KTtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnaDInLCBjb250ZW50OiBgV2lubmVyOiAke25hbWV9IHRpbWU6ICR7dGltZX1gIH0pO1xuICAgIGNvbnN0IGJ0ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICdtb2RhbF9fYnQnLCBjb250ZW50OiAnT0snIH0pO1xuICAgIG1vZGFsLmFwcGVuZCh0ZXh0LCBidCk7XG4gICAgbW9kYWxPdmVybGF5LmFwcGVuZChtb2RhbCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobW9kYWxPdmVybGF5KTtcbiAgICBidC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1vZGFsT3ZlcmxheS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU21hbGxDYXIgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgUmFuZG9tQ2FyIHtcblxuICByYW5kb21OYW1lKCkge1xuICAgIGNvbnN0IGNhcnM6IHN0cmluZ1tdID0gW1xuICAgICAgJ0F1ZGkgQTEnLFxuICAgICAgJ0F1ZGkgUjgnLFxuICAgICAgJ0FsZmEgUm9tZW8gQnJlcmEnLFxuICAgICAgJ0FsZmEgUm9tZW8gR1QnLFxuICAgICAgJ0F1ZGkgQTInLFxuICAgICAgJ0FsZmEgUm9tZW8gMTU2JyxcbiAgICAgICdBdWRpIEEzJyxcbiAgICAgICdBdWRpIEE0JyxcbiAgICAgICdBbGZhIFJvbWVvIDE1NScsXG4gICAgICAnQllEIFRhbmcnLFxuICAgICAgJ0JNVyBpOCcsXG4gICAgICAnQk1XIGkzJyxcbiAgICAgICdCWUQgUWluJyxcbiAgICAgICdCWUQgZTYnLFxuICAgICAgJ0JZRCBGM0RNJyxcbiAgICAgICdCdWdhdHRpIFZleXJvbicsXG4gICAgICAnQk1XIFg1JyxcbiAgICAgICdCTVcgWjgnLFxuICAgICAgJ0J1Z2F0dGkgRUIxMTAnLFxuICAgICAgJ0NocnlzbGVyIEFzcGVuIEh5YnJpZCcsXG4gICAgICAnQ2FkaWxsYWMgRUxSJyxcbiAgICAgICdDaGV2cm9sZXQgVm9sdCcsXG4gICAgICAnQ2hldnJvbGV0IENydXplJyxcbiAgICAgICdDaHJ5c2xlciBUb3duICYgQ291bnRyeScsXG4gICAgICAnRGFpaGF0c3UgQ29wZW4nLFxuICAgICAgJ0RlIFRvbWFzbyBHdWFyw6AnLFxuICAgICAgJ0RvZGdlIFZpcGVyJyxcbiAgICAgICdEb2RnZSBTdGVhbHRoJyxcbiAgICAgICdEb2RnZSBBcmllcy9QbHltb3V0aCBSZWxpYW50JyxcbiAgICAgICdETUMgRGVMb3JlYW4nLFxuICAgICAgJ0RlIFRvbWFzbyBMb25nY2hhbXAnLFxuICAgICAgJ0ZlcnJhcmkgMzI4JyxcbiAgICAgICdGZXJyYXJpIEY0MCcsXG4gICAgICAnRmVycmFyaSAzNDgnLFxuICAgICAgJ0ZlcnJhcmkgNDU2JyxcbiAgICAgICdGZXJyYXJpIDMzMyBTUCcsXG4gICAgICAnRmVycmFyaSBGMzU1JyxcbiAgICAgICdGZXJyYXJpIEY1MCcsXG4gICAgICAnRmVycmFyaSA1NTAgTWFyYW5lbGxvJyxcbiAgICAgICdGZXJyYXJpIDU3NU0gTWFyYW5lbGxvJyxcbiAgICAgICdGZXJyYXJpIDM2MCcsXG4gICAgICAnRW56byBGZXJyYXJpJyxcbiAgICAgICdGZXJyYXJpIEY0MzAnLFxuICAgICAgJ0ZlcnJhcmkgNDU4JyxcbiAgICAgICdGZXJyYXJpIEZGJyxcbiAgICAgICdMYUZlcnJhcmknLFxuICAgICAgJ0Zpc2tlciBLYXJtYScsXG4gICAgICAnRm9yZCBGaWVzdGEnLFxuICAgICAgJ0ZvcmQgRmllc3RhJyxcbiAgICAgICdGb3JkIEZvY3VzJyxcbiAgICAgICdGb3JkIEdyYW5hZGEgKE5vcnRoIEFtZXJpY2EpJyxcbiAgICAgICdGb3JkIEdUJyxcbiAgICAgICdGb3JkIExURCcsXG4gICAgICAnRm9yZCBNb2RlbCBBJyxcbiAgICAgICdGb3JkIE1vZGVsIFQnLFxuICAgICAgJ0ZvcmQgTXVzdGFuZycsXG4gICAgICAnRm9yZCBQdW1hJyxcbiAgICAgICdGb3JkIFJhbmNoZXJvJyxcbiAgICAgICdGb3JkIFJhbmdlcicsXG4gICAgICAnSmFndWFyIFhKJyxcbiAgICAgICdKYWd1YXIgWEpTJyxcbiAgICAgICdKYWd1YXIgWEpSLTE1JyxcbiAgICAgICdKYWd1YXIgWEoyMjAnLFxuICAgICAgJ0phZ3VhciBYSycsXG4gICAgICAnSmFndWFyIFgtVHlwZScsXG4gICAgICAnSmFndWFyIFhGJyxcbiAgICAgICdMYW1ib3JnaGluaSBEaWFibG8nLFxuICAgICAgJ0xhbWJvcmdoaW5pIEVzcGFkYScsXG4gICAgICAnTGFtYm9yZ2hpbmkgR2FsbGFyZG8nLFxuICAgICAgJ0xhbWJvcmdoaW5pIEh1cmFjw6FuJyxcbiAgICAgICdMYW1ib3JnaGluaSBJc2xlcm8nLFxuICAgICAgJ0xhbWJvcmdoaW5pIFVydXMnLFxuICAgICAgJ0xhbmQgUm92ZXIgRGlzY292ZXJ5IFNwb3J0JyxcbiAgICAgICdMYW5kIFJvdmVyIFJhbmdlIFJvdmVyJyxcbiAgICAgICdSYW5nZSBSb3ZlciBFdm9xdWUnLFxuICAgICAgJ1JhbmdlIFJvdmVyIFNwb3J0JyxcbiAgICAgICdNY0xhcmVuIFAxJyxcbiAgICAgICdNY0xhcmVuIDEyQycsXG4gICAgICAnTWFzZXJhdGkgTUMxMicsXG4gICAgICAnTWFzZXJhdGkgR3JhblR1cmlzbW8nLFxuICAgICAgJ01heWJhY2ggNTcgYW5kIDYyJyxcbiAgICAgICdNZXJjdXJ5IE1hcmF1ZGVyJyxcbiAgICAgICdNZXJjdXJ5IE1hcmluZXInLFxuICAgICAgJ01lcmN1cnkgTWlsYW4nLFxuICAgICAgJ01lcmN1cnkgTW9udGVyZXkgKG1pbml2YW4pJyxcbiAgICAgICdQb3JzY2hlIDkxMScsXG4gICAgICAnUG9yc2NoZSA5NTknLFxuICAgICAgJ1BvcnNjaGUgOTY4JyxcbiAgICAgICdQb3JzY2hlIEJveHN0ZXInLFxuICAgICAgJ1BvcnNjaGUgQ2F5ZW5uZScsXG4gICAgICAnUG9yc2NoZSBDYXJyZXJhIEdUJyxcbiAgICAgICdQb3JzY2hlIFBhbmFtZXJhJyxcbiAgICAgICdQb3JzY2hlIDkxOCcsXG4gICAgICAnUG9yc2NoZSBNYWNhbicsXG4gICAgICAnUmVuYXVsdCBUd2luZ28nLFxuICAgICAgJ1JlbmF1bHQgVHdpenknLFxuICAgICAgJ1JlbmF1bHQgWm9lJyxcbiAgICAgICdUb3lvdGEgUHJpdXMnLFxuICAgICAgJ1RveW90YSBSQVY0JyxcbiAgICAgICdMYWRhJyxcbiAgICBdO1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMSk7XG4gICAgcmV0dXJuIGNhcnNbcmFuZG9tXTtcbiAgfVxuXG4gIHJhbmRvbUNvbG9yKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICB9XG5cbiAgcmFuZG9tQ2FycygpIHtcbiAgICBjb25zdCBjYXJzOiBTbWFsbENhcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgY29uc3QgbmV3Q2FyOiBTbWFsbENhciA9IHtcbiAgICAgICAgbmFtZTogdGhpcy5yYW5kb21OYW1lKCksXG4gICAgICAgIGNvbG9yOiBgIyR7dGhpcy5yYW5kb21Db2xvcigpfWAsXG4gICAgICB9O1xuICAgICAgY2Fycy5wdXNoKG5ld0Nhcik7XG4gICAgfVxuICAgIHJldHVybiBjYXJzO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcblxuY29uc3QgbmV3UGFnZSA9IG5ldyBQYWdlKCk7XG5cbm5ld1BhZ2UuY3JlYXRlRGVmYXVsdFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==