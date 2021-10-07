import { Card, CardContent } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import TabPanel from './TapPanel';
import React from 'react';
import { GlobalContext } from 'src/context';
import { ITheme } from 'src/utils/types';
import useProfileMainCardStyles from './ProfileMainCard.style';
import ProfileTimeLine from '../ProfileTimeLine';

import { IProps } from './type';

const ProfileMainCard: React.FC<IProps> = ({
  employmentHistory,
  coursesHistory,
}: IProps) => {
  const theme: ITheme = useTheme();
  const { state } = React.useContext(GlobalContext);

  const classes = useProfileMainCardStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <TabPanel
          value={state.profilePanel.selectedPanel}
          index={0}
          dir={theme.direction}
        >
          Item One
        </TabPanel>
        <TabPanel
          value={state.profilePanel.selectedPanel}
          index={1}
          dir={theme.direction}
        >
          <ProfileTimeLine history={employmentHistory} />
        </TabPanel>
        <TabPanel
          value={state.profilePanel.selectedPanel}
          index={2}
          dir={theme.direction}
        >
          <ProfileTimeLine history={coursesHistory} />
        </TabPanel>
      </CardContent>
    </Card>
  );
};

export default ProfileMainCard;
