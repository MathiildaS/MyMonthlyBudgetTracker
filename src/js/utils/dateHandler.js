
export class dateHandler {
#currentDate

constructor() {
    this.#currentDate = new Date() 
}

    getCurrentMonth() {
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

let nameOfCurrentMonth = month[this.#currentDate.getMonth()];
return nameOfCurrentMonth
    }

    getCurrentYear() {
let currentYear = this.#currentDate.getFullYear()
return currentYear
    }
}