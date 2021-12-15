declare module '@types' {
    interface Content {
        title: string
        date: string
        range: string
        verses: Verse[]
        commentaries: string[]
    }

    interface Verse {
        verse?: number
        text: string
    }
}
