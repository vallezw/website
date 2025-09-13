"use client";

const qoutes = [
  "Sometimes you are the dog, sometimes the tree.",
  "Mühsam ernährt sich das Eichhörnchen.",
  "Da beißt die Maus keinen Faden ab."
];

export default function Quote() {
  return (
    <span className="text-muted-foreground text-sm" suppressHydrationWarning>
      {qoutes[Math.floor(Math.random() * qoutes.length)]}
    </span>
  );
}
