export interface ProjectType {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  language: string;
  forks_count: number;
  watchers: number;
  homepage: string;
}

export interface ProfileType {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  location: string;
  hireable: string | null;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
}
