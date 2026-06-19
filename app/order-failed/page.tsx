import { Suspense } from "react";
import OrderFailedClient from "./OrderFailedClient";


export default function OrderFailedPage(){

return (

<Suspense fallback={<div>Loading...</div>}>

<OrderFailedClient />

</Suspense>

);

}