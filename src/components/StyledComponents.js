import styled from 'react-emotion';

export const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px'
});

export const Button = styled('button')( props => ({
  color: '#F2F3EE',
  padding: '10px',
  borderRadius: '10px',
  display: 'block',
  cursor: 'pointer',
  ':focus': {
    outline: 'none',
  },
  backgroundColor: props.warning ? '#EE776E' : props.primary ? '#5187C1' : props.secondary ? '#68B7D6' : '',
  '&:hover': {
    backgroundColor: props.warning ? '#C95A5A' : props.primary ? '#4A81BB' : props.secondary ? '#60ABC9' : '',
  }
}));