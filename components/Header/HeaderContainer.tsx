import React from "react";
import Link from "next/link";
import { Box, Container, Typography, List, ListItem } from "@material-ui/core";
import { RoomOutlined } from "@material-ui/icons";
import useStyles from "./styles/styles";
import BadgeCart from "../MUI/Badge";
import SearchIcon from "@material-ui/icons/Search";

const HeaderContainer = (props) => {
  const clasess = useStyles();
  return (
    <Box component="header">
      <Container>
        <Box className={clasess.headerItems}>
          <Box className={clasess.city}>
            <RoomOutlined />
            <Typography>Ростов-На-Дону</Typography>
          </Box>
          <Typography variant="h4">PRINTSTORES</Typography>
          <Box className={clasess.actions}>
            <SearchIcon className={clasess.find} />
            <BadgeCart />
          </Box>
        </Box>
        <Box component="nav">
          <List className={clasess.menu}>
            <ListItem className={clasess.menuItem}>
              <Link href="/">
                <a>Главная</a>
              </Link>
            </ListItem>
            <ListItem className={clasess.menuItem}>
              <Link href="/catalog">
                <a>Каталог</a>
              </Link>
            </ListItem>
            <ListItem className={clasess.menuItem}>
              <Link href="/">
                <a>Новости</a>
              </Link>
            </ListItem>
            <ListItem className={clasess.menuItem}>
              <Link href="/">
                <a>Отзывы</a>
              </Link>
            </ListItem>
            <ListItem className={clasess.menuItem}>
              <Link href="/">
                <a>Контакты</a>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderContainer;
