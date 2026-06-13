import axios from "axios";

import { useLoaderStore }
from "@/store/loaderStore";



export const api =
axios.create({

baseURL:
process.env.NEXT_PUBLIC_API_URL,

});





api.interceptors.request.use(
(config)=>{


useLoaderStore
.getState()
.showLoader();


return config;


}
);






api.interceptors.response.use(


(response)=>{


useLoaderStore
.getState()
.hideLoader();


return response;


},



(error)=>{


useLoaderStore
.getState()
.hideLoader();


return Promise.reject(error);


}


);