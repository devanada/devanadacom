import React from "react";
import axios from "axios";
import type { NextPage } from "next";

import { ListView } from "components/Projects";
import Layout from "components/Layout";

import { ProjectType } from "utils/types";

interface Props {
  projects: ProjectType[];
  date: Date;
}

export async function getServerSideProps() {
  let datas: ProjectType[] = [];
  try {
    const response = await axios.get(
      "https://api.github.com/users/devanada/starred?sort=updated"
    );
    const { data } = response;
    datas = data;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      projects: datas,
      date: Date.now(),
    },
  };
}

const projects: NextPage<Props> = ({ projects, date }) => {
  return (
    <Layout
      docTitle="Projects | Devanada's Personal Website"
      docDesc="List of Devanada's project"
      date={date}
    >
      {projects.map((project) => (
        <ListView key={project.id} {...project} />
      ))}
    </Layout>
  );
};

export default projects;
