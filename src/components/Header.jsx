import React, { useState } from 'react'
import Logo from './../assets/Images/logo.png';
import { Menu } from '../utils/utilities';
import { IoChevronDownOutline, IoSearch } from 'react-icons/io5';

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const [navName, setNavName] = useState("Home")
    const [menu, setMenu] = useState(Menu);

    const setActive = (index) => {
        const updateStatus = [...Menu]
        for(let i = 0; i < menu.length; i++)
        {
            if(i==index)
            {
                setNavName(updateStatus[i].name);
                updateStatus[i].active = true;
            }
            else
            {
                updateStatus[i].active = false;
            }
        }
        setMenu(updateStatus);
    }


  return (
    <div className='flex justify-between items-center p-4 px-5 md:px-10 absolute w-full bg-gradient-to-b from-[#1e2126] to-transparent z-10'>
        <img src={Logo} alt="Logo" className='w-[65px]'/>
        <ul className='hidden md:flex gap-8'>
            { menu.map((item, index) => (
                <li onClick={() => setActive(index)} key={index} className={`text-gray-400 text-[18px] font-medium cursor-pointer ${item.active && 'bg-gray-700 text-white'} hover:bg-gray-700 hover:text-white px-3 pb-2 py-1 rounded-md transition-all duration-300 ease-in-out`}>{item.name}</li>
            )) }
        </ul>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <h2 className='text-white font-medium flex items-center gap-2 px-3 py-2 pb-2 
            bg-gray-700 rounded-md cursor-pointer'>{navName}
                    <IoChevronDownOutline className={`${toggle? 'rotate-180' : 'rotate-0'} transition-all duration-500 ease-in-out`}/>
            </h2>
            { toggle &&
                <ul className='absolute bg-gray-700 w-[200px] text-center mt-3 m-auto left-0 right-0 rounded-md p-3'>
                    { menu.map((item, index) => (
                        <li onClick={() => setActive(index)} key={index} className={`text-gray-400 text-[18px] font-medium cursor-pointer hover:bg-gray-600 hover:text-white mb-3 px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out`}>{item.name}</li>
                    )) }
                </ul>
            }


            {/* <select className='text-[18px] font-medium cursor-pointer bg-gray-700 text-white px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out' name="Menu" id="Menu">
                { Menu.map((item) => (
                    <option value="volvo">{item.name}</option>
                )) }
            </select> */}


        </div>
        <div className='flex gap-2 md:gap-10'>
            <IoSearch className='text-gray-300 text-[35px] hover:bg-gray-700 pb-[2px] py-[2px] rounded-md hover:text-white transition-all duration-500 ease-in-out cursor-pointer' />
            <h2 className=' font-bold px-[10px] text-[20px] text-gray-300 border-[2px] border-white rounded-full hover:bg-gray-700 hover:text-white transition-all duration-500 ease-in-out cursor-pointer'>A</h2>
        </div>
    </div>
  )
}

export default Header