import axios from "axios";
import type { NextPage } from "next";

import ContactMe from "components/sections/ContactMe";
import MyProject from "components/sections/MyProject";
import AboutMe from "components/sections/AboutMe";
import Layout from "components/Layout";

import { ProfileType, ProjectType } from "utils/types";

interface Props {
  projects: ProjectType[];
  profile: ProfileType;
}

export async function getServerSideProps() {
  const response = await axios.get(
    "https://api.github.com/users/devanada/starred?sort=updated"
  );
  const response2 = await axios.get("https://api.github.com/users/devanada");
  const data = response.data.slice(0, 3);
  const { data: profile } = response2;
  return {
    props: {
      projects: data,
      profile,
    },
  };
}

const Home: NextPage<Props> = ({ projects, profile }) => {
  return (
    <Layout>
      <AboutMe {...profile} />
      <MyProject projects={projects} />
      <ContactMe />
    </Layout>
  );
};

export default Home;
