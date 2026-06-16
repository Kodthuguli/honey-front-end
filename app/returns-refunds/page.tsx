import PolicyPage from "@/components/policy/PolicyLayout";

import {
 RefreshCcw,
 PackageX,
 Wallet,
 ShieldCheck
} from "lucide-react";


export default function RefundPage(){

return (

<PolicyPage

title="Returns & Refunds"

updated="May 26, 2026"

heroIcon={<RefreshCcw size={70}/>}

items={[

{
icon:<PackageX/>,
title:"Returns",
description:
"Food products once opened cannot be returned. Damaged or incorrect products should be reported within 48 hours."
},

{
icon:<Wallet/>,
title:"Refund Process",
description:
"Approved refunds will be processed back to the original payment method within 5-7 business days."
},

{
icon:<ShieldCheck/>,
title:"Customer Support",
description:
"Our support team will help resolve genuine order related concerns quickly."
}

]}

/>

);

}