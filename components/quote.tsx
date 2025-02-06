"use client";

const qoutes = [
  "Less is more.",
];

export default function Quote() {
  return (
    <span className="text-muted-foreground text-sm" suppressHydrationWarning>
      {qoutes[Math.floor(Math.random() * qoutes.length)]}
    </span>
  );
}
