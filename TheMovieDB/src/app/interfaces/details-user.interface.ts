// Generated by https://quicktype.io

export interface DetailResponse {
  avatar: Avatar;
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}

export interface Avatar {
  gravatar: Gravatar;
}

export interface Gravatar {
  hash: string;
}