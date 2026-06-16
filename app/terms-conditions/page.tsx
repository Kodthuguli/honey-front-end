import PolicyPage from "@/components/policy/PolicyLayout";

import {
  FileText,
  ShoppingBag,
  CreditCard,
  ShieldCheck,
} from "lucide-react";


export default function TermsConditionsPage(){


return (

<PolicyPage

title="Terms & Conditions"

updated="May 26, 2026"

heroIcon={
<FileText size={70}/>
}


items={[

{

icon:
<ShoppingBag/>,

title:
"Product Information",

description:
"Vanamrith aims to provide accurate product descriptions, pricing, and availability details. As our products are natural, slight variations in color, texture, and consistency may occur."

},


{

icon:
<CreditCard/>,

title:
"Orders & Payments",

description:
"By placing an order on Vanamrith, you agree to provide accurate information. Payments are securely processed through trusted payment partners and confirmed before dispatch."

},


{

icon:
<ShieldCheck/>,

title:
"Website Usage",

description:
"Users agree not to misuse our website, content, images, or services. Vanamrith reserves the right to update products, prices, and policies whenever required."

}


]}


note="
By continuing to use Vanamrith, you agree to our terms and policies designed to provide a safe and trusted shopping experience.
"


/>


);

}