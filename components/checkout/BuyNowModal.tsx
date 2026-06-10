/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { loadRazorpayScript } from "@/lib/razorpay";
import { useRouter } from "next/navigation";



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


if(

(!isCartOrder && !selectedVariant)

||

!name ||

!phone ||

!email ||

!fullAddress ||

!city ||

!state ||

!pincode

){

alert(
"Please fill all required fields"
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



onSuccess?.();

onClose();



}
catch(err){

console.error(err);

alert(
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

alert(
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




router.push(
`/order-success?order=${order.orderNumber}`
);



onSuccess?.();


onClose();



}
catch(error){


console.error(error);


router.push(
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


alert(
message
);


return;


}




// REAL PAYMENT ERROR

router.push(

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

<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">


<div className="bg-[#F4E6D5] rounded-xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-8">


<div className="flex justify-between mb-6">


<h2 className="text-2xl font-serif text-[#3A1F16]">

Complete Your Order

</h2>


<button onClick={onClose}>
✕
</button>


</div>







<div className="space-y-3">


{orderItems.map(
(item,index)=>(


<div
key={index}
className="flex gap-4 bg-[#E9DCCB] border border-[#C6A77D] rounded-lg p-4"
>


<img
src={item.image || "/placeholder.png"}
className="w-20 h-20 rounded-lg object-cover"
alt=""
/>


<div>

<h3 className="font-semibold">
{item.name}
</h3>

<p>
Size: {item.variant}
</p>

<p>
Qty: {item.quantity}
</p>

<p className="font-bold text-[#C4622D]">
₹{item.total}
</p>

</div>


</div>

)
)}


</div>









<div className="mt-8 space-y-5">


{!isCartOrder && (

<div>

<label>
Select Size *
</label>


<div className="flex gap-3 mt-3">

{availableVariants.map(
(v:any,i:number)=>(


<button

key={i}

onClick={()=>
setSelectedVariant(v)
}

className={`
px-5 py-2 rounded-md border
${
selectedVariant?.label===v.label
?
"bg-[#C4622D] text-white"
:
"bg-[#E9DCCB]"
}
`}

>

{v.label}

</button>

)
)}

</div>

</div>

)}



<InputField label="Name" value={name} setValue={setName}/>

<InputField label="Phone" value={phone} setValue={setPhone}/>

<InputField

label="Email"

value={email}

setValue={setEmail}

/>

<InputField label="Address Line" value={fullAddress} setValue={setFullAddress}/>


<div className="grid grid-cols-2 gap-3">

<InputField label="City" value={city} setValue={setCity}/>

<InputField label="State" value={state} setValue={setState}/>

</div>


<InputField label="Pincode" value={pincode} setValue={setPincode}/>


<div className="text-right text-xl font-bold">

Total: ₹{grandTotal}

</div>


</div>







<div className="grid grid-cols-1 gap-3 mt-8">


<button
disabled={loading}
onClick={handleWhatsAppOrder}
className="py-3 rounded-md bg-[#C4622D] text-white"
>

Order via WhatsApp

</button>



<button
disabled={loading}
onClick={handleOnlinePayment}
className="py-3 rounded-md bg-[#2E1B12] text-white"
>

Pay Online

</button>



</div>



</div>

</div>

);

}









function InputField({
label,
value,
setValue
}:any){

return (

<div>

<label className="font-medium">
{label}
</label>


<input

value={value}

onChange={
(e)=>
setValue(e.target.value)
}

className="
w-full
mt-2
bg-[#E9DCCB]
border
border-[#C6A77D]
rounded-md
px-3
py-2
"

/>

</div>

);

}