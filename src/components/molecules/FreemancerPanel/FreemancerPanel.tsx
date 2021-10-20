import * as React from 'react';
import { User, Check, Star, Globe, UserCheck } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { NavLink } from 'react-router-dom';

// Context
import { GlobalContext } from 'src/context';

// Mui Components
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Grid,
  TextField,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
  List,
  Link,
  Button,
  CircularProgress,
  Typography,
  Dialog,
} from '@material-ui/core';

// Types
import { IProps, StatusOptionType } from './type';

// Styles
import useFreemancerPanelStyles from './FreemancerPanel.style';

// Constants
import { PROFILE_STATUS } from 'src/utils/constants/commons';
import { setCurrentFreemancer, setFreemancerStatus } from 'src/context/reducer';
import CustomDialog from '../CustomDialog';
import { useMutation } from '@apollo/client';
import { UPDATE_STATUS } from 'src/providers/graphql/freemancer/freemancer.mutation.gql';
import { ProfileStatus } from 'type/globalTypes';
import WrappIcon from 'src/components/atoms/WrappIcon';

const FreemancerPanel: React.FC<IProps> = ({
  user: { id: userId, username, email, active, createdAt, role },
  profile,
  onRefetch,
}: IProps) => {
  const { t } = useTranslation(['views', 'common'], { useSuspense: false });
  const { enqueueSnackbar } = useSnackbar();
  const classes = useFreemancerPanelStyles();
  const { state, dispatch } = React.useContext(GlobalContext);
  const [open, setOpen] = React.useState(false);
  const {
    id: profileId,
    firstName,
    lastName,
    avatar,
    slykUser,
    profileStatus,
  } = profile;
  React.useEffect(() => {
    if (userId && profileId) {
      dispatch(setCurrentFreemancer(profile));
    }
    return () => {
      // cleanup
    };
  }, [profile]);

  const [updateStatus, { loading }] = useMutation(UPDATE_STATUS, {
    onCompleted: (payload) => {
      if (payload) {
        enqueueSnackbar(
          t('common:translation.Notifications.Profile Status updated'),
          {
            variant: 'success',
            persist: false,
          }
        );
        onRefetch();
      }
    },
  });

  const handleChange = (
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
  const handleCloseModal = () => {};
  return (
    <Dialog
      open={false}
      onClose={handleCloseModal}
      aria-labelledby="form-dialog-title"
    >
      <Card>
        <CardHeader title={t('views:translation.freemancer.Profile Preview')} />
        <CardContent>
          <Grid container spacing={8} justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <ListItem alignItems="flex-start" className={classes.header}>
                <ListItemAvatar>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    alt="user pict"
                    src={
                      avatar &&
                      `${
                        process.env.REACT_APP_MEDIA_HOST ||
                        'https://api.freemancer.com/uploads/'
                      }150X150/${avatar}`
                    }
                  >
                    <User width={48} height={48} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      variant="subtitle1"
                      className={classes.name}
                    >{`${firstName} ${lastName}`}</Typography>
                  }
                  secondary={
                    <>
                      <span className={classes.email}>{email}</span>
                      <div className={classes.control}>
                        <form onSubmit={handleSubmit}>
                          <Grid container alignItems="center" spacing={2}>
                            <Grid item xs={8}>
                              <TextField
                                fullWidth
                                label={t(
                                  'common:translation.textfields.Status'
                                )}
                                margin="dense"
                                name="profileStatus"
                                onChange={handleChange}
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
                                {PROFILE_STATUS.map(
                                  (option: StatusOptionType) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {t`common:translate.textfield.${option.label}`}
                                    </option>
                                  )
                                )}
                              </TextField>
                            </Grid>
                            <Grid item xs={4}>
                              <Button
                                variant="contained"
                                color="primary"
                                disabled={loading}
                                type="submit"
                              >
                                {!loading ? (
                                  t('common:translation.buttons.Update')
                                ) : (
                                  <div className={classes.progress}>
                                    <CircularProgress
                                      size={12}
                                      variant="indeterminate"
                                    />
                                  </div>
                                )}
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                      </div>
                    </>
                  }
                />
              </ListItem>
              <ListItem>
                <Button
                  className={classes.button}
                  component={NavLink}
                  to={`/freemancers/${profileId}`}
                >
                  <div className={classes.icon}>
                    <WrappIcon icon={() => <UserCheck />} />
                  </div>
                  {t('common:translation.buttons.Go to profile')}
                </Button>
              </ListItem>
            </Grid>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <User width={14} height={14} />
                  </ListItemIcon>
                  <ListItemText
                    primary={t('views:translation.freemancer.Username')}
                  />
                  <ListItemText primary={username} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check width={14} height={14} />
                  </ListItemIcon>
                  <ListItemText
                    primary={t('views:translation.freemancer.Status')}
                  />
                  <ListItemText primary={profileStatus} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Star width={14} height={14} />
                  </ListItemIcon>
                  <ListItemText
                    primary={t('views:translation.freemancer.Role')}
                  />
                  <ListItemText primary={role} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Globe width={14} height={14} />
                  </ListItemIcon>
                  <ListItemText
                    primary={t('views:translation.freemancer.Slyk')}
                  />
                  <ListItemText
                    primary={
                      <Link
                        href={slykUser && `https://${slykUser}/`}
                        target="__blank"
                        rel="noreferrer noopener"
                      >
                        {slykUser}
                      </Link>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </CardContent>
        <CustomDialog
          isOpen={open}
          message={t('common:translation.dialogs.Are you sure')}
          onConfirm={handleConfirm}
          title="Confirmar Operación"
        />
      </Card>
    </Dialog>
  );
};

export default FreemancerPanel;
