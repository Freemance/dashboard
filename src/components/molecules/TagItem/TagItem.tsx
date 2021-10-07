import * as React from 'react';
import clsx from 'clsx';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  CircularProgress,
} from '@material-ui/core';

import { Trash2 } from 'react-feather';

// Types
import { IProps } from './type';
import { GlobalContext } from 'src/context';

// Styles
import useTagItemStyles from './TagItem.style';

const TagItem: React.FC<IProps> = ({
  name,
  id,
  onSelect,
  onDelete,
  deleting: isDeleting = false,
}: IProps) => {
  const classes = useTagItemStyles();
  const { state } = React.useContext(GlobalContext);
  const [deleting, setDeleting] = React.useState(false);
  let timeOutId: number;

  const handleSelect = () => {
    if (id) onSelect(id);
    if (deleting) setDeleting(false);
  };
  const handleDown = () => {
    timeOutId = window.setTimeout(() => {
      if (!deleting) setDeleting(true);
    }, 1000);
  };

  const handleDelete = () => {
    if (id) onDelete(id);
    if (deleting) setDeleting(false);
  };

  const handleUp = () => {
    window.clearTimeout(timeOutId);
  };
  return (
    <ListItem
      className={clsx(classes.tagItem, deleting && 'deleting')}
      selected={id === state.system.currentTag.id}
      button
      onClick={handleSelect}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
    >
      <ListItemText primary={name} />
      {deleting && (
        <ListItemSecondaryAction>
          {!isDeleting ? (
            <IconButton onClick={handleDelete} className={classes.deleteButton}>
              <Trash2 color="error" />
            </IconButton>
          ) : (
            <div className={classes.progress}>
              <CircularProgress size={12} variant="indeterminate" />
            </div>
          )}
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};

export default TagItem;
