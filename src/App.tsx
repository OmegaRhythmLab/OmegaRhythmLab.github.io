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
    Stack,
    Box, createTheme, ThemeProvider
} from '@mui/material'
import HomePage from './page/Home'
import AboutPage from './page/About'
import DownloadPage from './page/Download'

enum TabItem {
    Home,
    Download,
    About
}

function Content(props: { tabItem: TabItem, className?: string }) {
    const alignSelfCenterCss = {alignSelf: "center"}

    switch (props.tabItem) {
        case TabItem.Download:
            return (
                //todo 这种垂直居中的方法会导致手机横屏时游戏预览图溢出屏幕，
                <Box sx={[{position: "absolute", top: "50%", transform: "translate(0, -50%)"}, alignSelfCenterCss]}>
                    <Toolbar/>
                    <DownloadPage className={props.className}/>
                </Box>
            )
        case TabItem.About:
            return <AboutPage className={props.className} css={alignSelfCenterCss}/>
        case TabItem.Home:
            return <HomePage className={props.className} css={alignSelfCenterCss}/>
    }
}

function App() {
    const [tabItem, setTabItem] = useState(TabItem.Home)

    const theme = createTheme({
        palette: {
            mode: "dark",
            primary:{
                main: "#18ffff"
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            <Stack spacing={2} bgcolor="background">
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>Omega</Typography>
                        <Tabs value={tabItem} onChange={(event, value) => setTabItem(value)}
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

                <Toolbar/>
                <Content tabItem={tabItem}/>
            </Stack>
        </ThemeProvider>
    );
}

export default App;
