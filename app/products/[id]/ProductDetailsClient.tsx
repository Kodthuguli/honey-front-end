/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState } from "react";
import BuyNowModal from "@/components/checkout/BuyNowModal";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

import {
  ChevronDown,
  ShieldCheck,
  Leaf,
  Truck,
  Star,
  ShoppingCart,
} from "lucide-react";
import { toast } from "sonner";

export default function ProductDetailsClient({
initialProduct,
}:{
initialProduct:any;
}) {

  const id =
initialProduct._id;

  const addToCart = useCartStore((state) => state.addToCart);

  const thumbContainerRef = useRef<HTMLDivElement>(null);

  const [product,setProduct] =
useState<any>(
initialProduct
);


const [loading,setLoading] =
useState(false);

const [selectedVariant, setSelectedVariant] =
useState<any>(() => {

if(
initialProduct?.variants?.length > 0
){

return initialProduct.variants[0];

}


return {
label:"250g",
price:482,
};


});



/*
 SUPPORTS BOTH:

 1. Variant products
    variants[].stock

 2. Normal products
    product.stock
*/


const currentStock =
Number(
product?.stock || 0
);



const isOutOfStock =
currentStock <= 0;



const lowStock =
currentStock > 0 &&
currentStock <= 5;
  const [qty, setQty] = useState(1);

  const [showModal, setShowModal] = useState(false);

  const [activeImage, setActiveImage] =
useState(
initialProduct?.images?.[0] || ""
);

  const [activeTab, setActiveTab] = useState("Description");


  const handleThumbScroll = () => {

    if (!thumbContainerRef.current) return;

    thumbContainerRef.current.scrollBy({
      left: 100,
      top: 100,
      behavior: "smooth",
    });
  };

 const handleAddToCart = () => {


if(
isOutOfStock
){


toast.info(
"Selected product is out of stock"
);

return;

}



if(
qty > currentStock
){

toast.info(
`Only ${currentStock} item available`
);

return;

}


  if (!product) return;


  addToCart({

    productId:
      product._id,


    name:
      product.name,


    image:
      product.images?.[0] || "",


    size:
selectedVariant?.title ||
selectedVariant?.label ||
"Default",


    price:
      selectedVariant?.price ||
      product.price,


    qty,

  });



  toast.success(
"Product added to cart"
);


};

  if (loading) {

    return (
      <div className="text-center py-24 text-[#6F4E37]">
        Loading product...
      </div>
    );
  }

  if (!product) {

    return (
      <div className="text-center py-24 text-[#6F4E37]">
        Product not found.
      </div>
    );
  }

  const price =
    selectedVariant?.price || product.price || 580;

  const productImages =
product?.images?.filter(Boolean)?.length > 0
?
product.images
:
[
"/no-image.png"
];

  return (

    <div className=" min-h-screen overflow-hidden">

      <div className="max-w-[1360px] mx-auto px-3 md:px-5 xl:px-6 pt-7 pb-14">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-[#7A6658] mb-5">

          <span>Home</span>

          <span>›</span>

          <span>Shop</span>

          <span>›</span>

          <span className="text-[#D06F1D] font-medium">
            {product.name}
          </span>

        </div>


        {/* PRODUCT */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[580px_1fr]
            gap-5 xl:gap-7
            items-start
          "
        >

          {/* LEFT */}
          <div
            className="
              flex
              flex-col-reverse
              md:flex-row
              gap-3 md:gap-4
            "
          >

            {/* THUMBNAILS */}
            <div
              className="
                flex
                flex-row md:flex-col
                items-center
                gap-3
                w-full md:w-auto
              "
            >

              <div
                ref={thumbContainerRef}
                className="
                  flex
                  flex-row md:flex-col
                  gap-3
                  w-full
                  overflow-x-auto md:overflow-y-auto
                  md:max-h-[390px]
                  [-ms-overflow-style:none]
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                  pr-1
                "
              >

                {productImages.map((img: string, index: number) => (

                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`
                      w-[62px] h-[62px]
                      md:w-[74px] md:h-[74px]
                      rounded-[18px]
                      border-2
                      overflow-hidden
                      bg-white
                      shrink-0
                      transition
                      ${
                        activeImage === img
                          ? "border-[#D06F1D]"
                          : "border-[#E8D9C7]"
                      }
                    `}
                  >

                   <div className="relative w-full h-full">

<Image
  src={img}
  alt={product.name}
  fill
  sizes="80px"
  className="object-cover"
/>

</div>

                  </button>

                ))}

              </div>

              {/* SCROLL */}
              {productImages.length > 4 && (

                <button
                  onClick={handleThumbScroll}
                  className="
                    hidden md:flex
                    w-[50px]
                    h-[50px]
                    rounded-full
                    border border-[#E8D9C7]
                    bg-white
                    items-center justify-center
                    hover:border-[#D06F1D]
                    transition
                  "
                >
                  <ChevronDown size={18} />
                </button>

              )}

            </div>


            {/* IMAGE */}
            <div className="relative flex-1">

              <div
                className="
                  bg-white
                  border border-[#E8D9C7]
                  rounded-[24px]
                  overflow-hidden
                "
              >

                <div
className="
relative
w-full
h-[300px]
sm:h-[360px]
md:h-[470px]
"
>

<Image

src={
activeImage ||
"/placeholder.png"
}

alt={
product.name
}

fill

priority

sizes="
(max-width:768px) 100vw,
50vw
"

className="
object-cover
"

/>

</div>

              </div>

              {/* BADGE */}
              <div
                className="
                  absolute
                  left-4
                  bottom-4
                  w-[84px]
                  h-[84px]
                  rounded-full
                  bg-[#FFF9F2]
                  border border-[#E8D9C7]
                  flex flex-col items-center justify-center
                  text-center
                "
              >

                <span className="text-[#D06F1D] font-bold text-[18px]">
                  100%
                </span>

                <span className="text-[#4E3A30] text-[10px] font-medium leading-4">
                  PURE &
                  <br />
                  NATURAL
                </span>

              </div>

            </div>

          </div>


          {/* RIGHT */}
          <div className="pt-1 md:pt-0">

            {/* TITLE */}
            <h1
              className="
                text-[30px]
                leading-[1.05]
                md:text-[54px]
                font-serif
                text-[#2E1B12]
              "
            >
              {product.name}
            </h1>


            {/* RATING */}
            <div className="flex items-center gap-3 mt-3">

              <div className="flex items-center gap-1 text-[#E3A323]">

                {[1, 2, 3, 4, 5].map((i) => (

                  <Star
                    key={i}
                    size={17}
                    fill="currentColor"
                  />

                ))}

              </div>

              <span className="text-[#6F4E37] text-sm">
                (128 Reviews)
              </span>

            </div>


            {/* PRICE */}
            <div className="flex items-center gap-4 mt-4">

              <span
                className="
                  text-[34px]
                  md:text-[42px]
                  font-bold
                  text-[#D06F1D]
                "
              >
                ₹{price}
              </span>

              <div className="flex items-center gap-2">


<div
className={`
w-2.5
h-2.5
rounded-full

${
isOutOfStock
?
"bg-red-500"
:
lowStock
?
"bg-orange-500"
:
"bg-[#5AA647]"
}

`}
/>



<span className="text-[#4E3A30] text-sm">


{
isOutOfStock
?
"Out of Stock"
:
lowStock
?
`Only ${currentStock} left`
:
"In Stock"
}


</span>


</div>

            </div>


            {/* DESCRIPTION */}
            <p
              className="
                mt-4
                text-[#4E3A30]
                leading-[1.85]
                text-[14px]
              "
            >
              {product.description ||
                "Sourced from deep wild forests, our honey is raw, unprocessed, and rich in nutrients. Naturally harvested to preserve purity, aroma, and authentic taste."}
            </p>


                          {/* FEATURE BOX */}
            <div className="mt-4">

              <div className="grid grid-cols-2 md:grid-cols-4 border border-[#E8D9C7] rounded-[13px] md:rounded-[15px] overflow-hidden bg-[#FFF9F2]">

                {[
                  "Raw & Unprocessed",
                  "No Added Sugar",
                  "Rich in Antioxidants",
                  "Boosts Immunity",
                ].map((item, i) => (

                  <div
                    key={i}
                    className="h-[52px] md:h-[62px] flex items-center justify-center px-2 md:px-3 text-center border-r border-[#E8D9C7] last:border-r-0"
                  >

                    <p className="text-[10px] md:text-[12px] leading-[1.3] font-medium text-[#4E3A30]">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* DIVIDER */}
            <div className="mt-4 border-b border-[#E5D5C2]" />


            {/* SIZE */}
            <div className="mt-4">

              <h3 className="text-[22px] font-semibold text-[#2E1B12]">
                Select Size
              </h3>

              <div className="flex gap-3 mt-3 flex-wrap">

{(
product.variants?.length > 0

?

product.variants

:

[
{
label:"250g",
price:482
},

{
label:"500g",
price:580
},

{
label:"1kg",
price:1080
}

]

).map((v:any,index:number)=>(


                 <button
key={index}
disabled={
isOutOfStock
}
                    onClick={() => setSelectedVariant(v)}
                    className={`
                      px-4 md:px-5
                      h-[44px] md:h-[48px]
                      rounded-[13px]
                      border
                      text-[15px]
                      font-semibold
                      transition

${
isOutOfStock
?
"opacity-50 cursor-not-allowed"
:
""
}
                      ${
                        (
selectedVariant?.title ||
selectedVariant?.label
)
===
(
v.title ||
v.label
)
                          ? "bg-[#D06F1D] text-white border-[#D06F1D]"
                          : "bg-white border-[#E8D9C7] text-[#4E3A30]"
                      }
                    `}
                  >
                    {
v.title ||
v.label
}
                  </button>

                ))}

              </div>

            </div>


            {/* QUANTITY */}
            <div className="mt-4">

              <div className="flex items-center justify-between mb-3">

                <h3 className="text-[22px] font-semibold text-[#2E1B12]">
                  Quantity
                </h3>

              </div>

              <div className="flex flex-col gap-3 md:gap-4 items-stretch">

                {/* COUNTER */}
                <div
                  className="
                    flex items-center
                    border border-[#E8D9C7]
                    rounded-[14px]
                    overflow-hidden
                    bg-white
                    h-[56px]
                    shrink-0
                    w-fit
                  "
                >

                  <button
                    onClick={() =>
                      setQty(Math.max(1, qty - 1))
                    }
                    className="
                      w-[56px]
                      h-full
                      text-[#D06F1D]
                      text-2xl
                    "
                  >
                    −
                  </button>

                  <div
                    className="
                      w-[56px]
                      h-full
                      border-x border-[#E8D9C7]
                      flex items-center justify-center
                      font-semibold
                      text-[15px]
                    "
                  >
                    {qty}
                  </div>

                  <button

disabled={
qty >= currentStock
}

onClick={() =>
setQty(qty + 1)
}


className={`
w-[56px]
h-full
text-[#D06F1D]
text-2xl

${
qty >= currentStock
?
"opacity-40 cursor-not-allowed"
:
""
}

`}

>

+

</button>

                </div>


                {/* BUTTONS */}
                <div
                  className="
                    flex
                    flex-row
                    gap-3
                    w-full
                  "
                >

                  <button

disabled={isOutOfStock}

onClick={handleAddToCart}

className={`
flex-1
h-[50px]
md:h-[56px]
rounded-[14px]

${
isOutOfStock
?
"bg-gray-400 cursor-not-allowed"
:
"bg-[#D06F1D]"
}

text-white
font-semibold
text-[15px]
flex items-center justify-center gap-2
`}
>

                    <ShoppingCart size={18} />

                    {
isOutOfStock
?
"Out of Stock"
:
"Add to Cart"
}

                  </button>

                  <button
                    disabled={isOutOfStock}
                    onClick={() => setShowModal(true)}
                    className={`
                      flex-1
                      h-[50px]
                      md:h-[56px]
                      rounded-[14px]
                      border border-[#D06F1D]
                      text-[#D06F1D]
                      font-semibold
                      text-[15px]
                      bg-white
                      ${isOutOfStock ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                  >
                    Buy Now
                  </button>

                </div>

              </div>

            </div>


            {/* STRIP */}
            <div
              className="
                mt-5
                pt-4
                border-t border-[#E5D5C2]
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-3
              "
            >

              {[
                {
                  icon: <Truck size={20} />,
                  title: "Free Shipping",
                  desc: "Orders above ₹999",
                },
                {
                  icon: <Leaf size={20} />,
                  title: "100% Natural",
                  desc: "Pure & Unprocessed",
                },
                {
                  icon: <ShieldCheck size={20} />,
                  title: "Secure Packaging",
                  desc: "Safe doorstep delivery",
                },
              ].map((item, i) => (

                <div
                  key={i}
                  className="flex items-start gap-3"
                >

                  <div className="text-[#D06F1D] mt-1 shrink-0">
                    {item.icon}
                  </div>

                  <div>

                    <p className="font-semibold text-[#2E1B12] text-[14px] leading-5">
                      {item.title}
                    </p>

                    <p className="text-[#6F4E37] text-[12px] mt-1 leading-5">
                      {item.desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* TABS */}
        <div
          className="
            mt-6 md:mt-8
            border border-[#E8D9C7]
            rounded-[18px] md:rounded-[24px]
            overflow-hidden
            bg-white
          "
        >

          {/* TAB HEADER */}
          <div className="flex flex-wrap gap-6 px-5 md:px-7 pt-4 border-b border-[#E5D5C2]">

            {[
              "About This Honey",
              "Natural Benefits",
              "Ingredients",
              "Ways To Enjoy",
            ].map((tab) => (

              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  pb-4
                  text-[13px]
                  font-medium
                  border-b-2
                  transition-all duration-300
                  ${
                    activeTab === tab
                      ? "border-[#D06F1D] text-[#2E1B12]"
                      : "border-transparent text-[#6F4E37]"
                  }
                `}
              >
                {tab}
              </button>

            ))}

          </div>


          {/* TAB CONTENT */}
          <div
            className="
              p-4 md:p-6
              grid
              grid-cols-1
              xl:grid-cols-[1fr_320px]
              gap-4 md:gap-5
              items-start
            "
          >

            {/* LEFT */}
            <div>

              {activeTab === "Description" && (

<div className="grid md:grid-cols-2 gap-5">

<div>

{product.details?.descriptionPoints?.map(
(item:string,index:number)=>(

<p
key={index}
className="
text-[#4E3A30]
leading-[1.8]
text-[13px]
mt-3
"
>

{item}

</p>

)
)}

</div>


<div className="space-y-3">

{product.benefits
?.slice(0,4)
.map(
(item:string,index:number)=>(


<div
key={index}
className="flex items-start gap-3"
>

<div className="w-2 h-2 rounded-full bg-[#D06F1D] mt-2" />

<p className="text-[#4E3A30] text-[13px] leading-6">

{item}

</p>

</div>


)
)}

</div>

</div>

)}

              {activeTab === "Benefits" && (

<div className="grid md:grid-cols-2 gap-4">

{product.benefits?.map(
(item:string,index:number)=>(

<div
key={index}
className="flex items-center gap-3"
>

<div className="w-2 h-2 rounded-full bg-[#D06F1D]" />

<p className="text-[#4E3A30] text-[13px]">

{item}

</p>

</div>

)
)}

</div>

)}

              {activeTab === "Ingredients" && (

<div className="space-y-3">

{product.ingredients?.map(
(item:string,index:number)=>(

<p
key={index}
className="text-[#4E3A30] text-[13px]"
>

• {item}

</p>

)
)}

</div>

)}

             {activeTab === "How to Use" && (

<div className="space-y-3">

{product.howToUse?.map(
(item:string,index:number)=>(

<p
key={index}
className="text-[#4E3A30] text-[13px]"
>

• {item}

</p>

)
)}

</div>

)}
            </div>


            {/* GUARANTEE */}
            <div
              className="
                border border-[#E8D9C7]
                rounded-[18px]
                bg-[#FFF9F2]
                p-4
                flex
                flex-row
                items-center
                gap-3
              "
            >

              <Image

src="/guarantee.png"

alt="Guarantee"

width={72}

height={72}

className="
w-[58px]
md:w-[72px]
shrink-0
"

/>

              <div>

                <h3
                  className="
                    text-[18px]
                    md:text-[22px]
                    font-semibold
                    text-[#2E1B12]
                  "
                >
                  Guarantee
                </h3>

                <p className="mt-1 text-[#4E3A30] leading-6 text-[12px]">
                  We promise 100% purity and authentic natural sourcing.
                </p>

                <p className="text-[#4E3A30] leading-6 text-[12px] mt-1">
                  If you&apos;re not satisfied, we&apos;ll make it right.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* MODAL */}
      {showModal && (

        <BuyNowModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          product={{
            ...product,
            price,
            qty,
            variant:
selectedVariant?.title ||
selectedVariant?.label,
          }}
        />

      )}

    </div>

  );
}