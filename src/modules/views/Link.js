import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" className={classes.button}>
        链接1
      </Button>
      <Button variant="outlined" color="primary" className={classes.button}>
        链接2
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        链接3
      </Button>
      <Button variant="outlined" disabled className={classes.button}>
        未启用
      </Button>
      <Button
        variant="outlined"
        href="#outlined-buttons"
        className={classes.button}
      >
        链接4
      </Button>
      {/* <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        multiple
        type="file"
      />
      <label htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
      <Button variant="outlined" color="inherit" className={classes.button}>
        Inherit
      </Button> */}
    </div>
  );
}
