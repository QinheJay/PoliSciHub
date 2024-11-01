import axios from "axios";

export function readJSON(path) {
    return axios('PoliSciHub/json/' + path + '.json')
}