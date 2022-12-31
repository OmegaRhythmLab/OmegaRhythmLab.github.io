import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Stack,
    SxProps,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material'
import imageUrl from '../image/cover.jpg'
import React from 'react'

interface News {
    title: string
    coverUrl: string
    author: string
}

export class MediumSizedNews implements News {
    author: string
    coverUrl: string
    title: string
    description: string

    constructor(author: string, coverUrl: string, title: string, description: string) {
        this.author = author
        this.coverUrl = coverUrl
        this.title = title
        this.description = description
    }
}

export class LargeSizedNews implements News {
    author: string
    coverUrl: string
    title: string

    constructor(author: string, coverUrl: string, title: string) {
        this.author = author
        this.coverUrl = coverUrl
        this.title = title
    }
}

let news = new Array<News>()
for (let i = 0; i < 20; i++) {
    news.push(new MediumSizedNews("此处应有标题", imageUrl, "此处应有作者", "此处应有简介"));
    news.push(new LargeSizedNews("此处应有标题", imageUrl, "此处应有作者"));
    news.push(new MediumSizedNews("此处应有标题", imageUrl, "此处应有作者", "此处应有简介"));
}

export default function HomePage(props: { sx?: SxProps}) {
    const screenWidthUpMdQuery = useTheme().breakpoints.up("md")
    const isScreenWidthUpMd = useMediaQuery(screenWidthUpMdQuery)

    return <Container maxWidth="lg" sx={props.sx}>
        <Stack spacing={2}>
            <Card sx={{position: 'relative'}}>
                <CardMedia component="img" image={imageUrl} title="封面图片"/>
                <CardContent
                    sx={{[screenWidthUpMdQuery]: {position: 'absolute', left: 0, top: 0, padding: 8}}}>
                    <Typography variant={isScreenWidthUpMd ? 'h3' : 'h4'} component="div">
                        恶化脑裂病情的最佳方式
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>双面下落的4K玩法,给你不一样的游戏体验</Typography>
                    <Button variant="contained" sx={{alignSelf: 'start', paddingLeft: 8, paddingRight: 8, marginTop: 4}} fullWidth={!isScreenWidthUpMd}>
                        下载
                    </Button>
                </CardContent>
            </Card>

            <Stack sx={{flexWrap: 'wrap'}} direction="row">{news.map((value) => {
                function flexGrow() {
                    if (value instanceof MediumSizedNews) {
                        return 2
                    } else if (value instanceof LargeSizedNews) {
                        return 3
                    } else {
                        throw new TypeError()
                    }
                }

                return (
                    <Card sx={{flex: flexGrow(), minWidth: 300, margin: 2}}>
                        <CardMedia component="img" image={value.coverUrl} title={value.title}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5"
                                        component="div">{value.title}</Typography>
                            <Typography variant="body2"
                                        color="text.secondary">{value.author}</Typography>
                        </CardContent>
                    </Card>
                )
            })}
            </Stack>
        </Stack>
    </Container>
}