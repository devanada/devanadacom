import Link from "next/link";
import type { NextPage } from "next";

import { ListView } from "components/Projects";

import { ProjectType } from "utils/types";

interface Props {
  projects: ProjectType[];
}

const MyProject: NextPage<Props> = ({ projects }) => {
  return (
    <section className="mb-11">
      <div className="mb-3 flex w-full items-center justify-between text-white">
        <p className="text-2xl font-bold">My Latest Projects</p>
        <Link href="/projects" className="duration-150 hover:font-bold">
          See All
        </Link>
      </div>
      {projects.map((project) => (
        <ListView key={project.id} {...project} />
      ))}
    </section>
  );
};

export default MyProject;
