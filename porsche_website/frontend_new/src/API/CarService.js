import axios from "axios";

let serverPath = "";

serverPath = "https://api.porsche.hm4nx.ru/api/v1"


export default class CarService {
    static async get_categories() {
        return new Promise((resolve, reject) => {
            axios.get(`${serverPath}/car_categories`).then((res) => {
                    resolve(res.data)
                }
            ).catch((err) => {
                    console.error(err)
                    reject(err)
                }
            )
        })
    }
    static get_cars_by_category(category_id) {
        return new Promise((resolve, reject) => {
            axios.get(`${serverPath}/car_categories/${category_id}`).then((res) => {
                    resolve(res.data)
                }
            ).catch((err) => {
                    console.error(err)
                    reject(err)
                }
            )
        })
    }
    static get_car_by_id(car_slug) {
        return new Promise((resolve, reject) => {
            axios.get(`${serverPath}/cars/${car_slug}`).then((res) => {
                    resolve(res.data)
                }
            ).catch((err) => {
                    console.error(err)
                    reject(err)
                }
            )
        })
    }
    static get_car_hightlights(car_slug) {
        return new Promise((resolve, reject) => {
            axios.get(`${serverPath}/cars/${car_slug}/highlights`).then((res) => {
                    resolve(res.data)
                }
            ).catch((err) => {
                    console.error(err)
                    reject(err)
                }
            )
        })
    }
}
