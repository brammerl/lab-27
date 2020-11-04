import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ShortForm = ({onSubmit, onChange, userName}) => (
  <form onSubmit={onSubmit}>
    <TextField label='Username' onChange={onChange} value={userName}/>
  </form>
)

export default ShortForm;