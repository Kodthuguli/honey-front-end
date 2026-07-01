import { Leaf, ShieldCheck, Heart, Droplets, FlaskConical, Sprout, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="text-[#2C1400] font-sans antialiased">

      {/* ─────────────────────────────────────────
          1. HERO
      ───────────────────────────────────────── */}
      <section
className="
relative
min-h-[55svh]
md:min-h-[70svh]
flex
flex-col
justify-end
overflow-hidden
"
>
        <Image
          src="/about/about-hero.png"
          alt="Vanamrith bee farm at golden hour"
          fill priority
          className="object-cover object-center scale-[1.02]"
        />
        {/* stacked overlays: atmospheric depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0600] via-[#0E0600]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0600]/60 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-16 pb-10 md:pb-14">

          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1px] bg-[#D8891C]" />
            <span className="text-[#D8891C] uppercase tracking-[4px] text-[10px] font-semibold">About Vanamrith</span>
          </div>

          {/* headline */}
          <h1 className="font-serif text-white leading-[0.92] tracking-[-1px]
text-[52px] sm:text-[76px] md:text-[100px] lg:text-[120px]">

Pure Honey,
<br />

<em className="not-italic text-[#F5C042]">
Straight from Hive.
</em>

</h1>

          {/* bottom bar */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-0 sm:justify-between border-t border-white/10 pt-6 md:pt-8">
            <p className="
text-white/70
text-[14px]
md:text-[16px]
leading-[1.85]
max-w-[460px]
">

Pure, raw Apis Cerana honey harvested with care.
Backed by 20+ years of beekeeping experience and
delivered naturally from our hives to your home.

</p>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {["Raw & Unprocessed", "Apis Cerana", "Zero Sugar", "20+ Years"].map((t, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full border border-white/20 text-white/80 text-[10px] md:text-[11px] font-medium tracking-wide">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. STORY — image left, text right
      ───────────────────────────────────────── */}
      <section className="pt-16 md:pt-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

            {/* image */}
            <div className="relative">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[560px] rounded-[20px] md:rounded-[28px] overflow-hidden">
                <Image src="/about/bee-farm.png" alt="Our bee farm" fill sizes="(max-width:768px) 90vw, 46vw" className="object-cover" />
                {/* bottom text over image */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0E0600]/80 to-transparent px-6 py-5">
                  <p className="text-white/90 text-[11px] md:text-[13px] font-medium uppercase tracking-widest">Our Farm · Since 2004</p>
                </div>
              </div>
              {/* floating stat */}
              <div className="absolute -bottom-5 -right-2 md:-right-6 bg-[#D8891C] text-white rounded-[16px] md:rounded-[20px] px-6 md:px-8 py-4 md:py-5 shadow-2xl">
                <div className="font-serif text-[36px] md:text-[48px] leading-none">20<span className="text-[22px] md:text-[28px]">+</span></div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-[2px] mt-1 text-white/80">Years of<br />Beekeeping</div>
              </div>
            </div>

            {/* text */}
            <div className="pt-8 md:pt-0">
              <span className="inline-block text-[#D8891C] uppercase tracking-[4px] text-[10px] md:text-[11px] font-semibold mb-4">Our Story</span>
              <h2 className="font-serif leading-[1.0] text-[38px] sm:text-[52px] md:text-[64px] mb-6">
                Two decades.<br />
                <span className="text-[#D8891C]">One commitment.</span>
              </h2>
              <p className="text-[#5F4637] text-[14px] md:text-[16px] leading-[1.95] mb-5">
                Every jar of Vanamrith honey carries with it over two decades of dedication. Our journey began with a deep passion for bees — nurturing colonies, understanding nature's rhythms, and mastering the gentle art of harvesting honey the right way.
              </p>
              <p className="text-[#5F4637] text-[14px] md:text-[16px] leading-[1.95] mb-8">
                We founded Vanamrith to carry that same spirit of honesty into the modern world — bringing truly natural honey directly to homes across the country. For years this extraordinary honey was known only to those who lived nearby. We felt that was simply unfair.
              </p>

              {/* 3 milestones */}
              <div className="space-y-0 border-l-2 border-[#EAD9C4] pl-5">
                {[
                  { year: "2004", text: "Began beekeeping with Apis Cerana colonies" },
                  { year: "2014", text: "Mastered seasonal harvesting across forest regions" },
                  { year: "2024", text: "Vanamrith launched — bringing the craft online" },
                ].map((t, i) => (
                  <div key={i} className="relative pb-5 last:pb-0">
                    <div className="absolute -left-[22px] top-1 w-2.5 h-2.5 rounded-full bg-[#D8891C] border-2 border-white" />
                    <span className="text-[#D8891C] font-serif text-[13px] font-semibold">{t.year}</span>
                    <p className="text-[#5F4637] text-[12px] md:text-[13px] mt-0.5 leading-[1.6]">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. APIS CERANA — full width editorial
      ───────────────────────────────────────── */}
      <section className="pt-16 md:pt-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">

          {/* header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14 pb-8 border-b border-[#EAD9C4]">
            <div>
              <span className="text-[#D8891C] uppercase tracking-[4px] text-[10px] md:text-[11px] font-semibold block mb-3">The Bee Behind Our Honey</span>
              <h2 className="font-serif text-[36px] sm:text-[52px] md:text-[64px] leading-[1.0]">
                <em className="not-italic text-[#D8891C]">Apis Cerana</em><br />
                India's Native Bee.
              </h2>
            </div>
            <p className="text-[#6F4E37] text-[13px] md:text-[15px] leading-[1.85] max-w-[360px] md:text-right">
              Not all honey is the same — and much of that difference begins with the bee itself.
            </p>
          </div>

          {/* asymmetric bento */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

            {/* col A — tall */}
            <div
className="
md:col-span-5
rounded-[22px]
overflow-hidden
bg-[#FBF7F0]
border
border-[#EAD9C4]
"
>

<div
className="
relative
h-[260px]
md:h-[330px]
"
>

<Image

src="/about/apis-cerana.png"

alt="Apis Cerana Bee"

fill

className="
object-cover
"

/>

</div>


<div
className="
p-7
md:p-9
"
>


<h3
className="
font-serif
text-[22px]
md:text-[28px]
leading-[1.15]
mb-4
"
>

Indigenous to India's forests for millennia.

</h3>


<p
  className="
  text-[#6F4E37]
  text-[13px]
  md:text-[15px]
  leading-[1.9]
  "
>

  Our honey is sourced exclusively from{" "}
  <strong className="text-[#3A1F16]">
    Apis Cerana
  </strong>
  {" "}— India's native honey bee species that has
  naturally adapted to our forests, flowers and climate
  for thousands of years.

  <br />
  <br />

  These bees collect nectar from diverse wild blooms,
  creating honey with a naturally rich aroma, complex
  flavour and unique character that reflects the local
  ecosystem.

  <br />
  <br />

  Unlike large-scale commercial honey production,
  Apis Cerana honey is harvested in smaller quantities
  with greater care, making every jar of Vanamrith
  truly special.

</p>


</div>


</div>

            {/* col B — two stacked */}
            <div className="md:col-span-4 flex flex-col gap-5">
              <div className="rounded-[22px] overflow-hidden bg-[#D8891C] p-7 md:p-8 flex-1 text-white">
                <div className="relative h-[120px] rounded-xl overflow-hidden mb-5">

<Image
src="/about/process-1.png"
alt="Wild flowers"
fill
className="object-cover"
/>

</div>
                <h3 className="font-serif text-[19px] md:text-[24px] leading-[1.2] mb-3">Rarer. More wholesome. Far more valuable.</h3>
                <p className="text-white/75 text-[12px] md:text-[14px] leading-[1.85]">
                  Harvested in smaller, careful quantities — which is precisely why Apis Cerana honey is rarer and nutritionally far superior to what you find on supermarket shelves.
                </p>
              </div>
              <div className="rounded-[22px] bg-[#2C1400] p-7 md:p-8 flex-1 text-white">
                <div className="relative h-[120px] rounded-xl overflow-hidden mb-5">

<Image
src="/about/process-2.png"
alt="Honey comb"
fill
className="object-cover"
/>

</div>
                <h3 className="font-serif text-[19px] md:text-[24px] leading-[1.2] mb-3 text-[#F5C042]">A treasure, carefully stewarded.</h3>
                <p className="text-white/65 text-[12px] md:text-[14px] leading-[1.85]">
                  When you taste Vanamrith, you are tasting the essence of India's own native bee — nurtured with patience, respect, and love for nature over two decades.
                </p>
              </div>
            </div>

            {/* col C — stat + note */}
            <div className="md:col-span-3 flex flex-col gap-5">

  <div
    className="
    rounded-[22px]
    border
    border-[#EAD9C4]
    bg-[#FFFDF8]
    overflow-hidden
    flex-1
    "
  >

    {/* IMAGE AREA */}

    <div
      className="
      relative
      h-[180px]
      md:h-[220px]
      "
    >

      <Image
        src="/about/apis-cerana-honey.png"
        alt="Apis Cerana Honey"
        fill
        className="
        object-cover
        "
      />

    </div>



    {/* CONTENT */}

    <div className="p-7">

      <div
        className="
        font-serif
        text-[52px]
        md:text-[64px]
        text-[#D8891C]
        leading-none
        "
      >

        100

        <span className="text-[32px]">
          %
        </span>

      </div>


      <p
  className="
  text-[#6F4E37]
  text-[12px]
  md:text-[14px]
  mt-4
  leading-[1.9]
  "
>

  Our honey is sourced exclusively from the native
  Apis Cerana bee species, known for producing honey
  with a naturally rich aroma, deep flavour and unique
  character.

  <br />
  <br />

  Harvested in smaller batches with care, every jar
  preserves the purity created by the bees — with no
  blending, no added sugar and no shortcuts.

</p>

    </div>


  </div>





  {/* QUOTE CARD */}

  <div
    className="
    rounded-[22px]
    border
    border-[#EAD9C4]
    bg-[#FFF9EE]
    p-6
    text-center
    "
  >

    <p
      className="
      font-serif
      italic
      text-[#D8891C]
      text-[16px]
      md:text-[18px]
      leading-[1.5]
      "
    >

      "The indigenous bee of India, prized for millennia."

    </p>


  </div>


</div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. PROCESS — hive to bottle
      ───────────────────────────────────────── */}
      <section className="pt-16 md:pt-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#D8891C] uppercase tracking-[4px] text-[10px] md:text-[11px] font-semibold block mb-3">Our Process</span>
            <h2 className="font-serif text-[36px] sm:text-[52px] md:text-[64px] leading-[1.0]">
              From Hive to <em className="not-italic text-[#D8891C]">Bottle</em>
            </h2>
            <p className="mt-3 text-[#6F4E37] text-[13px] md:text-[15px] max-w-md mx-auto">Every step is crafted with care to bring you 100% pure honey.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[64px] left-[9%] right-[9%] h-px bg-gradient-to-r from-transparent via-[#D8891C]/30 to-transparent" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-3">
              {[
                { num: "01", title: "Bees Thrive",        desc: "Nectar collected from natural blooms.",           img: "/about/process-1.png" },
                { num: "02", title: "Honey Combs",        desc: "Bees fill combs with pure, raw honey.",           img: "/about/process-2.png" },
                { num: "03", title: "Careful Harvesting", desc: "Harvested responsibly, bee well-being first.",    img: "/about/process-3.png" },
                { num: "04", title: "Gentle Extraction",  desc: "Cold-extracted to retain all nutrients.",         img: "/about/process-4.png" },
                { num: "05", title: "Packed with Care",   desc: "Sealed hygienically, delivered to your door.",    img: "/about/process-5.png" },
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="relative w-[100px] h-[100px] sm:w-[118px] sm:h-[118px] md:w-[128px] md:h-[128px] rounded-full overflow-hidden border-[3px] border-[#EAD9C4] shadow-[0_8px_24px_rgba(90,40,0,0.10)] bg-[#FBF7F1] transition-transform duration-300 group-hover:scale-105">
                    <Image src={step.img} alt={step.title} fill className="object-cover" />
                  </div>
                  <div className="mt-3 w-6 h-6 rounded-full bg-[#D8891C] flex items-center justify-center text-white text-[10px] font-bold">
                    {step.num}
                  </div>
                  <h3 className="mt-2.5 font-serif text-[13px] md:text-[16px]">{step.title}</h3>
                  <p className="mt-1 text-[#6F4E37] text-[10px] md:text-[12px] leading-[1.65] max-w-[110px] md:max-w-[130px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          5. DIFFERENTIATORS — horizontal scroll cards
      ───────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 pb-8 border-b border-[#EAD9C4]">
            <div>
              <span className="text-[#D8891C] uppercase tracking-[4px] text-[10px] md:text-[11px] font-semibold block mb-3">What Makes Us Different</span>
              <h2 className="font-serif text-[34px] sm:text-[48px] md:text-[58px] leading-[1.0]">
                In a market of shortcuts,<br />
                <span className="text-[#D8891C]">we chose honesty.</span>
              </h2>
            </div>
            <p className="text-[#6F4E37] text-[13px] md:text-[14px] leading-[1.85] max-w-[300px] md:text-right">
              Every decision comes back to one question: does this preserve what nature made?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Leaf size={24} />,          title: "100% Pure & Raw",       desc: "Harvested directly from the hive. No mixing, no blending, no shortcuts whatsoever.",                              n: "01" },
              { icon: <FlaskConical size={24} />,  title: "Never Processed",       desc: "Not heated or chemically treated — preserving natural enzymes, antioxidants, and complex flavour.",               n: "02" },
              { icon: <ShieldCheck size={24} />,   title: "Zero Sugar Added",      desc: "No sugar, no syrups, no artificial sweeteners. What you taste is exactly what the bees made.",                   n: "03" },
              { icon: <Sprout size={24} />,        title: "20 Years of Craft",     desc: "Two decades of beekeeping wisdom behind every jar. A craft refined over a lifetime, now delivered to you.",       n: "04" },
            ].map((c, i) => (
              <div key={i} className="group relative rounded-[20px] border border-[#EAD9C4] p-6 md:p-7 overflow-hidden transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(90,40,0,0.10)]"
                style={{ background: "linear-gradient(160deg,#FFFDF8,#F9EDD8)" }}>
                <span className="absolute top-4 right-4 font-serif text-[56px] leading-none text-[#D8891C]/8 select-none">{c.n}</span>
                <div className="w-12 h-12 rounded-xl bg-[#FFF3DC] flex items-center justify-center text-[#D8891C] mb-5">
                  {c.icon}
                </div>
                <h3 className="font-serif text-[18px] md:text-[22px] mb-2">{c.title}</h3>
                <p className="text-[#6F4E37] text-[12px] md:text-[13px] leading-[1.8]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          6. PROMISE — full bleed
      ───────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image src="/about/promise-srip.png" alt="" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0600]/90 via-[#0E0600]/70 to-[#0E0600]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0600]/60 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#D8891C]" />
                <span className="text-[#D8891C] uppercase tracking-[4px] text-[10px] font-semibold">Our Promise</span>
              </div>
              <h2 className="font-serif text-white text-[40px] sm:text-[56px] md:text-[72px] leading-[0.95]">
                You deserve to know<br />
                <em className="not-italic text-[#F5C042]">exactly</em> what<br />
                you are eating.
              </h2>
              <p className="mt-7 text-white/65 text-[14px] md:text-[16px] leading-[1.9] max-w-[480px]">
                Transparency is at the heart of everything we do. When you open a jar of Vanamrith honey, you will find no hidden ingredients, no fine print, and no compromise — only pure, honest honey, just as nature intended.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: <Droplets size={20} />, title: "Pure in Every Drop",   desc: "Raw, unfiltered honey straight from the hive — nothing added, nothing removed." },
                { icon: <ShieldCheck size={20} />, title: "Honest in Every Step", desc: "We never take shortcuts. What you read on the label is exactly what's in the jar." },
                { icon: <Heart size={20} />,     title: "Care in Every Jar",    desc: "Packed with the same care that goes into every stage of our beekeeping craft." },
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-4 rounded-[16px] border border-white/12 bg-white/8 backdrop-blur-sm px-5 py-5">
                  <div className="w-10 h-10 rounded-xl bg-[#D8891C]/25 border border-[#D8891C]/30 flex items-center justify-center text-[#F5C042] shrink-0 mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[13px] md:text-[15px]">{p.title}</p>
                    <p className="text-white/55 text-[11px] md:text-[13px] mt-1 leading-[1.7]">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          7. TEAM
      ───────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div>
              <span className="text-[#D8891C] uppercase tracking-[4px] text-[10px] md:text-[11px] font-semibold block mb-4">Our Small Team</span>
              <h2 className="font-serif text-[34px] sm:text-[48px] md:text-[60px] leading-[1.0] mb-6">
                A craft refined<br />
                <span className="text-[#D8891C]">over a lifetime.</span>
              </h2>
              <p className="text-[#5F4637] text-[14px] md:text-[16px] leading-[1.95] mb-5">
                We are a passionate team dedicated to bringing the purest honey to your family. Our mission is simple: make authentic, unadulterated Apis Cerana honey accessible to every household — from bustling cities to quiet towns.
              </p>
              <p className="text-[#5F4637] text-[14px] md:text-[16px] leading-[1.95] mb-8">
                When you choose Vanamrith, you are not just buying honey — you are supporting a beekeeper's passion and nature's finest gift.
              </p>
              <div className="border-l-2 border-[#D8891C] pl-5">
                <p className="font-serif italic text-[#D8891C] text-[18px] md:text-[22px] leading-[1.4]">
                  "Harvested with Care.<br />Delivered with Honesty."
                </p>
                <p className="text-[#9B7B5E] text-[11px] uppercase tracking-widest mt-2">— Vanamrith</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-[280px] sm:h-[380px] md:h-[520px] rounded-[20px] md:rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(90,40,0,0.12)]">
                <Image src="/about-team.png" alt="The Vanamrith team" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}