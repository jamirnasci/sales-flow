import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";

export default function DashboardSection() {
    const lineData = [
        { name: "Jan", value: 30 },
        { name: "Fev", value: 45 },
        { name: "Mar", value: 20 },
        { name: "Abr", value: 60 },
    ];
    const barData = [
        { name: "Jan", value: 30 },
        { name: "Fev", value: 45 },
        { name: "Mar", value: 20 },
        { name: "Abr", value: 60 },
    ];

    return (
        <section className="flex flex-col min-w-[70%]">
            <h2 className="text-[2em] font-bold">Dashboard</h2>
            <div className="flex items-center">
                {/* LINE */}
                <div className="w-full max-w-[600px] h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={lineData}>
                            <CartesianGrid />
                            <Line dataKey="value" stroke="#8884d8" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Legend />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* BAR */}
                <div className="w-full max-w-[600px] h-[300px] mt-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
}
