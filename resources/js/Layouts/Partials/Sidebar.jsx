import { Link } from "@inertiajs/react";
import {
    PiHouse,
    PiLockKeyOpen,
    PiPlus,
    PiSidebar,
    PiSquaresFour,
    PiUser,
    PiX,
} from "react-icons/pi";
import { Avatar, AvatarFallback } from '@/resources/js/components/ui/avatar';

export default function Sidebar() {
    return (
        <nav className="flex flex-col flex-1">
            <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-2">
                        {/* menu */}
                        <li>
                            <Link
                                href="#"
                                className="flex p-3 text-sm font-semibold leading-relaxed tracking-tighter rounded-md text-foreground hover:bg-gray-100 group gap-x-3"
                            >
                                <PiHouse className="w-6 h-6 text-foreground shrink-0" />
                                Dashboard
                            </Link>
                            <Link
                                href="#"
                                className="flex p-3 text-sm font-semibold leading-relaxed tracking-tighter rounded-md text-foreground hover:bg-gray-100 group gap-x-3"
                            >
                                <PiUser className="w-6 h-6 text-foreground shrink-0" />
                                People
                            </Link>
                            <Link
                                href="#"
                                className="flex p-3 text-sm font-semibold leading-relaxed tracking-tighter rounded-md text-foreground hover:bg-gray-100 group gap-x-3"
                            >
                                <PiSquaresFour className="w-6 h-6 text-foreground shrink-0" />
                                My Task
                            </Link>
                            <Link
                                href="#"
                                className="flex p-3 text-sm font-semibold leading-relaxed tracking-tighter rounded-md text-foreground hover:bg-gray-100 group gap-x-3"
                            >
                                <PiLockKeyOpen className="w-6 h-6 text-foreground shrink-0" />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    {/* workspaces */}
                    <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold leading-relaxed uppercase text-foreground">
                            Workspaces
                        </div>
                        <Link>
                            <PiPlus className="w-4 h-4 text-foreground hover:text-red-500" />
                        </Link>
                    </div>
                    <ul role="list" className="mt-2 -mx-2 space-y-2">
                        <li>
                            <Link
                                href="#"
                                className="flex w-full p-3 text-sm font-semibold leading-relaxed rounded-md text-foreground hover:bg-gray-100 group gap-x-3"
                            >
                                <span className="border-foreground text-foreground flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium">
                                    B
                                </span>
                                <span className="truncate">
                                    Backend Developer
                                </span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="mt-auto -mx-6">
                    {/* profile */}
                    <Link
                        href="#"
                        className="flex items-center px-6 py-3 text-sm font-semibold leading-relaxed gap-x-4 text-foreground hover:bg-gray-100"
                    >
                        <Avatar>
                            <AvatarFallback className="uppercase">
                                A
                            </AvatarFallback>
                        </Avatar>
                        <span>Aidil Baihaqi</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
