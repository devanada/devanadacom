import Image from "next/image";
import type { NextPage } from "next";

import { ProfileType } from "utils/types";

const AboutMe: NextPage<ProfileType> = ({
  avatar_url = "https://avatars.githubusercontent.com/u/53251131?v=4",
  name = "No Image",
}) => {
  return (
    <section className="mb-11 flex flex-col items-center gap-6 text-white md:flex-row">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="aspect-w-2 aspect-h-2 relative h-full w-full">
          <Image
            className="rounded-full object-contain"
            src={avatar_url}
            alt={name}
            fill
            sizes="100vw"
          />
        </div>
        <p className="text-center text-3xl">{name}</p>
      </div>
      <div className="w-full lg:w-1/2">
        <p className="text-justify">
          Hello my name is Yoga Swami Devanada, interested in Technology,
          especially computers. Entered college at State Polytechnic of Malang
          (Polinema) and had chosen Telecommunication Engineering as my major.
          Also, I got a scholarship in Cloud Computing degree from Indonesia's
          Ministry of Communication and Information program named Digital Talent
          Scholarship in 2019. Since then, I got AWS Cloud Practitioner
          certificate. My expertise is in React.js, Next.js, Express.js, React
          Native, video editing, and pc building.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
