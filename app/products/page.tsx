/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import BuyNowModal from "@/components/checkout/BuyNowModal";
import ProductSkeleton from "@/components/ui/ProductSkeleton";
import DataNotFound from "@/components/ui/DataNotFound";

import { Filter, ArrowUpDown, X } from "lucide-react";

export default function ProductsPage() {

  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(9);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("createdAt-desc");

  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<any[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

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
        setProducts((prev) => [...prev, ...(res.data.items || [])]);
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
    fetchProducts(true);
  }, []);

  useEffect(() => {
    setPage(1);
    fetchProducts(true);
  }, [search, category, sort]);

  useEffect(() => {
    if (page > 1) fetchProducts();
  }, [page]);

  const handleBuyNow = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setSort("createdAt-desc");
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">

      {/* TITLE */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-[#3A1F16]">
          Our Products
        </h1>

        <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />

        <p className="mt-4 text-[#6F4E37] max-w-2xl mx-auto">
          Discover our natural, chemical-free, farm-sourced products.
        </p>
      </div>


      {/* MOBILE FILTER + SORT */}
      <div className="lg:hidden flex gap-4 mt-10">

        <button
          onClick={() => setFilterOpen(true)}
          className="flex-1 flex items-center justify-center gap-2 bg-[#F4E6D5] border border-[#C6A77D] py-3 rounded-md"
        >
          <Filter size={18} />
          Filter
        </button>

        <button
          onClick={() => setSortOpen(true)}
          className="flex-1 flex items-center justify-center gap-2 bg-[#F4E6D5] border border-[#C6A77D] py-3 rounded-md"
        >
          <ArrowUpDown size={18} />
          Sort
        </button>

      </div>


      {/* PAGE LAYOUT */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-4 gap-10">


        {/* DESKTOP FILTER SIDEBAR */}
        <aside className="hidden lg:block bg-[#F4E6D5] p-6 rounded-xl shadow-sm space-y-8">

          {/* SEARCH */}
          <div>
            <h3 className="font-semibold mb-2 text-[#3A1F16]">
              Search
            </h3>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>


          {/* CATEGORY */}
          <div>
            <h3 className="font-semibold mb-3 text-[#3A1F16]">
              Categories
            </h3>

            <div className="space-y-2">

              <button
                onClick={() => setCategory("all")}
                className={`block w-full text-left ${
                  category === "all" ? "text-[#C4622D]" : ""
                }`}
              >
                All Categories
              </button>

              {categories.map((c: any) => (
                <button
                  key={c._id}
                  onClick={() => setCategory(c.name)}
                  className={`block w-full text-left ${
                    category === c.name ? "text-[#C4622D]" : ""
                  }`}
                >
                  {c.name}
                </button>
              ))}

            </div>
          </div>


          {/* SORT */}
          <div>
            <h3 className="font-semibold mb-2 text-[#3A1F16]">
              Sort By
            </h3>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="createdAt-desc">Newest First</option>
              <option value="createdAt-asc">Oldest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

        </aside>


        {/* PRODUCTS */}
        <div className="lg:col-span-3">

          {loading ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {[...Array(6)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>

          ) : products.length === 0 ? (

            <DataNotFound onAction={resetFilters} />

          ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

              {products.map((p) => {
                const variant = p.variants?.[0];

                return (
                  <div
                    key={p._id}
                    className="bg-[#F4E6D5] rounded-lg shadow-sm hover:shadow-xl hover:shadow-[#C4622D]/20 transition-all duration-300 hover:-translate-y-1 p-5 group"
                  >

                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={p.images?.[0]}
                        alt={p.name}
                        className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-[#3A1F16] mt-5 group-hover:text-[#C4622D] transition">
                      {p.name}
                    </h3>

                    <p className="text-[#6F4E37] mt-2 text-sm line-clamp-2">
                      {p.shortDesc || p.description?.slice(0, 80) + "..."}
                    </p>

                    <p className="text-lg font-semibold text-[#C4622D] mt-3">
                      ₹{variant?.price ?? p.price}
                    </p>

                    <div className="mt-5 flex gap-3">

                      <button
                        onClick={() => handleBuyNow(p)}
                        className="flex-1 bg-[#C4622D] text-white py-2 rounded-md hover:bg-[#552619]"
                      >
                        Buy Now
                      </button>

                      <Link href={`/products/${p._id}`} className="flex-1">
                        <button className="w-full py-2 border border-[#C4622D] text-[#C4622D] rounded-md hover:bg-[#C4622D] hover:text-white">
                          View Details
                        </button>
                      </Link>

                    </div>

                  </div>
                );
              })}

            </div>

          )}

          {!loading && products.length > 0 && page < totalPages && (
            <div className="text-center mt-14">
              <button
                onClick={() => setPage(page + 1)}
                className="px-6 py-3 bg-[#C4622D] text-white rounded-md hover:bg-[#552619]"
              >
                Load More
              </button>
            </div>
          )}

        </div>

      </div>


      {/* MOBILE FILTER DRAWER */}
      {filterOpen && (
  <div className="fixed inset-0 z-50 flex items-end bg-black/40">

    <div className="w-full bg-white rounded-t-2xl p-6 animate-slideUp max-h-[80vh] overflow-y-auto">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-[#3A1F16]">
          Filters
        </h3>

        <button onClick={() => setFilterOpen(false)}>
          <X />
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-[#C6A77D] rounded-md px-3 py-2 mb-6"
      />

      {/* Category list */}
      <div className="space-y-3">

        <button
          onClick={() => {
            setCategory("all");
            setFilterOpen(false);
          }}
          className={`w-full text-left py-2 ${
            category === "all" ? "text-[#C4622D] font-medium" : ""
          }`}
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
            className={`w-full text-left py-2 ${
              category === c.name ? "text-[#C4622D] font-medium" : ""
            }`}
          >
            {c.name}
          </button>
        ))}

      </div>

    </div>
  </div>
)}


      {/* MOBILE SORT DRAWER */}
      {sortOpen && (
  <div className="fixed inset-0 z-50 flex items-end bg-black/40">

    <div className="w-full bg-white rounded-t-2xl p-6 animate-slideUp max-h-[70vh] overflow-y-auto">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-[#3A1F16]">
          Sort By
        </h3>

        <button onClick={() => setSortOpen(false)}>
          <X />
        </button>
      </div>

      <div className="space-y-4">

        <button
          onClick={() => {
            setSort("createdAt-desc");
            setSortOpen(false);
          }}
          className={`w-full text-left py-2 ${
            sort === "createdAt-desc" ? "text-[#C4622D] font-medium" : ""
          }`}
        >
          Newest First
        </button>

        <button
          onClick={() => {
            setSort("createdAt-asc");
            setSortOpen(false);
          }}
          className={`w-full text-left py-2 ${
            sort === "createdAt-asc" ? "text-[#C4622D] font-medium" : ""
          }`}
        >
          Oldest First
        </button>

        <button
          onClick={() => {
            setSort("price-asc");
            setSortOpen(false);
          }}
          className={`w-full text-left py-2 ${
            sort === "price-asc" ? "text-[#C4622D] font-medium" : ""
          }`}
        >
          Price: Low to High
        </button>

        <button
          onClick={() => {
            setSort("price-desc");
            setSortOpen(false);
          }}
          className={`w-full text-left py-2 ${
            sort === "price-desc" ? "text-[#C4622D] font-medium" : ""
          }`}
        >
          Price: High to Low
        </button>

      </div>

    </div>
  </div>
)}


      {selectedProduct && (
        <BuyNowModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          product={selectedProduct}
        />
      )}

    </div>
  );
}