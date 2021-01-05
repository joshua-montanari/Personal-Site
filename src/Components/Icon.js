import React, { useState } from 'react'
import Github from '../Icons/github.png'
import { makeStyles } from '@material-ui/styles'
import { useHistory } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import Zoom from '@material-ui/core/Zoom'
import './Icon.css'

const useSyles = makeStyles({
    root: {
        height: '8%',
        width: '8%',
        cursor: 'pointer',
    },
    textCenter: {
        textAlign: 'center',
    },
    center:{
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex'
    },
})

const GithubIcon = (props) => {
    const classes = useSyles()
    const history = useHistory()
    const sendLink = () => window.location.href = props.url
    const [isHover, setIsHover] = useState(false)

    const onHover = () => {
        setIsHover(true)
    }

    const offHover = () => {
        setIsHover(false)
    }

    return (
        <>
            <div className={classes.center}>
                <img 
                    className={classes.root}
                    src={props.iconUrl} 
                    alt={props.iconName}
                    onClick={sendLink}
                    onMouseEnter={onHover}
                    onMouseLeave={offHover}
                />
            
            {isHover ? (
                <>
                <Zoom in={true}>
            <h2 className={classes.textCenter}>{props.iconName}</h2>
                </Zoom>
                </>
            ):(
                <>
                </>
            )}
            </div>
        </>
    )
}

export default GithubIcon
