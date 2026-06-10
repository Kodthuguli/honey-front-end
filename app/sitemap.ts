import type { MetadataRoute } from "next";



// PRODUCTS

async function getProducts(){

try{

const res =
await fetch(

`${process.env.NEXT_PUBLIC_API_URL}/products`,

{
cache:"no-store",
}

);


if(!res.ok)
return [];


const data =
await res.json();


return data.items || data;


}
catch{


return [];


}

}






// BLOGS

async function getBlogs(){

try{


const res =
await fetch(

`${process.env.NEXT_PUBLIC_API_URL}/blogs`,

{
cache:"no-store",
}

);



if(!res.ok)
return [];



const data =
await res.json();


return data.items || data;


}
catch{


return [];


}


}









export default async function sitemap()
:Promise<MetadataRoute.Sitemap>{


const baseUrl =
"https://vanamrith.com";



const products =
await getProducts();



const blogs =
await getBlogs();






const productUrls =
products.map(
(product:any)=>({

url:
`${baseUrl}/products/${product._id}`,

lastModified:
new Date(
product.updatedAt ||
new Date()
),

changeFrequency:
"weekly" as const,

priority:
0.9,

})
);







const blogUrls =
blogs.map(
(blog:any)=>({

url:
`${baseUrl}/blogs/${blog.slug}`,

lastModified:
new Date(
blog.updatedAt ||
new Date()
),

changeFrequency:
"monthly" as const,

priority:
0.8,


})
);










return [


// HOME

{

url:
baseUrl,

lastModified:
new Date(),

changeFrequency:
"weekly",

priority:
1,

},





// PRODUCTS

{

url:
`${baseUrl}/products`,

lastModified:
new Date(),

changeFrequency:
"weekly",

priority:
0.9,

},







// BLOG LIST

{

url:
`${baseUrl}/blogs`,

lastModified:
new Date(),

changeFrequency:
"weekly",

priority:
0.8,

},








// ABOUT

{

url:
`${baseUrl}/about`,

lastModified:
new Date(),

changeFrequency:
"monthly",

priority:
0.7,

},








// CONTACT

{

url:
`${baseUrl}/contact`,

lastModified:
new Date(),

changeFrequency:
"monthly",

priority:
0.7,

},






...productUrls,


...blogUrls,



];


}