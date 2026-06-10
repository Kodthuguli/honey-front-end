export default function OrganizationSchema(){


const schema = {


"@context":

"https://schema.org",



"@type":

"Organization",



name:

"Vanamrith",




url:

"https://vanamrith.com",





logo:

"https://vanamrith.com/logo.png",





description:

"Vanamrith provides pure natural honey and authentic farm products.",





sameAs:[


"https://www.facebook.com/vanamrith",


"https://www.instagram.com/vanamrith",


"https://www.youtube.com/@vanamrith"


],






contactPoint:[

{

"@type":

"ContactPoint",


telephone:

"+91-9483151437",


contactType:

"customer support",


areaServed:

"IN",


availableLanguage:[

"English",

"Kannada"

]

}

]


};






return (

<script

type="application/ld+json"

dangerouslySetInnerHTML={{


__html:

JSON.stringify(schema)


}}


/>

);


}