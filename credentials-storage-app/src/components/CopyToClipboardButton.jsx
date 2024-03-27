import React, { useState } from 'react';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import { IconButton, Tooltip } from '@mui/material';

export default function CopyToClipboardButton({ text }) {
    const copyTitle = "Copy";
    const copiedTitle ="Copied";

    const [copied, setCopied] = useState(false);
    const [title, setTitle] = useState(copyTitle);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTitle(copiedTitle);
            setTimeout(() => { 
                setCopied(false);   
                setTitle(copyTitle)},
            5000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <Tooltip arrow title={title} >
            {!copied ? 
                <IconButton color='primary' onClick={handleCopy} sx={{mx: 1}}>
                    <ContentCopyRoundedIcon /> 
                </IconButton>
                : 
                <span>
                    <IconButton color='primary' disabled sx={{mx: 1}}>
                        <DoneAllRoundedIcon htmlColor='green'/>
                    </IconButton>
                </span>
            }
    </Tooltip>
    );

};