"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  ShoppingBag,
  BookOpen,
  Headphones,
  Mail,
} from "lucide-react";

const features = [
  {
    title: "100% Natural",
    icon: "/icons/leaf.png",
  },
  {
    title: "Unprocessed",
    icon: "/icons/honey-stick.png",
  },
  {
    title: "Sustainable",
    icon: "/icons/earth.png",
  },
];

export default function Footer() {
return (

<footer
className="
relative
overflow-hidden
bg-[#F8F1E6]
pt-20
"
>


<div
className="
max-w-[1500px]
mx-auto
px-6
lg:px-14
"
>



{/* ================= TOP FOOTER ================= */}


<div
className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-[1.3fr_1fr_1fr_1.2fr_1.2fr]
gap-12
"
>





{/* BRAND */}


<div
className="
xl:border-r
border-[#E2C9A8]
xl:pr-12
"
>


<Image

src="/logo.png"

alt="Vanamrith"

width={230}

height={120}

className="
w-[220px]
h-auto
"

/>



<p
className="
mt-8
text-[#2B140A]
leading-8
max-w-[320px]
"
>

Vanamrith brings you 100%
pure, raw and natural honey,
sourced from wild forests
with care and delivered
with love.

</p>




<div
className="
mt-8
h-px
w-20
bg-[#C87512]
"
/>




{/* FEATURES */}


<div
className="
mt-8
space-y-5
"
>


{
features.map((item)=>(


<div

key={item.title}

className="
flex
items-center
gap-4
"
>


<div
className="
w-11
h-11
rounded-full
border
border-[#C87512]

flex
items-center
justify-center
"
>


<Image

src={item.icon}

alt=""

width={22}

height={22}

/>


</div>


<p
className="
text-[#2B140A]
"
>

{item.title}

</p>


</div>


))

}


</div>


</div>









{/* SHOP */}


<div>


<FooterTitle
icon={<ShoppingBag/>}
title="SHOP"
/>


<ul className="footer-list">

<li>
<Link href="/products">
All Products
</Link>
</li>

<li>Raw Honey</li>

<li>Wild Forest Honey</li>

<li>Honey Comb</li>

<li>Gift Packs</li>

<li>Offers</li>

</ul>


</div>









{/* STORY */}


<div>


<FooterTitle
icon={<BookOpen/>}
title="OUR STORY"
/>



<ul className="footer-list">

<li>
<Link href="/about">
Our Story
</Link>
</li>

<li>Why Vanamrith</li>

<li>Our Beekeepers</li>

<li>
<Link href="/blog">
Blog
</Link>
</li>

<li>Recipes</li>

<li>FAQs</li>

</ul>


</div>










{/* CUSTOMER CARE */}


<div>


<FooterTitle
icon={<Headphones/>}
title="CUSTOMER CARE"
/>



<ul className="footer-list">

<li>My Orders</li>

<li>Shipping & Delivery</li>

<li>Returns & Refunds</li>

<li>
<Link href="/track-order">
Track Order
</Link>
</li>

<li>Terms & Conditions</li>

<li>Privacy Policy</li>

</ul>


</div>










{/* CONNECT */}


<div>


<FooterTitle
icon={<Mail/>}
title="STAY CONNECTED"
/>



<p
className="
text-[#2B140A]
leading-8
"
>

Follow us for updates, offers
and honey goodness.

</p>




<div
className="
flex
gap-4
mt-8
"
>


{
[
FaInstagram,
FaFacebookF,
FaYoutube,
FaWhatsapp

].map((Icon,i)=>(



<Link

href="#"

key={i}

className="
w-12
h-12

rounded-full

border
border-[#C87512]


flex
items-center
justify-center


text-[#2B140A]


hover:bg-[#C87512]
hover:text-white

transition
"
>


<Icon size={20}/>


</Link>


))

}


</div>



</div>





</div>



</div>









{/* ================= BOTTOM STRIP ================= */}


<div
className="
relative
mt-24

bg-[#1B0D08]
"
>



{/* CURVE */}


<div
className="
absolute
-top-12
left-0
w-full
overflow-hidden
"
>


<svg
viewBox="0 0 1440 100"
preserveAspectRatio="none"
className="
w-full
h-14
"
>


<path

fill="#1B0D08"

d="
M0,70
C350,120
1000,10
1440,70
L1440,100
L0,100
Z
"

/>


</svg>


</div>








<div
className="
relative

max-w-[1500px]

mx-auto

px-6
lg:px-14

py-10


flex
flex-col
lg:flex-row

items-center
justify-between

gap-8
"
>




{/* THANK YOU */}


<div>


<p
className="
text-white
"
>

Thank you for choosing purity.

</p>


<p
className="
text-[#D9A63A]
font-serif
italic
text-2xl
mt-2
"
>

We&apos;re grateful for your trust.

</p>


</div>









{/* COPYRIGHT */}


<p
className="
text-white/90
text-center
"
>

© {new Date().getFullYear()} Vanamrith.
All Rights Reserved.

</p>









{/* PAYMENTS */}


{/* PAYMENTS */}


<div
className="
flex

items-center

justify-center

gap-3

flex-wrap
"
>


{
[
"/visa.png",
"/mastercard.png",
"/upi.png",
"/razorpay.png"

].map((src)=>(



<div

key={src}

className="
bg-white

w-[82px]
h-10

md:w-[90px]
md:h-11

rounded-lg

flex
items-center
justify-center

shadow-sm
"
>


<Image

src={src}

alt="payment"

width={60}

height={25}

className="
object-contain
"

/>


</div>


))

}


</div>




</div>



</div>




</footer>

)
}

function FooterTitle({
icon,
title
}:any){

return (

<>

<div
className="
flex
items-center
gap-4
"
>

<div
className="
text-[#C87512]
"
>

{icon}

</div>


<h3
className="
uppercase
tracking-[4px]
font-bold
text-sm
text-[#2B140A]
"
>

{title}

</h3>


</div>


<div
className="
w-10
h-px
bg-[#C87512]
mt-4
mb-8
"
/>

</>

)

}