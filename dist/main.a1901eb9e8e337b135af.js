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
})(Method || (Method = {}));
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
        (await fetch(`${Links.garage}/${id}`, { method: 'DELETE' })).json();
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
    async getWinners({ page, limit = 10, sort, order }) {
        return (await fetch(`${Links.winners}?_page=${page}&_limit=${limit}${this.getSortOrder(sort, order)}`)).json();
    }
    async getWinnersCount() {
        return (await fetch(`${Links.winners}`)).json();
    }
    async getWinner(id) {
        return (await fetch(`${Links.winners}/${id}`)).json();
    }
    getWinnerStatus() { }
    async deleteWinner(id) {
        (await fetch(`${Links.winners}/${id}`, { method: 'DELETE' })).json();
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
var TopDown;
(function (TopDown) {
    TopDown["top"] = " \u2191";
    TopDown["donw"] = " \u2193";
    TopDown["idTop"] = "Id \u2191";
    TopDown["idDown"] = "Id \u2193";
    TopDown["winsTop"] = "Wins \u2191";
    TopDown["winsDown"] = "Wins \u2193";
    TopDown["timeTop"] = "Time \u2191";
    TopDown["timeDown"] = "Time \u2193";
})(TopDown || (TopDown = {}));
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["page"] = "\u041D\u0435 \u043D\u0430 \u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0432\u0435\u0440\u043D\u0443\u043B\u0438 \u043C\u0430\u0448\u0438\u043D\u044B \u0432 \u0433\u0430\u0440\u0430\u0436! \u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443!";
})(ErrorMessage || (ErrorMessage = {}));
class Page {
    constructor() {
        this.main = document.getElementsByTagName('main')[0];
        this.sort = {
            page: 1,
            limit: 10,
            sort: 'id',
            order: 'ASC',
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
        const btId = this.el.createElement({ tag: 'button', id: 'button__id', content: 'Id' });
        const btName = this.el.createElement({ tag: 'button', id: 'button__name', content: 'Name', disable: true });
        const btCar = this.el.createElement({ tag: 'button', id: 'button__car', content: 'Car', disable: true });
        const btWins = this.el.createElement({ tag: 'button', id: 'button__wins', content: 'Wins' });
        const btTime = this.el.createElement({ tag: 'button', id: 'button__time', content: 'Time' });
        sortMenu.append(btId, btName, btCar, btWins, btTime);
        switch (this.sort.sort) {
            case 'id':
                btId.textContent += this.sort.order === 'ASC' ? TopDown.top : TopDown.donw;
                break;
            case 'wins':
                btWins.textContent += this.sort.order === 'ASC' ? TopDown.top : TopDown.donw;
                break;
            case 'time':
                btTime.textContent += this.sort.order === 'ASC' ? TopDown.top : TopDown.donw;
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
            this.sort.sort = 'id';
            this.sort.order = this.sort.order === 'ASC' ? this.sort.order = 'DESC' : this.sort.order = 'ASC';
            btId.textContent = this.sort.order === 'ASC' ? TopDown.idTop : TopDown.idDown;
            btWins.textContent = 'Wins';
            btWins.textContent = 'Time';
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
            this.sort.sort = 'wins';
            this.sort.order = this.sort.order === 'ASC' ? this.sort.order = 'DESC' : this.sort.order = 'ASC';
            btWins.textContent = this.sort.order === 'ASC' ? TopDown.winsTop : TopDown.winsDown;
            btId.textContent = 'Id';
            btTime.textContent = 'Time';
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
            this.sort.sort = 'time';
            this.sort.order = this.sort.order === 'ASC' ? this.sort.order = 'DESC' : this.sort.order = 'ASC';
            btTime.textContent = this.sort.order === 'ASC' ? TopDown.timeTop : TopDown.timeDown;
            btId.textContent = 'Id';
            btWins.textContent = 'Wins';
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
new page_1.Page().createDefaultPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MERBQXFCO0FBQ3JCLGtFQUE4QjtBQUU5QixJQUFJLFdBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2dldGRhdGEudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3BhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3JhbmRvbUNhci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IEVsZW1lbnRJbnRlcmZhY2UsIElucHV0RWxlbWVudCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50IHtcbiAgY3JlYXRlRWxlbWVudCh7IHRhZywgaWQsIGNsYXNzTm90ZSwgY29udGVudCwgZGlzYWJsZSA9IGZhbHNlIH06IEVsZW1lbnRJbnRlcmZhY2UpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGVsLmlkID0gaWQ7XG4gICAgfVxuICAgIGlmIChjbGFzc05vdGUpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOb3RlKTtcbiAgICB9XG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGVsLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICB9XG4gICAgaWYgKGRpc2FibGUpIHtcbiAgICAgIChlbCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBkaXNhYmxlO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBjcmVhdGVJbnB1dCh7IHR5cGUsIGlkLCBjbGFzc05vdGUsIHZhbHVlLCBjb250ZW50LCBuYW1lLCBkaXNhYmxlID0gZmFsc2UgfTogSW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVsLnR5cGUgPSB0eXBlO1xuICAgIGVsLmRpc2FibGVkID0gZGlzYWJsZTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGVsLmlkID0gaWQ7XG4gICAgfVxuICAgIGlmIChjbGFzc05vdGUpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOb3RlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgZWwudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIH1cbiAgICBpZiAobmFtZSkge1xuICAgICAgZWwubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGNyZWF0ZUNhclNWRygpIHtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IHBhdGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgY29uc3QgcGF0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICBjb25zdCBwYXRoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIGNvbnN0IHBhdGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgNTExIDIwMCcpO1xuICAgIHBhdGgxLnNldEF0dHJpYnV0ZShcbiAgICAgICdkJyxcbiAgICAgICdNMTYwLDMwNy41aDEzMy41MzhjMTQuMTgyLDAsMjcuNTI0LTcuNTU0LDM0LjgyLTE5LjcxNWwxNC41MDEtMjQuMTY5YzIuMjczLTMuNzg5LDEuMDQ1LTguNzAzLTIuNzQ0LTEwLjk3NicgK1xuICAgICAgICAnYy0zLjc4OC0yLjI3My04LjcwMi0xLjA0NS0xMC45NzYsMi43NDRsLTE0LjUwMSwyNC4xNjljLTQuNDIxLDcuMzY5LTEyLjUwNywxMS45NDctMjEuMTAxLDExLjk0N0gxNjBjLTQuNDE4LDAtOCwzLjU4Mi04LDgnICtcbiAgICAgICAgJ1MxNTUuNTgyLDMwNy41LDE2MCwzMDcuNXonLFxuICAgICk7XG4gICAgcGF0aDIuc2V0QXR0cmlidXRlKFxuICAgICAgJ2QnLFxuICAgICAgJ001MDQsMzIzLjU2OVYyOTkuNWMwLTQ4LjUyMy0zOS40NzctODgtODgtODhoLTQ0LjIwOWMtMTIuMzkyLTkuNzQ3LTYyLjg3NC00OC05MS43OTEtNDhoLTU0ICAgYy0xMS4wMDEsMC0yMS45MDQsMS42NjQtMzIuNDAzLDQuOTQ1Yy0wLjIwNCwwLjA2My0wLjQwNCwwLjEzNS0wLjYwMiwwLjIxNWwtNzMuNjkxLDI5LjY3NSAgIGMtMTEuMDcxLDMuNDI3LTIyLjU2LDUuMTY1LTM0LjE1Miw1LjE2NUg1OC42ODdjLTAuMzc5LTAuNzc4LTAuODg0LTEuNTEtMS41My0yLjE1N2wtNy43NzItNy43NzIgICBDNTcuOTY5LDE4OS44OTcsNjQsMTgxLjM2OCw2NCwxNzEuNDU1VjE2My41YzAtNC40MTgtMy41ODItOC04LThIOGMtNC40MTgsMC04LDMuNTgyLTgsOHY3Ljk1NSAgIEMwLDE4NC43MTMsMTAuNzg3LDE5NS41LDI0LjA0NSwxOTUuNWg0LjY0Mmw4LDhoLTYuNjg1QzE3Ljg3LDIwMy41LDgsMjEzLjM3LDgsMjI1LjUwMlYyOTEuNWMwLDE4LjUwOCwxMy4yOTgsMzQuMDk0LDMzLjg4LDM5LjcxNCAgIEM1MS45ODksMzQ1Ljg3LDY4Ljg4OCwzNTUuNSw4OCwzNTUuNWMxNS4yMiwwLDI5LjAzNC02LjExMiwzOS4xMzgtMTZoMjQ5LjcyM2MxMC4xMDQsOS44ODgsMjMuOTE4LDE2LDM5LjEzOCwxNiAgIHMyOS4wMzQtNi4xMTIsMzkuMTM4LTE2SDUwM2M0LjQxOCwwLDgtMy41ODIsOC04QzUxMSwzMjcuNDIxLDUwNy45NDUsMzI0LjA2Miw1MDQsMzIzLjU2OXogTTE2LDE3MS41aDMyICAgYy0wLjAyNCw0LjQxNi0zLjYyNCw4LTguMDQ1LDhoLTE1LjkxQzE5LjYyNCwxNzkuNSwxNi4wMjQsMTc1LjkxNiwxNiwxNzEuNXogTTM1Ni4yODcsMjE5Ljc2MyAgIGMtMy41NzEsMi41MDUtNi4yMjcsNS4xNjUtOC4wNTksNy4zMzlsLTE1MC45OC0xNC40NjVDMjA0LjMxLDE5OS45NjgsMjE4Ljk3NSwxNzkuNSwyNDAsMTc5LjVoNDAgICBDMjk4Ljg5MSwxNzkuNSwzMzYuMzIxLDIwNC43MjQsMzU2LjI4NywyMTkuNzYzeiBNMjQsMjkxLjV2LTY1Ljk5OGMwLTMuMzEsMi42OTItNi4wMDIsNi4wMDItNi4wMDJoNTUuMTUgICBjMTMuMzE3LDAsMjYuNTE0LTIuMDE0LDM5LjIyNS01Ljk4NmMwLjIwNC0wLjA2MywwLjQwNC0wLjEzNSwwLjYwMi0wLjIxNWw3My40MzMtMjkuNTcxYy0xLjk5OSwyLjE0Mi0zLjk1Myw0LjQzMS01Ljg1LDYuODk5ICAgYy05Ljc5OSwxMi43NTYtMTQuODA1LDI1LjQzLTE1LjAxNCwyNS45NjNjLTAuOTEzLDIuMzM2LTAuNjc3LDQuOTY1LDAuNjM4LDcuMTAyYzEuMzE0LDIuMTM2LDMuNTU0LDMuNTMzLDYuMDUxLDMuNzcybDE2NywxNiAgIGMwLjI4LDAuMDI3LDAuNTU5LDAuMDQxLDAuODM1LDAuMDQxYzIuOTMxLDAsNS41NzMtMS41LDYuOTQyLTQuMTUzYzAuNTU5LTAuOTM5LDcuNDM1LTExLjg1MSwyNC45ODYtMTEuODUxaDMyICAgYzM5LjcwMSwwLDcyLDMyLjI5OSw3Miw3MnYyNGgtMjEuNDE0YzMuNDY3LTcuMjc5LDUuNDE0LTE1LjQxNSw1LjQxNC0yNGMwLTMwLjg3OC0yNS4xMjItNTYtNTYtNTZzLTU2LDI1LjEyMi01Niw1NiAgIGMwLDguNTg1LDEuOTQ3LDE2LjcyMSw1LjQxNCwyNEgxMzguNTg2YzMuNDY3LTcuMjc5LDUuNDE0LTE1LjQxNSw1LjQxNC0yNGMwLTMwLjg3OC0yNS4xMjItNTYtNTYtNTZzLTU2LDI1LjEyMi01Niw1NiAgIGMwLDMuMzEzLDAuMzA2LDYuNTU0LDAuODYsOS43MTFDMjcuMjE3LDMwNC42MDksMjQsMjk4LjQyOCwyNCwyOTEuNXogTTQ4LDI5OS41YzAtMjIuMDU2LDE3Ljk0NC00MCw0MC00MHM0MCwxNy45NDQsNDAsNDAgICBzLTE3Ljk0NCw0MC00MCw0MFM0OCwzMjEuNTU2LDQ4LDI5OS41eiBNNDE2LDMzOS41Yy0yMi4wNTYsMC00MC0xNy45NDQtNDAtNDBzMTcuOTQ0LTQwLDQwLTQwczQwLDE3Ljk0NCw0MCw0MCAgIFM0MzguMDU2LDMzOS41LDQxNiwzMzkuNXonLFxuICAgICk7XG4gICAgcGF0aDMuc2V0QXR0cmlidXRlKFxuICAgICAgJ2QnLFxuICAgICAgJ00xMTIsMjkxLjVjLTQuNDE4LDAtOCwzLjU4Mi04LDhjMCw4LjgyMi03LjE3OCwxNi0xNiwxNnMtMTYtNy4xNzgtMTYtMTZzNy4xNzgtMTYsMTYtMTZjNC40MTgsMCw4LTMuNTgyLDgtOHMtMy41ODItOC04LTggICBjLTE3LjY0NSwwLTMyLDE0LjM1NS0zMiwzMnMxNC4zNTUsMzIsMzIsMzJzMzItMTQuMzU1LDMyLTMyQzEyMCwyOTUuMDgyLDExNi40MTgsMjkxLjUsMTEyLDI5MS41eicsXG4gICAgKTtcbiAgICBwYXRoNC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnZCcsXG4gICAgICAnTTQ0MCwyOTEuNWMtNC40MTgsMC04LDMuNTgyLTgsOGMwLDguODIyLTcuMTc4LDE2LTE2LDE2cy0xNi03LjE3OC0xNi0xNnM3LjE3OC0xNiwxNi0xNmM0LjQxOCwwLDgtMy41ODIsOC04cy0zLjU4Mi04LTgtOCAgIGMtMTcuNjQ1LDAtMzIsMTQuMzU1LTMyLDMyczE0LjM1NSwzMiwzMiwzMnMzMi0xNC4zNTUsMzItMzJDNDQ4LDI5NS4wODIsNDQ0LjQxOCwyOTEuNSw0NDAsMjkxLjV6JyxcbiAgICApO1xuICAgIHN2Zy5hcHBlbmQocGF0aDEsIHBhdGgyLCBwYXRoMywgcGF0aDQpO1xuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdldFdpbm5lcnMsIFNtYWxsQ2FyLCBVcGRhdGVXaW5uZXIsIFdpbm5lcnMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5lbnVtIExpbmtzIHtcbiAgc2VydmVyID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gIGdhcmFnZSA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FyYWdlJyxcbiAgZW5naW5lID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lbmdpbmUnLFxuICB3aW5uZXJzID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC93aW5uZXJzJyxcbn1cblxuZW51bSBNZXRob2Qge1xuICBwb3N0ID0gJ1BPU1QnLFxuICBwdXQgPSAnUFVUJyxcbiAgZ2V0ID0gJ0dFVCcsXG59XG5cbmV4cG9ydCBjbGFzcyBHZXREYXRhIHtcblxuICBhc3luYyBnZXRDYXJzKCkge1xuICAgIHJldHVybiAoYXdhaXQgZmV0Y2goYCR7TGlua3MuZ2FyYWdlfWApKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyBnZXRDYXIoaWQ6IG51bWJlcikge1xuICAgIHJldHVybiAoYXdhaXQgZmV0Y2goYCR7TGlua3MuZ2FyYWdlfS8ke2lkfWApKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVDYXIoYm9keTogU21hbGxDYXIpIHtcbiAgICAoXG4gICAgICBhd2FpdCBmZXRjaChgJHtMaW5rcy5nYXJhZ2V9YCwge1xuICAgICAgICBtZXRob2Q6IE1ldGhvZC5wb3N0LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICkuanNvbigpO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlQ2FyKGlkOiBudW1iZXIpIHtcbiAgICAoYXdhaXQgZmV0Y2goYCR7TGlua3MuZ2FyYWdlfS8ke2lkfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KSkuanNvbigpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlQ2FyKGlkOiBudW1iZXIsIGJvZHk6IFNtYWxsQ2FyKSB7XG4gICAgKFxuICAgICAgYXdhaXQgZmV0Y2goYCR7TGlua3MuZ2FyYWdlfS8ke2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBNZXRob2QucHV0LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICkuanNvbigpO1xuICB9XG5cbiAgYXN5bmMgc3RhcnRFbmdpbmUoaWQ6IG51bWJlcikge1xuICAgIHJldHVybiAoYXdhaXQgZmV0Y2goYCR7TGlua3MuZW5naW5lfT9pZD0ke2lkfSZzdGF0dXM9c3RhcnRlZGAsIHsgbWV0aG9kOiAnUEFUQ0gnIH0pKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyBzdG9wRW5naW5lKGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGF3YWl0IGZldGNoKGAke0xpbmtzLmVuZ2luZX0/aWQ9JHtpZH0mc3RhdHVzPXN0b3BwZWRgLCB7IG1ldGhvZDogJ1BBVENIJyB9KSkuanNvbigpO1xuICB9XG5cbiAgYXN5bmMgZHJpdmUoaWQ6IG51bWJlciwgc2lnbmFsOiBBYm9ydFNpZ25hbCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0xpbmtzLmVuZ2luZX0/aWQ9JHtpZH0mc3RhdHVzPWRyaXZlYCwgeyBtZXRob2Q6ICdQQVRDSCcsIHNpZ25hbCB9KS5jYXRjaCgpO1xuICAgIHJldHVybiByZXMuc3RhdHVzICE9PSAyMDAgPyB7IHN1Y2Nlc3M6IGZhbHNlIH0gOiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfVxuXG4gIGFzeW5jIHN0b3BEcml2ZShpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TGlua3MuZW5naW5lfT9pZD0ke2lkfSZzdGF0dXM9c3RvcHBlZGAsIHsgbWV0aG9kOiAnUEFUQ0gnIH0pLmNhdGNoKCk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMgIT09IDIwMCA/IHsgc3VjY2VzczogZmFsc2UgfSA6IHsgLi4uKGF3YWl0IHJlcy5qc29uKCkpIH07XG4gIH1cblxuICBnZXRTb3J0T3JkZXIoc29ydD86IHN0cmluZywgb3JkZXI/OiBzdHJpbmcpIHtcbiAgICBsZXQgcmVzID0gJyc7XG4gICAgaWYgKHNvcnQgJiYgb3JkZXIpIHtcbiAgICAgIHJlcyA9IGAmX3NvcnQ9JHtzb3J0fSZfb3JkZXI9JHtvcmRlcn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGFzeW5jIGdldFdpbm5lcnMoeyBwYWdlLCBsaW1pdCA9IDEwLCBzb3J0LCBvcmRlciB9OiBHZXRXaW5uZXJzKSB7XG4gICAgcmV0dXJuIChhd2FpdCBmZXRjaChgJHtMaW5rcy53aW5uZXJzfT9fcGFnZT0ke3BhZ2V9Jl9saW1pdD0ke2xpbWl0fSR7dGhpcy5nZXRTb3J0T3JkZXIoc29ydCwgb3JkZXIpfWApKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyBnZXRXaW5uZXJzQ291bnQoKSB7XG4gICAgcmV0dXJuIChhd2FpdCBmZXRjaChgJHtMaW5rcy53aW5uZXJzfWApKS5qc29uKCk7XG4gIH1cblxuICBhc3luYyBnZXRXaW5uZXIoaWQ6IG51bWJlcikge1xuICAgIHJldHVybiAoYXdhaXQgZmV0Y2goYCR7TGlua3Mud2lubmVyc30vJHtpZH1gKSkuanNvbigpO1xuICB9XG5cbiAgZ2V0V2lubmVyU3RhdHVzKCkge31cblxuICBhc3luYyBkZWxldGVXaW5uZXIoaWQ6IG51bWJlcikge1xuICAgIChhd2FpdCBmZXRjaChgJHtMaW5rcy53aW5uZXJzfS8ke2lkfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KSkuanNvbigpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlV2lubmVyKGJvZHk6IFdpbm5lcnMpIHtcbiAgICAoXG4gICAgICBhd2FpdCBmZXRjaChgJHtMaW5rcy53aW5uZXJzfWAsIHtcbiAgICAgICAgbWV0aG9kOiBNZXRob2QucG9zdCxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApLmpzb24oKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVdpbm5lcihpZDogbnVtYmVyLCBib2R5OiBVcGRhdGVXaW5uZXIpIHtcbiAgICAoXG4gICAgICBhd2FpdCBmZXRjaChgJHtMaW5rcy53aW5uZXJzfS8ke2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBNZXRob2QucHV0LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICkuanNvbigpO1xuICB9XG5cbiAgc2F2ZVdpbm5lcigpIHt9XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50JztcbmltcG9ydCB7IEdldERhdGEgfSBmcm9tICcuL2dldGRhdGEnO1xuaW1wb3J0IHsgQ2FyLCBFbmdpbmUsIEdldFdpbm5lcnMsIFNtYWxsQ2FyLCBVcGRhdGVXaW5uZXIsIFdpbm5lcnMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmFuZG9tQ2FyIH0gZnJvbSAnLi9yYW5kb21DYXInO1xuXG5lbnVtIFRvcERvd24ge1xuICB0b3AgPSAnIOKGkScsXG4gIGRvbncgPSAnIOKGkycsXG4gIGlkVG9wID0gJ0lkIOKGkScsXG4gIGlkRG93biA9ICdJZCDihpMnLFxuICB3aW5zVG9wID0gJ1dpbnMg4oaRJyxcbiAgd2luc0Rvd24gPSAnV2lucyDihpMnLFxuICB0aW1lVG9wID0gJ1RpbWUg4oaRJyxcbiAgdGltZURvd24gPSAnVGltZSDihpMnLFxufVxuXG5lbnVtIEVycm9yTWVzc2FnZSB7XG4gIHBhZ2UgPSAn0J3QtSDQvdCwINGC0L7QuSDRgdGC0YDQsNC90LjRhtC1INCy0LXRgNC90YPQu9C4INC80LDRiNC40L3RiyDQsiDQs9Cw0YDQsNC2ISDQn9C10YDQtdC30LDQs9GA0YPQt9C40YLQtSDRgdGC0YDQsNC90LjRhtGDIScsXG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlIHtcbiAgcHJpdmF0ZSBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXTtcblxuICBwcml2YXRlIHNvcnQ6IEdldFdpbm5lcnMgPSB7XG4gICAgcGFnZTogMSxcbiAgICBsaW1pdDogMTAsXG4gICAgc29ydDogJ2lkJyxcbiAgICBvcmRlcjogJ0FTQycsXG4gIH07XG5cbiAgcHJpdmF0ZSBjYXJzID0gbmV3IEdldERhdGEoKTtcblxuICBwcml2YXRlIGVsID0gbmV3IEVsZW1lbnQoKTtcblxuICBwcml2YXRlIG51bWJlcldpbnM6IG51bWJlcltdID0gW107XG5cbiAgcHJpdmF0ZSBjdXJyZW50Q2FyOiBDYXJbXSA9IFtdO1xuXG4gIHByaXZhdGUgcmFuZG9tQ2FyID0gbmV3IFJhbmRvbUNhcigpO1xuXG4gIHByaXZhdGUgd2lubmVySUQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGNhcnNMaXN0ID0gdGhpcy5jYXJzLmdldENhcnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgY2Fyc0xpc3QudGhlbigoY2FyczogQ2FyW10pID0+IHtcbiAgICAgICAgY2Fycy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGkgKyAxKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXIucHVzaChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlRGVmYXVsdFBhZ2UoKSB7XG4gICAgdGhpcy5jcmVhdGVIZWFkZXIoKTtcbiAgICB0aGlzLmNyZWF0ZU1haW4oKTtcbiAgICB0aGlzLmNyZWF0ZUZvb3RlcigpO1xuICB9XG5cbiAgY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2hlYWRlcicgfSk7XG4gICAgY29uc3QgaDEgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdoMScsIGNvbnRlbnQ6ICdBc3luYyBSYWNlJyB9KTtcbiAgICBjb25zdCBuYXYgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICduYXYnIH0pO1xuICAgIGNvbnN0IGJ1dHRvbkdhcmFnZSA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGlkOiAnYnV0dG9uX19nYXJhZ2UnLCBjb250ZW50OiAnVG8gR2FyYWdlJyB9KTtcbiAgICBjb25zdCBidXR0b25XaW5uZXJzID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICdidXR0b25fX3dpbm5lcnMnLCBjb250ZW50OiAnVG8gV2lubmVycycgfSk7XG4gICAgbmF2LmFwcGVuZChidXR0b25HYXJhZ2UsIGJ1dHRvbldpbm5lcnMpO1xuICAgIGJ1dHRvbldpbm5lcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAoYnV0dG9uV2lubmVycyBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jYXJzLmdldFdpbm5lcnMoeyBwYWdlOiB0aGlzLnNvcnQucGFnZSwgbGltaXQ6IHRoaXMuc29ydC5saW1pdCwgc29ydDogdGhpcy5zb3J0LnNvcnQsIG9yZGVyOiB0aGlzLnNvcnQub3JkZXIgfSkudGhlbigod2lubmVyczogV2lubmVyc1tdKSA9PiB7XG4gICAgICAgIHRoaXMuY3JlYXRlV2lubmVycyh3aW5uZXJzKTtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF07XG4gICAgICAgIGlmIChtYWluKSB7XG4gICAgICAgICAgbWFpbi5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgIH0pO1xuICAgIGhlYWRlci5hcHBlbmQoaDEsIG5hdik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyKTtcbiAgICBidXR0b25HYXJhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAoYnV0dG9uV2lubmVycyBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdO1xuICAgICAgaWYgKG1haW4pIHtcbiAgICAgICAgbWFpbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdpbm5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyc19fYmxvY2snKTtcbiAgICAgIGlmICh3aW5uZXJzKSB7XG4gICAgICAgIHdpbm5lcnMucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVXaW5uZXJzKHdpbm5lcnM6IFdpbm5lcnNbXSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVswXTtcbiAgICBjb25zdCB3aW5uZXJzQmxvY2sgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBpZDogJ3dpbm5lcnNfX2Jsb2NrJyB9KTtcbiAgICBoZWFkZXIuYWZ0ZXIod2lubmVyc0Jsb2NrKTtcbiAgICBsZXQgbWF4UGFnZSA9IDA7XG4gICAgY29uc3QgaDIgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdoMicsIGlkOiAnd2lubmVyc19fdGV4dCcsIGNvbnRlbnQ6IGBXaW5uZXJzICgke3dpbm5lcnMubGVuZ3RofSlgIH0pO1xuICAgIHRoaXMuY2Fycy5nZXRXaW5uZXJzQ291bnQoKS50aGVuKChsZW5nOiBXaW5uZXJzW10pID0+IHtcbiAgICAgIGgyLnRleHRDb250ZW50ID0gYFdpbm5lcnMgKCR7bGVuZy5sZW5ndGh9KWA7XG4gICAgICBtYXhQYWdlID0gTWF0aC5jZWlsKGxlbmcubGVuZ3RoIC8gMTApO1xuICAgIH0pO1xuICAgIGNvbnN0IHAgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdwJywgaWQ6ICdwYWdlJywgY29udGVudDogYFBhZ2UgIyR7dGhpcy5zb3J0LnBhZ2V9YCB9KTtcbiAgICB3aW5uZXJzQmxvY2suYXBwZW5kKGgyLCBwKTtcbiAgICBjb25zdCBzb3J0TWVudSA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnc29ydF9fbGlzdCcgfSk7XG4gICAgY29uc3QgYnRJZCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGlkOiAnYnV0dG9uX19pZCcsIGNvbnRlbnQ6ICdJZCcgfSk7XG4gICAgY29uc3QgYnROYW1lID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICdidXR0b25fX25hbWUnLCBjb250ZW50OiAnTmFtZScsIGRpc2FibGU6IHRydWUgfSk7XG4gICAgY29uc3QgYnRDYXIgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdidXR0b24nLCBpZDogJ2J1dHRvbl9fY2FyJywgY29udGVudDogJ0NhcicsIGRpc2FibGU6IHRydWUgfSk7XG4gICAgY29uc3QgYnRXaW5zID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICdidXR0b25fX3dpbnMnLCBjb250ZW50OiAnV2lucycgfSk7XG4gICAgY29uc3QgYnRUaW1lID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICdidXR0b25fX3RpbWUnLCBjb250ZW50OiAnVGltZScgfSk7XG5cbiAgICBzb3J0TWVudS5hcHBlbmQoYnRJZCwgYnROYW1lLCBidENhciwgYnRXaW5zLCBidFRpbWUpO1xuICAgIHN3aXRjaCAodGhpcy5zb3J0LnNvcnQpIHtcbiAgICAgIGNhc2UgJ2lkJzogXG4gICAgICAgIGJ0SWQudGV4dENvbnRlbnQgKz0gdGhpcy5zb3J0Lm9yZGVyID09PSAnQVNDJyA/IFRvcERvd24udG9wIDogVG9wRG93bi5kb253O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dpbnMnOlxuICAgICAgICBidFdpbnMudGV4dENvbnRlbnQgKz0gdGhpcy5zb3J0Lm9yZGVyID09PSAnQVNDJyA/IFRvcERvd24udG9wIDogVG9wRG93bi5kb253O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICBidFRpbWUudGV4dENvbnRlbnQgKz0gdGhpcy5zb3J0Lm9yZGVyID09PSAnQVNDJyA/IFRvcERvd24udG9wIDogVG9wRG93bi5kb253O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlV2lubmVyc0xpc3Qod2lubmVycyk7XG4gICAgd2lubmVyc0Jsb2NrLmFwcGVuZChzb3J0TWVudSwgdGhpcy5jcmVhdGVXaW5uZXJzTGlzdCh3aW5uZXJzKSk7XG5cbiAgICBjb25zdCBwcmV2aW91c05leHQgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBpZDogJ3dpbm5lcnNfX3ByZXZpb3VzX19uZXh0JyB9KTtcbiAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGlkOiAnd2lubmVyc19fcHJldmlvdXMnLCBjb250ZW50OiAncHJldmlvdXMnIH0pO1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdidXR0b24nLCBpZDogJ3dpbm5lcnNfX25leHQnLCBjb250ZW50OiAnbmV4dCcgfSk7XG4gICAgcHJldmlvdXNOZXh0LmFwcGVuZChwcmV2aW91cywgbmV4dCk7XG4gICAgd2lubmVyc0Jsb2NrLmFwcGVuZChwcmV2aW91c05leHQpO1xuXG4gICAgYnRJZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc29ydC5zb3J0ID0gJ2lkJztcbiAgICAgIHRoaXMuc29ydC5vcmRlciA9IHRoaXMuc29ydC5vcmRlciA9PT0gJ0FTQycgPyB0aGlzLnNvcnQub3JkZXIgPSAnREVTQycgOiB0aGlzLnNvcnQub3JkZXIgPSAnQVNDJztcbiAgICAgIGJ0SWQudGV4dENvbnRlbnQgPSB0aGlzLnNvcnQub3JkZXIgPT09ICdBU0MnID8gVG9wRG93bi5pZFRvcCA6IFRvcERvd24uaWREb3duO1xuICAgICAgYnRXaW5zLnRleHRDb250ZW50ID0gJ1dpbnMnO1xuICAgICAgYnRXaW5zLnRleHRDb250ZW50ID0gJ1RpbWUnO1xuICAgICAgdGhpcy5jYXJzLmdldFdpbm5lcnMoeyBwYWdlOiB0aGlzLnNvcnQucGFnZSwgbGltaXQ6IHRoaXMuc29ydC5saW1pdCwgc29ydDogdGhpcy5zb3J0LnNvcnQsIG9yZGVyOiB0aGlzLnNvcnQub3JkZXIgfSkudGhlbigod2lubmVyc0Y6IFdpbm5lcnNbXSkgPT4ge1xuICAgICAgICBjb25zdCB3aW5uZXJzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXJzX19saXN0Jyk7XG4gICAgICAgIGlmICh3aW5uZXJzTGlzdCkge1xuICAgICAgICAgIHdpbm5lcnNMaXN0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpbkJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lcnNfX2Jsb2NrJyk7XG4gICAgICAgIGlmICh3aW5CbG9jaykge1xuICAgICAgICAgIHByZXZpb3VzTmV4dC5iZWZvcmUodGhpcy5jcmVhdGVXaW5uZXJzTGlzdCh3aW5uZXJzRikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGJ0V2lucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc29ydC5zb3J0ID0gJ3dpbnMnO1xuICAgICAgdGhpcy5zb3J0Lm9yZGVyID0gdGhpcy5zb3J0Lm9yZGVyID09PSAnQVNDJyA/IHRoaXMuc29ydC5vcmRlciA9ICdERVNDJyA6IHRoaXMuc29ydC5vcmRlciA9ICdBU0MnO1xuICAgICAgYnRXaW5zLnRleHRDb250ZW50ID0gdGhpcy5zb3J0Lm9yZGVyID09PSAnQVNDJyA/IFRvcERvd24ud2luc1RvcCA6IFRvcERvd24ud2luc0Rvd247XG4gICAgICBidElkLnRleHRDb250ZW50ID0gJ0lkJztcbiAgICAgIGJ0VGltZS50ZXh0Q29udGVudCA9ICdUaW1lJztcbiAgICAgIHRoaXMuY2Fycy5nZXRXaW5uZXJzKHsgcGFnZTogdGhpcy5zb3J0LnBhZ2UsIGxpbWl0OiB0aGlzLnNvcnQubGltaXQsIHNvcnQ6IHRoaXMuc29ydC5zb3J0LCBvcmRlcjogdGhpcy5zb3J0Lm9yZGVyIH0pLnRoZW4oKHdpbm5lcnNGOiBXaW5uZXJzW10pID0+IHtcbiAgICAgICAgY29uc3Qgd2lubmVyc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyc19fbGlzdCcpO1xuICAgICAgICBpZiAod2lubmVyc0xpc3QpIHtcbiAgICAgICAgICB3aW5uZXJzTGlzdC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3aW5CbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXJzX19ibG9jaycpO1xuICAgICAgICBpZiAod2luQmxvY2spIHtcbiAgICAgICAgICBwcmV2aW91c05leHQuYmVmb3JlKHRoaXMuY3JlYXRlV2lubmVyc0xpc3Qod2lubmVyc0YpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBidFRpbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvcnQuc29ydCA9ICd0aW1lJztcbiAgICAgIHRoaXMuc29ydC5vcmRlciA9IHRoaXMuc29ydC5vcmRlciA9PT0gJ0FTQycgPyB0aGlzLnNvcnQub3JkZXIgPSAnREVTQycgOiB0aGlzLnNvcnQub3JkZXIgPSAnQVNDJztcbiAgICAgIGJ0VGltZS50ZXh0Q29udGVudCA9IHRoaXMuc29ydC5vcmRlciA9PT0gJ0FTQycgPyBUb3BEb3duLnRpbWVUb3AgOiBUb3BEb3duLnRpbWVEb3duO1xuICAgICAgYnRJZC50ZXh0Q29udGVudCA9ICdJZCc7XG4gICAgICBidFdpbnMudGV4dENvbnRlbnQgPSAnV2lucyc7XG4gICAgICB0aGlzLmNhcnMuZ2V0V2lubmVycyh7IHBhZ2U6IHRoaXMuc29ydC5wYWdlLCBsaW1pdDogdGhpcy5zb3J0LmxpbWl0LCBzb3J0OiB0aGlzLnNvcnQuc29ydCwgb3JkZXI6IHRoaXMuc29ydC5vcmRlciB9KS50aGVuKCh3aW5uZXJzRjogV2lubmVyc1tdKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpbm5lcnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lcnNfX2xpc3QnKTtcbiAgICAgICAgaWYgKHdpbm5lcnNMaXN0KSB7XG4gICAgICAgICAgd2lubmVyc0xpc3QucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2luQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyc19fYmxvY2snKTtcbiAgICAgICAgaWYgKHdpbkJsb2NrKSB7XG4gICAgICAgICAgcHJldmlvdXNOZXh0LmJlZm9yZSh0aGlzLmNyZWF0ZVdpbm5lcnNMaXN0KHdpbm5lcnNGKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnNvcnQucGFnZSAhPT0gbWF4UGFnZSkge1xuICAgICAgICB0aGlzLnNvcnQucGFnZSArPSAxO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gYFBhZ2UgIyR7dGhpcy5zb3J0LnBhZ2V9YDtcbiAgICAgICAgdGhpcy5jYXJzLmdldFdpbm5lcnMoeyBwYWdlOiB0aGlzLnNvcnQucGFnZSwgbGltaXQ6IHRoaXMuc29ydC5saW1pdCwgc29ydDogdGhpcy5zb3J0LnNvcnQsIG9yZGVyOiB0aGlzLnNvcnQub3JkZXIgfSkudGhlbigod2lubmVyc0Y6IFdpbm5lcnNbXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdpbm5lcnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lcnNfX2xpc3QnKTtcbiAgICAgICAgICBpZiAod2lubmVyc0xpc3QpIHtcbiAgICAgICAgICAgIHdpbm5lcnNMaXN0LnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcmV2aW91c05leHQuYmVmb3JlKHRoaXMuY3JlYXRlV2lubmVyc0xpc3Qod2lubmVyc0YpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnNvcnQucGFnZSAhPT0gMSkge1xuICAgICAgICB0aGlzLnNvcnQucGFnZSAtPSAxO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gYFBhZ2UgIyR7dGhpcy5zb3J0LnBhZ2V9YDtcbiAgICAgICAgdGhpcy5jYXJzLmdldFdpbm5lcnMoeyBwYWdlOiB0aGlzLnNvcnQucGFnZSwgbGltaXQ6IHRoaXMuc29ydC5saW1pdCwgc29ydDogdGhpcy5zb3J0LnNvcnQsIG9yZGVyOiB0aGlzLnNvcnQub3JkZXIgfSkudGhlbigod2lubmVyc0Y6IFdpbm5lcnNbXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdpbm5lcnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lcnNfX2xpc3QnKTtcbiAgICAgICAgICBpZiAod2lubmVyc0xpc3QpIHtcbiAgICAgICAgICAgIHdpbm5lcnNMaXN0LnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcmV2aW91c05leHQuYmVmb3JlKHRoaXMuY3JlYXRlV2lubmVyc0xpc3Qod2lubmVyc0YpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVXaW5uZXJzTGlzdCh3aW5uZXJzOiBXaW5uZXJzW10pIHtcbiAgICBjb25zdCB3aW5uZXJzTGlzdCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnd2lubmVyc19fbGlzdCcgfSk7XG4gICAgd2lubmVycy5mb3JFYWNoKCh3aW5uZXIpID0+IHtcbiAgICAgIGNvbnN0IHdpbklkID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY29udGVudDogYCR7d2lubmVyLmlkfWAgfSk7XG4gICAgICBjb25zdCB3aW5OYW1lID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY29udGVudDogYCR7d2lubmVyLmlkfWAgfSk7XG4gICAgICBjb25zdCBzdmcgPSB0aGlzLmVsLmNyZWF0ZUNhclNWRygpO1xuICAgICAgc3ZnLmNsYXNzTGlzdC5hZGQoJ3N2Z19fd2lucycpO1xuICAgICAgY29uc3Qgd2luV2lucyA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ3NwYW4nLCBjb250ZW50OiBgJHt3aW5uZXIud2luc31gIH0pO1xuICAgICAgY29uc3Qgd2luVGltZSA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ3NwYW4nLCBjb250ZW50OiBgJHt3aW5uZXIudGltZX1gIH0pO1xuICAgICAgdGhpcy5jYXJzLmdldENhcih3aW5uZXIuaWQpLnRoZW4oKGNhcjogQ2FyKSA9PiB7XG4gICAgICAgIHdpbk5hbWUudGV4dENvbnRlbnQgPSBjYXIubmFtZTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGAke2Nhci5jb2xvcn1gKTtcbiAgICAgIH0pO1xuICAgICAgd2lubmVyc0xpc3QuYXBwZW5kKHdpbklkLCB3aW5OYW1lLCBzdmcsIHdpbldpbnMsIHdpblRpbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB3aW5uZXJzTGlzdDtcbiAgfVxuXG4gIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtYWluKTtcbiAgICB0aGlzLmNyZWF0ZVNldHRpbmcoKTtcbiAgICB0aGlzLmNyZWF0ZUNhcnNMaXN0KCk7XG4gIH1cblxuICBjcmVhdGVTZXR0aW5nKCkge1xuICAgIGNvbnN0IHNldHRpbmcgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBpZDogJ3NldHRpbmcnIH0pO1xuICAgIGNvbnN0IGJ1dHRvbk1lbnUxID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xhc3NOb3RlOiAnYnV0dG9uX19tZW51JyB9KTtcbiAgICBjb25zdCBpbnB1dENyZWF0ZSA9IHRoaXMuZWwuY3JlYXRlSW5wdXQoeyB0eXBlOiAndGV4dCcsIGlkOiAnaW5wdXRfX2NyZWF0ZScgfSk7XG4gICAgY29uc3QgaW5wdXRDcmVhdGVDb2xvciA9IHRoaXMuZWwuY3JlYXRlSW5wdXQoe1xuICAgICAgdHlwZTogJ2NvbG9yJyxcbiAgICAgIGlkOiAnaW5wdXRfX2NyZWF0ZV9fY29sb3InLFxuICAgICAgbmFtZTogJ2NvbG9yJyxcbiAgICAgIHZhbHVlOiAnI2ZmZmZmZicsXG4gICAgfSk7XG4gICAgY29uc3QgYnV0dG9uQ3JlYXRlID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICdidXR0b25fX2NyZWF0ZScsIGNvbnRlbnQ6ICdDUkVBVEUnIH0pO1xuICAgIGJ1dHRvbk1lbnUxLmFwcGVuZChpbnB1dENyZWF0ZSwgaW5wdXRDcmVhdGVDb2xvciwgYnV0dG9uQ3JlYXRlKTtcbiAgICBjb25zdCBidXR0b25NZW51MiA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsYXNzTm90ZTogJ2J1dHRvbl9fbWVudScgfSk7XG4gICAgY29uc3QgaW5wdXRVcGRhdGUgPSB0aGlzLmVsLmNyZWF0ZUlucHV0KHsgdHlwZTogJ3RleHQnLCBpZDogJ2lucHV0X191cGRhdGUnLCBkaXNhYmxlOiB0cnVlIH0pO1xuICAgIGNvbnN0IGlucHV0VXBkYXRlQ29sb3IgPSB0aGlzLmVsLmNyZWF0ZUlucHV0KHtcbiAgICAgIHR5cGU6ICdjb2xvcicsXG4gICAgICBpZDogJ2lucHV0X191cGRhdGVfX2NvbG9yJyxcbiAgICAgIG5hbWU6ICdjb2xvcicsXG4gICAgICB2YWx1ZTogJyNmZmZmZmYnLFxuICAgICAgZGlzYWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBjb25zdCBidXR0b25VcGRhdGUgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGlkOiAnYnV0dG9uX191cGRhdGUnLFxuICAgICAgY29udGVudDogJ1VQREFURScsXG4gICAgICBkaXNhYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIGJ1dHRvbk1lbnUyLmFwcGVuZChpbnB1dFVwZGF0ZSwgaW5wdXRVcGRhdGVDb2xvciwgYnV0dG9uVXBkYXRlKTtcbiAgICBjb25zdCBidXR0b25NZW51MyA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsYXNzTm90ZTogJ2J1dHRvbl9fbWVudScgfSk7XG4gICAgY29uc3QgYnV0dG9uUmFjZSA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGlkOiAncmFjZScsIGNvbnRlbnQ6ICdSQUNFJyB9KTtcbiAgICBjb25zdCBidXR0b25SZXNldCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGlkOiAncmVzZXQnLCBjb250ZW50OiAnUkVTRVQnLCBkaXNhYmxlOiB0cnVlIH0pO1xuICAgIGNvbnN0IGJ1dHRvbkdlbmVyYXRlID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgY29udGVudDogJ0dFTkVSQVRFIENBUlMnIH0pO1xuICAgIGJ1dHRvbk1lbnUzLmFwcGVuZChidXR0b25SYWNlLCBidXR0b25SZXNldCwgYnV0dG9uR2VuZXJhdGUpO1xuICAgIHNldHRpbmcuYXBwZW5kKGJ1dHRvbk1lbnUxLCBidXR0b25NZW51MiwgYnV0dG9uTWVudTMpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uYXBwZW5kKHNldHRpbmcpO1xuXG4gICAgYnV0dG9uQ3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGlucHV0Q3JlYXRlKSB7XG4gICAgICAgIGlmIChpbnB1dENyZWF0ZS52YWx1ZS50cmltKCkgIT0gJycpIHtcbiAgICAgICAgICBjb25zdCBuZXdDYXI6IFNtYWxsQ2FyID0ge1xuICAgICAgICAgICAgbmFtZTogaW5wdXRDcmVhdGUudmFsdWUsXG4gICAgICAgICAgICBjb2xvcjogaW5wdXRDcmVhdGVDb2xvci52YWx1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuY2Fycy5jcmVhdGVDYXIobmV3Q2FyKTtcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnV0dG9uVXBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGlucHV0VXBkYXRlKSB7XG4gICAgICAgIGlmIChpbnB1dFVwZGF0ZS52YWx1ZS50cmltKCkgIT0gJycpIHtcbiAgICAgICAgICBjb25zdCBuZXdDYXI6IFNtYWxsQ2FyID0ge1xuICAgICAgICAgICAgbmFtZTogaW5wdXRVcGRhdGUudmFsdWUsXG4gICAgICAgICAgICBjb2xvcjogaW5wdXRVcGRhdGVDb2xvci52YWx1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuY2Fycy51cGRhdGVDYXIoTnVtYmVyKGlucHV0VXBkYXRlLnRleHRDb250ZW50KSwgbmV3Q2FyKTtcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnV0dG9uR2VuZXJhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjYXJzID0gdGhpcy5yYW5kb21DYXIucmFuZG9tQ2FycygpO1xuICAgICAgKGJ1dHRvbkdlbmVyYXRlIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBjYXJzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdGhpcy5jYXJzLmNyZWF0ZUNhcihpdGVtKTtcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9KTtcblxuICAgIGJ1dHRvblJhY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAoYnV0dG9uUmFjZSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5udW1iZXJXaW5zID0gW107XG4gICAgICAoYnV0dG9uUmVzZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmN1cnJlbnRDYXIuZm9yRWFjaCgoaXQpID0+IHtcbiAgICAgICAgY29uc3QgYnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnV0dG9uX19zdGFydF9fJHtpdC5pZCAtIDF9YCk7XG4gICAgICAgIGlmIChidCkge1xuICAgICAgICAgIGJ0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgICAgICAoYnQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBidXR0b25SZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIChidXR0b25SYWNlIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgKGJ1dHRvblJlc2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmN1cnJlbnRDYXIuZm9yRWFjaCgoaXQpID0+IHtcbiAgICAgICAgY29uc3QgYnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnV0dG9uX19zdG9wX18ke2l0LmlkIC0gMX1gKTtcbiAgICAgICAgaWYgKGJ0KSB7XG4gICAgICAgICAgYnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xuICAgICAgICAgIChidCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdmb290ZXInIH0pO1xuICAgIGNvbnN0IGNvbnRlbnRJbWFnZSA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicgfSk7XG4gICAgY29uc3QgbGluayA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2EnIH0pO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi9hc3NldHMvaW1hZ2VzL2xvZ29fcnNfdGV4dC5zdmcnO1xuICAgIGNvbnN0IGxpbmtHaXQgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdhJywgY2xhc3NOb3RlOiAnZm9vdGVyX19naXQnLCBjb250ZW50OiAnYmFsYXhvbiAyMDIzJyB9KTtcbiAgICAobGlua0dpdCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vYmFsYXhvbic7XG4gICAgbGluay5hcHBlbmQoaW1nKTtcbiAgICBjb250ZW50SW1hZ2UuYXBwZW5kKGxpbmspO1xuICAgIGZvb3Rlci5hcHBlbmQoY29udGVudEltYWdlLCBsaW5rR2l0KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChmb290ZXIpO1xuICB9XG5cbiAgY3JlYXRlQ2Fyc0xpc3QoKSB7XG4gICAgY29uc3QgY2Fyc0xpc3QgPSB0aGlzLmNhcnMuZ2V0Q2FycygpO1xuICAgIGNhcnNMaXN0LnRoZW4oKGNhcnM6Q2FyW10pID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlQ2FyRnJvbURhdGEoY2Fycyk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVDYXJGcm9tRGF0YShjYXI6IENhcltdKSB7XG4gICAgY29uc3QgbWF4UGFnZSA9IE1hdGguY2VpbChjYXIubGVuZ3RoIC8gNyk7XG4gICAgbGV0IHBhZ2UgPSAxO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdO1xuICAgIGNvbnN0IGgyID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnaDInLCBpZDogJ2dhcmFnZV9fdGV4dCcsIGNvbnRlbnQ6IGBHYXJhZ2UgKCR7Y2FyLmxlbmd0aH0pYCB9KTtcbiAgICBjb25zdCBwID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAncCcsIGlkOiAncGFnZScsIGNvbnRlbnQ6IGBQYWdlICMke3BhZ2V9YCB9KTtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBpZDogJ2NhcmRfX2xpc3QnIH0pO1xuICAgIG1haW4uYXBwZW5kKGgyLCBwLCBkaXYpO1xuXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGNhci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2FyQ2FyZCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnY2FyX19jYXJkJyB9KTtcbiAgICAgIGNvbnN0IGZpcnN0RGl2ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JyB9KTtcbiAgICAgIGNvbnN0IGJ0U2VsZWN0ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgY29udGVudDogJ1NFTEVDVCcgfSk7XG4gICAgICBjb25zdCBidFJlbW92ZSA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGNvbnRlbnQ6ICdSRU1PVkUnIH0pO1xuICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ3NwYW4nLCBjb250ZW50OiBgJHtpdGVtLm5hbWV9YCB9KTtcbiAgICAgIGNvbnN0IHRyYWNrID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xhc3NOb3RlOiAndHJhY2snIH0pO1xuICAgICAgY29uc3QgYnV0dG9uRGl2ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgaWQ6ICdzdGFydF9fc3RvcCcgfSk7XG4gICAgICBjb25zdCBidEEgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05vdGU6ICdidXR0b25fX3N0YXJ0JyxcbiAgICAgICAgaWQ6IGBidXR0b25fX3N0YXJ0X18ke2luZGV4fWAsXG4gICAgICAgIGNvbnRlbnQ6ICdBJyxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgYnRCID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NOb3RlOiAnYnV0dG9uX19zdG9wJyxcbiAgICAgICAgaWQ6IGBidXR0b25fX3N0b3BfXyR7aW5kZXh9YCxcbiAgICAgICAgY29udGVudDogJ0InLFxuICAgICAgICBkaXNhYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBidXR0b25EaXYuYXBwZW5kKGJ0QSwgYnRCKTtcbiAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuZWwuY3JlYXRlQ2FyU1ZHKCk7XG4gICAgICBzdmcuaWQgPSBgc3ZnX18ke2l0ZW0uaWR9YDtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBgJHtpdGVtLmNvbG9yfWApO1xuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaCcpO1xuICAgICAgaW1hZ2Uuc3JjID0gJ2Fzc2V0cy9pbWFnZXMvZmluaXNoLnBuZyc7XG4gICAgICBmaXJzdERpdi5hcHBlbmQoYnRTZWxlY3QsIGJ0UmVtb3ZlLCBzcGFuKTtcbiAgICAgIHRyYWNrLmFwcGVuZChidXR0b25EaXYsIHN2ZywgaW1hZ2UpO1xuICAgICAgY2FyQ2FyZC5hcHBlbmQoZmlyc3REaXYsIHRyYWNrKTtcbiAgICAgIGJ0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF9fdXBkYXRlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgaW5wdXQudGV4dENvbnRlbnQgPSBpdGVtLmlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF9fdXBkYXRlX19jb2xvcicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgIGNvbG9yLnZhbHVlID0gaXRlbS5jb2xvcjtcbiAgICAgICAgICBjb2xvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25fX3VwZGF0ZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYnRSZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2Fycy5nZXRXaW5uZXIoaXRlbS5pZCkudGhlbigod2lubmVyOiBXaW5uZXJzKSA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHdpbm5lcikubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2Fycy5kZWxldGVXaW5uZXIoaXRlbS5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYXJzLmRlbGV0ZUNhcihpdGVtLmlkKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICAgIFxuICAgICAgfSk7XG5cbiAgICAgIGxldCByZXF1ZXN0ID0gMDtcbiAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICBsZXQgdGltZSA9IDA7XG4gICAgICBsZXQgc3RhcnRBbmltYXRpb24gPSAwO1xuICAgICAgZnVuY3Rpb24gZHJpdmUodGltZXM6IG51bWJlcikge1xuICAgICAgICBpZiAoc3RhcnRBbmltYXRpb24gPT09IDApIHtcbiAgICAgICAgICBzdGFydEFuaW1hdGlvbiA9IHRpbWVzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gKHRpbWVzIC0gc3RhcnRBbmltYXRpb24pIC8gdGltZTtcbiAgICAgICAgc3ZnLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHsxMjAgKyBwcm9ncmVzcyAqIHdpZHRofXB4YDtcbiAgICAgICAgaWYgKHByb2dyZXNzIDwgMSkge1xuICAgICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJpdmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgY29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyO1xuXG4gICAgICBidEEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIChidEEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgY2FyZGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZF9fbGlzdCcpO1xuICAgICAgICB3aWR0aCA9IDA7XG4gICAgICAgIGlmIChjYXJkbGlzdCkge1xuICAgICAgICAgIHdpZHRoID0gK2NhcmRsaXN0Lm9mZnNldFdpZHRoIC0gMjMwO1xuICAgICAgICB9XG4gICAgICAgIHRpbWUgPSAwO1xuICAgICAgICBhd2FpdCB0aGlzLmNhcnMuc3RhcnRFbmdpbmUoaXRlbS5pZCkudGhlbigoaXRlbXM6IEVuZ2luZSkgPT4gdGltZSA9IE1hdGguYWJzKGl0ZW1zLmRpc3RhbmNlIC8gaXRlbXMudmVsb2NpdHkpKTtcbiAgICAgICAgKGJ0QiBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgc3RhcnRBbmltYXRpb24gPSAwO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyaXZlKTtcbiAgICAgICAgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgYXdhaXQgbmV3IEdldERhdGEoKS5kcml2ZShpdGVtLmlkLCBjb250cm9sbGVyLnNpZ25hbCkudGhlbigoaXRlbXMpID0+IHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0KTtcbiAgICAgICAgICBjb25zdCByYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhY2UnKTtcbiAgICAgICAgICBpZiAocmFjZSkge1xuICAgICAgICAgICAgaWYgKGl0ZW1zLnN1Y2Nlc3MgJiYgKHJhY2UgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkICYmIHRoaXMubnVtYmVyV2lucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy53aW5uZXJJRCA9IGl0ZW0uaWQ7XG4gICAgICAgICAgICAgIHRoaXMubnVtYmVyV2lucy5wdXNoKGl0ZW0uaWQpO1xuICAgICAgICAgICAgICBuZXcgR2V0RGF0YSgpLmdldENhcihpdGVtLmlkKS50aGVuKChzaW5nbGVjYXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnMuZ2V0V2lubmVyKHNpbmdsZWNhci5pZCkudGhlbigod2lubmVyOiBXaW5uZXJzKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMod2lubmVyKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3V2lubmVyOiBXaW5uZXJzID0geyBpZDogc2luZ2xlY2FyLmlkLCB3aW5zOiAxLCB0aW1lOiArKHRpbWUgLyAxMDAwKS50b0ZpeGVkKDIpIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2Fycy5jcmVhdGVXaW5uZXIobmV3V2lubmVyKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiZXN0VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RUaW1lID0gd2lubmVyLnRpbWUgPiArKHRpbWUgLyAxMDAwKS50b0ZpeGVkKDIpID8gYmVzdFRpbWUgPSArKHRpbWUgLyAxMDAwKS50b0ZpeGVkKDIpIDogYmVzdFRpbWUgPSB3aW5uZXIudGltZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlV2lubmVyOiBVcGRhdGVXaW5uZXIgPSB7IHdpbnM6IHdpbm5lci53aW5zICsgMSwgdGltZTogYmVzdFRpbWUgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJzLnVwZGF0ZVdpbm5lcihzaW5nbGVjYXIuaWQsIHVwZGF0ZVdpbm5lcik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb2RhbChzaW5nbGVjYXIubmFtZSwgKyh0aW1lIC8gMTAwMCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGJ0Qi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAoYnRCIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5jYXJzLnN0b3BFbmdpbmUoaXRlbS5pZCkudGhlbigoKSA9PiB7fSk7XG4gICAgICAgICAgc3ZnLnN0eWxlLm1hcmdpbkxlZnQgPSAnMTIwcHgnO1xuICAgICAgICAgIChidEEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdCk7XG4gICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKEVycm9yTWVzc2FnZS5wYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNhcmRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRfX2xpc3QnKTtcbiAgICAgIGlmIChjb3VudGVyID4gNikge1xuICAgICAgICBjYXJDYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgICBpZiAoY2FyZExpc3QpIHtcbiAgICAgICAgY2FyZExpc3QuYXBwZW5kKGNhckNhcmQpO1xuICAgICAgfVxuICAgICAgY291bnRlciArPSAxO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJldmlvdXNOZXh0ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgaWQ6ICdwcmV2aW91c19fbmV4dCcgfSk7XG4gICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLmVsLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdidXR0b24nLCBpZDogJ3ByZXZpb3VzJywgY29udGVudDogJ3ByZXZpb3VzJyB9KTtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgaWQ6ICduZXh0JywgY29udGVudDogJ25leHQnIH0pO1xuICAgIHByZXZpb3VzTmV4dC5hcHBlbmQocHJldmlvdXMsIG5leHQpO1xuICAgIG1haW4uYXBwZW5kKHByZXZpb3VzTmV4dCk7XG5cbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY2Fyc0xpc3QgPSB0aGlzLmNhcnMuZ2V0Q2FycygpO1xuICAgICAgZm9yIChsZXQgaSA9IHBhZ2UgKiA3IC0gNzsgaSA8IDcgKiBwYWdlOyBpKyspIHtcbiAgICAgICAgaWYgKHBhZ2UgPCBtYXhQYWdlKSB7XG4gICAgICAgICAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZF9fbGlzdCcpO1xuICAgICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgICAgKHRyYWNrLmNoaWxkTm9kZXNbaV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGFnZSA8IG1heFBhZ2UpIHtcbiAgICAgICAgcGFnZSArPSAxO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IHBhZ2UgKiA3IC0gNzsgaSA8IDcgKiBwYWdlOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPCBjYXIubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZF9fbGlzdCcpO1xuICAgICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgICAgKHRyYWNrLmNoaWxkTm9kZXNbaV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FyID0gW107XG4gICAgICAgICAgICBjYXJzTGlzdC50aGVuKChjYXJzOiBDYXJbXSkgPT4ge1xuICAgICAgICAgICAgICBjYXJzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaSArIDEpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENhci5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHRQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UnKTtcbiAgICAgIGlmICh0ZXh0UGFnZSkge1xuICAgICAgICB0ZXh0UGFnZS50ZXh0Q29udGVudCA9IGBQYWdlICMke3BhZ2V9YDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByZXZpb3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY2Fyc0xpc3QgPSB0aGlzLmNhcnMuZ2V0Q2FycygpO1xuICAgICAgZm9yIChsZXQgaSA9IHBhZ2UgKiA3IC0gNzsgaSA8IDcgKiBwYWdlOyBpKyspIHtcbiAgICAgICAgaWYgKHBhZ2UgPiAxKSB7XG4gICAgICAgICAgaWYgKGkgPCBjYXIubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkX19saXN0Jyk7XG4gICAgICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICAgICAgKHRyYWNrLmNoaWxkTm9kZXNbaV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGFnZSA+IDEpIHtcbiAgICAgICAgcGFnZSAtPSAxO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IHBhZ2UgKiA3IC0gNzsgaSA8IDcgKiBwYWdlOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPCBjYXIubGVuZ3RoICYmIHBhZ2UgPj0gMSkge1xuICAgICAgICAgIGNvbnN0IHRyYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRfX2xpc3QnKTtcbiAgICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICAgICh0cmFjay5jaGlsZE5vZGVzW2ldIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENhciA9IFtdO1xuICAgICAgICAgICAgY2Fyc0xpc3QudGhlbigoY2FyczogQ2FyW10pID0+IHtcbiAgICAgICAgICAgICAgY2Fycy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGkgKyAxKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXIucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJyk7XG4gICAgICBpZiAodGV4dFBhZ2UpIHtcbiAgICAgICAgdGV4dFBhZ2UudGV4dENvbnRlbnQgPSBgUGFnZSAjJHtwYWdlfWA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVNb2RhbChuYW1lOiBzdHJpbmcsIHRpbWU6IG51bWJlcikge1xuICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnbW9kYWxfX292ZXJsYXknIH0pO1xuICAgIGNvbnN0IG1vZGFsID0gdGhpcy5lbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgaWQ6ICdtb2RhbCcgfSk7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2gyJywgY29udGVudDogYFdpbm5lcjogJHtuYW1lfSB0aW1lOiAke3RpbWV9YCB9KTtcbiAgICBjb25zdCBidCA9IHRoaXMuZWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGlkOiAnbW9kYWxfX2J0JywgY29udGVudDogJ09LJyB9KTtcbiAgICBtb2RhbC5hcHBlbmQodGV4dCwgYnQpO1xuICAgIG1vZGFsT3ZlcmxheS5hcHBlbmQobW9kYWwpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1vZGFsT3ZlcmxheSk7XG4gICAgYnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtb2RhbE92ZXJsYXkucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNtYWxsQ2FyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIFJhbmRvbUNhciB7XG5cbiAgcmFuZG9tTmFtZSgpIHtcbiAgICBjb25zdCBjYXJzOiBzdHJpbmdbXSA9IFtcbiAgICAgICdBdWRpIEExJyxcbiAgICAgICdBdWRpIFI4JyxcbiAgICAgICdBbGZhIFJvbWVvIEJyZXJhJyxcbiAgICAgICdBbGZhIFJvbWVvIEdUJyxcbiAgICAgICdBdWRpIEEyJyxcbiAgICAgICdBbGZhIFJvbWVvIDE1NicsXG4gICAgICAnQXVkaSBBMycsXG4gICAgICAnQXVkaSBBNCcsXG4gICAgICAnQWxmYSBSb21lbyAxNTUnLFxuICAgICAgJ0JZRCBUYW5nJyxcbiAgICAgICdCTVcgaTgnLFxuICAgICAgJ0JNVyBpMycsXG4gICAgICAnQllEIFFpbicsXG4gICAgICAnQllEIGU2JyxcbiAgICAgICdCWUQgRjNETScsXG4gICAgICAnQnVnYXR0aSBWZXlyb24nLFxuICAgICAgJ0JNVyBYNScsXG4gICAgICAnQk1XIFo4JyxcbiAgICAgICdCdWdhdHRpIEVCMTEwJyxcbiAgICAgICdDaHJ5c2xlciBBc3BlbiBIeWJyaWQnLFxuICAgICAgJ0NhZGlsbGFjIEVMUicsXG4gICAgICAnQ2hldnJvbGV0IFZvbHQnLFxuICAgICAgJ0NoZXZyb2xldCBDcnV6ZScsXG4gICAgICAnQ2hyeXNsZXIgVG93biAmIENvdW50cnknLFxuICAgICAgJ0RhaWhhdHN1IENvcGVuJyxcbiAgICAgICdEZSBUb21hc28gR3VhcsOgJyxcbiAgICAgICdEb2RnZSBWaXBlcicsXG4gICAgICAnRG9kZ2UgU3RlYWx0aCcsXG4gICAgICAnRG9kZ2UgQXJpZXMvUGx5bW91dGggUmVsaWFudCcsXG4gICAgICAnRE1DIERlTG9yZWFuJyxcbiAgICAgICdEZSBUb21hc28gTG9uZ2NoYW1wJyxcbiAgICAgICdGZXJyYXJpIDMyOCcsXG4gICAgICAnRmVycmFyaSBGNDAnLFxuICAgICAgJ0ZlcnJhcmkgMzQ4JyxcbiAgICAgICdGZXJyYXJpIDQ1NicsXG4gICAgICAnRmVycmFyaSAzMzMgU1AnLFxuICAgICAgJ0ZlcnJhcmkgRjM1NScsXG4gICAgICAnRmVycmFyaSBGNTAnLFxuICAgICAgJ0ZlcnJhcmkgNTUwIE1hcmFuZWxsbycsXG4gICAgICAnRmVycmFyaSA1NzVNIE1hcmFuZWxsbycsXG4gICAgICAnRmVycmFyaSAzNjAnLFxuICAgICAgJ0Vuem8gRmVycmFyaScsXG4gICAgICAnRmVycmFyaSBGNDMwJyxcbiAgICAgICdGZXJyYXJpIDQ1OCcsXG4gICAgICAnRmVycmFyaSBGRicsXG4gICAgICAnTGFGZXJyYXJpJyxcbiAgICAgICdGaXNrZXIgS2FybWEnLFxuICAgICAgJ0ZvcmQgRmllc3RhJyxcbiAgICAgICdGb3JkIEZpZXN0YScsXG4gICAgICAnRm9yZCBGb2N1cycsXG4gICAgICAnRm9yZCBHcmFuYWRhIChOb3J0aCBBbWVyaWNhKScsXG4gICAgICAnRm9yZCBHVCcsXG4gICAgICAnRm9yZCBMVEQnLFxuICAgICAgJ0ZvcmQgTW9kZWwgQScsXG4gICAgICAnRm9yZCBNb2RlbCBUJyxcbiAgICAgICdGb3JkIE11c3RhbmcnLFxuICAgICAgJ0ZvcmQgUHVtYScsXG4gICAgICAnRm9yZCBSYW5jaGVybycsXG4gICAgICAnRm9yZCBSYW5nZXInLFxuICAgICAgJ0phZ3VhciBYSicsXG4gICAgICAnSmFndWFyIFhKUycsXG4gICAgICAnSmFndWFyIFhKUi0xNScsXG4gICAgICAnSmFndWFyIFhKMjIwJyxcbiAgICAgICdKYWd1YXIgWEsnLFxuICAgICAgJ0phZ3VhciBYLVR5cGUnLFxuICAgICAgJ0phZ3VhciBYRicsXG4gICAgICAnTGFtYm9yZ2hpbmkgRGlhYmxvJyxcbiAgICAgICdMYW1ib3JnaGluaSBFc3BhZGEnLFxuICAgICAgJ0xhbWJvcmdoaW5pIEdhbGxhcmRvJyxcbiAgICAgICdMYW1ib3JnaGluaSBIdXJhY8OhbicsXG4gICAgICAnTGFtYm9yZ2hpbmkgSXNsZXJvJyxcbiAgICAgICdMYW1ib3JnaGluaSBVcnVzJyxcbiAgICAgICdMYW5kIFJvdmVyIERpc2NvdmVyeSBTcG9ydCcsXG4gICAgICAnTGFuZCBSb3ZlciBSYW5nZSBSb3ZlcicsXG4gICAgICAnUmFuZ2UgUm92ZXIgRXZvcXVlJyxcbiAgICAgICdSYW5nZSBSb3ZlciBTcG9ydCcsXG4gICAgICAnTWNMYXJlbiBQMScsXG4gICAgICAnTWNMYXJlbiAxMkMnLFxuICAgICAgJ01hc2VyYXRpIE1DMTInLFxuICAgICAgJ01hc2VyYXRpIEdyYW5UdXJpc21vJyxcbiAgICAgICdNYXliYWNoIDU3IGFuZCA2MicsXG4gICAgICAnTWVyY3VyeSBNYXJhdWRlcicsXG4gICAgICAnTWVyY3VyeSBNYXJpbmVyJyxcbiAgICAgICdNZXJjdXJ5IE1pbGFuJyxcbiAgICAgICdNZXJjdXJ5IE1vbnRlcmV5IChtaW5pdmFuKScsXG4gICAgICAnUG9yc2NoZSA5MTEnLFxuICAgICAgJ1BvcnNjaGUgOTU5JyxcbiAgICAgICdQb3JzY2hlIDk2OCcsXG4gICAgICAnUG9yc2NoZSBCb3hzdGVyJyxcbiAgICAgICdQb3JzY2hlIENheWVubmUnLFxuICAgICAgJ1BvcnNjaGUgQ2FycmVyYSBHVCcsXG4gICAgICAnUG9yc2NoZSBQYW5hbWVyYScsXG4gICAgICAnUG9yc2NoZSA5MTgnLFxuICAgICAgJ1BvcnNjaGUgTWFjYW4nLFxuICAgICAgJ1JlbmF1bHQgVHdpbmdvJyxcbiAgICAgICdSZW5hdWx0IFR3aXp5JyxcbiAgICAgICdSZW5hdWx0IFpvZScsXG4gICAgICAnVG95b3RhIFByaXVzJyxcbiAgICAgICdUb3lvdGEgUkFWNCcsXG4gICAgICAnTGFkYScsXG4gICAgXTtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDEpO1xuICAgIHJldHVybiBjYXJzW3JhbmRvbV07XG4gIH1cblxuICByYW5kb21Db2xvcigpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgfVxuXG4gIHJhbmRvbUNhcnMoKSB7XG4gICAgY29uc3QgY2FyczogU21hbGxDYXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld0NhcjogU21hbGxDYXIgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMucmFuZG9tTmFtZSgpLFxuICAgICAgICBjb2xvcjogYCMke3RoaXMucmFuZG9tQ29sb3IoKX1gLFxuICAgICAgfTtcbiAgICAgIGNhcnMucHVzaChuZXdDYXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FycztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XG5cbm5ldyBQYWdlKCkuY3JlYXRlRGVmYXVsdFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==