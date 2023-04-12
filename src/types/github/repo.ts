export interface RepoCardProps {
  id: number;
  name: string;
  description: string;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  };
  html_url: string;
}

export interface OrganizationCardProps {
  id: number;
  description: string;
  avatar_url: string;
  login: string;
  url: string;
  repos_url: string;
  html_url: string;
}
