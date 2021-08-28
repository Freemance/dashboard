import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useUserMenuButtonStyle = makeStyles((theme: Theme) =>
  createStyles({
    badge: {
      '&.online': {
        backgroundColor: theme.palette.success.light,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          animation: '$ripple 1.2s infinite ease-in-out',
          border: '1px solid #44b700',
          content: '""',
        },
      },
      '&.offline': {
        backgroundColor: theme.palette.error.light,
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
    button: {
      backgrundColor: 'transparent',
    },
    infoItem: {
      float: 'left',
      marginRight: '0.8rem',
      flexDirection: 'column',
      alignItems: 'flex-end',
      padding: '0 !important',
    },
    infoText: {
      margin: '0 !important',
      padding: '0 !important',
      '& *': {
        color: `${theme.palette.text.primary} !important`,
        textAlign: 'end',
      },
      '& .MuiListItemText-primary': {
        textTransform: 'capitalize',
        marginLeft: '0.2rem',
        fontWeight: '600 !important',
      },
      '& .MuiListItemText-secondary': {
        textTransform: 'lowercase',
      },
    },
    avatar: {
      backgroundColor: theme.palette.primary.light,
      '& svg': {
        color: theme.palette.primary.contrastText,
        strokeWidth: 2,
        width: '60%',
      },
    },
  })
);

export default useUserMenuButtonStyle;
