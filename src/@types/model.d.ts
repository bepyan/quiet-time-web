declare module '@types' {
    interface Content {
        title: string
        date: string
        range: string
        texts: {
            verse?: number
            text: string
        }[]
    }
}
