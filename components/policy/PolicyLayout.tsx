import {
  ShieldCheck,
} from "lucide-react";

type PolicyItem = {
  icon: React.ReactNode;
  title:string;
  description:string;
};

export default function PolicyPage({
title,
updated,
heroIcon,
items,
note,
}:{
title:string;
updated:string;
heroIcon:React.ReactNode;
items:PolicyItem[];
note?:string;
}){


return (

<section
className="
min-h-screen
bg-[url('/cart-empty-bg.png')]
bg-cover
bg-center
px-5
py-10
md:py-16
"
>


<div
className="
max-w-6xl
mx-auto
"
>


{/* BREADCRUMB */}

<div
className="
hidden
md:flex
items-center
gap-3
text-sm
text-[#6F4E37]
mb-8
"
>

<span>
Home
</span>

<span>
›
</span>

<span>
{title}
</span>


</div>





{/* MAIN CARD */}

<div
className="
bg-white/75
backdrop-blur-sm
border
border-[#E8D9C7]
rounded-[28px]
shadow-sm

max-w-5xl
mx-auto

p-6
md:p-14
"
>



{/* HEADER */}

<div
className="
flex
justify-between
items-start
gap-5
"
>


<div>


<h1
className="
font-serif
text-[34px]
md:text-[52px]
text-[#2E1B12]
"
>

{title}

</h1>


<p
className="
mt-3
text-sm
text-[#6F4E37]
"
>

Last Updated: {updated}

</p>


<div
className="
w-14
h-[2px]
bg-[#C87521]
mt-5
"
/>


</div>



<div
className="
hidden
md:flex
w-36
h-36
rounded-full
bg-[#F8EAD8]

items-center
justify-center

text-[#C87521]
"
>

{heroIcon}

</div>



</div>








{/* ITEMS */}

<div
className="
mt-10
space-y-0
"
>


{
items.map((item,index)=>(


<div
key={index}
className="
flex
gap-6

py-8

border-b
last:border-none
border-[#E8D9C7]
"
>


<div
className="
w-16
h-16
md:w-20
md:h-20

rounded-full

bg-[#F8EAD8]

flex
items-center
justify-center

text-[#C87521]

shrink-0
"
>

{item.icon}

</div>



<div>


<h3
className="
font-serif
text-xl
md:text-2xl
text-[#2E1B12]
"
>

{index+1}. {item.title}

</h3>


<p
className="
mt-3
text-sm
md:text-base
leading-7
text-[#5A3A28]
"
>

{item.description}

</p>


</div>



</div>


))
}


</div>






{
note &&

<div
className="
mt-8
border
border-[#E8D9C7]
rounded-xl
bg-[#FFF9F2]/70

p-5

flex
gap-4
items-center

text-[#5A3A28]
"
>


<ShieldCheck
className="
text-[#C87521]
shrink-0
"
/>


<p className="text-sm">
{note}
</p>


</div>

}



</div>


</div>


</section>

);

}