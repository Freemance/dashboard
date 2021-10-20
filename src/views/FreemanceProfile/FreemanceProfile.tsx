import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useLazyQuery } from '@apollo/client';
import { GlobalContext } from 'src/context';
// Mui Components
import { Container, Grid, Divider } from '@material-ui/core';
import { UserCheck } from 'react-feather';

// Custom Components
import ProfileHeaderCard from 'src/components/molecules/ProfileHeaderCard';
import TextIcon from 'src/components/atoms/TextIcon';

// Styles
import useFreemanceProfileStyles from './FreemanceProfile.state';

import { IProps } from './type';
import { GET_PROFILE_BY_ID } from 'src/providers/graphql/freemancer/freemancer.query.gql';
import { FullProfileType } from 'src/context/state';
import { setCurrentFreemancer, setCurrentProfile } from 'src/context/reducer';
import ProfileInfoCard from 'src/components/molecules/ProfileInfoCard';
import { Redirect } from 'react-router-dom';
import ProfileMainCard from 'src/components/molecules/ProfileMainCard';

const FreemanceProfile: React.FC<IProps> = ({ match }: IProps) => {
  const classes = useFreemanceProfileStyles();
  const { t } = useTranslation('views', { useSuspense: false });
  const { state, dispatch } = React.useContext(GlobalContext);

  const profileId = parseInt(match.params.id);
  let profile: FullProfileType;
  const [getProfileById, { loading, error, refetch }] = useLazyQuery(
    GET_PROFILE_BY_ID,
    {
      onCompleted: (data) => {
        if (data && data.profileById) {
          profile = data.profileById;
          console.log('data ', profile);
          dispatch(setCurrentProfile(profile));
          dispatch(setCurrentFreemancer(profile));
        }
      },
    }
  );

  React.useEffect(() => {
    if (!isNaN(profileId)) {
      console.log(profileId);
      getProfileById({
        variables: {
          profileId: profileId,
        },
      });
    }
  }, []);

  if (
    (error &&
      error.graphQLErrors.length > 0 &&
      error.graphQLErrors[0].extensions.code === '404') ||
    isNaN(profileId) ||
    profileId === null
  ) {
    return <Redirect to="/not-found" />;
  } else
    return (
      <Container className={classes.root}>
        <div style={{ padding: '20px' }}>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12}>
              <TextIcon
                label={t('translation.freemancer.Profile')}
                icon={<UserCheck size={18} />}
                color="secondary"
                variant="rounded"
              />
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <ProfileHeaderCard
                firstName={
                  state.currentProfile && state.currentProfile.firstName
                }
                lastName={state.currentProfile && state.currentProfile.lastName}
                isLoading={loading}
                poster=""
                avatar={state.currentProfile && state.currentProfile.avatar}
                jobTitle={state.currentProfile && state.currentProfile.jobTitle}
                onRefetch={refetch}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ProfileInfoCard
                profileResume={{
                  bio: state.currentProfile && state.currentProfile.bio,
                  phone: state.currentProfile && state.currentProfile.phone,
                  email:
                    state.currentProfile &&
                    state.currentProfile.user &&
                    state.currentProfile.user.email,
                  slikUser:
                    state.currentProfile && state.currentProfile.slykUser,
                  createdAt:
                    state.currentProfile && state.currentProfile.createdAt,
                  city: state.currentProfile && state.currentProfile.city,
                  country: state.currentProfile && state.currentProfile.country,
                  languages:
                    state.currentProfile && state.currentProfile.languages,
                  skills: state.currentProfile && state.currentProfile.skills,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <ProfileMainCard
                employmentHistory={
                  state.currentProfile && state.currentProfile.employmentHistory
                }
                coursesHistory={
                  state.currentProfile && state.currentProfile.courses
                }
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    );
};

export default FreemanceProfile;
