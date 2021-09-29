import React, { useCallback, useContext, useEffect, useState } from 'react';
import logo from '../assets/Logo.svg';
import menu from '../assets/menu.svg';
import { UserContext } from '../context/UserContext';
import { supabase } from '../server/supabase';

const NavBar = () => {
  const {
    state: { user },
    logout,
  } = useContext(UserContext);
  const [name, setName] = useState('Aisha Doe');
  const [showMenu, setShowMenu] = useState(false);
  const [toggleAction, setToggleAction] = useState(true);

  const nav_links = [
    { name: 'Products', link: '/dashboard/products/' },
    { name: 'Orders', link: '/dashboard/products/' },
    { name: 'Buyers', link: '/dashboard/products/' },
    { name: 'Settings', link: '/dashboard/products/' },
  ];

  const signout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  const getUserProfile = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('name')
        .eq('id', user.id)
        .single();
      if (error) throw error;

      if (data.name) setName(data.name);
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  useEffect(() => {
    getUserProfile();
  }, [getUserProfile]);

  return (
    <>
      <nav className="flex justify-between items-center rounded-lg bg-lightGray h-16 px-4">
        <div className="flex md:hidden">
          <img src={menu} alt="menu" onClick={() => setShowMenu(!showMenu)} />
        </div>
        <img src={logo} alt="Logo" className="hidden md:block" />
        <div className="md:flex space-x-8 hidden">
          {nav_links.map((link) => (
            <div
              key={link.name}
              className={`text-sm font-medium cursor-pointer ${
                link.name === 'Products' ? 'text-lightBlue' : ''
              } `}
            >
              {link.name}
            </div>
          ))}
        </div>
        <div
          onClick={() => setToggleAction(!toggleAction)}
          className="flex cursor-pointer items-center justify-around bg-white py-1 px-2 rounded-l-full rounded-r-full border border-midGray space-x-2"
        >
          <div className="rounded-full w-6 h-6 bg-lightOrange text-black flex justify-center items-center text-sm">
            {name[0]}
          </div>
          {toggleAction ? (
            <div className="text-sm text-black font-semibold">{name}</div>
          ) : (
            <div className="text-xs text-black" onClick={signout}>
              Signout? <span className="text-green-500 underline">YES</span>
            </div>
          )}
        </div>
      </nav>
      {showMenu && (
        <nav className="absolute md:hidden bg-lightGray space-y-4 p-8">
          {nav_links.map((link) => (
            <div
              key={link.name}
              className={`text-sm font-medium cursor-pointer ${
                link.name === 'Products' ? 'text-lightBlue' : ''
              } `}
            >
              {link.name}
            </div>
          ))}
        </nav>
      )}
    </>
  );
};

export default NavBar;
