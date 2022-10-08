import moment from 'moment'

export const copyToClipboard = (text: string) => {
    if (navigator) {
        console.log(text)
    }
}

export const dateFormatter = (date: string) => {
    return moment(date).format("MMMM Do YYYY")
}