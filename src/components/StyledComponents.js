import React from 'react';
import styled, { css } from 'react-emotion';

export const Button = styled('button')({
  color: 'red'
});

export const Heading2 = styled('h2')({
  color: 'blue'
});

export const Heading3 = styled('h2')({
  color: 'green'
})


export const Form = styled('form')({
  '& input': {
    display: 'block'
  }
})

