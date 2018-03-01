import { css } from 'react-emotion';

export const styles = css({
  '& .ingredient .delete': {
    position: 'absolute',
    width: '15px',
    backgroundColor: '#ee776e',
    padding: '1px 4px',
    borderRadius: '4px',
    textAlign: 'center',
    color: '#FFF',
    right: '1px',
    top: '2px',
    cursor: 'pointer'
  },
  '& .ingredient .delete:hover': {
    backgroundColor: '#831F1F'
  },
  '& .add-ingredient button': {
    display: 'inline-block',
    marginLeft: '5px'
  },
  '& input': {
    border: '2px solid #68b7d6',
    padding: '8px',
    borderRadius: '4px',
    borderColor: '#68b7d6',
    marginTop: '10px',
    color: '#898989',
    fontSize: '16px',
  },
  '& ul': {
    listStyleType: 'none',
    margin: '0',
    padding: '0'
  },
  '& ul > div > li': {
    border: '2px solid #CC8F85',
    padding: '3px 5px',
    marginTop: '5px',
    position: 'relative'
  }
});

export const transitionStyles = css({
  '& .fade-enter': {
    opacity: '0'
  },
  '& .fade-enter.fade-enter-active': {
    opacity: '1',
    transition: 'opacity 1000ms ease-in'
  },
  '& .fade-exit': {
    opacity: '1'
  },
  '& .fade-exit.fade-exit-active': {
    opacity: '0',
    transition: 'opacity 500ms ease-in'
  }
});
