/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
    AppBar,
    Box, Container,
    createTheme,
    CssBaseline, GlobalStyles,
    Tab,
    Tabs,
    ThemeProvider,
    Toolbar,
    Typography
} from '@mui/material'
import DownloadPage from './page/DownloadPage'
import AboutPage from './page/AboutPage'
import HomePage from './page/HomePage'

enum TabItem {
    Home,
    Download,
    About
}

const CustomizedAppBar = (props: { className?: string, tabItem: TabItem, onChange: (value: TabItem) => void }) => (
    <AppBar className={props.className}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>Omega</Typography>
            <Tabs component="nav" value={props.tabItem} onChange={(event, value) => props.onChange(value)}
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
)

function App() {
    const [tabItem, setTabItem] = useState(TabItem.Home)

    const fullHeightCss = {height: "100%"}
    const columnFlexCss = {display: "flex", flexDirection: "column"}
    const containerCss = {marginTop: 4, marginBottom: 4}

    let content;
    switch (tabItem) {
        case TabItem.Download:
            content = (
                <Container sx={[containerCss, columnFlexCss, {flexGrow: 1, justifyContent: "center"}]} maxWidth="lg">
                    <DownloadPage/>
                </Container>
            )
            break
        case TabItem.About:
            content = (
                <Container sx={[containerCss, {flexGrow: 1}]} maxWidth="md">
                    <AboutPage/>
                </Container>
            )
            break
        case TabItem.Home:
            content = (
                <Container sx={containerCss} maxWidth="md">
                    <HomePage/>
                </Container>
            )
            break
    }

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
            <GlobalStyles styles={{"html, body, #root": {height: "100%"}}}/>

            <Box sx={[columnFlexCss, fullHeightCss, {overflow: "scroll"}]}>
                <CustomizedAppBar css={{position: "sticky"}} tabItem={tabItem} onChange={value => setTabItem(value)}/>
                {content}
            </Box>
        </ThemeProvider>
    );
}

export default App;