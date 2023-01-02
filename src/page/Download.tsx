/** @jsxImportSource @emotion/react */

import {Button, Stack, useMediaQuery, useTheme} from '@mui/material'
import omegaLargeIcon from '../image/omegaLarge.png'
import gamePreviewPicture from '../image/gamePreview.png'
import Grid2 from '@mui/material/Unstable_Grid2'
import {ReactComponent as WindowsIcon} from '../image/windows.svg'
import {ReactComponent as AppleIcon} from '../image/apple.svg'

function Downloads() {
    return (
        <Stack spacing={4}>
            <img src={omegaLargeIcon} alt="logo" css={{width: "100%"}}/>
            <Stack spacing={2}>
                <Button variant="outlined" sx={{fontSize: 16, padding: 2}}>
                    <WindowsIcon css={{height: 48, marginRight: 8}}/>
                    Windows 7/10/11
                </Button>
                <Button variant="outlined" sx={{fontSize: 16, padding: 2}}>
                    <AppleIcon css={{height: 48, marginRight: 8}}/>
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

let DownloadPage = () => useMediaQuery(useTheme().breakpoints.up("md"))
    ? <Grid2 container>
        <Grid2 md={4}>
            <Downloads/>
        </Grid2>
        <Grid2 md={8} sx={{paddingLeft: 8, display: "flex"}}>
            <PreviewImage/>
        </Grid2>
    </Grid2>
    : <>
        <PreviewImage/>
        <Downloads/>
    </>
export default DownloadPage