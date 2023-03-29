import React from "react";
import Image, { StaticImageData } from "next/image";

type AboutDesktopProps = {
  attributes: {
    name: string;
    bio: JSX.Element;
    avatar: StaticImageData;
    githubLink: string;
    githubIcon: JSX.Element;
    linkedinLink: string;
    linkedinIcon: JSX.Element;
  };
};

export default function AboutDesktopLayout(props: AboutDesktopProps) {
  const {
    name,
    bio,
    avatar,
    githubLink,
    githubIcon,
    linkedinLink,
    linkedinIcon,
  } = props.attributes;

  return (
    <div className="container mx-auto px-5 py-24 cursor-auto">
      <div className="md:w-4/5 mx-auto flex flex-wrap">
        <div className="md:w-1/2 w-full md:pl-10 md:py-6 mt-6 md:mt-0 cursor-auto">
          <p className="text-white my-1 max-w-[460px]">Hi, I&apos;m</p>
          <h1 className="text-white font-bold text-3xl font-serif">{name}</h1>
          <div className="flex justify-left mt-2 mb-6">
            <div className="">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={githubLink}
                className="flex gap-2"
              >
                {githubIcon}
              </a>
            </div>
            <div className="">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={linkedinLink}
                className="flex gap-2"
              >
                {linkedinIcon}
              </a>
            </div>
          </div>
          <p className="leading-relaxed max-w-[460px]">{bio}</p>
        </div>
        <div className="md:py-8 md:m-auto align-center cursor-auto">
          <Image
            alt={name}
            className="rounded-full"
            src={avatar}
            placeholder="blur"
            width={200}
            priority
          />
        </div>
      </div>
    </div>
  );
}