import * as React from 'react';
import moment from 'moment';

// MUI Components
import {
  Card,
  CardContent,
  ListItem,
  ListItemText,
  Link,
  Divider,
  ListItemIcon,
} from '@material-ui/core';
// Types
import { IProps } from './type';

// Styles
import useProfileInfoCardStyles from './ProfileInfoCard.style';
import Svgicon from 'src/components/atoms/SvgIcon';
import { Phone } from 'react-feather';
// import { BookOpen, LogIn, MapPin, Globe } from 'react-feather';

const ProfileInfoCard = ({ profileResume }: IProps) => {
  const classes = useProfileInfoCardStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        {profileResume && profileResume.phone && (
          <ListItem className={classes.infoItem}>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary={profileResume.phone || '+___ ___ __ __'} />
          </ListItem>
        )}
        {profileResume && profileResume.bio && (
          <ListItem className={classes.infoItem}>
            <ListItemText primary="Bio" secondary={profileResume.bio} />
          </ListItem>
        )}
        {profileResume && profileResume.createdAt && (
          <ListItem className={classes.infoItem}>
            <ListItemText
              primary="Joined:"
              secondary={moment(profileResume.createdAt).format('LLL')}
            />
          </ListItem>
        )}
        {profileResume && profileResume.country && (
          <ListItem className={classes.infoItem}>
            <ListItemText
              primary="From:"
              secondary={`${profileResume.city}, ${profileResume.country}`}
            />
          </ListItem>
        )}

        {profileResume && profileResume.slikUser && (
          <ListItem className={classes.infoItem}>
            <ListItemText
              primary="Slyk:"
              secondary={
                <Link
                  href={`https://${profileResume.slikUser}`}
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  {profileResume.slikUser}
                </Link>
              }
            />
          </ListItem>
        )}
        <Divider />
        <ListItem className={classes.infoItem}>
          <ListItemText primary="Language:" />
          {profileResume &&
            profileResume.languages &&
            profileResume.languages.length > 0 &&
            profileResume.languages.map((element) => (
              <ListItemText
                key={`${element.language}-${element.lvl}`}
                primary={element.language || ''}
                secondary={element.lvl || ''}
              />
            ))}
        </ListItem>
        <Divider />
        <ListItem className={classes.infoItem}>
          <ListItemText primary="Skills:" />
        </ListItem>
        {profileResume &&
          profileResume.skills &&
          profileResume.skills.length > 0 &&
          profileResume.skills.map((skill) => (
            <ListItem className={classes.infoItem} key={skill.name}>
              <ListItemIcon>
                <Svgicon color="primary" paths={skill.icon} />
              </ListItemIcon>
              <ListItemText primary={skill.name || ''} />
            </ListItem>
          ))}
      </CardContent>
    </Card>
  );
};

export default ProfileInfoCard;
