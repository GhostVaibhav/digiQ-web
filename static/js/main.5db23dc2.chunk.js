(this["webpackJsonpdigifin-web-frontend"]=this["webpackJsonpdigifin-web-frontend"]||[]).push([[0],{46:function(e,t,r){},47:function(e,t,r){},57:function(e,t,r){"use strict";r.r(t);var s=r(5),a=r.n(s),n=r(36),i=r.n(n),o=(r(46),r(47),r(9)),c=r(37),l=r(22),d=(Object(c.a)({apiKey:"AIzaSyAb61S8PSnQlZylRxDN3Z45846x8QWzJa0",authDomain:"helloworld-ad5a4.firebaseapp.com",databaseURL:"https://helloworld-ad5a4.firebaseio.com",projectId:"helloworld-ad5a4",storageBucket:"helloworld-ad5a4.appspot.com",messagingSenderId:"160048863837",appId:"1:160048863837:web:86eb13bccf2221ceb60bb4"}),Object(l.b)()),u=r(1),h=a.a.createContext();function b(){return Object(s.useContext)(h)}function m(e){var t=e.children,r=Object(s.useState)(),a=Object(o.a)(r,2),n=a[0],i=a[1],c=Object(s.useState)(!0),b=Object(o.a)(c,2),m=b[0],p=b[1];Object(s.useEffect)((function(){return d.onAuthStateChanged((function(e){i(e),p(!1)}))}),[]);var j={currentUser:n,signup:function(e,t){return Object(l.a)(d,e,t)},login:function(e,t){return Object(l.d)(d,e,t)},logout:function(){return Object(l.e)(d)},resetPassword:function(e){return Object(l.c)(d,e)},updateEmail:l.f,updatePassword:l.g};return Object(u.jsx)(h.Provider,{value:j,children:!m&&t})}var p=r(8);function j(){var e=b().currentUser;return Object(u.jsx)("div",{children:Object(u.jsx)(p.a,{children:Object(u.jsx)("nav",{className:"navbar navbar-expand-lg flex navbar-dark bg-primary",children:Object(u.jsxs)("div",{className:"container-fluid",style:{fontFamily:"Inter"},children:[Object(u.jsx)(p.b,{className:"navbar-brand",style:{fontFamily:"Inter",fontWeight:700,fontSize:"1.5rem"},to:"/",children:"digiFin"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsxs)("div",{className:"collapse navbar-collapse flex justify-content-between",id:"navbarSupportedContent",children:[Object(u.jsxs)("ul",{className:"navbar-nav mb-2 mb-lg-0",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(p.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(u.jsxs)("li",{className:"nav-item dropdown",children:[Object(u.jsx)("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}),Object(u.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)(p.b,{className:"dropdown-item",to:"/pricing",children:"Pricing"}),Object(u.jsx)(p.b,{className:"dropdown-item",to:"/terms&conditions",children:"Terms & Conditions"})]}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{className:"dropdown-item",to:"/privacy",children:"Privacy Policy"})}),Object(u.jsx)("li",{children:Object(u.jsx)("hr",{className:"dropdown-divider"})}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{className:"dropdown-item",to:"/dashboard",children:"Dashboard"})})]})]})]}),!e&&Object(u.jsx)("div",{className:"d-flex",children:Object(u.jsx)(p.b,{to:"/signup",children:Object(u.jsx)("button",{className:"btn btn-dark mx-2 shadow rounded-full",children:"Get Started"})})}),e&&Object(u.jsx)("div",{className:"d-flex text-white",children:e.email})]})]})})})})}var f=r(12),y=r(0),x=r.n(y),g=r(3);function O(){var e=Object(s.useRef)(),t=Object(s.useRef)(),r=b().login,a=Object(s.useState)(""),n=Object(o.a)(a,2),i=n[0],c=n[1],l=Object(s.useState)(!1),d=Object(o.a)(l,2),h=d[0],m=d[1],j=Object(f.g)();function y(){return(y=Object(g.a)(x.a.mark((function s(a){return x.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),s.prev=1,c(""),m(!0),s.next=6,r(e.current.value,t.current.value);case 6:j.push("/dashboard"),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(1),c("Failed to sign in");case 12:m(!1);case 13:case"end":return s.stop()}}),s,null,[[1,9]])})))).apply(this,arguments)}return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:"container flex my-5 py-2 px-5 bg-light rounded shadow",style:{maxWidth:"400px",fontFamily:"Inter"},onSubmit:function(e){return y.apply(this,arguments)},children:[Object(u.jsx)("h1",{className:"text-center m-3",style:{fontWeight:700},children:"Log In"}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(u.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",ref:e,autoComplete:"username",required:!0})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",autoComplete:"new-password",ref:t,required:!0})]}),Object(u.jsxs)("button",{disabled:h,type:"submit",className:"w-100 btn btn-primary",children:[h&&Object(u.jsx)("span",{className:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"}),"Login"]}),Object(u.jsx)("div",{className:"w-100 text-center mt-3",children:Object(u.jsx)(p.b,{to:"/forgot-password",children:"Forgot Password?"})}),i&&Object(u.jsx)("p",{className:"my-3 form-text text-center text-danger",children:i}),Object(u.jsxs)("div",{id:"emailHelp",className:"text-center my-3",children:["Need an account? ",Object(u.jsx)(p.b,{to:"/signup",children:"Signup"})]})]})})}function v(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),r=t[0],a=t[1],n=b(),i=n.currentUser,c=n.logout,l=Object(f.g)();function d(){return(d=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(""),e.prev=1,e.next=4,c();case 4:l.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"container card shadow text-center mt-5",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:"Profile"}),r&&Object(u.jsx)("p",{className:"card-text",children:r}),Object(u.jsxs)("h6",{className:"card-subtitle mb-2 text-muted",children:["Email: ",i.email]}),Object(u.jsx)(p.b,{to:"/update",children:Object(u.jsx)("button",{className:"btn btn-primary mx-2",variant:"link",children:"Update Profile"})}),Object(u.jsx)("button",{className:"btn btn-primary mx-2",variant:"link",onClick:function(){return d.apply(this,arguments)},children:"Logout"})]})})})}function w(){var e=Object(s.useRef)(),t=Object(s.useRef)(),r=Object(s.useRef)(),a=b().signup,n=Object(s.useState)(""),i=Object(o.a)(n,2),c=i[0],l=i[1],d=Object(s.useState)(!1),h=Object(o.a)(d,2),m=h[0],j=h[1],y=Object(f.g)();function O(){return(O=Object(g.a)(x.a.mark((function s(n){return x.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(n.preventDefault(),t.current.value===r.current.value){s.next=3;break}return s.abrupt("return",l("Passwords do not match"));case 3:return s.prev=3,l(""),j(!0),s.next=8,a(e.current.value,t.current.value);case 8:y.push("/dashboard"),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(3),l(s.t0.message);case 14:j(!1);case 15:case"end":return s.stop()}}),s,null,[[3,11]])})))).apply(this,arguments)}return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:"container flex my-5 py-2 px-5 bg-light rounded shadow",style:{maxWidth:"400px",fontFamily:"Inter"},onSubmit:function(e){return O.apply(this,arguments)},children:[Object(u.jsx)("h1",{className:"text-center m-3",style:{fontWeight:700},children:"Sign Up"}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(u.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",ref:e,autoComplete:"username",required:!0})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",autoComplete:"new-password",ref:t,required:!0})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputPassword2",className:"form-label",children:"Confirm Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword2",autoComplete:"new-password",ref:r,required:!0})]}),Object(u.jsxs)("button",{disabled:m,type:"submit",className:"w-100 btn btn-primary",children:[m&&Object(u.jsx)("span",{class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"}),"Signup"]}),c&&Object(u.jsx)("p",{className:"my-3 form-text text-center text-danger",children:c}),Object(u.jsxs)("div",{id:"emailHelp",className:"text-center my-3",children:["Already have an account? ",Object(u.jsx)(p.b,{to:"/login",children:"Login"})]})]})})}var N=r(31),I=r(41);function P(e){var t=e.component,r=Object(I.a)(e,["component"]),s=b().currentUser;return Object(u.jsx)(f.b,Object(N.a)(Object(N.a)({},r),{},{render:function(e){return s?Object(u.jsx)(t,Object(N.a)({},e)):Object(u.jsx)(f.a,{to:"/login"})}}))}function S(){var e=Object(s.useRef)(),t=b().resetPassword,r=Object(s.useState)(""),a=Object(o.a)(r,2),n=a[0],i=a[1],c=Object(s.useState)(!1),l=Object(o.a)(c,2),d=l[0],h=l[1],m=Object(s.useState)(""),j=Object(o.a)(m,2),f=j[0],y=j[1];function O(){return(O=Object(g.a)(x.a.mark((function r(s){return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s.preventDefault(),r.prev=1,y(""),i(""),h(!0),r.next=7,t(e.current.value);case 7:y("Check your inbox for further instructions"),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),i("Failed to reset password");case 13:h(!1);case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))).apply(this,arguments)}return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:"container flex my-5 py-2 px-5 bg-light rounded shadow",style:{maxWidth:"400px",fontFamily:"Inter"},onSubmit:function(e){return O.apply(this,arguments)},children:[Object(u.jsx)("h1",{className:"text-center m-3",style:{fontWeight:700},children:"Forgot Password"}),f&&Object(u.jsx)("div",{className:"alert alert-success",role:"alert",children:f}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(u.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",ref:e,autoComplete:"username",required:!0})]}),Object(u.jsxs)("button",{disabled:d,type:"submit",className:"w-100 btn btn-primary",children:[d&&Object(u.jsx)("span",{class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"}),"Reset Password"]}),Object(u.jsx)("div",{className:"w-100 text-center mt-3",children:Object(u.jsx)(p.b,{to:"/login",children:"\u2190 Back to Login"})}),n&&Object(u.jsx)("p",{className:"my-3 form-text text-center text-danger",children:n}),Object(u.jsxs)("div",{id:"emailHelp",className:"text-center my-3",children:["Need an account? ",Object(u.jsx)(p.b,{to:"/signup",children:"Signup"})]})]})})}function T(){var e=Object(s.useRef)(),t=Object(s.useRef)(),r=Object(s.useRef)(),a=b(),n=a.currentUser,i=a.updateEmail,c=a.updatePassword,l=Object(s.useState)(""),d=Object(o.a)(l,2),h=d[0],m=d[1],j=Object(s.useState)(!1),y=Object(o.a)(j,2),x=y[0],g=y[1],O=Object(f.g)();return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:"container flex my-5 py-2 px-5 bg-light rounded shadow",style:{maxWidth:"400px",fontFamily:"Inter"},onSubmit:function(s){if(s.preventDefault(),t.current.value!==r.current.value)return m("Passwords do not match");var a=[];g(!0),m(""),e.current.value!==n.email&&a.push(i(n,e.current.value)),""!==t.current.value&&a.push(c(n,t.current.value)),Promise.all(a).then((function(){O.push("/dashboard")})).catch((function(e){m(e.message)})).finally((function(){g(!1)}))},children:[Object(u.jsx)("h1",{className:"text-center m-3",style:{fontWeight:700},children:"Update Profile"}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(u.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",ref:e,autoComplete:"username",required:!0,defaultValue:n.email})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",autoComplete:"new-password",ref:t,placeholder:"Leave blank to keep same"})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputPassword2",className:"form-label",children:"Confirm Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword2",autoComplete:"new-password",ref:r,placeholder:"Leave blank to keep same"})]}),Object(u.jsxs)("button",{disabled:x,type:"submit",className:"w-100 btn btn-primary",children:[x&&Object(u.jsx)("span",{className:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"}),"Update"]}),h&&Object(u.jsx)("p",{className:"my-3 form-text text-center text-danger",children:h}),Object(u.jsx)("div",{id:"emailHelp",className:"text-center my-3",children:Object(u.jsx)(p.b,{to:"/dashboard",children:"Cancel updation"})})]})})}function C(){return Object(u.jsxs)("div",{className:"container",style:{fontFamily:"Inter"},children:[Object(u.jsx)("h1",{className:"my-3",style:{fontWeight:700},children:"Privacy Policy"}),Object(u.jsx)("p",{children:'The terms "We" / "Us" / "Our"/\u201dCompany\u201d individually and collectively refer to digiFin and the terms "You" /"Your" / "Yourself" refer to the users.'}),Object(u.jsx)("p",{children:"This Privacy Policy is an electronic record in the form of an electronic contract formed under the information Technology Act, 2000 and the rules made thereunder and the amended provisions pertaining to electronic documents / records in various statutes as amended by the information Technology Act, 2000. This Privacy Policy does not require any physical, electronic or digital signature."}),Object(u.jsx)("p",{children:"This Privacy Policy is a legally binding document between you and digiFin (both terms defined below). The terms of this Privacy Policy will be effective upon your acceptance of the same (directly or indirectly in electronic form, by clicking on the I accept tab or by use of the website or by other means) and will govern the relationship between you and digiFin. for your use of the website \u201cWebsite\u201d (defined below)."}),Object(u.jsx)("p",{children:"This document is published and shall be construed in accordance with the provisions of the Information Technology (reasonable security practices and procedures and sensitive personal data of information) rules, 2011 under Information Technology Act, 2000; that require publishing of the Privacy Policy for collection, use, storage and transfer of sensitive personal data or information."}),Object(u.jsx)("p",{children:"Please read this Privacy Policy carefully by using the Website, you indicate that you understand, agree and consent to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use this Website."}),Object(u.jsx)("p",{children:"By providing us your Information or by making use of the facilities provided by the Website, You hereby consent to the collection, storage, processing and transfer of any or all of Your Personal Information and Non-Personal Information by us as specified under this Privacy Policy. You further agree that such collection, use, storage and transfer of Your Information shall not cause any loss or wrongful gain to you or any other person."}),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"USER INFORMATION"})}),Object(u.jsx)("p",{children:"To avail certain services on our Websites, users are required to provide certain information for the registration process namely: - a) your name, b) email address, c) sex, d) age, e) PIN code, f) credit card or debit card details g) medical records and history h) sexual orientation, i) biometric information, j) password etc., and / or your occupation, interests, and the like. The Information as supplied by the users enables us to improve our sites and provide you the most user-friendly experience."}),Object(u.jsx)("p",{children:"All required information is service dependent and we may use the above said user information to, maintain, protect, and improve its services (including advertising services) and for developing new services"}),Object(u.jsx)("p",{children:"Such information will not be considered as sensitive if it is freely available and accessible in the public domain or is furnished under the Right to Information Act, 2005 or any other law for the time being in force."}),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"COOKIES"})}),Object(u.jsx)("p",{children:'To improve the responsiveness of the sites for our users, we may use "cookies", or similar electronic tools to collect information to assign each visitor a unique, random number as a User Identification (User ID) to understand the user\'s individual interests using the Identified Computer. Unless you voluntarily identify yourself (through registration, for example), we will have no way of knowing who you are, even if we assign a cookie to your computer. The only personal information a cookie can contain is information you supply (an example of this is when you ask for our Personalised Horoscope). A cookie cannot read data off your hard drive. Our advertisers may also assign their own cookies to your browser (if you click on their ads), a process that we do not control.'}),Object(u.jsx)("p",{children:"Our web servers automatically collect limited information about your computer's connection to the Internet, including your IP address, when you visit our site. (Your IP address is a number that lets computers attached to the Internet know where to send you data -- such as the web pages you view.) Your IP address does not identify you personally. We use this information to deliver our web pages to you upon request, to tailor our site to the interests of our users, to measure traffic within our site and let advertisers know the geographic locations from where our visitors come."}),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"LINKS TO THE OTHER SITES"})}),Object(u.jsx)("p",{children:"Our policy discloses the privacy practices for our own web site only. Our site provides links to other websites also that are beyond our control. We shall in no way be responsible in way for your use of such sites."}),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"INFORMATION SHARING"})}),Object(u.jsx)("p",{children:"We shares the sensitive personal information to any third party without obtaining the prior consent of the user in the following limited circumstances:"}),Object(u.jsx)("p",{children:"(a) When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offences. These disclosures are made in good faith and belief that such disclosure is reasonably necessary for enforcing these Terms; for complying with the applicable laws and regulations."}),Object(u.jsx)("p",{children:"(b) We proposes to share such information within its group companies and officers and employees of such group companies for the purpose of processing personal information on its behalf. We also ensure that these recipients of such information agree to process such information based on our instructions and in compliance with this Privacy Policy and any other appropriate confidentiality and security measures."}),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"INFORMATION SECURITY"})}),Object(u.jsx)("p",{children:"We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store personal data."}),Object(u.jsx)("p",{children:"All information gathered on our Website is securely stored within our controlled database. The database is stored on servers secured behind a firewall; access to the servers is password-protected and is strictly limited. However, as effective as our security measures are, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. And, of course, any information you include in a posting to the discussion areas is available to anyone with Internet access."}),Object(u.jsx)("p",{children:"However the internet is an ever evolving medium. We may change our Privacy Policy from time to time to incorporate necessary future changes. Of course, our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be."})]})}function k(){return Object(u.jsxs)("div",{className:"container",style:{fontFamily:"Inter"},children:[Object(u.jsx)("h1",{className:"my-3",style:{fontWeight:700},children:"Terms & Conditions"}),Object(u.jsx)("p",{children:'The terms "We" / "Us" / "Our"/\u201dCompany\u201d individually and collectively refer to digiFin and the terms "Visitor\u201d \u201dUser\u201d refer to the users.'}),Object(u.jsx)("p",{children:"This page states the Terms and Conditions under which you (Visitor) may visit this website (\u201cWebsite\u201d). Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this site. The business, any of its business divisions and / or its subsidiaries, associate companies or subsidiaries to subsidiaries or such other investment companies (in India or abroad) reserve their respective rights to revise these Terms and Conditions at any time by updating this posting. You should visit this page periodically to re-appraise yourself of the Terms and Conditions, because they are binding on all users of this Website."}),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"USE OF CONTENT"})}),Object(u.jsx)("p",{children:"All logos, brands, marks headings, labels, names, signatures, numerals, shapes or any combinations thereof, appearing in this site, except as otherwise noted, are properties either owned, or used under licence, by the business and / or its associate entities who feature on this Website. The use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited."}),Object(u.jsx)("p",{children:"You may not sell or modify the content of this Website  or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the respective organisation\u2019s or entity\u2019s written permission."}),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"ACCEPTABLE WEBSITE USE"})}),Object(u.jsx)("p",{children:'(A) Security Rules Visitors are prohibited from violating or attempting to violate the security of the Web site, including, without limitation, (1) accessing data not intended for such user or logging into a server or account which the user is not authorised to access, (2) attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorisation, (3) attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus or "Trojan horse" to the Website, overloading, "flooding", "mail bombing" or "crashing", or (4) sending unsolicited electronic mail, including promotions and/or advertising of products or services. Violations of system or network security may result in civil or criminal liability. The business and / or its associate entities will have the right to investigate occurrences that they suspect as involving such violations and will have the right to involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.'}),Object(u.jsx)("p",{children:"(B) General Rules Visitors may not use the Web Site in order to transmit, distribute, store or destroy material (a) that could constitute or encourage conduct that would be considered a criminal offence or violate any applicable law or regulation, (b) in a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others or violate the privacy or publicity of other personal rights of others, or (c) that is libellous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful."}),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"INDEMNITY"})}),Object(u.jsx)("p",{children:"The User unilaterally agree to indemnify and hold harmless, without objection, the Company, its officers, directors, employees and agents from and against any claims, actions and/or demands and/or liabilities and/or losses and/or damages whatsoever arising from or resulting from their use of digi.ghostvaibhav.me or their breach of the terms ."}),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"LIABILITY"})}),Object(u.jsx)("p",{children:"User agrees that neither Company nor its group companies, directors, officers or employee shall be liable for any direct or/and indirect or/and incidental or/and special or/and consequential or/and exemplary damages, resulting from the use or/and the inability to use the service or/and for cost of procurement of substitute goods or/and services or resulting from any goods or/and data or/and information or/and services purchased or/and obtained or/and messages received or/and transactions entered into through or/and from the service or/and resulting from unauthorized access to or/and alteration of user's transmissions or/and data or/and arising from any other matter relating to the service, including but not limited to, damages for loss of profits or/and use or/and data or other intangible, even if Company has been advised of the possibility of such damages."}),Object(u.jsx)("p",{children:"User further agrees that Company shall not be liable for any damages arising from interruption, suspension or termination of service, including but not limited to direct or/and indirect or/and incidental or/and special consequential or/and exemplary damages, whether such interruption or/and suspension or/and termination was justified or not, negligent or intentional, inadvertent or advertent."}),Object(u.jsx)("p",{children:"User agrees that Company shall not be responsible or liable to user, or anyone, for the statements or conduct of any third party of the service. In sum, in no event shall Company's total liability to the User for all damages or/and losses or/and causes of action exceed the amount paid by the User to Company, if any, that is related to the cause of action."}),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"DISCLAIMER OF CONSEQUENTIAL DAMAGES"})}),Object(u.jsx)("p",{children:"In no event shall Company or any parties, organizations or entities associated with the corporate brand name us or otherwise, mentioned at this Website be liable for any damages whatsoever (including, without limitations, incidental and consequential damages, lost profits, or damage to computer hardware or loss of data information or business interruption) resulting from the use or inability to use the Website and the Website material, whether based on warranty, contract, tort, or any other legal theory, and whether or not, such organization or entities were advised of the possibility of such damages."})]})}function W(){return Object(u.jsxs)("div",{className:"container d-flex flex-column align-items-center",style:{fontFamily:"Inter"},children:[Object(u.jsx)("h1",{className:"my-3",style:{fontWeight:700},children:"Pricing"}),Object(u.jsxs)("div",{class:"card border-primary mt-3 text-center",style:{maxWidth:"18rem"},children:[Object(u.jsx)("div",{class:"card-header text-white bg-primary border-primary",children:"Free for everyone"}),Object(u.jsxs)("div",{class:"card-body text-dark",children:[Object(u.jsx)("h5",{class:"card-title",children:"\u20b90"}),Object(u.jsxs)("p",{class:"card-text",children:[Object(u.jsx)(p.b,{to:"/",children:"digiFin"})," is licensed under ",Object(u.jsx)("a",{href:"https://github.com/GhostVaibhav/digifin-web-frontend/blob/main/LICENSE",children:"MIT license"})," and is open to everyone."]})]}),Object(u.jsx)("div",{class:"card-footer bg-light border-primary",children:Object(u.jsx)(p.b,{to:"/signup",style:{textDecoration:"None"},children:"Get Started"})})]})]})}var F=function(){return Object(u.jsxs)(m,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(p.a,{children:Object(u.jsx)(m,{children:Object(u.jsxs)(f.d,{children:[Object(u.jsx)(P,{exact:!0,path:"/dashboard",component:v}),Object(u.jsx)(P,{exact:!0,path:"/update",component:T}),Object(u.jsx)(f.b,{exact:!0,path:"/login",component:O}),Object(u.jsx)(f.b,{exact:!0,path:"/signup",component:w}),Object(u.jsx)(f.b,{exact:!0,path:"/forgot-password",component:S}),Object(u.jsx)(f.b,{exact:!0,path:"/privacy",component:C}),Object(u.jsx)(f.b,{exact:!0,path:"/pricing",component:W}),Object(u.jsx)(f.b,{exact:!0,path:"/terms&conditions",component:k})]})})})]})},E=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,58)).then((function(t){var r=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root")),E()}},[[57,1,2]]]);
//# sourceMappingURL=main.5db23dc2.chunk.js.map