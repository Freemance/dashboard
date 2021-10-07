import {
  ProfilesByIdLanguage,
  ProfilesByIdSkill,
} from 'src/providers/graphql/freemancer/type/ProfilesByUsername';
export interface IProps {
  profileResume: ProfileResumeType;
}

export type ProfileResumeType = {
  bio?: string;
  slikUser: string;
  email?: string;
  country?: string;
  city?: string;
  phone?: string;
  createdAt: string;
  languages: ProfilesByIdLanguage[];
  skills: ProfilesByIdSkill[];
};
