import React from 'react'
import './EmailList.css'
import RedoIcon from '@mui/icons-material/Redo';
import { Checkbox, IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from './Section';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import EmailRow from './EmailRow';
function EmailList() {
    return (
        <div className='emailList'>
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList_sections">
                <Section  Icon={InboxIcon} title='primary' color='red' selected />
                <Section  Icon={PeopleIcon} title='Social' color='#1A73E8'/>
                <Section  Icon={LocalOfferIcon} title='Promoting' color='green' />
            </div>
            <div className="emailList_List">
                <EmailRow 
                title="Twitch"
                subject="Hey fello coder!!!"
                description="- This is a test"
                time="10pm"/> 
                 <EmailRow 
                title="Twitch"
                subject="Hey fello coder!!!"
                description="- This is amazing"
                time="10pm"/> 
            </div>
        </div>
    )
}

export default EmailList