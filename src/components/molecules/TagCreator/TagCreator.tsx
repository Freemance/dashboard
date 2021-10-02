import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { GlobalContext } from 'src/context';
import { useQuery, useMutation } from '@apollo/client';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Mui Components
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
import { HelpCircle, Tag } from 'react-feather';
import TagItem from '../TagItem';

// Styles
import useTagCreatorStyles from './TagCreator.style';

// Types
import { IProps } from './type';
import { TagType } from 'src/context/state';
import CustomDialog from '../CustomDialog';
import { GET_TAGS } from 'src/providers/graphql/core/core.query.gql';
import { TagEdge, Tags } from 'src/providers/graphql/core/type/Tags';
import { getTags, setTag } from 'src/context/reducer';
import {
  ADD_TAG,
  EDIT_TAG,
  DELETE_TAG,
} from 'src/providers/graphql/core/core.mutation.gql';

const TagCreator: React.FC<IProps> = (props: IProps) => {
  const classes = useTagCreatorStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation(['views', 'common'], { useSuspense: false });
  const { state, dispatch } = React.useContext(GlobalContext);
  const [open, setOpen] = React.useState(false);
  const tags: TagType[] = [];

  const { refetch, loading } = useQuery(GET_TAGS, {
    variables: {
      first: 100,
      direction: 'asc',
      field: 'name',
    },
    onCompleted: (data: Tags) => {
      if (data) {
        const {
          filterTags: { edges },
        } = data;
        edges &&
          edges.length &&
          edges.forEach((edge: TagEdge) => {
            console.log(edge.node);
            tags.push({
              name: edge.node.name,
              id: edge.node.id,
            });
            dispatch(getTags(tags));
          });
      }
    },
  });

  // Add new tag
  const [addTag, { loading: loadingNew }] = useMutation(ADD_TAG, {
    onCompleted: (payload) => {
      if (payload) {
        enqueueSnackbar(t('common:translation.Notifications.Tag created'), {
          variant: 'success',
          persist: false,
        });
        handleReset();
        refetch({
          first: 100,
          direction: 'asc',
          field: 'name',
        });
      }
    },
  });

  // Edit current tag
  const [editTag, { loading: loadingUpdate }] = useMutation(EDIT_TAG, {
    onCompleted: (payload) => {
      if (payload) {
        enqueueSnackbar(t('common:translation.Notifications.Tag updated'), {
          variant: 'success',
          persist: false,
        });
        handleReset();
        refetch({
          first: 100,
          direction: 'asc',
          field: 'name',
        });
      }
    },
  });

  // Delate tag
  const [deleteTag, { loading: loadingDelete }] = useMutation(DELETE_TAG, {
    onCompleted: (payload) => {
      if (payload) {
        enqueueSnackbar(t('common:translation.Notifications.Tag removed'), {
          variant: 'success',
          persist: false,
        });
        handleReset();
        refetch({
          first: 100,
          direction: 'asc',
          field: 'name',
        });
      }
    },
  });

  // === End Graphql==/

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    setOpen(true);
  };

  const handleTagSelect = (id: number): void => {
    const tag: TagType = state.system.definedTags.find((tag) => tag.id === id);
    dispatch(setTag(tag));
  };

  const handleDelete = (id: number): void => {
    deleteTag({
      variables: {
        tagId: id,
      },
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    dispatch(setTag({ name: event.target.value }));
  };

  const handleReset = () => {
    console.log('reseting');
    dispatch(
      setTag({
        name: '',
        id: -1,
      })
    );
  };

  const handleConfirm = (confirm: boolean) => {
    setOpen(false);
    if (confirm) {
      state.system.currentTag.id === -1
        ? addTag({
            variables: {
              tagName: state.system.currentTag.name,
            },
          })
        : editTag({
            variables: {
              tagId: state.system.currentTag.id,
              tagName: state.system.currentTag.name,
            },
          });
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Tag />}
        title={t('views:translation.settings.Define Tags')}
        action={
          <IconButton className={classes.helpBtn} aria-label="help">
            <HelpCircle />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    name="tagName"
                    variant="outlined"
                    value={state.system.currentTag.name}
                    fullWidth
                    onChange={handleChange}
                    label={t('common:translation.textfields.Tag Name')}
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
                      {state.system.currentTag.id === -1
                        ? t('common:translation.buttons.Create')
                        : t('common:translation.buttons.Update')}
                      {(loadingNew || loadingUpdate || loadingDelete) && (
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
          <Grid item xs={12}>
            <PerfectScrollbar>
              <List className={classes.tagList}>
                {state.system.definedTags.length > 0 &&
                  state.system.definedTags.map((tag) => (
                    <TagItem
                      key={tag.id}
                      name={tag.name}
                      onSelect={handleTagSelect}
                      onDelete={handleDelete}
                      id={tag.id}
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

export default TagCreator;
