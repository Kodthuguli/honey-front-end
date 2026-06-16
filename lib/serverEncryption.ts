import crypto from "crypto";


const algorithm =
"aes-256-cbc";


const key =
Buffer.from(
process.env.RESPONSE_SECRET_KEY!,
"utf8"
);



export function decryptServerData(
payload:{
iv:string;
data:string;
}
){


const decipher =
crypto.createDecipheriv(
algorithm,
key,
Buffer.from(payload.iv,"hex")
);



let decrypted =
decipher.update(
payload.data,
"hex",
"utf8"
);



decrypted +=
decipher.final(
"utf8"
);



return JSON.parse(
decrypted
);


}