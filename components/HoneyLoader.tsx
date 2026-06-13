"use client";

import Image from "next/image";
import { useLoaderStore } from "@/store/loaderStore";


export default function HoneyLoader(){


const loading =
useLoaderStore(
(state)=>state.loading
);


if(!loading)
return null;



return (

<div
className="
fixed
inset-0

z-[9999]

bg-black/20

backdrop-blur-[2px]

flex
items-center
justify-center
"
>


{/* ANIMATION AREA */}


<div
className="
relative

w-32
h-32

flex
items-center
justify-center
"
>



{/* FLYING BEE */}


<div
className="
absolute

w-full
h-full

animate-[beeOrbit_2.5s_linear_infinite]
"
>


<div
className="
relative

w-10
h-10
"
>


<Image

src="/Lbee.png"

alt="Bee"

fill

className="
object-contain
"

/>


</div>


</div>






{/* HONEY JAR */}


<div
className="
relative

w-20
h-20

animate-pulse
"
>


<Image

src="/Ljar.png"

alt="Honey"

fill

priority

className="
object-contain
"

/>


</div>




</div>


</div>

);

}