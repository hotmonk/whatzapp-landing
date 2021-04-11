import axios from "axios";

const instance=axios.create({
    baseURL:'whatzapp.co/api/vi/whatzapp/'
})

export default instance;