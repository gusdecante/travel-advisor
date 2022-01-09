import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    padding: 25,
  },
  formControl: {
    margin: 10,
    minWidth: 120,
    marginBottom: 30,
  },
  loading: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    heigth: "75vh",
    overflow: "auto",
  },
}));
