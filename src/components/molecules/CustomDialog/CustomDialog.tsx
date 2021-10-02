import * as React from 'react';
import { useTranslation } from 'react-i18next';

// Mui Components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Slide, { SlideProps } from '@material-ui/core/Slide';

// Styles
import useCustomDialogStyles from './CustomDialog.style';

// Types
import { IProps } from './type';

const Transition = React.forwardRef(function Transition(
  props: SlideProps,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialog: React.FC<IProps> = ({
  isOpen = false,
  message = 'Are you sure?',
  title = 'Confirm',
  variant = 'info',
  onConfirm,
}: IProps) => {
  const classes = useCustomDialogStyles();
  const { t } = useTranslation('common', { useSuspense: false });
  const handleClose = (): void => {
    onConfirm(false);
  };
  const handleConfirm = (event: React.SyntheticEvent): void => {
    // event.target.disabled = true;
    onConfirm(true);
  };

  return (
    <div>
      <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="xs"
        onClose={handleClose}
        open={isOpen}
        TransitionComponent={Transition}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Avatar
                style={{
                  backgroundColor: 'transparent',
                }}
              >
                {variant === 'info' ? (
                  <InfoOutlinedIcon className={classes.info} fontSize="large" />
                ) : variant === 'error' ? (
                  <ErrorOutlineIcon
                    className={classes.error}
                    fontSize="large"
                  />
                ) : (
                  <CheckCircleOutlineIcon
                    className={classes.success}
                    fontSize="large"
                  />
                )}
              </Avatar>
            </Grid>
            <Grid item xs={9}>
              <DialogContentText id="alert-dialog-description">
                {message}
              </DialogContentText>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button color="primary" onClick={handleConfirm} variant="contained">
            {t('translation.buttons.Confirm')}
          </Button>
          <Button
            autoFocus
            color="primary"
            onClick={handleClose}
            variant="outlined"
          >
            {t('translation.buttons.Cancel')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomDialog;
