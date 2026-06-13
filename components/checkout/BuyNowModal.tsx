/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { loadRazorpayScript } from "@/lib/razorpay";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Building2,
  Map,
  ShieldCheck,
  Truck,
  Leaf,
  Lock,
} from "lucide-react";



export default function BuyNowModal({
  isOpen,
  onClose,
  product,
  cartItems,
  onSuccess,
}: {
  isOpen:boolean;
  onClose:()=>void;
  product?:any;
  cartItems?:any[];
  onSuccess?:()=>void;
}) {

  const router =useRouter();


const isCartOrder =
cartItems && cartItems.length > 0;



const availableVariants =
!isCartOrder &&
product?.variants?.length > 0
?
product.variants
:
[
 {label:"250g",price:482},
 {label:"500g",price:580},
 {label:"1kg",price:1080},
];




const [selectedVariant,setSelectedVariant] =
useState<any>(()=>{

if(product?.variant){

return availableVariants.find(
(v:any)=>v.label===product.variant
);

}

return null;

});




const [quantity] =
useState(product?.qty || 1);



const [name,setName] =
useState("");

const [phone,setPhone] =
useState("");

const [email,setEmail] =
useState("");

const [fullAddress,setFullAddress] =
useState("");

const [city,setCity] =
useState("");

const [state,setState] =
useState("");

const [pincode,setPincode] =
useState("");

const [loading,setLoading] =
useState(false);

const [currentOrder,setCurrentOrder] =
useState<any>(null);




const orderItems =
isCartOrder
?
cartItems.map((item)=>({

productId:item.productId,
name:item.name,
image:item.image,
variant:item.size,
quantity:item.qty,
price:item.price,
total:item.price * item.qty,

}))
:
[
{
productId:product?._id,
name:product?.name,
image:product?.images?.[0],
variant:selectedVariant?.label,
quantity,
price:selectedVariant?.price,
total:
(selectedVariant?.price || 0)
*
quantity,
}
];




const grandTotal =
orderItems.reduce(
(sum,item)=>sum+item.total,
0
);






const validateForm = ()=>{


// SIZE

if(
!isCartOrder &&
!selectedVariant
){

toast.error(
"Please select product size"
);

return false;

}





// NAME

if(
!name.trim()
){

toast.error(
"Please enter your name"
);

return false;

}


if(
name.trim().length < 3
){

toast.error(
"Name should contain at least 3 characters"
);

return false;

}


if(
!/^[A-Za-z ]+$/.test(name)
){

toast.error(
"Name should contain only letters"
);

return false;

}







// PHONE INDIA

const phoneRegex =
/^[6-9]\d{9}$/;


if(
!phoneRegex.test(phone)
){

toast.error(
"Enter valid 10 digit mobile number"
);

return false;

}








// EMAIL

const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if(
!emailRegex.test(email)
){

toast.error(
"Enter valid email address"
);

return false;

}








// ADDRESS

if(
fullAddress.trim().length < 10
){

toast.error(
"Please enter complete address"
);

return false;

}








// CITY

if(
!city.trim()
){

toast.error(
"Please enter city"
);

return false;

}


if(
!/^[A-Za-z ]+$/.test(city)
){

toast.error(
"City should contain only letters"
);

return false;

}








// STATE

if(
!state.trim()
){

toast.error(
"Please enter state"
);

return false;

}


if(
!/^[A-Za-z ]+$/.test(state)
){

toast.error(
"State should contain only letters"
);

return false;

}








// PINCODE INDIA

const pinRegex =
/^[1-9][0-9]{5}$/;


if(
!pinRegex.test(pincode)
){

toast.error(
"Enter valid 6 digit PIN code"
);

return false;

}



return true;


};






const createOrder =
async(paymentMethod:"WHATSAPP"|"RAZORPAY")=>{


const res =
await api.post(
"/orders",
{

source:
paymentMethod,


customer:{

name,

phone,

email,

},


address:{
fullAddress,
city,
state,
pincode,
},


items:
orderItems,


pricing:{

subtotal:grandTotal,
shipping:0,
discount:0,
total:grandTotal,

},


payment:{

method:
paymentMethod,

status:
"PENDING",

},


}
);


return res.data;


};









/* WHATSAPP ORDER */


const handleWhatsAppOrder =
async()=>{


if(!validateForm())
return;



try{


setLoading(true);


const order =
await createOrder(
"WHATSAPP"
);



const productMessage =
orderItems.map(
(item)=>

`
Product:
${item.name}

Size:
${item.variant}

Qty:
${item.quantity}

Amount:
₹${item.total}
`

).join("\n");




const message =
`

Hello Vanamrith,

I want to place an order.

Order Number:
${order.orderNumber}


${productMessage}


Total:
₹${grandTotal}


Customer:
${name}

Phone:
${phone}

Email:
${email}


Address:

${fullAddress}
${city}
${state}
${pincode}


----------------------

Track Order:

https://vanamrith.com/track-order


Use:

Order Number:
${order.orderNumber}

Phone:
${phone}


`;





window.open(

`https://wa.me/919483151437?text=${encodeURIComponent(
message.trim()
)}`,

"_blank"

);



onClose();


setTimeout(()=>{

onSuccess?.();

},500);



}
catch(err){

console.error(err);

toast.error(
"Order failed"
);

}
finally{

setLoading(false);

}


};











/* RAZORPAY ORDER */


const handleOnlinePayment =
async()=>{


if(!validateForm())
return;



try{


setLoading(true);



const loaded =
await loadRazorpayScript();



if(!loaded){

toast.error(
"Razorpay failed to load"
);

return;

}




// 1 CREATE DB ORDER

const order =
await createOrder(
"RAZORPAY"
);


setCurrentOrder(
order
);




// 2 CREATE RAZORPAY ORDER


const paymentRes =
await api.post(
"/payments/create-order",
{
orderId:
order._id
}
);





const options = {


key:
process.env
.NEXT_PUBLIC_RAZORPAY_KEY_ID,


amount:
paymentRes.data.amount,


currency:
"INR",


name:
"Vanamrith",


description:
"Natural Products",


order_id:
paymentRes.data.razorpayOrderId,





/* SUCCESS PAYMENT */

handler:
async function(response:any){


try{


await api.post(
"/payments/verify",
{


orderId:
order._id,


razorpay_order_id:
response.razorpay_order_id,


razorpay_payment_id:
response.razorpay_payment_id,


razorpay_signature:
response.razorpay_signature,


}
);




// redirect first

router.replace(
`/order-success?order=${order.orderNumber}`
);


// close modal

onClose();


// clear cart after route change

setTimeout(()=>{

onSuccess?.();

},500);



}
catch(error){


console.error(error);


router.replace(
`/order-failed?order=${order.orderNumber}`
);


}


},








/* USER CLOSE POPUP */


modal:{


ondismiss:
async function(){


try{


await api.post(
"/payments/failed",
{

orderId:
order._id

}
);



console.log(
"Payment cancelled"
);



}
catch(error){


console.error(
error
);


}



}


},








prefill:{


name,


email,


contact:
phone,


},





theme:{


color:"#C4622D"


}


};




const razorpay =
new window.Razorpay(
options
);

razorpay.on(
"payment.failed",

async function(){

try{


await api.post(
"/payments/failed",
{

orderId:
order._id

}
);


}
catch(error){

console.error(error);

}

}

);


razorpay.open();



}
catch(error:any){


console.error(error);



const message =
error?.response?.data?.message;




// INVENTORY ERROR

if(message){


toast.info(
message
);


return;


}




// REAL PAYMENT ERROR

router.replace(

`/order-failed?order=${currentOrder?.orderNumber || ""}`

);



}
finally{

setLoading(false);

}



};










if(!isOpen)
return null;





return (

<div
className="
fixed
inset-0
bg-black/55
backdrop-blur-[2px]
flex
items-center
justify-center
z-50
px-4
"
>


<div
className="
bg-[#FFF8ED]/95

w-full
max-w-[620px]

rounded-[22px]

shadow-[0_25px_60px_rgba(0,0,0,0.25)]

max-h-[92vh]

overflow-y-auto

p-6
md:p-8

border
border-[#E5D1B7]
"
>




{/* HEADER */}

<div
className="
flex
justify-between
items-center
mb-6
"
>


<h2
className="
font-serif
text-[28px]
text-[#2B140A]
"
>

Complete Your Order

</h2>



<button

onClick={onClose}

className="
w-10
h-10
rounded-full
bg-white
shadow
flex
items-center
justify-center
hover:scale-105
transition
"
>

✕

</button>


</div>









{/* PRODUCT CARD */}


<div className="space-y-3">


{
orderItems.map((item,index)=>(


<div

key={index}

className="
flex
gap-5

border
border-[#CDB89A]

rounded-[14px]

p-4

bg-white/40
"
>



<div
className="
relative
w-[95px]
h-[85px]

rounded-xl

overflow-hidden

bg-white

shrink-0
"
>



<Image

src={item.image || "/placeholder.png"}

alt={item.name}

fill

sizes="95px"

className="
object-cover
"

/>


</div>






<div>


<h3
className="
font-semibold
text-lg
text-[#2B140A]
"
>

{item.name}

</h3>



<p className="text-[#6F4E37]">
Size: {item.variant}
</p>


<p className="text-[#6F4E37]">
Qty: {item.quantity}
</p>


<p
className="
font-bold
text-[#C66A12]
text-lg
"
>

₹{item.total}

</p>



</div>



</div>


))

}



</div>









{/* FORM */}

<div
className="
mt-8
space-y-5
"
>




{
!isCartOrder && (

<div>


<label className="font-medium">
Select Size *
</label>


<div className="flex flex-wrap gap-3 mt-3">


{
availableVariants.map(
(v:any,i:number)=>(


<button

key={i}

onClick={()=>
setSelectedVariant(v)
}

className={`

px-6
py-2

rounded-lg

border

transition

${
selectedVariant?.label===v.label

?

"bg-[#C66A12] text-white"

:

"bg-white"

}

`}

>

{v.label}

</button>


))
}


</div>


</div>

)

}





<InputField

icon={<User size={16}/>}

label="Name"

placeholder="Enter your full name"

value={name}

setValue={setName}

/>




<InputField

icon={<Phone size={16}/>}

label="Phone"

placeholder="Enter your phone number"

value={phone}

setValue={(v:string)=>{

const value=v.replace(/\D/g,"");

if(value.length<=10)
setPhone(value);

}}

/>






<InputField

icon={<Mail size={16}/>}

label="Email"

placeholder="Enter your email address"

value={email}

setValue={setEmail}

/>






<InputField

icon={<MapPin size={16}/>}

label="Address Line"

placeholder="House no., Street, Area"

value={fullAddress}

setValue={setFullAddress}

/>







<div
className="
grid
grid-cols-1
md:grid-cols-2
gap-4
"
>


<InputField

icon={<Building2 size={16}/>}

label="City"

placeholder="Enter city"

value={city}

setValue={setCity}

/>




<InputField

icon={<Map size={16}/>}

label="State"

placeholder="Enter state"

value={state}

setValue={setState}

/>


</div>







<InputField

icon={<MapPin size={16}/>}

label="Pincode"

placeholder="Enter pincode"

value={pincode}

setValue={(v:string)=>{

const value=v.replace(/\D/g,"");

if(value.length<=6)
setPincode(value);

}}

/>









<div
className="
text-right

font-bold

text-2xl

text-[#2B140A]
"
>

Total: ₹{grandTotal}

</div>



</div>









{/* BUTTONS */}



<div
className="
space-y-4
mt-7
"
>



<button

disabled={loading}

onClick={handleWhatsAppOrder}

className="
w-full

h-[52px]

rounded-lg

bg-[#C66A12]

text-white

font-semibold

flex

items-center

justify-center

gap-3
"
>

Order via WhatsApp →

</button>







<button

disabled={loading}

onClick={handleOnlinePayment}

className="
w-full

h-[52px]

rounded-lg

bg-[#2B140A]

text-white

font-semibold

flex

items-center

justify-center

gap-3
"
>


<Lock size={17}/>

Pay Online Securely


</button>



</div>










{/* TRUST STRIP */}



<div
className="
mt-8

pt-6

border-t

border-[#E3CEB3]


grid

grid-cols-3

gap-3
"
>


{
[

{
icon:<ShieldCheck/>,
title:"Secure Checkout",
desc:"Your data protected"
},

{
icon:<Leaf/>,
title:"100% Natural",
desc:"Pure & authentic"
},

{
icon:<Truck/>,
title:"Fast Delivery",
desc:"Quick & reliable"
}


].map((item)=>(


<div

key={item.title}

className="
flex
gap-2
items-center
"
>


<div className="text-[#8A5A22]">

{item.icon}

</div>



<div>

<p className="text-xs font-semibold">

{item.title}

</p>


<p className="text-[11px] text-[#6F4E37]">

{item.desc}

</p>

</div>



</div>


))

}



</div>




</div>


</div>

);

}



function InputField({
label,
value,
setValue,
placeholder,
icon
}:any){

return (

<div>


<label
className="
font-medium
text-[#2B140A]
"
>
{label}
</label>



<div
className="
relative
mt-2
"
>


<div
className="
absolute
left-4
top-1/2
-translate-y-1/2

text-[#9B7A52]
"
>

{icon}

</div>



<input

value={value}

placeholder={placeholder}

onChange={(e)=>
setValue(e.target.value)
}

className="
w-full

h-12

bg-white/40

border
border-[#D6BE9C]

rounded-lg

pl-12
pr-4

outline-none

focus:border-[#C66A12]

transition
"

/>


</div>


</div>

);

}