import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductDetailsClient from "./ProductDetailsClient";



// -----------------------------
// FETCH PRODUCT
// -----------------------------

async function getProduct(id:string){

try{

const res =
await fetch(
`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
{
cache:"no-store",
}
);


if(!res.ok){
return null;
}


return res.json();


}
catch(error){

console.log(
"Product SEO fetch failed",
error
);


return null;

}

}







// -----------------------------
// SEO METADATA
// -----------------------------

export async function generateMetadata({

params,

}:{

params:Promise<{
id:string
}>


}):Promise<Metadata>{



const {id} =
await params;



const product =
await getProduct(id);




if(!product){


return {

title:
"Product Not Found",

description:
"Product unavailable",

};


}





return {


title:
product.name,


description:

product.description ||

`Buy ${product.name} from Vanamrith`,




openGraph:{


title:
`${product.name} | Vanamrith`,


description:

product.description || "",



images:

product.images?.length

?

[
product.images[0]
]

:

[
"/og-image.jpg"
],


},



};


}









// -----------------------------
// PAGE
// -----------------------------

export default async function Page({

params,

}:{

params:Promise<{
id:string
}>

}){



const {id} =
await params;



const product =
await getProduct(id);





if(!product){

notFound();

}







return (

<>


<script

type="application/ld+json"


dangerouslySetInnerHTML={{


__html:

JSON.stringify({


"@context":

"https://schema.org",



"@type":

"Product",




name:

product.name,




image:

product.images || [],




description:

product.description,





brand:{


"@type":"Brand",


name:"Vanamrith",


},







offers:{


"@type":

"Offer",



priceCurrency:

"INR",



price:

product.price,




availability:

product.stock > 0

?

"https://schema.org/InStock"

:

"https://schema.org/OutOfStock",


},




}),



}}


/>





<ProductDetailsClient

initialProduct={
product
}

/>



</>


);


}