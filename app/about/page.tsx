import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">About YourBrand</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          We're on a mission to transform how people interact with technology.
        </p>
      </div>

      {/* Company Story */}
      <div className="mb-20 grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
          <p className="mb-4 text-lg">
            Founded in 2020, YourBrand began with a simple idea: make technology
            more accessible and user-friendly for everyone.
          </p>
          <p className="mb-4 text-lg">
            What started as a small team of passionate developers has grown into
            a thriving company serving thousands of customers worldwide.
          </p>
          <p className="text-lg">
            Our platform combines cutting-edge technology with intuitive design
            to create solutions that solve real problems for our users.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg">
          {/* Fake office image with gradient background */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/80 to-primary">
            {/* Fake office elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/90 to-transparent"></div>
            <div className="absolute left-[10%] top-[20%] h-16 w-16 rounded-md bg-white/20"></div>
            <div className="absolute left-[30%] top-[30%] h-24 w-32 rounded-md bg-white/20"></div>
            <div className="absolute left-[60%] top-[25%] h-20 w-20 rounded-md bg-white/20"></div>
            <div className="absolute bottom-[30%] left-[20%] h-12 w-40 rounded-md bg-white/20"></div>
            <div className="absolute bottom-[20%] right-[15%] h-16 w-24 rounded-md bg-white/20"></div>
            {/* Decorative dots pattern */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-white"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Innovation",
              description:
                "We constantly push boundaries and explore new possibilities to create better solutions.",
              color: "from-blue-500 to-indigo-600",
            },
            {
              title: "Accessibility",
              description:
                "We believe technology should be accessible to everyone, regardless of background or ability.",
              color: "from-emerald-500 to-teal-600",
            },
            {
              title: "Integrity",
              description:
                "We operate with transparency and honesty in everything we do.",
              color: "from-amber-500 to-orange-600",
            },
          ].map((value, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div
                className={`h-2 w-full bg-gradient-to-r ${value.color}`}
              ></div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold">Meet Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            {
              name: "Alex Johnson",
              role: "CEO & Founder",
              initials: "AJ",
              bgColor: "bg-primary",
            },
            {
              name: "Sam Rivera",
              role: "CTO",
              initials: "SR",
              bgColor: "bg-blue-600",
            },
            {
              name: "Taylor Kim",
              role: "Head of Design",
              initials: "TK",
              bgColor: "bg-emerald-600",
            },
            {
              name: "Jordan Patel",
              role: "Lead Developer",
              initials: "JP",
              bgColor: "bg-amber-600",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div
                className={`mx-auto mb-4 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full ${member.bgColor}`}
              >
                <span className="text-4xl font-bold text-white">
                  {member.initials}
                </span>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-foreground/30 p-10 text-center text-primary-foreground">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-40 w-40 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10">
          <h2 className="mb-4 text-3xl font-bold">Ready to get started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Join thousands of satisfied users who have transformed their
            workflow with YourBrand.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="secondary" size="lg">
              <Link href="/auth/signup">Create an account</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/contact">Contact sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
