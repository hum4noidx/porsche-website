import axios from "axios";

let serverPath = "";

serverPath = "http://localhost:8000/api/v1"


export default class CarService {
    static async get_categories() {
        return await axios.get(`${serverPath}/car_categories`)
    }
}