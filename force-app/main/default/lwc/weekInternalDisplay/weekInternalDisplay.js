import { LightningElement } from 'lwc';

export default class WeekInternalDisplay extends LightningElement {
    curr = new Date()

    get intervalDate() {
        const first = this.curr.getDate() - this.curr.getDay()
        const last = first + 6

        const firstday = new Date(this.curr.setDate(first))
        const lastday = new Date(this.curr.setDate(last))
        return `${firstday.getDate()}/${firstday.getMonth() + 1}/${firstday.getFullYear()} - ${lastday.getDate()}/${lastday.getMonth() + 1}/${lastday.getFullYear()}`
    }

    substractWeek() {
        const lastWeek = this.curr.getDate() - this.curr.getDay()
        const last = lastWeek - 6

        this.curr = new Date(this.curr.setDate(last))
    }

    addWeek() {
        const nextWeek = this.curr.getDate() - this.curr.getDay()
        const next = nextWeek + 12

        this.curr = new Date(this.curr.setDate(next))
    }
}
