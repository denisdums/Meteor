const cookiesHelper = {
    setFavsCookie(listOfFavs) {
        const expiration = this.getCookieExpirationDate();
        console.log(expiration)
        return document.cookie = "favs=" + JSON.stringify(listOfFavs) + ";expires=" + expiration + ";path=/";
    },
    getFavsCookie() {
        return this.getCookie('favs') ?? [];
    },
    getCookie(name) {
        const cookies = document.cookie.split(";");
        let cookie = null;
        cookies.forEach(item => {
            let itemArray = item.split('=')
            cookie = itemArray[0] === name ? JSON.parse(itemArray[1]) : cookie;
        })
        return cookie;
    },
    getCookieExpirationDate() {
        let expiration = new Date();
        expiration.setMonth(expiration.getMonth() + 12)
        return expiration;
    }
}

export default cookiesHelper