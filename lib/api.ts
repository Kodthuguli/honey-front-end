import axios from "axios";

import { useLoaderStore }
from "@/store/loaderStore";

import {
decryptData
}
from "./encryption";




export const api =
axios.create({

baseURL:
process.env.NEXT_PUBLIC_API_URL,

});






/* =============================
   REQUEST INTERCEPTOR
   SHOW LOADER
============================= */


api.interceptors.request.use(

(config)=>{


useLoaderStore
.getState()
.showLoader();



return config;


},

(error)=>{


useLoaderStore
.getState()
.hideLoader();


return Promise.reject(error);


}


);










/* =============================
   RESPONSE INTERCEPTOR
   DECRYPT + HIDE LOADER
============================= */


api.interceptors.response.use(


(response)=>{


// hide loader

useLoaderStore
.getState()
.hideLoader();




// decrypt API response

if(

response.data?.encrypted
&&
response.data?.payload

){


response.data =
decryptData(
response.data.payload
);


}



return response;


},







(error)=>{


useLoaderStore
.getState()
.hideLoader();


return Promise.reject(
error
);


}


);