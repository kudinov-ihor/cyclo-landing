import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    [theme.breakpoints.up("xl")]: {
      maxWidth: "1440px !important",
    },
  },
  bigTitle: {
    fontWeight: 700,
    color: '#1C1F25',
    lineHeight: '75px',
    [theme.breakpoints.up("sm")]: {
      fontSize: '60px'
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '45px'
    }
  }
}));

export default useStyles;