/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";

import { useCartStore } from "@/store/cartStore";
import ProductSkeleton from "@/components/ui/ProductSkeleton";
import DataNotFound from "@/components/ui/DataNotFound";

import {
  Filter,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Truck,
  Leaf,
} from "lucide-react";

export default function ProductsPage() {

  const addToCart = useCartStore((state) => state.addToCart);

  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("createdAt-desc");

  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<any[]>([]);

  const [filterOpen, setFilterOpen] = useState(false);

  const [priceRange, setPriceRange] = useState(1500);

  const fetchCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data);
    } catch {
      console.error("Failed to load categories");
    }
  };

  const fetchProducts = async (reset = false) => {
    try {

      setLoading(true);

      const [sortBy, sortOrder] = sort.split("-");

      const res = await api.get("/products", {
        params: {
          page: reset ? 1 : page,
          limit,
          q: search,
          category,
          sortBy,
          sortOrder,
          status: "active",
        },
      });

      if (reset) {
        setProducts(res.data.items || []);
      } else {
        setProducts(res.data.items || []);
      }

      setTotalPages(res.data.totalPages);

    } catch {
      console.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search, category, sort]);

  useEffect(() => {
    fetchProducts(true);
  }, [page, search, category, sort]);

const handleAddToCart = (product:any) => {


const variant =
product.variants?.[0];



const stock =
variant
?
variant.stock
:
product.stock;



if(
stock <= 0
){

alert(
"Product is out of stock"
);

return;

}




addToCart({

productId:
product._id,


name:
product.name,


image:
product.images?.[0] || "",



size:

variant?.title ||

variant?.label ||

"Default",



price:

variant?.price ||

product.price,



qty:1,


});




alert(
"Product added to cart"
);



};

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setSort("createdAt-desc");
    setPriceRange(1500);
  };

  return (

    <div className="bg-[#FDF8F2]">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#EFE1CF]">

        <div className="absolute top-0 left-0 w-[220px] opacity-20">
          <img src="/hex-pattern.png" alt="" />
        </div>

        <div className="absolute top-0 right-0 w-[220px] opacity-20">
          <img src="/leaf-border.png" alt="" />
        </div>

        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-10 lg:pt-16 pb-8">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-2 text-sm text-[#7A5C46]">
                <span>Home</span>
                <span>›</span>
                <span className="text-[#D06F1D]">Shop</span>
              </div>

              <h1
                className="
                  mt-5
                  text-[48px]
                  leading-[1]
                  lg:text-[76px]
                  font-serif
                  text-[#2E1B12]
                "
              >
                Our Products
              </h1>

              <p
                className="
                  mt-5
                  text-[#6B5245]
                  text-lg
                  leading-8
                  max-w-xl
                "
              >
                Discover our natural, chemical-free,
                farm-sourced products.
              </p>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end">

              <img
                src="/shop-hero.png"
                alt="Honey"
                className="w-full max-w-[620px]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-10 lg:py-14">

        {/* MOBILE TOP BAR */}
        <div className="lg:hidden grid grid-cols-2 gap-3 mb-6">

          <button
            onClick={() => setFilterOpen(true)}
            className="
              h-[56px]
              rounded-[16px]
              border border-[#E3D4C2]
              bg-[#FFFCF8]
              flex items-center justify-center gap-2
              text-[#3A1F16]
              font-medium
            "
          >
            <Filter size={18} />
            Filter
          </button>

          <div className="relative">

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="
                appearance-none
                w-full
                h-[56px]
                rounded-[16px]
                border border-[#E3D4C2]
                bg-[#FFFCF8]
                px-5
                text-[#3A1F16]
                font-medium
              "
            >
              <option value="createdAt-desc">Newest First</option>
              <option value="createdAt-asc">Oldest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>

            <ChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3A1F16]"
              size={18}
            />

          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* SIDEBAR */}
          <aside
            className="
              hidden lg:block
              rounded-[28px]
              border border-[#E6D7C4]
              bg-[#FFFCF8]
              p-7
              h-fit
            "
          >

            {/* SEARCH */}
            <div>

              <h3 className="font-semibold text-[#2E1B12] uppercase text-sm tracking-wide">
                Search
              </h3>

              <div className="relative mt-4">

                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="
                    w-full
                    h-[52px]
                    rounded-[14px]
                    border border-[#E2D2BF]
                    bg-white
                    px-4
                    pr-12
                    outline-none
                  "
                />

                <img
                  src="/search.svg"
                  alt=""
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 opacity-70"
                />

              </div>

            </div>

            {/* CATEGORY */}
            <div className="mt-10">

              <h3 className="font-semibold text-[#2E1B12] uppercase text-sm tracking-wide">
                Categories
              </h3>

              <div className="mt-5 space-y-4">

                <button
                  onClick={() => setCategory("all")}
                  className={`
                    block text-left transition
                    ${
                      category === "all"
                        ? "text-[#D06F1D] font-semibold"
                        : "text-[#3A1F16]"
                    }
                  `}
                >
                  All Categories
                </button>

                {categories.map((c: any) => (

                  <button
                    key={c._id}
                    onClick={() => setCategory(c.name)}
                    className={`
                      block text-left transition
                      ${
                        category === c.name
                          ? "text-[#D06F1D] font-semibold"
                          : "text-[#3A1F16]"
                      }
                    `}
                  >
                    {c.name}
                  </button>

                ))}

              </div>

            </div>

            {/* PRICE */}
            <div className="mt-10">

              <h3 className="font-semibold text-[#2E1B12] uppercase text-sm tracking-wide">
                Price Range
              </h3>

              <div className="mt-6">

                <input
                  type="range"
                  min="200"
                  max="1500"
                  value={priceRange}
                  onChange={(e) =>
                    setPriceRange(Number(e.target.value))
                  }
                  className="w-full accent-[#D06F1D]"
                />

                <div className="flex justify-between mt-3 text-[#3A1F16]">
                  <span>₹200</span>
                  <span>₹{priceRange}</span>
                </div>

              </div>

            </div>

            {/* FEATURES */}
            <div className="mt-10 space-y-4">

              <div
                className="
                  rounded-[18px]
                  border border-[#E6D7C4]
                  bg-white
                  p-4
                  flex items-start gap-3
                "
              >

                <Truck
                  size={28}
                  className="text-[#D06F1D] shrink-0"
                />

                <div>

                  <h4 className="font-semibold text-[#2E1B12]">
                    Free Shipping
                  </h4>

                  <p className="text-sm text-[#6B5245] mt-1">
                    On all orders above ₹999
                  </p>

                </div>

              </div>

              <div
                className="
                  rounded-[18px]
                  border border-[#E6D7C4]
                  bg-white
                  p-4
                  flex items-start gap-3
                "
              >

                <Leaf
                  size={28}
                  className="text-[#D06F1D] shrink-0"
                />

                <div>

                  <h4 className="font-semibold text-[#2E1B12]">
                    100% Natural
                  </h4>

                  <p className="text-sm text-[#6B5245] mt-1">
                    Pure. Raw. Unprocessed.
                  </p>

                </div>

              </div>

            </div>

          </aside>

          {/* PRODUCTS */}
          <div className="lg:col-span-3">

            {/* DESKTOP TOP BAR */}
            <div className="hidden lg:flex justify-between items-center mb-8">

              <p className="text-[#6B5245] text-lg">
                Showing 1–{products.length} of {totalPages * limit} results
              </p>

              <div className="relative">

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="
                    appearance-none
                    h-[52px]
                    rounded-[14px]
                    border border-[#E2D2BF]
                    bg-[#FFFCF8]
                    px-5
                    pr-12
                    min-w-[240px]
                    text-[#3A1F16]
                  "
                >
                  <option value="createdAt-desc">Newest First</option>
                  <option value="createdAt-asc">Oldest First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>

                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3A1F16]"
                  size={18}
                />

              </div>

            </div>

            {/* PRODUCTS GRID */}
            {loading ? (

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
                {[...Array(6)].map((_, i) => (
                  <ProductSkeleton key={i} />
                ))}
              </div>

            ) : products.length === 0 ? (

              <DataNotFound onAction={resetFilters} />

            ) : (

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7">

               {products.map((p) => {


const variant =
p.variants?.[0];



const stock =

p.variants?.length > 0

?

p.variants.reduce(

(
total:number,
v:any
)=>

total + (v.stock || 0),

0

)

:

p.stock;




const outOfStock =
stock <= 0;



const lowStock =
stock > 0 &&
stock <= 5;




return (

                    <div
                      key={p._id}
                      className="
                        rounded-[22px]
                        border border-[#E6D7C4]
                        bg-[#FFFCF8]
                        overflow-hidden
                        transition
                        hover:shadow-xl
                        hover:shadow-[#D06F1D]/10
                      "
                    >

                      {/* IMAGE */}
                      <div className="relative bg-white">

                        <img
                          src={p.images?.[0]}
                          alt={p.name}
                          className="
                            w-full
                            h-[190px]
                            lg:h-[280px]
                            object-cover
                          "
                        />

                        <button
                          className="
                            absolute top-3 right-3
                            w-10 h-10
                            rounded-full
                            bg-white/95
                            border border-[#E6D7C4]
                            flex items-center justify-center
                          "
                        >
                          <Heart
                            size={20}
                            className="text-[#5A3B2E]"
                          />
                        </button>

                      </div>

                      {/* CONTENT */}
                      <div className="p-4 lg:p-5">

                        <h3
                          className="
                            text-[18px]
                            lg:text-[30px]
                            font-semibold
                            text-[#2E1B12]
                            leading-tight
                          "
                        >
                          {p.name}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[#7A5C46]
                            text-sm
                            lg:text-base
                            line-clamp-2
                            min-h-[38px]
                          "
                        >
                          {p.shortDesc ||
                            p.description?.slice(0, 80) + "..."}
                        </p>

                        <p
                          className="
                            mt-3
                            text-[22px]
                            font-bold
                            text-[#D06F1D]
                          "
                        >
                          ₹{variant?.price ?? p.price}
                        </p>

                        <div className="mt-2">


{
outOfStock
?
(

<p className="text-red-600 text-sm font-medium">

Out of Stock

</p>

)

:

lowStock
?

(

<p className="text-orange-600 text-sm font-medium">

Only {stock} left

</p>

)

:

(

<p className="text-green-700 text-sm font-medium">

In Stock

</p>

)

}


</div>

                        {/* BUTTONS */}
                        <div className="mt-4 flex flex-col sm:flex-row gap-2.5">

                          <button

disabled={outOfStock}

onClick={() =>
handleAddToCart(p)
}


className={`
flex-1
h-[42px]
lg:h-[48px]
rounded-[10px]

${
outOfStock
?
"bg-gray-400 cursor-not-allowed"
:
"bg-[#D06F1D] hover:bg-[#B85E13]"
}

text-white
text-[13px]
lg:text-sm
font-medium
transition
whitespace-nowrap
px-3
`}

>
                            {
outOfStock
?
"Out of Stock"
:
"Add to Cart"
}
                          </button>

                          <Link
                            href={`/products/${p._id}`}
                            className="flex-1"
                          >
                            <button
                              className="
                                w-full
                                h-[42px]
                                lg:h-[48px]
                                rounded-[10px]
                                border border-[#D06F1D]
                                text-[#D06F1D]
                                text-[13px]
                                lg:text-sm
                                font-medium
                                hover:bg-[#D06F1D]
                                hover:text-white
                                transition
                                whitespace-nowrap
                                px-3
                              "
                            >
                              View Details
                            </button>
                          </Link>

                        </div>

                      </div>

                    </div>

                  );
                })}

              </div>

            )}

            {/* PAGINATION */}
            {!loading && totalPages > 1 && (

              <div className="flex justify-center items-center gap-2 mt-10 lg:mt-14 flex-wrap">

                {/* PREV */}
                <button
                  disabled={page === 1}
                  onClick={() =>
                    setPage((prev) => Math.max(prev - 1, 1))
                  }
                  className="
                    w-10 h-10 lg:w-11 lg:h-11
                    rounded-[12px]
                    border border-[#E1D2BB]
                    bg-white
                    disabled:opacity-40
                    flex items-center justify-center
                    text-[#3A1F16]
                  "
                >
                  <ChevronLeft size={18} />
                </button>

                {/* PAGE NUMBERS */}
                {Array.from(
                  { length: totalPages },
                  (_, index) => {

                    const pageNumber = index + 1;

                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setPage(pageNumber)}
                        className={`
                          w-10 h-10 lg:w-11 lg:h-11
                          rounded-[12px]
                          border
                          flex items-center justify-center
                          text-sm font-medium
                          transition
                          ${
                            page === pageNumber
                              ? "bg-[#F6E9D9] border-[#E0C8A8] text-[#D06F1D]"
                              : "bg-white border-[#E1D2BB] text-[#3A1F16]"
                          }
                        `}
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                )}

                {/* NEXT */}
                <button
                  disabled={page === totalPages}
                  onClick={() =>
                    setPage((prev) =>
                      Math.min(prev + 1, totalPages)
                    )
                  }
                  className="
                    w-10 h-10 lg:w-11 lg:h-11
                    rounded-[12px]
                    border border-[#E1D2BB]
                    bg-white
                    disabled:opacity-40
                    flex items-center justify-center
                    text-[#3A1F16]
                  "
                >
                  <ChevronRight size={18} />
                </button>

              </div>

            )}

            {/* MOBILE FEATURE STRIP */}
            <div
              className="
                lg:hidden
                mt-10
                rounded-[22px]
                border border-[#E7D7BD]
                bg-[#FFFCF8]
                overflow-hidden
              "
            >

              <div className="grid grid-cols-2">

                <div
                  className="
                    flex items-center gap-3
                    px-4 py-5
                  "
                >

                  <Truck
                    size={26}
                    className="text-[#D07A2A] shrink-0"
                  />

                  <div>

                    <h4
                      className="
                        font-semibold
                        text-[#2E1B12]
                        text-[15px]
                        leading-tight
                      "
                    >
                      Free Shipping
                    </h4>

                    <p
                      className="
                        text-[12px]
                        text-[#6B5245]
                        mt-1
                        leading-[1.4]
                      "
                    >
                      On all orders above ₹999
                    </p>

                  </div>

                </div>

                <div
                  className="
                    flex items-center gap-3
                    px-4 py-5
                    border-l border-[#E7D7BD]
                  "
                >

                  <Leaf
                    size={26}
                    className="text-[#D07A2A] shrink-0"
                  />

                  <div>

                    <h4
                      className="
                        font-semibold
                        text-[#2E1B12]
                        text-[15px]
                        leading-tight
                      "
                    >
                      100% Natural
                    </h4>

                    <p
                      className="
                        text-[12px]
                        text-[#6B5245]
                        mt-1
                        leading-[1.4]
                      "
                    >
                      Pure. Raw. Unprocessed.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MOBILE FILTER DRAWER */}
      {filterOpen && (

        <div className="fixed inset-0 z-50 bg-black/40">

          <div
            className="
              absolute bottom-0 left-0 right-0
              bg-white
              rounded-t-[28px]
              p-6
              max-h-[85vh]
              overflow-y-auto
            "
          >

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">

              <h3 className="text-xl font-semibold text-[#2E1B12]">
                Filters
              </h3>

              <button onClick={() => setFilterOpen(false)}>
                <X />
              </button>

            </div>

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                h-[52px]
                rounded-[14px]
                border border-[#E2D2BF]
                px-4
                mb-6
              "
            />

            {/* CATEGORY */}
            <div className="space-y-4">

              <button
                onClick={() => {
                  setCategory("all");
                  setFilterOpen(false);
                }}
                className={`
                  block text-left
                  ${
                    category === "all"
                      ? "text-[#D06F1D] font-semibold"
                      : "text-[#3A1F16]"
                  }
                `}
              >
                All Categories
              </button>

              {categories.map((c: any) => (

                <button
                  key={c._id}
                  onClick={() => {
                    setCategory(c.name);
                    setFilterOpen(false);
                  }}
                  className={`
                    block text-left
                    ${
                      category === c.name
                        ? "text-[#D06F1D] font-semibold"
                        : "text-[#3A1F16]"
                    }
                  `}
                >
                  {c.name}
                </button>

              ))}

            </div>

          </div>

        </div>

      )}
    </div>

  );
}