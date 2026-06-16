import PolicyPage from "@/components/policy/PolicyLayout";

import {
  Shield,
  UserRound,
  CreditCard,
  LockKeyhole,
} from "lucide-react";


export default function PrivacyPolicyPage(){


return (

<PolicyPage

title="Privacy Policy"

updated="May 26, 2026"

heroIcon={
<Shield size={70}/>
}


items={[

{

icon:
<UserRound/>,

title:
"Information We Collect",

description:
"We collect necessary customer information such as name, phone number, email address, and delivery details only for processing orders and providing better service."

},


{

icon:
<CreditCard/>,

title:
"Payment Security",

description:
"Vanamrith does not store your banking, card, or sensitive payment details. All payments are handled securely through trusted payment providers."

},


{

icon:
<LockKeyhole/>,

title:
"Data Protection",

description:
"Your personal information is kept confidential and used only for order processing, communication, customer support, and improving our services."

}


]}


note="
We respect your privacy and ensure your personal information is handled safely and responsibly.
"


/>


);

}