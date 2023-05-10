import { makeStyles } from "@material-ui/core/styles";

const CustomStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
    },
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    borderRadius: "10px",
  },
  cardContent: {
    flexGrow: 1,
  },
  productInfoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  productInfoCard: {
    width: "90%",
    maxWidth: "800px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  },
  productInfoMedia: {
    height: "400px",
    borderRadius: "10px",
  },
  productInfoContent: {
    padding: theme.spacing(3),
  },
  productInfoActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  productInfoButton: {
    borderRadius: "5px",
  },
}));

export default CustomStyles;