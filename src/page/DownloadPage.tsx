/** @jsxImportSource @emotion/react */

import {Box, Button, Stack, useMediaQuery, useTheme} from '@mui/material'
import omegaLargeIcon from '../image/omegaLarge.png'
import gamePreviewPicture from '../image/gamePreview.png'
import Grid2 from '@mui/material/Unstable_Grid2'
import {ReactComponent as WindowsIcon} from '../image/windows.svg'
import {ReactComponent as AppleIcon} from '../image/apple.svg'

const Downloads = () => (
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

const PreviewImage = () => (
    <img src={gamePreviewPicture} alt="游戏预览" css={{width: "100%"}}/>
)

let DownloadPage = (props: {className?: string}) => useMediaQuery(useTheme().breakpoints.up("md"))
    ? <Grid2 className={props.className} container>
        <Grid2 md={4}>
            <Downloads/>
        </Grid2>
        <Grid2 md={8} sx={{paddingLeft: 8, display: "flex"}}>
            <PreviewImage/>
        </Grid2>
    </Grid2>
    : <Box className={props.className}>
        <PreviewImage/>
        <Downloads/>
    </Box>
export default DownloadPage