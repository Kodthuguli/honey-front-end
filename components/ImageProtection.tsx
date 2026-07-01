"use client";

import { useEffect } from "react";


export default function ImageProtection(){

useEffect(()=>{


const disableRightClick = (e:MouseEvent)=>{

const target = e.target as HTMLElement;


if(target.tagName === "IMG"){

e.preventDefault();

}

};



const disableDrag = (e:DragEvent)=>{

e.preventDefault();

};



document.addEventListener(
"contextmenu",
disableRightClick
);


document.addEventListener(
"dragstart",
disableDrag
);



return ()=>{


document.removeEventListener(
"contextmenu",
disableRightClick
);


document.removeEventListener(
"dragstart",
disableDrag
);


};


},[]);



return null;


}