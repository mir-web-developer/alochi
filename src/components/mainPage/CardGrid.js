import React from "react";
import Grid from "@material-ui/core/Grid";
import { LangCard } from "./LangCard";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

export const CardGrid = () => {
  const classes = useStyles();
  const home = useSelector((state) => state.home);

  const cards = [...home.data];
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {
            <>
              <LangCard
                classes={classes}
                id={cards[0].id}
                heading={cards[0].heading}
                text={cards[0].text}
                link="class1"
                img={"https://source.unsplash.com/random"}
              />
              <LangCard
                classes={classes}
                id={cards[1].id}
                heading={cards[1].heading}
                text={cards[1].text}
                link="class2"
                img={"https://source.unsplash.com/random"}
              />
              <LangCard
                classes={classes}
                id={cards[2].id}
                heading={cards[2].heading}
                text={cards[2].text}
                link="class3"
                img={"https://source.unsplash.com/random"}
              />
              <LangCard
                classes={classes}
                id={cards[3].id}
                heading={cards[3].heading}
                text={cards[3].text}
                link="class4"
                img={"https://source.unsplash.com/random"}
              />
              <LangCard
                classes={classes}
                id={cards[4].id}
                heading={cards[4].heading}
                text={cards[4].text}
                link="class5"
                img={"https://source.unsplash.com/random"}
              />
              <LangCard
                classes={classes}
                id={cards[5].id}
                heading={cards[5].heading}
                text={cards[5].text}
                link="class6"
                img={"https://source.unsplash.com/random"}
              />
            </>
          }
        </Grid>
      </Container>
    </>
  );
};
