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
  date: Date;
}

export async function getServerSideProps() {
  let datas: ProjectType[] = [];
  let datas2: ProfileType | any = {};
  try {
    const response = await axios.get(
      "https://api.github.com/users/devanada/starred?sort=updated"
    );
    const response2 = await axios.get("https://api.github.com/users/devanada");
    const data = response.data.slice(0, 3);
    const { data: profile } = response2;
    datas = data;
    datas2 = profile;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      projects: datas,
      profile: datas2,
      date: Date.now(),
    },
  };
}

const Home: NextPage<Props> = ({ projects, profile, date }) => {
  return (
    <Layout date={date}>
      <AboutMe {...profile} />
      <MyProject projects={projects} />
      <ContactMe />
    </Layout>
  );
};

export default Home;
