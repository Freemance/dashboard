import {
  ProfilesByIdJob,
  ProfilesByIdCourse,
} from 'src/providers/graphql/freemancer/type/ProfilesByUsername';

export interface IProps {
  activity: ProfilesByIdJob | ProfilesByIdCourse;
  index?: number;
}
