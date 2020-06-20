import React from 'react'

import {
    Grommet as GrommetIcon,
    FacebookOption,
    Instagram,
    Twitter
  } from "grommet-icons";
  
  import { Anchor, Box, Footer,  Grommet, Text } from "grommet";

  import "./styles/myFooter.css"

  export default function MyFooter({
    
    isLoading,
    className = "MyFooter",
    disabled = false,
    ...props
  }) {
    return (
      <div className="myFooter">
      <Social></Social>
      </div>
    );
  }
  

  const Media = () => (
    <Box direction="row" gap="xxsmall" justify="center">
      <Anchor
        a11yTitle="Share feedback on Github"
        href="https://www.instagram.com/"
        icon={<Instagram color="brand" />}
      />
      <Anchor
        a11yTitle="Chat with us on Slack"

        href="https://www.facebook.com/The-Mad-Mr-Daab-106990617730086/?view_public_for=106990617730086"

       
        icon={<FacebookOption color="brand" />}
      />
      <Anchor
        a11yTitle="Follow us on Twitter"

        href="https://twitter.com/MrDaab"

        icon={<Twitter color="brand" />}
      />
    </Box>
  );

  
  
  const Social = () => (
    
    <Grommet theme={myTheme}>
      <Footer className="container-fluid" background="#001a00" pad="small" border="true" round="medium" height="50px" margin={{top: "50px"}}>
        <Box align="center" direction="row" gap="xsmall">
          <GrommetIcon color="brand" size="medium" />
          <Text alignSelf="center" color="brand" size="small">
            Grommet
          </Text>
        </Box>
        <Media />
        <Text textAlign="center" size="xsmall">
          ©Copyright
        </Text>
      </Footer>
    </Grommet>
    
  );
  
  

  const myTheme = {
    global: {
      colors: {
        brand: "#115aba",
      },
    },
    anchor: {
       
    },
  };