import React from 'react';
import {
  Typography,
  Grid,
  List,
  ListItem,
  CardActionArea,
  CardContent,
  IconButton,
  Box,
} from '@material-ui/core';
import { Add, HelpOutline as Help } from '@material-ui/icons';
import { ProfileData } from 'data/profiles';

import LineParam from 'layout/ui/LineParam';
import { Thermometer, Diamond } from 'layout/icons';

import Dialog from 'layout/ui/dialog';
import { ProfileVisualParams } from 'data/profiles/interfaces';
import * as E from './elements';

interface Props {
  data: ProfileData;
}

const ProfileCard: React.FC<Props> = ({ data }) => {
  const [isExpanded, setExpanded] = React.useState(false);

  const onDialogClose = () => {
    setExpanded(false);
  };

  const Image = (
    <E.Image state={isExpanded ? 1 : 0} framesPath={data.framesPath} textures={data.textures} />
  );

  const More = () => {
    return (
      <Dialog
        isOpen={isExpanded}
        onClose={onDialogClose}
        title={data.name}
        content={
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {Image}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary">
                {data.description}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <LineParam
                    label="Тепло|Шумо изоляция"
                    value={(isExpanded && data.visualParamValues[ProfileVisualParams.WARM]) || 0}
                    icon={<Thermometer />}
                    showValue
                  />
                </Grid>
                <Grid item xs={12}>
                  <LineParam
                    label="Внешний вид"
                    value={(isExpanded && data.visualParamValues[ProfileVisualParams.DESIGN]) || 0}
                    icon={<Diamond />}
                    showValue
                  />
                </Grid>
                <Grid item xs={12}>
                  <LineParam
                    label="Комфорт"
                    value={(isExpanded && data.visualParamValues[ProfileVisualParams.COMFORT]) || 0}
                    icon={<Add />}
                    showValue
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box mt="24px" />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Характеристики
              </Typography>
              <List disablePadding>
                {Object.values(data.specifiactions).map((specification) => {
                  return (
                    <E.CustomListItem key={specification.name} disableGutters divider>
                      <div>
                        <Typography component="span" variant="body2">
                          {specification.name} {specification.units && ` (${specification.units})`}
                        </Typography>
                        <IconButton>
                          <Help />
                        </IconButton>
                      </div>
                      <Typography component="span" variant="subtitle2">
                        {specification.values[0]}
                      </Typography>

                      {/* {specification.description} */}
                    </E.CustomListItem>
                  );
                })}
              </List>
            </Grid>

            <Grid item xs={12} />
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Комплектация
              </Typography>
              <List disablePadding>
                {Object.values(data.equipments).map((eqiupment) => {
                  return (
                    <ListItem divider disableGutters key={eqiupment.name}>
                      <Grid container spacing={1}>
                        <Grid item xs={12} />
                        <Grid item xs={12} />
                        <Grid item xs={4} md={6}>
                          <E.EquipmentImage
                            src={eqiupment.data[0].icon}
                            alt={eqiupment.data[0].name}
                          />
                        </Grid>
                        <Grid item xs={8} md={6}>
                          <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            height="100%"
                          >
                            <Typography variant="subtitle2" gutterBottom color="textSecondary">
                              {eqiupment.name}
                            </Typography>
                            <Typography variant="subtitle1">{eqiupment.data[0].name}</Typography>
                            <Typography variant="body2" color="textSecondary">
                              {eqiupment.data[0].description}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        }
      ></Dialog>
    );
  };

  return (
    <>
      <More />
      <CardActionArea
        onClick={() => {
          setExpanded(true);
        }}
      >
        <E.Wrapper>
          <E.Media>
            <E.CardImageHelper>{Image}</E.CardImageHelper>
          </E.Media>
          <CardContent>
            <Typography variant="h6" style={{ fontWeight: 400 }} gutterBottom align="center">
              {data.name}
            </Typography>
          </CardContent>
        </E.Wrapper>
      </CardActionArea>
    </>
  );
};

export default React.memo<typeof ProfileCard>(ProfileCard);
