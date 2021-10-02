import * as React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { GlobalContext } from 'src/context';

// MUI components
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Hidden from '@material-ui/core/Hidden';
import FreemancerPanel from '../FreemancerPanel';

// Types
import { IProps } from './type';

// Styles
import useRowStyles from './FreemanceTableRow.style';
import { setOpenPanel } from 'src/context/reducer';

const FreemancersTableRow: React.FC<IProps> = ({
  user,
  profile,
  onRefetch,
}: IProps) => {
  const classes = useRowStyles();
  const { t } = useTranslation('views', { useSuspense: false });
  const { state, dispatch } = React.useContext(GlobalContext);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => dispatch(setOpenPanel(user.id || false))}
          >
            {state.freemancersTable.openPanel === user.id ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {user && user.username}
        </TableCell>
        <Hidden smDown>
          <TableCell align="right">{user && user.email}</TableCell>
          <TableCell align="right">{profile && profile.slykUser}</TableCell>
          <TableCell align="right">
            {user && moment(user.createdAt).format('LLL')}
          </TableCell>
          <TableCell align="right">
            {user && user.active
              ? t('translation.freemancer.Actived')
              : t('translation.freemancer.Inactived')}
          </TableCell>
        </Hidden>
        <TableCell align="right">{profile && profile.profileStatus}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={7}
          align="center"
        >
          <Collapse
            in={state.freemancersTable.openPanel === user.id}
            timeout="auto"
            unmountOnExit
          >
            <Box margin={1}>
              <FreemancerPanel
                user={user}
                profile={profile}
                onRefetch={onRefetch}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default FreemancersTableRow;
