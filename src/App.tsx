import React, {useState} from 'react';
import './App.css';

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
    SxProps
} from '@mui/material'
import HomePage from './Page/Home'
import AboutPage from './Page/About'

enum TabItem {
    Home,
    Download,
    About
}

function Content(props: { tabItem: TabItem, sx?: SxProps }) {
    switch (props.tabItem) {
        case TabItem.Download:
            return <></>
        case TabItem.About:
            return <AboutPage sx={{alignSelf: "center"}}/>
        case TabItem.Home:
            return <HomePage sx={{alignSelf: "center"}}/>
    }
}

function App() {
    const [tabItem, setTabItem] = useState(TabItem.Home)

    return (
        <Stack spacing={2} bgcolor="background">
            <CssBaseline/>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{"flexGrow": 1}}>Omega</Typography>
                    <Tabs value={tabItem} onChange={(event, value) => setTabItem(value)}
                          textColor="inherit" indicatorColor="secondary"
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
            <Content tabItem={tabItem} sx={{width: "100%"}}/>
        </Stack>
    );
}

export default App;
