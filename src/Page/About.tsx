import {Container, Stack, SxProps, Typography} from '@mui/material'
import productTeam from "./productTeam.json"

export default function AboutPage(props: { sx?: SxProps }) {

    return (
        <Container maxWidth={'md'} sx={props.sx}>
            <Stack spacing={4}>
                <Stack>
                    <Typography variant="h3" gutterBottom>关于</Typography>
                    <Typography variant="body1">此处应有关于</Typography>
                </Stack>
                <Stack>
                    <Typography variant="h3" gutterBottom>制作人员名单</Typography>
                    <Stack sx={{flexWrap: "wrap"}} direction="row" component="ul">
                        {productTeam.map(value => <Typography variant="body1" component="li" sx={{marginRight: 4, marginBottom: 4, "&::marker": {color: "text"}}}>{value}</Typography>)}
                    </Stack>
                </Stack>
            </Stack>
        </Container>

    )
}