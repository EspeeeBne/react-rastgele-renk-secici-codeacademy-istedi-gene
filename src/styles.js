import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '2rem',
    boxSizing: 'border-box',
  },
  title: {
    marginBottom: '2rem',
    color: '#333',
    fontSize: '3rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
  },
  colorText: {
    marginBottom: '2rem',
    color: '#555',
    fontSize: '1.5rem',
    fontStyle: 'italic',
  },
  footerRight: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    padding: '1rem',
    fontSize: '14px',
    color: '#888',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.25rem',
    borderRadius: '8px',
    border: '2px solid #000',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
    marginBottom: '2rem',
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem 2rem',
    textAlign: 'center',
    borderRadius: '8px 8px 0 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
});

export default useStyles;
