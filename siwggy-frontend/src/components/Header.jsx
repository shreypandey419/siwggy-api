import React, { useState, useEffect } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { BiHelpCircle } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export default function SwiggyCloneHeaderOffers() {
  const [toggle, setToggle] = useState(false);
  const [query, setQuery] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [shining, setShining] = useState({ one: false, both: false });
  const [cards, setCards] = useState([]); // state to hold fetched images

  const showSideMenu = () => setToggle(true);
  const hideSideMenu = () => setToggle(false);

  const links = [
    { icon: <IoIosSearch />, name: "Search" },
    { icon: <CiDiscount1 />, name: "Offers", sup: "New" },
    { icon: <BiHelpCircle />, name: "Help" },
    { icon: <FaRegUser />, name: "Sign in" },
    { icon: <HiOutlineShoppingCart />, name: "Cart", sup: "(2)" }
  ];

  const offers = [
    { id: 1, title: "30% OFF", subtitle: "on your first order", color: "bg-amber-100" },
    { id: 2, title: "Free Delivery", subtitle: "above ₹199", color: "bg-emerald-100" },
    { id: 3, title: "Buy 1 Get 1", subtitle: "selected restaurants", color: "bg-pink-100" },
  ];

  // ✅ Fetch image data from your API
  useEffect(() => {
    fetch("https://swiggy-backend-api-w7ct.onrender.com/api/food")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      {/* Sidebar Overlay */}
      <div
        className='black-overlay w-full h-full fixed duration-500'
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? 'visible' : 'hidden',
          zIndex: 999999999999
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className='p-[250px] bg-white h-full absolute duration-[400ms]'
          style={{ left: toggle ? '0%' : '-100%' }}
        ></div>
      </div>

      {/* Header */}
      <header className='p-[15px] shadow-x1 text-[#3d4152] sticky top-0 bg-white z-[9999]'>
        <div className='max-w-[1200px] mx-auto flex items-center'>
          <div className='w-[100px]'>
            <img src="images/logo.png" className='w-full' alt="logo" />
          </div>
          <div className='ml-4 flex items-center'>
            <span className='font-bold border-b-[3px] border-[black] mr-2'>Ghaziabad</span>
            <span className='mr-2'>Charm Castle, Raj Nagar Extension</span>
            <RxCaretDown fontSize={25} className='inline text-[#ff5200] cursor-pointer' onClick={showSideMenu} />
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold'>
            {links.map((link, index) => (
              <li
                key={index}
                className='flex items-center gap-2 hover:text-[#fc8019] cursor-pointer transition-colors'
                onClick={() => {
                  if (link.name === "Help") setShowHelp((prev) => !prev);
                  if (link.name === "Sign in") setShowSignup(true);
                }}
              >
                {link.icon}
                {link.name}
                {link.sup && <sup className='text-[#ff5200]'>{link.sup}</sup>}
              </li>
            ))}
          </nav>
        </div>
      </header>

      {/* Search and Offers */}
      <div className="max-w-[1200px] mx-auto p-4">
        {/* Search Bar */}
        <div className="relative mt-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for restaurants or dishes"
            className="w-full border rounded-xl px-4 py-3 shadow focus:ring-2 focus:ring-orange-400"
          />
          <button
            onClick={() => alert(`Searching: ${query}`)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-lg"
          >
            Search
          </button>
        </div>

        {/* Offers Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Best Offers</h3>
          <div className="flex gap-4 overflow-x-auto">
            {offers.map((o) => (
              <div
                key={o.id}
                className={`min-w-[220px] p-4 rounded-2xl shadow ${o.color} transition-transform hover:scale-105`}
              >
                <div className="text-xl font-bold">{o.title}</div>
                <div className="text-sm text-gray-600">{o.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl shadow p-4 flex gap-4 items-center hover:shadow-lg transition-all">
              <div className="w-28 h-20 bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={`http://localhost:5001/images/${c.image}`}
                  alt={c.name}
                  className="object-cover w-full h-full group-hover:scale-110 duration-150"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold">{c.name}</h4>
                  <div className="text-sm text-gray-500">{c.price}</div>
                </div>
                <div className="text-sm text-gray-600">{c.desc}</div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs bg-indigo-50 px-2 py-1 rounded-full">{c.badge}</span>
                  <button
                    onClick={() => alert(`${c.extra} added to ${c.name}`)}
                    className="ml-auto text-sm border rounded-lg px-3 py-1 hover:bg-orange-100"
                  >
                    + {c.extra}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      {showHelp && (
        <div
          className="max-w-[1200px] mx-auto mt-4 bg-white rounded-xl shadow p-4 animate-fadeIn"
        >
          <h4 className="font-semibold mb-2">Quick Help</h4>
          <ul className="text-sm text-gray-700 list-disc ml-4">
            <li>Track orders easily</li>
            <li>Use filters to find nearby or veg restaurants</li>
            <li>Tap offers to apply coupons</li>
          </ul>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">Sign Up – Shining One</h3>
              <button className="text-gray-400 hover:text-black" onClick={() => setShowSignup(false)}>✕</button>
            </div>
            <div className="mt-3">
              <input
                placeholder="Email"
                className="w-full border rounded-md px-3 py-2 mb-3"
              />
              <label className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={shining.one}
                  onChange={(e) => setShining({ ...shining, one: e.target.checked })}
                />
                Shining One
              </label>
              <label className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  checked={shining.both}
                  onChange={(e) => setShining({ ...shining, both: e.target.checked })}
                />
                Both Shining
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowSignup(false);
                    alert(`Signed up. One: ${shining.one}, Both: ${shining.both}`);
                  }}
                  className="flex-1 bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700"
                >
                  Create Account
                </button>
                <button
                  className="flex-1 border rounded-lg py-2 hover:bg-gray-100"
                  onClick={() => alert('Continue as guest')}
                >
                  Continue as guest
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
