import { IoMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { FC, useState } from "react";
import type { NextPage } from "next";

interface ItemProps {
  Logo: IconType;
  href: string;
  label: string;
}

const ItemView: FC<ItemProps> = ({ Logo, href, label }) => {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      <div className="flex min-h-[3rem] items-center gap-3 rounded-xl px-3 duration-500 hover:bg-dark-2">
        <Logo className="h-8 w-8 object-contain" />
        <p>{label}</p>
      </div>
    </a>
  );
};

const ContactMe: NextPage = () => {
  const [items] = useState<ItemProps[]>([
    {
      Logo: IoMail,
      href: "mailto:ydevanada@gmail.com",
      label: "ydevanada@gmail.com",
    },
    {
      Logo: IoLogoLinkedin,
      href: "https://www.linkedin.com/in/devanada/",
      label: "My Linkedin Profile",
    },
    {
      Logo: IoLogoGithub,
      href: "https://github.com/devanada",
      label: "My Github Profile",
    },
  ]);

  return (
    <section className="mb-11 text-white">
      <div className="mb-3 flex w-full items-center justify-between">
        <p className="text-2xl font-bold">Contact Me</p>
      </div>
      <p className="mb-3 text-left md:text-justify">
        Have a business inquiry or a new opportunity? Please reach me on the
        link down below.
      </p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((item) => (
          <ItemView
            key={item.href}
            Logo={item.Logo}
            href={item.href}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactMe;
