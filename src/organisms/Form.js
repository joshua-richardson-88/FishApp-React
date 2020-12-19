import React from 'react';
import { Label } from '../atoms';

export default function Form(props) {
  return (
    <form className='fish-form' name={props.name} onSubmit={props.handleSubmit}>
      <Label>{props.label}</Label>
      {props.children}
      <input type='submit' value='Submit' />
      {props.formError && (
        <div className='fish-form-error'>
          <Label>{props.errorMessage}</Label>
        </div>
      )}
    </form>
  );
}
