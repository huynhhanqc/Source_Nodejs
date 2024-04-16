export default class UrlMC {
    constructor() {
        this.title = 'Dashboard'
    }

    async open (path) {
        await browser.url(path)
    }
}