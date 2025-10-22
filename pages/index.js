import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faChevronDown, faQuestionCircle, faShoppingCart, faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
const [accountDropdown, setAccountDropdown] = useState(false)
const [helpDropdown, setHelpDropdown] = useState(false)
const [mobileMenu, setMobileMenu] = useState(false)
return (
<div className="font-sans">
<header className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-4">
<div className="hidden md:flex items-center justify-between py-4">
<a href="/">
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1760977432/llxnbmi0whu8tnid5jdu.png" alt="Jumia" className="h-8"/>
</a>
<div className="flex-1 max-w-2xl mx-4 relative">
<input type="text" placeholder="Search products, brands and categories" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"/>
<button className="absolute right-0 top-0 h-full px-6 bg-accent text-white rounded-r-lg">
<FontAwesomeIcon icon={faSearch}/>
</button>
</div>
<div className="flex items-center space-x-6">
<div className="relative">
<button 
className={`flex items-center space-x-1 px-3 py-2 rounded ${accountDropdown ? 'bg-[#dcd6d2]' : ''}`}
onClick={() => setAccountDropdown(!accountDropdown)}
onMouseEnter={() => setAccountDropdown(true)}
onMouseLeave={() => setAccountDropdown(false)}
>
<FontAwesomeIcon icon={faUser} className={accountDropdown ? 'text-accent' : ''}/>
<span className={accountDropdown ? 'text-accent' : ''}>Account</span>
<FontAwesomeIcon icon={faChevronDown} className={`text-xs ${accountDropdown ? 'text-accent' : ''}`}/>
</button>
{accountDropdown && (
<div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
<button className="w-full text-left px-4 py-2 bg-accent text-white font-semibold">SIGN IN</button>
<div className="py-2">
<a href="#" className="block px-4 py-2 hover:bg-gray-100">
<div className="flex items-center space-x-2">
<FontAwesomeIcon icon={faUser}/>
<span>My Account</span>
</div>
</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100">
<div className="flex items-center space-x-2">
<FontAwesomeIcon icon={faShoppingCart}/>
<span>Orders</span>
</div>
</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100">
<div className="flex items-center space-x-2">
<FontAwesomeIcon icon={faUser}/>
<span>Wishlist</span>
</div>
</a>
</div>
</div>
)}
</div>
<div className="relative">
<button 
className={`flex items-center space-x-1 px-3 py-2 rounded ${helpDropdown ? 'bg-[#dcd6d2]' : ''}`}
onClick={() => setHelpDropdown(!helpDropdown)}
onMouseEnter={() => setHelpDropdown(true)}
onMouseLeave={() => setHelpDropdown(false)}
>
<FontAwesomeIcon icon={faQuestionCircle} className={helpDropdown ? 'text-accent' : ''}/>
<span className={helpDropdown ? 'text-accent' : ''}>Help</span>
<FontAwesomeIcon icon={faChevronDown} className={`text-xs ${helpDropdown ? 'text-accent' : ''}`}/>
</button>
{helpDropdown && (
<div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
<a href="#" className="block px-4 py-2 hover:bg-gray-100">Help Center</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100">Place an Order</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100">Payment Options</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100">Track an Order</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100">Cancel an Order</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100">Returns & Refunds</a>
<button className="w-full text-left px-4 py-2 bg-accent text-white font-semibold mt-2">LIVE CHAT</button>
</div>
)}
</div>
<a href="#" className="flex items-center space-x-1 hover:text-accent">
<FontAwesomeIcon icon={faShoppingCart}/>
<span>Cart</span>
</a>
</div>
</div>
<div className="flex md:hidden items-center justify-between py-4">
<button onClick={() => setMobileMenu(!mobileMenu)}>
<FontAwesomeIcon icon={faBars} className="text-xl"/>
</button>
<a href="/">
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1760977432/llxnbmi0whu8tnid5jdu.png" alt="Jumia" className="h-6"/>
</a>
<div className="flex items-center space-x-4">
<a href="#">
<FontAwesomeIcon icon={faUser}/>
</a>
<a href="#">
<FontAwesomeIcon icon={faShoppingCart}/>
</a>
</div>
</div>
</div>
</header>
<main className="min-h-screen bg-gray-50">
</main>
<footer className="text-white">
<div className="bg-[#313133] hidden md:block">
<div className="max-w-7xl mx-auto px-4 py-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<a href="/">
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1760977432/llxnbmi0whu8tnid5jdu.png" alt="Jumia" className="h-8 filter brightness-0 invert"/>
</a>
</div>
<div>
<h3 className="font-semibold mb-2">New to Jumia?</h3>
<p className="text-sm mb-4">Subscribe to our newsletter to get updates on our latest offers!</p>
<div className="flex mb-2">
<input type="email" placeholder="Enter email address" className="flex-1 px-3 py-2 text-black rounded-l focus:outline-none"/>
<button className="bg-accent px-4 py-2 rounded-r">Subscribe</button>
</div>
<div className="flex items-center space-x-2">
<input type="checkbox" id="consent"/>
<label htmlFor="consent" className="text-xs">I agree to receive promotional emails</label>
</div>
</div>
<div className="flex items-start space-x-4">
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1761138183/bhh2b8rh02uojrwab2db.png" alt="Jumia Star" className="h-12"/>
<div>
<h3 className="font-semibold">DOWNLOAD JUMIA FREE APP</h3>
<p className="text-sm">Get access to exclusive offers!</p>
<div className="flex space-x-2 mt-2">
<button className="bg-black px-3 py-1 rounded flex items-center space-x-1">
<span>Download on the</span>
<span>App Store</span>
</button>
<button className="bg-black px-3 py-1 rounded flex items-center space-x-1">
<span>GET IT ON</span>
<span>Google Play</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="bg-[#535357] hidden md:block">
<div className="max-w-7xl mx-auto px-4 py-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="font-semibold mb-4">Need Help?</h4>
<ul className="space-y-2 text-sm">
<li><a href="#" className="hover:underline">Chat with us</a></li>
<li><a href="#" className="hover:underline">Help Center</a></li>
<li><a href="#" className="hover:underline">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Useful Links</h4>
<ul className="space-y-2 text-sm">
<li><a href="#" className="hover:underline">Service Center</a></li>
<li><a href="#" className="hover:underline">How to shop on Jumia?</a></li>
<li><a href="#" className="hover:underline">Delivery options and timelines</a></li>
<li><a href="#" className="hover:underline">How to return a product on Jumia?</a></li>
<li><a href="#" className="hover:underline">Corporate and bulk purchases</a></li>
<li><a href="#" className="hover:underline">Report a Product</a></li>
<li><a href="#" className="hover:underline">Dispute Resolution Policy</a></li>
<li><a href="#" className="hover:underline">Returns & Refund Timeline</a></li>
<li><a href="#" className="hover:underline">Return Policy</a></li>
<li><a href="#" className="hover:underline">Pickup Stations</a></li>
<li><a href="#" className="hover:underline">Jumia Delivery</a></li>
</ul>
</div>
</div>
<div>
<h4 className="font-semibold mb-4">ABOUT JUMIA</h4>
<ul className="space-y-2 text-sm">
<li><a href="#" className="hover:underline">About us</a></li>
<li><a href="#" className="hover:underline">Jumia careers</a></li>
<li><a href="#" className="hover:underline">Corporate Website</a></li>
<li><a href="#" className="hover:underline">Terms and Conditions</a></li>
<li><a href="#" className="hover:underline">Privacy Notice</a></li>
<li><a href="#" className="hover:underline">Jumia Store Credit Terms & Conditions</a></li>
<li><a href="#" className="hover:underline">Jumia Payment Information Guidelines</a></li>
<li><a href="#" className="hover:underline">Cookie Notice</a></li>
<li><a href="#" className="hover:underline">Official Stores</a></li>
<li><a href="#" className="hover:underline">Flash Sales</a></li>
<li><a href="#" className="hover:underline">Black Friday</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">MAKE MONEY WITH JUMIA</h4>
<ul className="space-y-2 text-sm">
<li><a href="#" className="hover:underline">Sell on Jumia</a></li>
<li><a href="#" className="hover:underline">Vendor hub</a></li>
<li><a href="#" className="hover:underline">Become a Sales Consultant</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">JUMIA INTERNATIONAL</h4>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2 text-sm">
<a href="#" className="block hover:underline">Algeria</a>
<a href="#" className="block hover:underline">Egypt</a>
<a href="#" className="block hover:underline">Ghana</a>
<a href="#" className="block hover:underline">Ivory Coast</a>
</div>
<div className="space-y-2 text-sm">
<a href="#" className="block hover:underline">Kenya</a>
<a href="#" className="block hover:underline">Morocco</a>
<a href="#" className="block hover:underline">Senegal</a>
<a href="#" className="block hover:underline">Uganda</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="md:hidden">
<div className="bg-[#535357] py-4 text-center">
<button className="uppercase flex items-center justify-center space-x-2 w-full">
<FontAwesomeIcon icon={faArrowUp}/>
<span>BACK TO TOP</span>
</button>
</div>
<div className="bg-[#313133] py-6">
<div className="text-center space-y-4 text-sm uppercase">
<a href="#" className="block">CHAT WITH US</a>
<a href="#" className="block">HELP CENTER</a>
<a href="#" className="block">CONTACT US</a>
<a href="#" className="block">TERMS & CONDITIONS</a>
<a href="#" className="block">PRIVACY NOTICE</a>
<a href="#" className="block">COOKIE NOTICE</a>
<a href="#" className="block">BECOME A SELLER</a>
<a href="#" className="block">REPORT A PRODUCT</a>
<a href="#" className="block">BLACK FRIDAY</a>
<a href="#" className="block">DISPUTE RESOLUTION POLICY</a>
<a href="#" className="block">RETURNS & REFUND TIMELINE</a>
<a href="#" className="block">RETURN POLICY</a>
<div className="border-t border-gray-600 my-4"></div>
<p className="text-xs">All Rights Reserved</p>
</div>
</div>
</div>
</footer>
</div>
)
}
