import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { setFreemancerStatus } from 'src/context/reducer';
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
  TextField,
  Grid,
  Button,
  CircularProgress,
} from '@material-ui/core';

// Styles
import useProfileHeaderCardStyles from './ProfileHeaderCard.style';

import { IProps } from './type';
import { User } from 'react-feather';
import { GlobalContext } from 'src/context';
import { setProfilePanelValues } from 'src/context/reducer';
import { PROFILE_STATUS } from 'src/utils/constants/commons';
import { StatusOptionType } from '../FreemancerPanel/type';
import { ProfileStatus } from 'type/globalTypes';
import { UPDATE_STATUS } from 'src/providers/graphql/freemancer/freemancer.mutation.gql';
import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import CustomDialog from '../CustomDialog';
import StatusTag from 'src/components/atoms/StatusTag';

const ProfileHeaderCard: React.FC<IProps> = ({
  avatar,
  poster,
  firstName,
  lastName,
  jobTitle,
  isLoading = false,
  onRefetch,
}: IProps) => {
  const classes = useProfileHeaderCardStyles();
  const { state, dispatch } = React.useContext(GlobalContext);
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation('common', { useSuspense: false });

  const [updateStatus, { loading }] = useMutation(UPDATE_STATUS, {
    onCompleted: (payload) => {
      if (payload) {
        enqueueSnackbar(t('translation.Notifications.Profile Status updated'), {
          variant: 'success',
          persist: false,
        });
        onRefetch();
      }
    },
  });

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    dispatch(
      setProfilePanelValues({
        selectedPanel: newValue,
      })
    );
  };

  const handleStatusChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    event.persist();
    const status: ProfileStatus = event.target.value as ProfileStatus;
    dispatch(setFreemancerStatus(status));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleConfirm = (confirm: boolean) => {
    setOpen(false);
    if (confirm) {
      updateStatus({
        variables: {
          profileId: state.currentFreemancer.id,
          newStatus: state.currentFreemancer.profileStatus,
        },
      });
    }
  };

  return (
    <Card className={classes.root}>
      <StatusTag
        status={
          state.currentFreemancer && state.currentFreemancer.profileStatus
        }
      />
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
            primary={`${firstName || ''} ${lastName || ''}`}
            secondary={jobTitle || ''}
          />{' '}
        </ListItem>
      </CardMedia>
      <CardActions>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Grid item xs={12} md={8}>
            <Tabs
              value={state.profilePanel.selectedPanel}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="on"
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
                label={t('translation.navigation.Education')}
              />
            </Tabs>
          </Grid>
          <Grid item xs={12} md={4}>
            <form onSubmit={handleSubmit}>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Grid item xs={8} sm={7}>
                  <TextField
                    fullWidth
                    label={t('translation.textfields.Status')}
                    margin="dense"
                    name="profileStatus"
                    onChange={handleStatusChange}
                    select
                    // eslint-disable-next-line react/jsx-sort-props
                    SelectProps={{ native: true }}
                    value={
                      state.currentFreemancer
                        ? state.currentFreemancer.profileStatus
                        : 'PENDING'
                    }
                    variant="outlined"
                  >
                    <option disabled value="" />
                    {PROFILE_STATUS.map((option: StatusOptionType) => (
                      <option key={option.value} value={option.value}>
                        {t`translate.textfield.${option.label}`}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={4} sm={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    type="submit"
                    fullWidth
                  >
                    {!loading ? (
                      t('translation.buttons.Update')
                    ) : (
                      <div className={classes.progress}>
                        <CircularProgress size={12} variant="indeterminate" />
                      </div>
                    )}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </CardActions>
      <CustomDialog
        isOpen={open}
        message={t('translation.dialogs.Are you sure')}
        onConfirm={handleConfirm}
        title="Confirmar Operación"
      />
    </Card>
  );
};

export default ProfileHeaderCard;
