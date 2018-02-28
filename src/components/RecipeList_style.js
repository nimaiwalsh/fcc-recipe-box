import { css } from 'react-emotion';

export const styles = css({
  width: '80%',
  maxWidth: '400px',
  '& ul': {
  position: 'relative',
  listStyleType: 'none',
  border: 'none',
  margin: '0',
  padding: '0',
  },
  '& li': {
    padding: '1rem',
    borderBottom: '1px solid #E6E7E2',
    color: '#898989',
    backgroundColor: '#F2F3EE',
    transition: 'all 0.3s ease-in-out',
  },
  '& li:hover': {
    backgroundColor: '#68b7d6',
    color: '#FFF',
  },
  '& li > img': {
    height: '20px',
    position: 'absolute',
    right: '10px',
    filter: 'none',
    transition: 'filter 0.3s linear',
  },
  '& li:hover > img': {
    filter: 'invert(0.5)',
  },
  '& a:first-child > li': {
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  '& a:last-child > li': {
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    borderBottom: 'none',
  },
  '& li > a': {
    color: '#898989',
  }
})
