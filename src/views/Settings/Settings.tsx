import * as React from 'react';
import { useTranslation } from 'react-i18next';

// MUI components
import { Container, Divider, Grid } from '@material-ui/core';
import { Settings as SettingsIcon } from 'react-feather';

// Custom Components
import SkillCreator from 'src/components/molecules/SkillCreator';
import TagCreator from 'src/components/molecules/TagCreator';
import TextIcon from 'src/components/atoms/TextIcon';

// Styles
import useSettingsStyles from './Settings.style';

const Settings: React.FC = () => {
  const classes = useSettingsStyles();
  const { t } = useTranslation('views', { useSuspense: false });

  return (
    <Container className={classes.root}>
      <div style={{ padding: 20 }}>
        <Grid container spacing={4} direction="row">
          <Grid item xs={12}>
            <TextIcon
              label={t('translation.settings.Settings')}
              icon={<SettingsIcon size={18} />}
              color="secondary"
              variant="rounded"
            />
            <Divider />
          </Grid>

          <Grid item xs={12} md={6}>
            <SkillCreator />
          </Grid>
          <Grid item xs={12} md={6}>
            <TagCreator />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Settings;
