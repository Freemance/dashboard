import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// Types
import { IProps } from './type';

// Styles
import useFooterStyles from './Footer.styles';

const Footer: React.FC<IProps> = ({ className, ...rest }: IProps) => {
  const classes = useFooterStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body1">
        Copyright &copy;{' '}
        <Link component="a" href="https://www.solidgraph.net/" target="_blank">
          Slyk.io
        </Link>
        2018-{`${new Date().getFullYear()}`}
      </Typography>
      <Typography variant="caption">Users control.</Typography>
    </div>
  );
};

export default Footer;
