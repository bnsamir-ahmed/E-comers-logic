"use client"
import Image from "next/image";
import Link from "next/link";
import profilePic from '@/app/assets/logo.jpg';
import Class from './nav.module.css';
import { Fragment, useState } from "react";
import Select from "@/app/svg/Select";
import User from "@/app/svg/User";
import Fav from "@/app/svg/Fav";
import Delete from "@/app/svg/Delete";

const Navbar = () =>{
  const [open , setOpen] = useState(false);
  const [values, setValues] = useState([
    { id: 1, name: "cloths" },
    { id: 2, name: "chocolate" },
    { id: 3, name: "drinks" },
  ]);
  const [item , setItem] = useState('all')
  const handleValue = (e)=>{
    // setItem((e)=>)
  }
    return (
      <>
        <header className="fixed z-50 w-full bg-white">
          <nav className="container w-5/6 m-auto">
            <div className="flex items-center justify-between ">
              <div className="flex items-center justify-between logo">
                <Link href="/category">
                  <Image
                    src={profilePic}
                    alt="Picture of the author"
                    width={100}
                  />
                </Link>
                <div className="relative flex items-center p-2 bg-gray rounded-xl ">
                  <div className="flex justify-between w-28 dropdown ">
                    <span className="capitalize">{item}</span>
                    <span onClick={(e) => setOpen(!open)}>
                      <Select />
                    </span>
                  </div>
                  <div
                    className={
                      open
                        ? `${Class.select_dropdown} ${Class.open}`
                        : `${Class.select_dropdown} `
                    }
                  >
                    {values.map((value) => {
                      return (
                        <Fragment key={value.id}>
                          <span
                            className={`${Class.item_dropdown} p-2 capitalize black `}
                            onClick={(e) => setItem(value.name)}
                          >
                            {value.name}
                          </span>
                        </Fragment>
                      );
                    })}
                  </div>
                  <input type="text" placeholder="search" className="bg-gray" />
                </div>
              </div>
              <div className="flex items-center">
                <Link
                  href="/category"
                  className="mx-4 text-xl font-bold capitalize black"
                >
                  home
                </Link>
                <Link
                  href="/category"
                  className="mx-4 text-xl font-bold capitalize black"
                >
                  pages
                </Link>
              </div>
              <div className="flex items-center">
                <Link href="/category">
                  <User />
                </Link>
                <Link href="/category">
                  <Fav />
                </Link>
                <Link href="/category">
                  <Delete />
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
}
export default Navbar;