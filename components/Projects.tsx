import { GoRepoForked, GoEye } from "react-icons/go";
import moment from "moment";
import { FC } from "react";

import { ProjectType } from "utils/types";

export const ListView: FC<ProjectType> = ({
  name,
  description,
  pushed_at,
  watchers,
  forks_count,
  html_url,
  language,
}) => {
  return (
    <a href={html_url} rel="noreferrer" target="_blank">
      <div className="mb-5 w-full rounded-2xl border border-dark-2/40 bg-dark p-3 text-white duration-500 hover:bg-dark-2">
        <div className="flex w-full justify-between">
          <div className="w-full">
            <h2 className="mb-4 text-xl font-bold tracking-widest">{name}</h2>
            <p className="text-justify">{description}</p>
          </div>
          <p className="text-xs tracking-widest">{language}</p>
        </div>
        <div className="mt-5 flex w-full items-center justify-between text-white">
          <p className="text-sm">
            Last updated at {moment(pushed_at).format("DD MMMM YYYY")}
          </p>
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <GoEye />
              <p>{watchers}</p>
            </div>
            <div className="flex items-center gap-1">
              <GoRepoForked />
              <p>{forks_count}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
