import React from "react";
import axios from "axios";
import type { NextPage } from "next";

import { ListView } from "components/Projects";
import Layout from "components/Layout";

import { ProjectType } from "utils/types";

interface Props {
  projects: ProjectType[];
}

export async function getServerSideProps() {
  const response = await axios.get(
    "https://api.github.com/users/devanada/starred?sort=updated"
  );
  const { data } = response;
  return {
    props: {
      projects: data,
    },
  };
}

const projects: NextPage<Props> = ({ projects }) => {
  return (
    <Layout docTitle="Projects | Devanada's Personal Website">
      {projects.map((project) => (
        <ListView key={project.id} {...project} />
      ))}
    </Layout>
  );
};

export default projects;
