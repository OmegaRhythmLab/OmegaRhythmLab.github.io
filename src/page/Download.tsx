/** @jsxImportSource @emotion/react */

import {Button, Container, Stack, useMediaQuery, useTheme} from '@mui/material'
import omegaLargeIcon from '../image/omegaLarge.png'
import gamePreviewPicture from '../image/gamePreview.png'
import Grid2 from '@mui/material/Unstable_Grid2'

export default function DownloadPage(props: { className?: string }) {
    const screenWidthUpMdQuery = useTheme().breakpoints.up("md")
    const isScreenWidthUpMd = useMediaQuery(screenWidthUpMdQuery)

    function Downloads() {
        return (
            <Stack spacing={4}>
                <img src={omegaLargeIcon} alt="logo" css={{width: "100%"}}/>
                <Stack spacing={2}>
                    <Button variant="outlined" sx={{fontSize: 16, padding: 2}}>
                        {/*todo 研究能改编svg颜色的方式*/}
                        {/*<img src={windowsIcon} css={{height: "2em", margin: 4}} alt="Windows图标"/>*/}
                        Windows 7/10/11
                    </Button>
                    <Button variant="outlined" sx={{fontSize: 16, padding: 2}}>
                        {/*<img src={appleIcon} css={{height: "2em", margin: "0 8px 8px 8px"}} aria-label="Windows图标"/>*/}
                        MacOS
                    </Button>
                </Stack>
            </Stack>
        )
    }

    function PreviewImage() {
        return (
            <img src={gamePreviewPicture} alt="游戏预览" css={{width: "100%"}}/>
        )
    }

    let downLoadPage;
    if (isScreenWidthUpMd) {
        downLoadPage = (
            <Grid2 container>
                <Grid2 md={4}>
                    <Downloads/>
                </Grid2>
                <Grid2 md={8} sx={{paddingLeft: 8, display: "flex"}}>
                    <PreviewImage/>
                </Grid2>
            </Grid2>
        )
    } else {
        downLoadPage = (
            <>
                <PreviewImage/>
                <Downloads/>
            </>
        )
    }

    return <Container maxWidth="lg" className={props.className}>{downLoadPage}</Container>
}