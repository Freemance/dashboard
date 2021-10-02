import * as React from 'react';
import clsx from 'clsx';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  CircularProgress,
} from '@material-ui/core';

import { Trash2 } from 'react-feather';

// Custom components
import Svgicon from 'src/components/atoms/SvgIcon';

// Types
import { IProps } from './type';
import { GlobalContext } from 'src/context';

// Styles
import useSkillItemStyles from './SkillItem.style';

const SkillItem: React.FC<IProps> = ({
  name,
  icon,
  id,
  onSelect,
  onDelete,
  deleting: isDeleting = false,
}: IProps) => {
  const classes = useSkillItemStyles();
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
      className={clsx(classes.skillItem, deleting && 'deleting')}
      selected={id === state.system.currentSkill.id}
      button
      onClick={handleSelect}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
    >
      <ListItemIcon className={classes.skillIcon}>
        <Svgicon color="primary" paths={icon} />
      </ListItemIcon>
      <ListItemText primary={name} />
      {deleting && (
        <ListItemSecondaryAction>
          {!isDeleting ? (
            <IconButton onClick={handleDelete}>
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

export default SkillItem;
