import { Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import ImageComponent from '../../atoms/Image'

import BookDetails from '../../molecules/BookDetails';
import Button from '../../atoms/Button';

import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


type CardProps = {
  imgLocation : string
  title: string
  author : string
  readTime : number
  readers : string
  type : 'dots' | 'Read again' | 'Finished' | 'Add To Library'
  onClick:(event: React.MouseEvent<HTMLButtonElement>) => void
}

const CardComponent = ({imgLocation, title, author, readTime, readers, type, onClick} : CardProps) => {
  const[variant , setVariant] = useState<'outlined' | 'contained' | 'text'>('outlined')

  const mouseIn = (event: React.MouseEvent<HTMLDivElement>) =>{
    setVariant('contained')
  }
  const mouseOut = (event: React.MouseEvent<HTMLDivElement>) =>{
    setVariant('outlined')
  }

  var footer;
  if(type === 'dots'){
    footer = (
    <div>
      <MoreHorizIcon sx={{marginBottom:'4px', fontSize: 26,display:'block', marginLeft:'240px'}}/>   
      <div style={{display:'inline-flex', height:'15px', width:'88px', backgroundColor:'#E1ECFC'}}></div>
      <div style={{display:'inline-flex', height:'15px', width:'196px', backgroundColor:'#F1F6F4'}}></div>
    </div>)
  }else if(type === 'Read again'){
    footer = (
      <div style={{marginTop:'-6px'}}>
        {/* <ButtonComponent variant={'text'} color={'secondary'} hoverColor={''} startIcon={''} endIcon={''} title={'Read again'} titleColor={"inherit"} buttonDeco={'none'} width={284} borderColor={'#E5E4E2'} onClick={onClick} borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''} /> */}
        <Button
            sx={{width:284, borderColor:'#E5E4E2'}}
            variant='text'
            color='secondary'
            onClick={onClick}>
            <Typography color='inherit'>Read again</Typography>
        </Button>
      <div style={{display:'flex', height:'15px', width:'284px', backgroundColor:'#DFE8F6'}}></div>
      </div>
    )
  }else if(type === 'Finished'){
    footer = (
      <div style={{marginTop:'-8.1px'}}>
        {/* <ButtonComponent variant={'text'} color={'secondary'} hoverColor={''} startIcon={''} endIcon={''} title={'Finished'} titleColor={"inherit"} buttonDeco={'none'} width={284} borderColor={'#E5E4E2'} onClick={onClick} borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''} /> */}
        <Button
            sx={{width:284, borderColor:'#E5E4E2'}}
            variant='text'
            color='secondary'
            onClick={onClick}>
            <Typography color='inherit'>Finished</Typography>
        </Button>
        <div style={{display:'inline-flex', height:'15px', width:'88px', backgroundColor:'#E1ECFC'}}></div>
        <div style={{display:'inline-flex', height:'15px', width:'196px', backgroundColor:'#F1F6F4'}}></div>
      </div>
    )
  }else if(type === 'Add To Library'){
    footer = (
    <div style={{marginTop:'9.77px'}} onMouseOver={mouseIn} onMouseOut={mouseOut}>
      {/* <ButtonComponent variant={variant} color={'secondary'} hoverColor={''} startIcon={<AddIcon />} endIcon={''} title={'Add To Library'} titleColor={"inherit"} buttonDeco={'none'} width={284} borderColor={'#E5E4E2'} onClick={onClick} borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''} /> */}
      <Button
            sx={{width:284, borderColor:'#E5E4E2'}}
            variant={variant}
            color='secondary'
            onClick={onClick}
            startIcon={<AddIcon />}>
            <Typography color='inherit'>Finished</Typography>
        </Button>
    </div>
    )
  }

  return (
    <Card 
    sx={{position:"relative",
    width: 284,
    height: 466,
    margin: "auto",
    '&:hover':{backgroundColor: '#F1F6F4'}}}>
      <ImageComponent imgLocation={imgLocation} />
      <CardContent>
        <BookDetails title={title} author={author} readTime={readTime} readers={readers} />
      </CardContent>
      {footer}
    </Card>
  )
}

export default CardComponent
