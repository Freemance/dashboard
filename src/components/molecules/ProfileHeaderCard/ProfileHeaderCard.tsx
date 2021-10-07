import * as React from 'react';
import { useTranslation } from 'react-i18next';

// Mui Components
import {
  Card,
  CardMedia,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  CardActions,
  Tabs,
  Tab,
} from '@material-ui/core';

// Styles
import useProfileHeaderCardStyles from './ProfileHeaderCard.style';

import { IProps } from './type';
import { User } from 'react-feather';
import { GlobalContext } from 'src/context';
import { setProfilePanelValues } from 'src/context/reducer';

const ProfileHeaderCard: React.FC<IProps> = ({
  avatar,
  poster,
  firstName,
  lastName,
  jobTitle,
  isLoading = false,
}: IProps) => {
  const classes = useProfileHeaderCardStyles();
  const { state, dispatch } = React.useContext(GlobalContext);
  const { t } = useTranslation('common', { useSuspense: false });

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    dispatch(
      setProfilePanelValues({
        selectedPanel: newValue,
      })
    );
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.poster} image="" title="">
        <ListItem
          component="div"
          alignItems="flex-start"
          className={classes.header}
        >
          {isLoading ? (
            <></>
          ) : (
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                variant="rounded"
                alt="user pict"
                src={
                  avatar &&
                  `${
                    process.env.REACT_APP_MEDIA_HOST ||
                    'https://freemance-backend.herokuapp.com/uploads/'
                  }150X150/${avatar}`
                }
              >
                <User width={48} height={48} />
              </Avatar>
            </ListItemAvatar>
          )}
          <ListItemText
            primary={`${firstName} ${lastName}`}
            secondary={jobTitle}
          />{' '}
        </ListItem>
      </CardMedia>
      <CardActions>
        <Tabs
          value={state.profilePanel.selectedPanel}
          indicatorColor="primary"
          textColor="primary"
          className={classes.profileNav}
          onChange={handleTabChange}
          aria-label="profile-nav"
        >
          <Tab
            className={classes.navItem}
            label={t('translation.navigation.Projects')}
            disabled
          />
          <Tab
            className={classes.navItem}
            label={t('translation.navigation.Experience')}
          />
          <Tab
            className={classes.navItem}
            label={t('translation.navigation.Eductaion')}
          />
        </Tabs>
      </CardActions>
    </Card>
  );
};

export default ProfileHeaderCard;
