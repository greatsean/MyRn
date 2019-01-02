export default class HttpHelper {

    static get(url) {
        return fetch(url).then((response) => {
            const { status: code, headers: { map: { date } } } = response;
            console.log('lxh..', date + '>>code:' + code);
            const jobjPro = response.json();
            console.log('lxh', jobjPro);
            return jobjPro;
        });
    }

    
}