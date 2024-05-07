import {Box , IconButton , useTheme} from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme"
import InputBase from "@mui/material"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import PersonOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import SearchIcon from '@mui/icons-material/AccountBalanceOutlined'
const Navbar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    return (
        <div>
            Navbar
        </div>
    )
}

export default Navbar
