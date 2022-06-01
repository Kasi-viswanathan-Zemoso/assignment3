import React from 'react'

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconComponent from '../../atoms/Icon';


import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';


type BookDetailsProps = {
  title: string
  author : string
  readTime : number
  readers : string
}

const BookDetails = ({title, author, readTime, readers} : BookDetailsProps) => {
  return (
    <div style={{display:"flex", flexDirection:"column", flexWrap: "wrap", textAlign:"left"}} >
      <Typography variant="h6" gutterBottom>
        <Box sx={{ fontWeight: 'bold'}}>{title}</Box>  
      </Typography>
      <Typography variant="body1" gutterBottom color="text.secondary">
          {author}
      </Typography>
      <div style={{display:"flex", justifyContent: "space-between"}}>
        <IconComponent icon={<AccessTimeIcon color='disabled'/>} title={`${readTime}-minute read`} titleColor={'text.secondary'} onClick={() => {}} />
        <IconComponent icon={<PersonOutlineSharpIcon color='disabled'/>} title={`${readers}`} titleColor={'text.secondary'} onClick={() => {}} />
      </div>
    </div>
  )
}

export default BookDetails;