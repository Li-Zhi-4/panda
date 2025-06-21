import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingDown, TrendingUp } from "lucide-react"

export function InfoCard() {

    return (
        <Card className="">
            <CardHeader>
                <CardDescription className="flex justify-between">
                    <span>Total Word Count</span>
                    <Badge variant="outline">
                        <TrendingUp />
                        <span>Badge</span>
                    </Badge>
                </CardDescription>
                <CardTitle className="text-3xl">1,250.00</CardTitle>
            </CardHeader>

            <CardFooter className="flex flex-col items-start">
                <div className="flex flex-row gap-2 items-center">
                    <span>Up 20% this period</span>
                    <TrendingUp className="h-4 w-4"/>
                </div>
                <CardDescription>
                    <span>Writing exceeds word count goals</span>
                </CardDescription>
            </CardFooter>
        </Card>

    )
}