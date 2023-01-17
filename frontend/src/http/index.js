import axios from 'axios';
import {URL} from "../utils/const";

const $host = axios.create({
  baseURL: URL
});

export {
  $host
};