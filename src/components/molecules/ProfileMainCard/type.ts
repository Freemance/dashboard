import {
  ProfilesByIdJob,
  ProfilesByIdCourse,
} from 'src/providers/graphql/freemancer/type/ProfilesByUsername';

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

export interface IProps {
  employmentHistory?: ProfilesByIdJob[];
  coursesHistory?: ProfilesByIdCourse[];
}
