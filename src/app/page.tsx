import Image from "next/image";
import mediumIcon from "./medium-icon.png";

function Navigation() {
  return (
    <div className="flex justify-end p-9">
      <a href="./">Home</a>
    </div>
  );
}

function MyNameText(props: { title: string }) {
  const { title } = props;
  return <h1 className="text-4xl mb-2 text-[#E0E0E0]">{title}</h1>;
}

function TitleText(props: { title: string }) {
  const { title } = props;
  return <h2 className="text-xl mb-4 text-[#E0E0E0]">{title}</h2>;
}

function BriefIntroduction(data: BriefIntroductionData) {
  const { name, title } = data;
  return (
    <div className="mb-9">
      <MyNameText title={name} />
      <p className="text-[#BDBDBD]">{title}</p>
    </div>
  );
}

function Introduction(data: IntroductionData) {
  const { title, introductionContent } = data;
  return (
    <>
      <TitleText title={title} />
      <p className="leading-[1.75] text-[#BDBDBD]">{introductionContent}</p>
    </>
  );
}

function DiffLine() {
  return (
    <>
      <div className="bg-[#4f4f4f] h-0.5 mt-9 mb-9"></div>
    </>
  );
}

function MediumArticles(data: MediumData) {
  const { title, titleText, subtitleText, url } = data;
  return (
    <>
      <TitleText title={title} />
      <a
        href={url}
        className="hover:bg-gray-900 flex flex-row gap-4 items-center rounded-lg"
      >
        <div className="pt-4 pl-4 pb-4">
          <Image
            alt="Medium Logo"
            className="w-[32px] h-[32px]"
            src={mediumIcon}
          />
        </div>
        <div>
          <b className="leading-[1.75] text-[#E0E0E0]">{titleText}</b>
          <p className="leading-[1.75] text-[#BDBDBD]">{subtitleText}</p>
        </div>
      </a>
    </>
  );
}

function WorkExperience(data: {
  title: string;
  experiences: ExperienceData[];
}) {
  const { title, experiences } = data;
  return (
    <>
      <TitleText title={title} />
      {experiences.map((experience, index) => (
        <div key={index} className="mb-6">
          <a
            href={experience.url}
            target="_blank"
            className="leading-[1.75] text-[#E0E0E0] underline"
          >
            {experience.company} • {experience.country}
          </a>
          <p className="leading-[1.75] text-[#BDBDBD]">
            {experience.jobTitle} — {experience.tenureYear}
          </p>
          <p className="leading-[1.75] text-[#BDBDBD]">
            {experience.techStack.join(", ")}
          </p>
        </div>
      ))}
    </>
  );
}

function Connect(data: ConnectData) {
  const { title, connects } = data;
  return (
    <>
      <TitleText title={title} />
      {connects.map((i: { url: string; name: string }, e: number) => (
        <div key={e}>
          <a href={i.url} target="_blank" className="underline leading-[1.75]">
            {i.name}
          </a>
        </div>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <div className="background flex justify-center">
      <div className="w-sm lg:w-4xl md:w-3xl sm:w-md">
        <Navigation />
        <BriefIntroduction {...briefIntroductionData} />
        <DiffLine />
        <Introduction {...introductionData} />
        <DiffLine />
        <MediumArticles {...mediumData} />
        <DiffLine />
        <WorkExperience {...workExperienceData} />
        <DiffLine />
        <Connect {...connectData} />
      </div>
    </div>
  );
}

type BriefIntroductionData = {
  name: string;
  title: string;
};

type IntroductionData = {
  title: string;
  introductionContent: string;
};

type MediumData = {
  title: string;
  titleText: string;
  subtitleText: string;
  url: string;
  imgMedium: string;
};

type WorkExperienceData = {
  title: string;
  experiences: ExperienceData[];
};

type ExperienceData = {
  company: string;
  url: string;
  country: string;
  jobTitle: string;
  tenureYear: string;
  techStack: string[];
};

type ConnectData = {
  title: string;
  connects: Connects[];
};

type Connects = {
  img: string;
  name: string;
  url: string;
};

const briefIntroductionData: BriefIntroductionData = {
  name: "Alvin Leonardo",
  title: "Creative Technologist",
};

const introductionData: IntroductionData = {
  title: "Hi there!",
  introductionContent:
    "My name is Alvin, a Product Designer based in Tangerang, Indonesia. For the last ten years, my focus has been revolving around creating pleasant experience by leveraging design and technology.  I have had the privilege of collaborating and contributing with the top-tier companies and startups to deliver their cutting-edge digital services.",
};

const mediumData: MediumData = {
  title: "Article",
  titleText: "What is the importance of Design QA?",
  subtitleText:
    "What I learned when initiating and conducting Design QA in my team, and the impact it generates.",
  url: "https://medium.com/traveloka-design/what-is-the-importance-of-design-qa-e2693fde32b4",
  imgMedium: "/medium-icon.png",
};

const workExperienceData: WorkExperienceData = {
  title: "Working Experience",
  experiences: [
    {
      company: "Traveloka.com",
      url: "https://www.traveloka.com",
      country: "Indonesia",
      jobTitle: "Senior Product Designer",
      tenureYear: "2016 - 2024",
      techStack: [
        "React",
        "React Native",
        "JavaScript",
        "Velocity",
        "Figma",
        "Design System",
      ],
    },
    {
      company: "Lazada.co.id",
      url: "https://www.lazada.co.id",
      country: "Indonesia",
      jobTitle: "Web Designer",
      tenureYear: "2014 - 2016",
      techStack: ["HTML", "CSS", "JavaScript", "Adobe Photoshop"],
    },
  ],
};

const connectData = {
  title: "Connect",
  connects: [
    {
      img: "#",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alvin-leonardo-bb156955/",
    },
    { img: "#", name: "GitHub", url: "https://github.com/d3ther" },
  ],
};
