const shortTitle = (title: string) => {
    if (title?.length > 20) {
        return title.slice(0, 20) + '...'
    }
    return title
}

export default shortTitle