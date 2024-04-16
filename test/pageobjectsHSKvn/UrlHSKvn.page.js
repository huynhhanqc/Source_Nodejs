export default class UrlHSKvn {
    constructor() {
        this.title = 'Hasaki.vn'
    }

    async open (path) {
        await browser.url(path)
    }
}