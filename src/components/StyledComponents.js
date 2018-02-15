import React from 'react';
import styled, { css } from 'react-emotion';

export const Button = styled('button')( props => ({
  color: 'green',
  backgroundColor: props.red ? 'red' : props.blue ? 'blue' : '',
  '&:hover': {
    backgroundColor: props.red ? 'pink' : props.blue ? 'yellow' : 'black',
  }
}));

export const Button2 = styled('button')({
  color: 'blue',
  display: 'block'
})

export const Heading2 = styled('h2')({
  color: 'blue'
});

export const Heading3 = styled('h2')({
  color: 'green'
});

export const Form = styled('form')({
  '& input': {
    display: 'block'
  }
});
