import * as React from 'react';
import moment from 'moment';

// Mui Components
import {
  Card,
  CardContent,
  CardHeader,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@material-ui/lab';
import { Briefcase, BookOpen } from 'react-feather';

// Types
import { IProps } from './type';
import {
  ProfilesByIdCourse,
  ProfilesByIdJob,
} from 'src/providers/graphql/freemancer/type/ProfilesByUsername';

// Styles
import useExperienceItemStyles from './ExperienceItem.style';

const ExperienceItem: React.FC<IProps> = ({ activity, index = 0 }: IProps) => {
  const classes = useExperienceItemStyles({ index });

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          {!(activity as ProfilesByIdJob).inProgress
            ? `${moment(activity.startDate).format('ll')} - ${moment(
                activity.endDate
              ).format('ll')}`
            : `${moment(activity.startDate).format('ll')} - Today`}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot
          color="primary"
          variant={index % 2 !== 0 ? 'outlined' : 'default'}
        >
          {activity.hasOwnProperty('company') ? (
            <Briefcase className={classes.icon} />
          ) : (
            <BookOpen className={classes.icon} />
          )}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card className={classes.card}>
          <CardHeader
            title={
              activity.hasOwnProperty('company')
                ? (activity as ProfilesByIdJob).company
                : (activity as ProfilesByIdCourse).institution
            }
            subheader={
              activity.hasOwnProperty('name')
                ? (activity as ProfilesByIdJob).name
                : (activity as ProfilesByIdCourse).course
            }
          />
          <CardContent>
            <ListItem component="div">
              <ListItemText primary={activity.description} />
            </ListItem>
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExperienceItem;
