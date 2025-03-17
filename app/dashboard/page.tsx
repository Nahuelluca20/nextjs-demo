import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  Users,
  Package,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Alex!</p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Total Revenue",
            value: "$45,231.89",
            change: "+20.1%",
            trend: "up",
            icon: CreditCard,
          },
          {
            title: "Active Users",
            value: "2,345",
            change: "+10.3%",
            trend: "up",
            icon: Users,
          },
          {
            title: "New Items",
            value: "12,234",
            change: "+12.2%",
            trend: "up",
            icon: Package,
          },
          {
            title: "Conversion Rate",
            value: "3.2%",
            change: "-2.1%",
            trend: "down",
            icon: BarChart3,
          },
        ].map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
                )}
                <span
                  className={
                    stat.trend === "up" ? "text-emerald-500" : "text-red-500"
                  }
                >
                  {stat.change} from last month
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest actions and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Profile Updated",
                description: "You updated your profile information",
                time: "2 hours ago",
              },
              {
                title: "New Item Added",
                description: "You added a new item to your inventory",
                time: "5 hours ago",
              },
              {
                title: "Settings Changed",
                description: "You updated your notification settings",
                time: "1 day ago",
              },
              {
                title: "Password Changed",
                description: "You changed your password",
                time: "3 days ago",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border p-4"
              >
                <div className="flex-1">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
