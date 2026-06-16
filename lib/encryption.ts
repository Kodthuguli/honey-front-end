import CryptoJS from "crypto-js";



const secretKey =
process.env.NEXT_PUBLIC_RESPONSE_SECRET_KEY!;




export function decryptData(
payload:{
iv:string;
data:string;
}
){


const key =
CryptoJS.enc.Utf8.parse(
secretKey
);


const iv =
CryptoJS.enc.Hex.parse(
payload.iv
);



const decrypted =
CryptoJS.AES.decrypt(

{
ciphertext:
CryptoJS.enc.Hex.parse(
payload.data
)

} as any,


key,


{
iv,

mode:
CryptoJS.mode.CBC,


padding:
CryptoJS.pad.Pkcs7,

}

);



const result =
decrypted.toString(
CryptoJS.enc.Utf8
);



return JSON.parse(
result
);


}