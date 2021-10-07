import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { getSkills, setSkill } from 'src/context/reducer';
import { GlobalContext } from 'src/context';
import { useLazyQuery, useMutation } from '@apollo/client';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Icons
import { HelpCircle, Zap } from 'react-feather';

// Mui Conmponents
import {
  TextField,
  Button,
  CardContent,
  CardHeader,
  Card,
  Grid,
  List,
  CircularProgress,
  IconButton,
} from '@material-ui/core';

// Custom components
import ImageUploader from 'src/components/molecules/ImageUploader';
import SkillItem from 'src/components/molecules/SkillItem';
import CustomDialog from 'src/components/molecules/CustomDialog';
// Styles
import useSkillCreatorStyles from './SkillCreator.style';

import { GET_SKILLS } from 'src/providers/graphql/core/core.query.gql';
import {
  ADD_SKILL,
  EDIT_SKILL,
  REMOVE_SKILL,
} from 'src/providers/graphql/core/core.mutation.gql';
import { SkillEdge, Skills } from 'src/providers/graphql/core/type/Skills';
import { SkillType } from 'src/context/state';

const SkillCreator: React.FC = () => {
  const classes = useSkillCreatorStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation(['views', 'common'], { useSuspense: false });
  const { state, dispatch } = React.useContext(GlobalContext);
  const [initialState, setInitialState] = React.useState(true);
  const [completed, setCompleted] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const [getAllSkills, { refetch, data, loading }] = useLazyQuery(GET_SKILLS, {
    onCompleted: (data: Skills) => {
      const skills: SkillType[] = [];
      if (data) {
        const {
          filterSkills: { edges },
        } = data;
        edges &&
          edges.length &&
          edges.forEach((edge: SkillEdge) => {
            skills.push({
              name: edge.node.name,
              icon: edge.node.icon,
              id: edge.node.id,
            });

            dispatch(getSkills(skills));
          });
      }
    },
  });

  // Add new skill
  const [addSkill, { loading: loadingNew }] = useMutation(ADD_SKILL, {
    onCompleted: async (payload) => {
      if (payload) {
        enqueueSnackbar(t('common:translation.Notifications.Skill created'), {
          variant: 'success',
          persist: false,
        });
        await refetch();
        handleReset();
        setCompleted(false);
      }
    },
  });

  // Edit current skill
  const [editSkill, { loading: loadingUpdate }] = useMutation(EDIT_SKILL, {
    onCompleted: async (payload) => {
      if (payload) {
        enqueueSnackbar(t('common:translation.Notifications.Skill updated'), {
          variant: 'success',
          persist: false,
        });
        await refetch();
        handleReset();
        setCompleted(false);
      }
    },
  });

  // Delate tag
  const [deleteSkill, { loading: loadingDelete }] = useMutation(REMOVE_SKILL, {
    onCompleted: async (payload) => {
      if (payload) {
        enqueueSnackbar(t('common:translation.Notifications.Skill removed'), {
          variant: 'success',
          persist: false,
        });
        await refetch();
        handleReset();
        setCompleted(false);
      }
    },
  });

  // === End Graphql==/

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleUpload = (icon: string[], svgPath: string): void => {
    dispatch(setSkill({ icon: icon, svgPath, id: -1 }));
  };

  const handleSkillSelect = (id: number) => {
    const skill: SkillType = state.system.definedSkills.find(
      (skill) => skill.id === id
    );
    dispatch(setSkill(skill));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    dispatch(setSkill({ name: event.target.value }));
  };

  const handleDelete = async (id: number): Promise<any> => {
    await deleteSkill({
      variables: {
        skillId: id,
      },
    });
    refetch();
  };

  if (data && data.filterSkills && !completed) {
    const skills: SkillType[] = [];
    const {
      filterSkills: { edges },
    } = data;
    edges &&
      edges.length &&
      edges.forEach((edge: SkillEdge) => {
        skills.push({
          name: edge.node.name,
          icon: edge.node.icon,
          id: edge.node.id,
        });
        dispatch(getSkills(skills));
      });
    setCompleted(true);
  }
  const handleReset = () => {
    dispatch(
      setSkill({
        name: '',
        icon: [],
        id: -1,
        svgPath: '',
      })
    );
  };

  const handleConfirm = (confirm: boolean) => {
    setOpen(false);
    if (confirm) {
      state.system.currentSkill.id === -1
        ? addSkill({
            variables: {
              icon: state.system.currentSkill.icon,
              skillName: state.system.currentSkill.name,
            },
          })
        : editSkill({
            variables: {
              skillId: state.system.currentSkill.id,
              icon: state.system.currentSkill.icon,
              skillName: state.system.currentSkill.name,
            },
          });
    }
  };

  React.useEffect(() => {
    if (initialState) {
      getAllSkills({
        variables: {
          first: 100,
          direction: 'asc',
          filterField: 'name',
        },
      });
      setInitialState(false);
    }
  }, [state.system.definedSkills]);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Zap />}
        title={t('views:translation.settings.Define Skills')}
        action={
          <IconButton className={classes.helpBtn} aria-label="help">
            <HelpCircle />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={5}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <ImageUploader
                    onUpload={handleUpload}
                    svgPath={state.system.currentSkill.svgPath}
                    width={160}
                    height={160}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    name="skillName"
                    variant="outlined"
                    value={state.system.currentSkill.name}
                    onChange={handleChange}
                    label={t('common:translation.textfields.Skill Name')}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    disabled={loadingNew || loadingUpdate || loadingDelete}
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    <>
                      {!loadingNew || !loadingUpdate ? (
                        state.system.currentSkill.id === -1 ? (
                          t('common:translation.buttons.Create')
                        ) : (
                          t('common:translation.buttons.Update')
                        )
                      ) : (
                        <div className={classes.progress}>
                          <CircularProgress size={12} variant="indeterminate" />
                        </div>
                      )}
                    </>
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    disabled={loading}
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={handleReset}
                    type="reset"
                  >
                    {t('common:translation.buttons.Clean')}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <PerfectScrollbar>
              <List className={classes.skillList}>
                {state.system.definedSkills.length > 0 &&
                  state.system.definedSkills.map((skill) => (
                    <SkillItem
                      key={`${skill.id}-${skill.name}`}
                      name={skill.name}
                      icon={skill.icon}
                      id={skill.id}
                      onSelect={handleSkillSelect}
                      onDelete={handleDelete}
                      deleting={loadingDelete}
                    />
                  ))}
              </List>
            </PerfectScrollbar>
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
  );
};

export default SkillCreator;
