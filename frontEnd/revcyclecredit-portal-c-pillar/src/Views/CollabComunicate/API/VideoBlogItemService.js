import axios from 'axios'

class VideoBlogItemService {
    retrieveAllItems(){
        console.log('url');
        return axios.get(`http://localhost:9090/videos/list` )

        
    }
}

export default new VideoBlogItemService()