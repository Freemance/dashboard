import {
  ProfilesByIdJob,
  ProfilesByIdCourse,
} from 'src/providers/graphql/freemancer/type/ProfilesByUsername';

export interface IProps {
  history: ProfilesByIdJob[] | ProfilesByIdCourse[];
}
