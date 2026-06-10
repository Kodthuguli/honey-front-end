import type { Metadata } from "next";

import { notFound } from "next/navigation";

import BlogDetailsClient from "./BlogDetailsClient";





async function getBlog(slug:string){

try{


const res =
await fetch(

`${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}`,

{
cache:"no-store",
}

);



if(!res.ok){

return null;

}



return res.json();


}
catch{


return null;


}


}








export async function generateMetadata({

params,

}:{

params:Promise<{
slug:string
}>


}):Promise<Metadata>{



const {slug} =
await params;



const blog =
await getBlog(slug);




if(!blog){


return {

title:"Blog Not Found",

};


}




return {


title:
blog.title,



description:

blog.excerpt ||

blog.description ||

"Read latest articles from Vanamrith",




openGraph:{


title:
`${blog.title} | Vanamrith`,


description:

blog.excerpt || "",



images:[

blog.thumbnailUrl ||
"/og-image.jpg"

],


type:"article",


},



};


}











export default async function Page({

params,

}:{

params:Promise<{
slug:string
}>


}){



const {slug} =
await params;



const blog =
await getBlog(slug);





if(!blog){

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

"BlogPosting",




headline:

blog.title,




description:

blog.excerpt,





image:

blog.thumbnailUrl,





datePublished:

blog.createdAt,





author:{


"@type":

"Organization",



name:

"Vanamrith",


},





publisher:{


"@type":

"Organization",



name:

"Vanamrith",


},




}),


}}


/>






<BlogDetailsClient

blog={blog}

/>



</>

);


}