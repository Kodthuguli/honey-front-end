import PolicyPage from "@/components/policy/PolicyLayout";

import {
 Truck,
 PackageCheck,
 Clock,
 IndianRupee
} from "lucide-react";


export default function ShippingPage(){


return (

<PolicyPage

title="Shipping & Delivery"

updated="May 26, 2026"

heroIcon={<Truck size={70}/>}


items={[

{
icon:<PackageCheck/>,
title:"Order Processing",
description:
"Orders placed on Vanamrith are processed after successful confirmation. We carefully pack our natural products to maintain quality and freshness."
},

{
icon:<Clock/>,
title:"Delivery Timeline",
description:
"Orders are usually shipped within 2-4 business days. Delivery timelines may vary depending on your location and courier availability."
},

{
icon:<IndianRupee/>,
title:"Shipping Charges",
description:
"Shipping charges, if applicable, will be shown during checkout before placing the order."
}

]}


note="
We partner with trusted delivery services to ensure your order reaches you safely and on time.
"

/>

);

}