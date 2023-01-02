import {Stack, Typography} from '@mui/material'
import productTeam from "./productTeam.json"

export default function AboutPage() {
    return (
        <>
            <Typography component="h2" variant="h3" gutterBottom>关于</Typography>
            <Typography variant="body1" color="text.secondary">此处应有关于</Typography>
            <Typography sx={{marginTop: 4}} variant="h3" gutterBottom>制作人员名单</Typography>
            <Stack component="ul" sx={{flexWrap: "wrap"}} direction="row">
                {
                    productTeam.map(value =>
                        <Typography component="li" variant="body1" color="text.secondary" sx={{
                            marginRight: 4,
                            marginBottom: 4,
                            "&::marker": {color: "text"}
                        }}>
                            {value}
                        </Typography>
                    )
                }
            </Stack>
        </>
    )
}