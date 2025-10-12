"use client";

import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { navItems } from "@/constants";
import { signOut, useSession } from "next-auth/react";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();
    if(session) console.log(session);

    return (
        <>
            <nav className="px-6 py-2 bg-cyan-100 hidden md:flex justify-between gap-4">
                <ul className="flex gap-4 justify-start items-center">
                    {
                        navItems.map((item) => (
                            <li key={item.id}><a href={item.url}>{item.name}</a></li>
                        ))
                    }
                </ul>
                {
                    session?.user ? <ul>
                        <li>{session.user.name}</li>
                        <li>
                            <button onClick={() => signOut({ redirect: true, callbackUrl: "/signin" })}>Logout</button>
                        </li>
                    </ul> : <ul>
                        <li><a href="/signin">Signin</a></li>
                    </ul>
                }
            </nav>

            {
                isOpen ? <div>
                    <button className="md:hidden" onClick={() => setIsOpen(false)}>
                        <AiOutlineClose size={30} />
                    </button>
                    <nav className="px-6 bg-cyan-100 py-2 mb-6 flex md:hidden">
                        <ul className="flex flex-col gap-1">
                            {
                                navItems.map((item) => (
                                    <li key={item.id}><a href={item.url}>{item.name}</a></li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
                    : <div className="md:hidden" onClick={() => setIsOpen(true)}>
                        <RiMenu3Line size={30} className="md:hidden" />
                    </div>
            }
        </>
    )
}