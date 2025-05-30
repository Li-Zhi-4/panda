import { LayoutDashboard, List, ChartNoAxesColumnIncreasing, Folder, Users, CirclePlus } from "lucide-react"
import { Database, ClipboardList, File, Ellipsis } from "lucide-react"
import { Calendar, Home, Inbox, Settings, CircleHelp, Search, Share, Mail } from "lucide-react"
import logo from '/src/assets/logo.svg'

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuAction,
} from "@/components/ui/sidebar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Create items
const createItems = [
    {
        title: "Quick Create",
        url: "#",
        icon: CirclePlus
    },
]

// Menu items
const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboard,
    },
    {
        title: "Lifecycle",
        url: "#",
        icon: List,
    },
    {
        title: "Analytics",
        url: "#",
        icon: ChartNoAxesColumnIncreasing,
    },
    {
        title: "Projects",
        url: "#",
        icon: Folder,
    },
    {
        title: "Team",
        url: "#",
        icon: Users,
    },
]

// Documents items
const documentItems = [
    {
        title: "Data Library",
        url: "#",
        icon: Database
    },
    {
        title: "Reports",
        url: "#",
        icon: ClipboardList
    },
    {
        title: "Word Assistant",
        url: "#",
        icon: File
    },
]

// More items
const moreItems = [
    {
        title: "More",
        url: "#",
        icon: Ellipsis
    },
]

// Footer items
const footerItems = [
    {
        title: "Settings",
        url: "#",
        icon: Settings
    },
    {
        title: "Get Help",
        url: "#",
        icon: CircleHelp
    },
    {
        title: "Search",
        url: "#",
        icon: Search
    },
]

export function AppSidebar() {
    return (
        <Sidebar variant="inset">
            <SidebarHeader>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem key='logo'>
                            <SidebarMenuButton asChild>
                                <a href="">
                                    <img src={logo} alt="" className="w-8 h-8"/>
                                    <span className="text-base font-semi-bold font-[Montserrat]">Panda Inc.</span>
                                </a>
                            </ SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarHeader>

            <SidebarContent>
                {/* Items Menu - general */}
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem key={createItems[0].title} className="flex flex-row gap-2 items-center">
                                <SidebarMenuButton asChild className="flex w-full bg-gray-900 text-gray-100 hover:bg-gray-800 hover:text-gray-100">
                                    <a href={createItems[0].url}>
                                        <CirclePlus />
                                        <span>{createItems[0].title}</span>
                                    </a>
                                </SidebarMenuButton>
                                <SidebarMenuButton asChild variant='outline' className="flex-none justify-center w-[36px] h-[36px] rounded-md border border-gray-200">
                                    <a href={createItems[0].url}>
                                        <Mail />
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Documents Menu */}
                <SidebarGroup>
                    <SidebarGroupLabel>Documents</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {documentItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <SidebarMenuAction showOnHover={true}>
                                                <Ellipsis />
                                            </SidebarMenuAction>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent side="right" align="start">
                                            <DropdownMenuItem>
                                                <File />
                                                <span>Open</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Share />
                                                <span>Share</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </SidebarMenuItem>
                            ))}

                            {/* More items */}
                            <SidebarMenuItem key={moreItems[0].title}>
                                <SidebarMenuButton asChild>
                                    <a href={moreItems[0].url}>
                                        <Ellipsis />
                                        <span>{moreItems[0].title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Footer Menu */}
                <SidebarGroup className="h-full justify-end">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {footerItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenuItem>
                    <SidebarMenuButton className="flex flex-row items-center justify-between">
                        <div className="flex flex-row gap-2 items-center">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="font-medium">shadcn</span>
                                <span className="text-xs">m@example.com</span>
                            </div>
                        </div>
                        <Ellipsis />
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarFooter>
        </Sidebar>
    )
}