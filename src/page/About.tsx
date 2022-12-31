import {Container, Stack, Typography} from '@mui/material'
import productTeam from "./productTeam.json"

export default function AboutPage(props: { className?: string }) {

    return (
        <Container maxWidth={'md'} className={props.className}>
            <Stack spacing={4}>
                <Stack>
                    <Typography variant="h3" gutterBottom>关于</Typography>
                    <Typography variant="body1" color="text.secondary">此处应有关于</Typography>
                </Stack>
                <Stack>
                    <Typography variant="h3" gutterBottom>制作人员名单</Typography>
                    <Stack sx={{flexWrap: "wrap"}} direction="row" component="ul">
                        {productTeam.map(value => <Typography variant="body1" component="li" color="text.secondary" sx={{marginRight: 4, marginBottom: 4, "&::marker": {color: "text"}}}>{value}</Typography>)}
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}