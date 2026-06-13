import './globals.css';

import {
  Inter,
  Playfair_Display,
} from "next/font/google";


import type { Metadata } from "next";


import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";
import { Toaster } from "sonner";

import OrganizationSchema from "@/components/seo/OrganizationSchema";
import HoneyLoader from '@/components/HoneyLoader';

const inter =
Inter({

subsets:["latin"],

weight:[
"400",
"500",
"600"
],

variable:"--font-inter",

display:"swap",

});



const playfair =
Playfair_Display({

subsets:["latin"],

weight:["600"],

variable:"--font-playfair",

display:"swap",

});



export const metadata: Metadata = {


metadataBase:
new URL(
"https://vanamrith.com"
),


verification:{

google:
"Yh6WyesbXR_6eETKNMTZvYXVuALJ-EHSOiEPhhAm6Mg",

},


title:{


default:

"Vanamrith | Pure Natural Honey & Farm Products",



template:

"%s | Vanamrith",


},







description:

"Buy pure natural honey from Vanamrith. Experience raw, authentic honey with no added sugar, no preservatives and natural goodness from trusted sources.",







keywords:[


"Vanamrith",


"pure honey",


"natural honey",


"raw honey",


"organic honey",


"buy honey online",


"pure honey India",


"forest honey",


"farm honey",


"natural products",


],







authors:[

{

name:"Vanamrith",

},

],








openGraph:{



title:

"Vanamrith Pure Natural Honey",




description:

"Experience the purity of nature with Vanamrith honey.",




url:

"https://vanamrith.com",




siteName:

"Vanamrith",





images:[

{

url:

"/og-image.jpg",



width:1200,



height:630,



alt:

"Vanamrith Pure Honey",

},

],




locale:

"en_IN",




type:

"website",



},









twitter:{


card:

"summary_large_image",



title:

"Vanamrith Pure Natural Honey",



description:

"Pure natural honey with no added sugar and no preservatives.",



images:[

"/og-image.jpg"

],


},







robots:{


index:true,


follow:true,


googleBot:{


index:true,


follow:true,


"max-image-preview":"large",


"max-snippet":-1,


},



},






};










export default function RootLayout({

children,

}:{

children:React.ReactNode

}) {



return (

<html

lang="en"

className={`
scroll-smooth
${inter.variable}
${playfair.variable}
`}

>



<body


className="font-inter text-[#3A1F16]"


style={{


backgroundImage:

"url('/bg-texture.png')",



backgroundRepeat:

"repeat",



backgroundSize:

"cover",



backgroundAttachment:

"fixed",



backgroundColor:

"#F5EDD8",


}}


>

<OrganizationSchema />

<Navbar />
<HoneyLoader />

<Toaster

position="top-right"

richColors

closeButton

duration={3000}

/>


<main className="pt-[64px] min-h-screen">


{children}


</main>




<Footer />



</body>


</html>

);


}