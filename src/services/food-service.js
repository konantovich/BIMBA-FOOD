
import data from '../db.json'

export default class FoodService {

    constructor () {
        this._apiBase ='https://jsonplaceholder.typicode.com'
       // this._apiBase = 'http://localhost:3000'
    }

    async getMenuLocal () {
        return new Promise((resolve, reject) => {
            resolve(data)
            reject('er')
        }
        )
    }

    async getMenuItems () {

        const url = `${this._apiBase}/menu`;

        const res = await fetch(url);

        if (!res.ok) {//res.ok если статус 200, без ошибок
            throw new Error (`could not fetch: ${url}, status: ${res.status}`);
          }

        return await res.json();
    }

    async postCompleteMenuItemsApi (items) {

        const url = `${this._apiBase}/posts`;

        const dataToSend = JSON.stringify(items)

        console.log('dataToSend', dataToSend)

        const res = await fetch(url, {
            method: "POST", 
            body: dataToSend, 
            headers: {'Content-type': 'application/json'}
        })
        return res
    }

}