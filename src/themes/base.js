// Many thanks to Anthony Bouch (https://www.58bits.com/blog/2020/05/27/material-ui-theme-switcher-react)
import normal from './normal'
import dark from './dark'

const themes = {
    normal,
    dark,
}

export default function getTheme(theme) {
    return themes[theme]
}