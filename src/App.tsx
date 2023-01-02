/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
    AppBar,
    CssBaseline,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    Box, createTheme, ThemeProvider, Container
} from '@mui/material'
import HomePage from './page/Home'
import AboutPage from './page/About'
import DownloadPage from './page/Download'

enum TabItem {
    Home,
    Download,
    About
}

function ContentSwitcher(props: { tabItem: TabItem, className?: string }) {
    const alignSelfCenterCss = {alignSelf: "center"}

    switch (props.tabItem) {
        case TabItem.Download:
            return (
                //todo 这种垂直居中的方法会导致手机横屏时游戏预览图溢出屏幕，
                <Box className={props.className}
                     sx={[{position: "absolute", top: "50%", transform: "translate(0, -50%)"}, alignSelfCenterCss]}>
                    <Toolbar/>
                    <Container maxWidth="lg">
                        <DownloadPage/>
                    </Container>
                </Box>
            )
        case TabItem.About:
            return (
                <Container maxWidth="md" className={props.className}>
                    <AboutPage/>
                </Container>
            )
        case TabItem.Home:
            return (
                <Container className={props.className} maxWidth="md">
                    <HomePage/>
                </Container>
            )
    }
}

function App() {
    const [tabItem, setTabItem] = useState(TabItem.Home)

    const theme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#18ffff"
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>Omega</Typography>
                    <Tabs component="nav" value={tabItem} onChange={(event, value) => setTabItem(value)}
                          textColor="inherit" indicatorColor="primary"
                          sx={{
                              alignSelf: "stretch",
                              ".MuiTabs-scroller": {"display": "flex"},
                              ".MuiTabs-indicator": {"height": 4}
                          }}>
                        <Tab label="主页" value={TabItem.Home}/>
                        <Tab label="下载" value={TabItem.Download}/>
                        <Tab label="关于" value={TabItem.About}/>
                    </Tabs>
                </Toolbar>
            </AppBar>
            <ContentSwitcher tabItem={tabItem} css={{marginTop: 64}}/>
        </ThemeProvider>
    );
}

export default App;
