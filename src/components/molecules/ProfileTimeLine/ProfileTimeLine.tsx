import * as React from 'react';
// Mui Components
import Timeline from '@material-ui/lab/Timeline';

// Custom components
import ExperienceItem from '../ExperienceItem';

// Styles
import useProfileTimeLineStyles from './ProfileTimeLine.style';

// Types
import { IProps } from './type';

const ProfileTimeLine: React.FC<IProps> = ({ history }: IProps) => {
  const classes = useProfileTimeLineStyles();

  return (
    <Timeline align="left" className={classes.root}>
      {history &&
        history.length > 0 &&
        history.map((historyItem, index) => (
          <ExperienceItem
            key={`${historyItem.startDate || historyItem.startDate}-${index}`}
            activity={historyItem}
          />
        ))}
    </Timeline>
  );
};

export default ProfileTimeLine;
