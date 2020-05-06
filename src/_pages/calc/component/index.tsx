import React from 'react';

import { ProductType } from 'data/products/interfaces';
import { Grid, Button, List, Typography, Switch, Box } from '@material-ui/core';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons';
import products from 'data/products';
import profiles, { Profiles } from 'data/profiles';
import ProfileCard from '_pages/production/profiles/profile-card';
import { data as handles, Handles } from 'data/equipments/handles';
import { data as glasses, Glasses } from 'data/equipments/glasses';
import ProductTypeSelect, { productTitles } from './components/product-type-select';
import ProductVariantSelect from './components/product-variant-select';
import ProductSizeInput from './components/product-size-input';
import SelectItem from './components/select-item';
import { EquipmentImage } from '_pages/production/profiles/profile-card/elements';
import ExtraParam from './components/extra-param-template';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { Wrapper, StyledStepper } from './elements';
import acessories, { Accessories } from 'data/accessories';
import UserInputForm, { UserInfo } from 'components/user-input-form';
import SendMail from 'utils/send-mail';

const initialProfile = Profiles.BERTA_SILVER_ECO_CLASSIC;

interface Props {
  initialProductType?: ProductType;
}

const Calc: React.FC<Props> = ({ initialProductType }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [productType, setProductType] = React.useState(
    initialProductType !== undefined ? initialProductType : -1,
  );
  const [productTypeVariant, setProductTypeVariant] = React.useState(-1);
  const [profile, setProfile] = React.useState(initialProfile);
  const [handle, setHandle] = React.useState(Handles.BERTA_STANDART);
  const [glass, setGlass] = React.useState(Glasses.STANDART);
  const [isSillNeeded, setSillNeeded] = React.useState(false);
  const [isSlopeNeeded, setSlopeNeeded] = React.useState(false);
  const [isTideNeeded, setTideNeeded] = React.useState(false);
  const [isMosquitoNetNeeded, setMosquitoNetNeeded] = React.useState(false);

  const nextButton = (
    <Button
      onClick={() => {
        setActiveStep((_currentActiveStep) => _currentActiveStep + 1);
      }}
      size="small"
      endIcon={<KeyboardArrowRight />}
      variant="contained"
      color="primary"
    >
      Далее
    </Button>
  );

  const prevButton = (
    <Button
      onClick={() => {
        setActiveStep((_currentActiveStep) => _currentActiveStep - 1);
      }}
      size="small"
      color="primary"
      startIcon={<KeyboardArrowLeft />}
    >
      Назад
    </Button>
  );

  const productTypeSelect = (
    <ProductTypeSelect
      activeType={productType}
      onChange={(newType) => {
        setActiveStep((_activeStep) => _activeStep + 1);
        setProductType(newType);
      }}
    />
  );

  const productVariantSelect = productType !== -1 && (
    <ProductVariantSelect
      activeType={productType}
      activeVariant={productTypeVariant}
      onChange={(newType) => {
        setProductTypeVariant(newType);
        setActiveStep((_activeStep) => _activeStep + 1);
      }}
    />
  );

  const productSizeInput = productTypeVariant !== -1 && (
    <>
      <ProductSizeInput variant={productTypeVariant} type={productType} />
      <Grid container spacing={2}>
        <Grid item>{prevButton}</Grid>
        <Grid item>{nextButton}</Grid>
      </Grid>
    </>
  );

  const equipmentsContent = (
    <>
      {' '}
      <Grid container>
        <Grid item xs={12} sm={6}>
          <List disablePadding>
            <SelectItem
              label="Профильная система"
              items={profiles.map((profileData) => (
                <ProfileCard data={profileData} key={profileData.name} />
              ))}
              onChange={(selectedItem) => {
                setProfile(selectedItem);
              }}
              activeItem={profile}
              name={profiles[profile].name}
              icon={profiles[profile].icon}
            />
            <SelectItem
              items={handles.map((handleData) => {
                return (
                  <Grid container spacing={1} key={handleData.name}>
                    <Grid item xs={12} />
                    <Grid item xs={12} />
                    <Grid item xs={12} md={6}>
                      <EquipmentImage src={handleData.icon} alt={handleData.name} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle2">{handleData.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {handleData.description}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
              onChange={(selectedItem) => {
                setHandle(selectedItem);
              }}
              activeItem={handle}
              label="Ручка"
              name={handles[handle].name}
              icon={handles[handle].icon}
            />
            <SelectItem
              onChange={(selectedItem) => {
                setGlass(selectedItem);
              }}
              activeItem={glass}
              items={glasses.map((glassData) => {
                return (
                  <Grid container spacing={1} key={glassData.name}>
                    <Grid item xs={12} />
                    <Grid item xs={12} />
                    <Grid item xs={12} md={6}>
                      <EquipmentImage src={glassData.icon} alt={glassData.name} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle2">{glassData.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {glassData.description}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
              label="Стеклопакет"
              name={glasses[glass].name}
              icon={glasses[glass].icon}
            />
          </List>
        </Grid>
      </Grid>
      <Box mt="24px" />
      <Grid container spacing={2}>
        <Grid item>{prevButton}</Grid>
        <Grid item>{nextButton}</Grid>
      </Grid>
    </>
  );

  const accessoriesContent = (
    <>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <List disablePadding>
            <ExtraParam
              icon={acessories[Accessories.SILL].icon.src}
              label="Дополнительно"
              name={acessories[Accessories.SILL].name}
              editIcon={
                <Switch
                  checked={isSillNeeded}
                  onChange={(event) => {
                    setSillNeeded(event.target.checked);
                  }}
                  edge="end"
                  color="primary"
                />
              }
            />
            <ExtraParam
              icon={acessories[Accessories.SLOPE].icon.src}
              label="Дополнительно"
              name={acessories[Accessories.SLOPE].name}
              editIcon={
                <Switch
                  checked={isSlopeNeeded}
                  onChange={(event) => {
                    setSlopeNeeded(event.target.checked);
                  }}
                  edge="end"
                  color="primary"
                />
              }
            />
            <ExtraParam
              icon={acessories[Accessories.TIDE].icon.src}
              label="Дополнительно"
              name={acessories[Accessories.TIDE].name}
              editIcon={
                <Switch
                  checked={isTideNeeded}
                  onChange={(event) => {
                    setTideNeeded(event.target.checked);
                  }}
                  edge="end"
                  color="primary"
                />
              }
            />
            <ExtraParam
              icon={acessories[Accessories.MOSQUITO_Net].icon.src}
              label="Дополнительно"
              name={acessories[Accessories.MOSQUITO_Net].name}
              editIcon={
                <Switch
                  checked={isMosquitoNetNeeded}
                  onChange={(event) => {
                    setMosquitoNetNeeded(event.target.checked);
                  }}
                  edge="end"
                  color="primary"
                />
              }
            />
          </List>
        </Grid>
      </Grid>
      <Box mt="24px" />
      <Grid container spacing={2}>
        <Grid item>{prevButton}</Grid>
        <Grid item>{nextButton}</Grid>
      </Grid>
    </>
  );

  const submit = (userInfo: UserInfo) => {
    const size = {
      width: 'Не задано',
      height: 'Не задано',
    };
    const subject = 'Запрос на рассчет стоимости окна с сайта';
    const sizeText = `Ширина: ${size.width} | Высота: ${size.height}`;
    const profileText = profiles[profile].name;
    const handleText = handles[handle].name;
    const glassText = glasses[glass].name;
    const productText = productTitles[productType];
    const type = products[productType][productTypeVariant].name;
    const msg = `
        <p> Тип: <strong>${productText}</strong></p>\r\n
        <p> Тип: <strong>${type}</strong></p>\r\n
        <p> Профиль: <strong>${profileText}</strong></p>\r\n
        <p> Ручка: <strong>${handleText}</strong></p>\r\n
        <p> Стеклопакет: <strong>${glassText}</strong></p>\r\n
        <p> Размеры: ${sizeText}</p>\r\n
        <p> Подоконник: ${isSillNeeded ? '+' : '-'}</p>\r\n
        <p> Москитная сетка: ${isMosquitoNetNeeded ? '+' : '-'}</p>\r\n
        <p> Откосы | Отлив: ${isSlopeNeeded ? '+' : '-'}</p>\r\n
				<p> Имя: <strong>${userInfo.userName}</strong></p>\r\n
        <p> Телефон: <strong>${userInfo.userPhone}</strong></p>\r\n
        <p> Населенный пункт: <strong>${userInfo.location}</strong></p>\r\n
      `;
    SendMail(subject, msg, (result) => {
      if (result.error) {
        alert('Ошибка при отправке запроса');
      }
    });
  };

  const userDataStep = (
    <>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <UserInputForm
            submitText="Рассчитать"
            onSubmit={(userInfo) => {
              setActiveStep((_current) => _current + 1);
              submit(userInfo);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={6}>
          {prevButton}
        </Grid>
      </Grid>
    </>
  );

  const stepsSrc = {
    typeSelect: { label: 'Выберите изделие', content: productTypeSelect, required: true },
    variantSelect: { label: 'Выберите тип', content: productVariantSelect, required: true },
    sizeInput: { label: 'Введите размеры', content: productSizeInput, required: true },
    equipments: { label: 'Выберите комплектацию', content: equipmentsContent, required: false },
    accessories: { label: 'Выберите аксессуары', content: accessoriesContent, required: false },
    userData: { label: 'Как с вами связаться?', content: userDataStep, required: true },
  };

  const steps =
    initialProductType !== undefined
      ? [
          stepsSrc.variantSelect,
          stepsSrc.sizeInput,
          stepsSrc.equipments,
          stepsSrc.accessories,
          stepsSrc.userData,
        ]
      : [
          stepsSrc.typeSelect,
          stepsSrc.variantSelect,
          stepsSrc.sizeInput,
          stepsSrc.equipments,
          stepsSrc.accessories,
          stepsSrc.userData,
        ];

  return (
    <Wrapper>
      <StyledStepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              onClick={() => {
                setActiveStep(index);
              }}
              optional={
                !step.required ? (
                  <Typography variant="caption" color="textSecondary">
                    Необязательно
                  </Typography>
                ) : (
                  ''
                )
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>{step.content}</StepContent>
          </Step>
        ))}
      </StyledStepper>
      {activeStep === steps.length && (
        <>
          <Box my="24px" />
          <Typography variant="h5">Заявка на рассчет принята, ждите звонка оператора</Typography>
          <Box my="24px" />
          <Button
            onClick={() => {
              setActiveStep(0);
            }}
            variant="contained"
            color="primary"
          >
            Рассчитать другое изделие
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Calc;
