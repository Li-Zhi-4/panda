import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export function AppCard({ children }: { children: React.ReactNode }) {

    return (
        <Card className="flex flex-col gap-0 py-0">
            <CardHeader className="flex flex-row items-center py-2">
                <SidebarTrigger />
                <div className="self-stretch px-2 py-2">
                    <Separator orientation="vertical" />
                </div>
                <CardTitle>Dashboard</CardTitle>
            </CardHeader>

            <Separator orientation="horizontal" />

            {/* Cards Section */}
            <CardContent className="grid grid-rows-2 grid-cols-2 gap-4 py-6">
                {children}
            </CardContent>

            <CardFooter>
            </CardFooter>
        </Card>

    )
}