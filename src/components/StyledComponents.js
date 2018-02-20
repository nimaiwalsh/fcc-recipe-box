import styled from 'react-emotion';

export const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px'
});

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


