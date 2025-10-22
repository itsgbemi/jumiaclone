import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faChevronDown, faQuestionCircle, faShoppingCart, faBars, faArrowUp, faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

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
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1760977432/llxnbmi0whu8tnid5jdu.png" alt="Jumia" className="h-12"/>
</a>
<div className="flex-1 max-w-2xl mx-4 relative">
<input type="text" placeholder="Search products, brands and categories" className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-accent"/>
<button className="absolute right-0 top-0 h-full px-6 bg-accent text-white rounded-r-lg">
Search
</button>
</div>
<div className="flex items-center space-x-6">
<div className="relative">
<button 
className={`flex items-center space-x-2 px-3 py-2 rounded ${accountDropdown ? 'bg-[#dcd6d2]' : ''}`}
onClick={() => setAccountDropdown(!accountDropdown)}
onMouseEnter={() => setAccountDropdown(true)}
onMouseLeave={() => setAccountDropdown(false)}
>
<FontAwesomeIcon icon={faUser} className={accountDropdown ? 'text-accent' : ''}/>
<span className={accountDropdown ? 'text-accent' : ''}>Account</span>
<FontAwesomeIcon icon={faChevronDown} className={`text-xs ${accountDropdown ? 'text-accent' : ''}`}/>
</button>
{accountDropdown && (
<div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-3 z-50">
<button className="w-full text-center px-4 py-2 bg-accent text-white font-normal text-sm shadow-md mx-2 mb-2 rounded">SIGN IN</button>
<div className="py-1">
<a href="#" className="block px-4 py-2 hover:bg-gray-100">
<div className="flex items-center space-x-3">
<FontAwesomeIcon icon={faUser} className="text-sm"/>
<span className="text-sm font-normal">My Account</span>
</div>
</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100">
<div className="flex items-center space-x-3">
<FontAwesomeIcon icon={faShoppingCart} className="text-sm"/>
<span className="text-sm font-normal">Orders</span>
</div>
</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100">
<div className="flex items-center space-x-3">
<FontAwesomeIcon icon={faHeart} className="text-sm"/>
<span className="text-sm font-normal">Wishlist</span>
</div>
</a>
</div>
</div>
)}
</div>
<div className="relative">
<button 
className={`flex items-center space-x-2 px-3 py-2 rounded ${helpDropdown ? 'bg-[#dcd6d2]' : ''}`}
onClick={() => setHelpDropdown(!helpDropdown)}
onMouseEnter={() => setHelpDropdown(true)}
onMouseLeave={() => setHelpDropdown(false)}
>
<FontAwesomeIcon icon={faQuestionCircle} className={helpDropdown ? 'text-accent' : ''}/>
<span className={helpDropdown ? 'text-accent' : ''}>Help</span>
<FontAwesomeIcon icon={faChevronDown} className={`text-xs ${helpDropdown ? 'text-accent' : ''}`}/>
</button>
{helpDropdown && (
<div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-3 z-50">
<a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm font-normal">Help Center</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm font-normal">Place an Order</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm font-normal">Payment Options</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm font-normal">Track an Order</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm font-normal">Cancel an Order</a>
<a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm font-normal">Returns & Refunds</a>
<button className="w-full text-center px-4 py-2 bg-accent text-white font-normal text-sm shadow-md mx-2 mt-2 rounded flex items-center justify-center space-x-2">
<FontAwesomeIcon icon={faComment}/>
<span>LIVE CHAT</span>
</button>
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
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1760977432/llxnbmi0whu8tnid5jdu.png" alt="Jumia" className="h-10"/>
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
{mobileMenu && (
<div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 md:hidden">
<div className="p-4 space-y-4">
<a href="#" className="flex items-center space-x-3 py-2">
<FontAwesomeIcon icon={faShoppingCart}/>
<span>Orders</span>
</a>
<a href="#" className="flex items-center space-x-3 py-2">
<FontAwesomeIcon icon={faComment}/>
<span>Inbox</span>
</a>
<a href="#" className="flex items-center space-x-3 py-2">
<FontAwesomeIcon icon={faQuestionCircle}/>
<span>Pending Reviews</span>
</a>
<a href="#" className="flex items-center space-x-3 py-2">
<FontAwesomeIcon icon={faUser}/>
<span>Voucher</span>
</a>
<a href="#" className="flex items-center space-x-3 py-2">
<FontAwesomeIcon icon={faHeart}/>
<span>Wishlist</span>
</a>
</div>
</div>
)}
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
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1760977432/llxnbmi0whu8tnid5jdu.png" alt="Jumia" className="h-12 filter brightness-0 invert"/>
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
<div className="text-center text-xs grid grid-cols-3 gap-2 px-4">
<a href="#" className="block py-1">CHAT WITH US</a>
<a href="#" className="block py-1">HELP CENTER</a>
<a href="#" className="block py-1">CONTACT US</a>
<a href="#" className="block py-1">TERMS & CONDITIONS</a>
<a href="#" className="block py-1">PRIVACY NOTICE</a>
<a href="#" className="block py-1">COOKIE NOTICE</a>
<a href="#" className="block py-1">BECOME A SELLER</a>
<a href="#" className="block py-1">REPORT A PRODUCT</a>
<a href="#" className="block py-1">BLACK FRIDAY</a>
<a href="#" className="block py-1">DISPUTE RESOLUTION POLICY</a>
<a href="#" className="block py-1">RETURNS & REFUND TIMELINE</a>
<a href="#" className="block py-1">RETURN POLICY</a>
<div className="col-span-3 border-t border-gray-600 my-2"></div>
<p className="col-span-3">All Rights Reserved</p>
</div>
</div>
</div>
</footer>
</div>
)
}
