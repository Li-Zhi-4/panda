import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppCard } from "@/components/app-card"
import { InfoCard } from "@/components/info-card"


export default function DashboardLayoutV1() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full h-full p-2">
                <AppCard >
                    <InfoCard />
                    <InfoCard />
                    <InfoCard />
                    <InfoCard />
                </ AppCard>
            </main>
        </SidebarProvider>
    )
}