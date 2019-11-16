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
      <Button
        href="https://www.jd.com/"
        variant="outlined"
        className={classes.button}
      >
        京东
      </Button>
      <Button
        href="https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E5%A5%B3%E8%A3%85&clk1=5641819c41616b9dc65698474c70d9aa&upsid=5641819c41616b9dc65698474c70d9aa"
        variant="outlined"
        color="primary"
        className={classes.button}
      >
        淘宝
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
