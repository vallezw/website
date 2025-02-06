import { cn } from "@/lib/utils";
import { Newsreader } from "next/font/google";
import ContentLink from "@/components/content-link";
import Social from "@/components/social";
import Link from "next/link";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const PROJECTS = [
  {
    name: "SheetAble",
    url: "https://github.com/SheetAble/SheetAble",
    description: "open source music score organiser.",
    year: "2022",
  },
  {
    name: "dotfiles",
    url: "https://github.com/vallezw/dotfiles",
    description: "lightweight linux with suckless tools.",
    year: "2022",
  },
  {
    name: "The Social Network",
    url: "https://github.com/vallezw/The-Social-Network",
    description: "social network clone.",
    year: "2020",
  }
];

export default function Home() {
  return (
    <>
      {/* About */}
      <div className="space-y-2 w-full animate-enter delay-75">
        <h2 className={cn(newsreader.className, "text-secondary-foreground")}>
          About me
        </h2>
        <p>
          Currently I&apos;m a working student at <Link href="https://quantco.com"  className={cn(
          "underline underline-offset-2 decoration-foreground/40 font-medium hover:opacity-70 transitions-all"
        )}>QuantCo</Link> and aspiring to study Music Education at HMTM Munich.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-2 w-full animate-enter delay-100">
        <h2 className={cn(newsreader.className, "text-secondary-foreground")}>
          Projects
        </h2>

        <ul className="space-y-2 w-full">
          {PROJECTS.map((project) => (
            <ContentLink
              key={project.name}
              name={project.name}
              url={project.url}
              description={project.description}
              year={project.year}
            />
          ))}
        </ul>
      </div>

      {/* Ear Training */}
      <div className="space-y-2 w-full animate-enter delay-125">
        <h2 className={cn(newsreader.className, "text-secondary-foreground")}>
          Ear Training Resources
        </h2>
        <ul className="space-y-2 w-full">
          
          
            
                 
            <ContentLink
              key="mannheim"
              name="ear-training.org"
              url="https://www.ear-training.org/"
              description="melody, rhythm, polyphonic harmony dictations."
            />

            <ContentLink
              key="muc"
              name="OMA"
              url="https://openmusic.academy/"
              description="general resources for music theory and more."
            />
            <ContentLink
              key="chords"
              name="chord recognition"
              url="https://tonedear.com/ear-training/chord-identification"
              description="Some exercises for chord recognition."
            />
            
            <ContentLink
              key="ear"
              name="Functional Ear Trainer"
              url="https://apps.apple.com/de/app/functional-ear-trainer/id1088761926"
              description="Solfege and relative pitch training."
            />
        </ul>
      </div>

      {/* Socials */}
      <div className="space-y-2 w-full animate-enter delay-150">
        <h2 className={cn(newsreader.className, "text-secondary-foreground")}>
          Socials
        </h2>
        <div className="flex items-center justify-start gap-2">
          <Social name="Mail" url="mailto:vallezw@gmail.com" />
          <Social name="GitHub" url="https://github.com/vallezw" />
          <Social name="LinkedIn" url="https://linkedin.com/in/vallezw" />
        </div>
      </div>
    </>
  );
}
