import { Grid, Card, Tabs, Tab, Box } from "@mui/material";
import React, { useState } from "react";

const shopping_image = require("../../images/shopping_image.png");

const TabPanel = (props: any) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const LogiReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${shopping_image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></Grid>
        <Grid item lg={5} sm={7}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value as number}
                  textColor="secondary"
                  indicatorColor="secondary"
                  onChange={handleChange}>
                  <Tab label="Login" sx={{ fontWeight: 700 }}></Tab>
                  <Tab label="Registration" sx={{ fontWeight: 700 }}></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                User Login
              </TabPanel>
              <TabPanel value={value} index={1}>
                User Registration
              </TabPanel>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LogiReg;
