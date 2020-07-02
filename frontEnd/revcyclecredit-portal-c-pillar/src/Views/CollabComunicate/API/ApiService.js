import axios from 'axios';

class ApiService {

    upload(data) {
        // console.log(data.get('title'));
        console.log("storing into database");
        return axios.post(`http://localhost:8087/files/uploadFile`, data ,
        );
    }
} 

export default new ApiService();