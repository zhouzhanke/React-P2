import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex"
  },
  iconsWrapper: {
    height: 120
  },
  icons: {
    display: "flex"
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark
    }
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150
  }
}));

const LANGUAGES = [
  {
    code: "en-US",
    name: "中文"
  },
  {
    code: "fr-FR",
    name: "其他"
  }
];

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="https://im.qq.com/" className={classes.icon}>
                  <img
                    src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1573812415&di=70b9ccf7f2658e56156e84c038ef6d9b&src=http://img5.pcpop.com/ArticleImages/0x0/1/1225/001225661.jpg"
                    alt="QQ"
                    height="64"
                    width="64"
                  />
                </a>
                <a href="https://weixin.qq.com/" className={classes.icon}>
                  <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574410557&di=da2ff0a8e475d7a5cd798a821817f6ca&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff89a35d2617c0c2b83f9c6149021b383cd6b977730fa-Al3vpM_fw658"
                    alt="微信"
                    height="64"
                    width="64"
                  />
                </a>
              </Grid>
              <Grid item>{/* <Copyright /> */}</Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              信息列表
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="./home">链接1</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="./home">链接2</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            {/* multi-language */}
            <Typography variant="h6" marked="left" gutterBottom>
              语言
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true
              }}
              className={classes.language}
            >
              {LANGUAGES.map(language => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">
              {"所有权声明"}
              {/* {"Icons made by "}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </Link>
              {" from "}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="Flaticon"
              >
                www.flaticon.com
              </Link>
              {" is licensed by "}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link> */}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
