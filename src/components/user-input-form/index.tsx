import React from 'react';

import { Button, Grid, Checkbox, TextField, FormControlLabel } from '@material-ui/core';
import InputMask from 'react-input-mask';

export interface UserInfo {
  userName: string;
  userPhone: string;
  location: string;
}

interface Props {
  onSubmit?: (info: UserInfo) => void;
  submitText?: string;
}

const Form: React.FC<Props> = ({ onSubmit, submitText }) => {
  const [userPhone, setUserPhone] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [dataProcessConfirmed, setDataProcessConfirmed] = React.useState(false);
  const [isAllValid, setIsAllValid] = React.useState(false);

  const isUserNameValid = () => {
    return userName !== '';
  };

  const isUserPhoneValid = () => {
    return userPhone && !userPhone.includes('_');
  };

  const isLocationValid = () => {
    return location !== '';
  };

  const updateInputsValid = () => {
    console.log(userPhone.includes('_'));
    if (isUserNameValid() && isUserPhoneValid() && isLocationValid() && dataProcessConfirmed) {
      setIsAllValid(true);
    } else {
      setIsAllValid(false);
    }
  };

  React.useEffect(updateInputsValid, [userPhone, userName, location, dataProcessConfirmed]);

  const submit = () => {
    if (isAllValid) {
      onSubmit &&
        onSubmit({
          userName,
          userPhone,
          location,
        });
    }
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            error={!isUserNameValid()}
            label="Ваше имя"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
            autoComplete="name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputMask
            mask="9 ( 999 ) 999 99 99"
            value={userPhone}
            alwaysShowMask={false}
            onChange={(event) => {
              setUserPhone(event.target.value);
            }}
          >
            {() => (
              <TextField
                autoComplete="tel"
                label="Ваш номер"
                required
                error={!isUserPhoneValid()}
                fullWidth
              />
            )}
          </InputMask>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Населенный пункт"
            error={!isLocationValid()}
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
            }}
            autoComplete="locality"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            label="Даю согласие на обработку данных"
            control={
              <Checkbox
                checked={dataProcessConfirmed}
                onChange={(event) => {
                  setDataProcessConfirmed(event.target.checked);
                }}
                color="secondary"
              />
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={!isAllValid}
            onClick={submit}
            variant="contained"
            color="secondary"
            fullWidth
          >
            {submitText || 'Принять'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
