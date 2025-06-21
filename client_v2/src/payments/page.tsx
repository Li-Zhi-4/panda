// src/pages/DemoPage.tsx (or wherever you put it)
import { useEffect, useState } from "react";
import { columns, type Payment } from "./columns";
import { DataTable } from "./data-table";

// This can be an async function that returns a Promise<Payment[]>.
// You can replace it with a real API call (fetch/axios), of course.
async function getData(): Promise<Payment[]> {
  // Example: pretend we call an API
  // const res = await fetch("/api/payments");
  // return res.json();

  // For now, return a hardcoded list:
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "13a7b9c2",
      amount: 250,
      status: "success",
      email: "alice@example.com",
    },
    // …more rows…
  ];
}

export default function DemoPage() {
    const [data, setData] = useState<Payment[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch data on the client side
        getData()
        .then((result) => {
            setData(result);
            setLoading(false);
        })
        .catch((err: Error) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p className="p-4">Loading table…</p>;
    }

    if (error) {
        return <p className="p-4 text-red-500">Error loading data: {error}</p>;
    }

    if (!data || data.length === 0) {
        return <p className="p-4">No data available.</p>;
    }

    return (
        <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Demo Data Table</h1>
        <DataTable columns={columns} data={data} />
        </div>
    );
}
