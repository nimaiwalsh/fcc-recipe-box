import { css } from 'react-emotion';

export const styles = css({
  width: '80%',
  maxWidth: '300px',
  '& ul': {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
  },
  '& ul > li': {
    border: '2px solid #f2f3ee',
    padding: '2px 5px',
    marginTop: '5px'
  }
})