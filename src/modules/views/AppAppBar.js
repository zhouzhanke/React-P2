import React from "react";
import PropTypes from "prop-types";
// import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";

// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  title: {
    fontSize: 24
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            // href="/premium-themes/onepirate/"
            href="/"
          >
            {"主标题"}
          </Link>
          <div className={classes.right}>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.button}
              // disabled
              href="/SignIn"
            >
              登录
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.button}
              href="/SignUp"
            >
              注册
            </Button>
            {/* <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              // href="/premium-themes/onepirate/sign-in/"
              href=""
            >
              {"登入"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              // href="/premium-themes/onepirate/sign-up/"
              href="https://ctdwc.csb.app/sign-up/"
            >
              {"注册"}
            </Link> */}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppAppBar);
