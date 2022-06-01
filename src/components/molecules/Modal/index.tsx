import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid} from '@mui/material';
import IconComponent from '../../atoms/Icon';

import RocketIcon from '@mui/icons-material/Rocket';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import FiberSmartRecordOutlinedIcon from '@mui/icons-material/FiberSmartRecordOutlined';
import TempleBuddhistOutlinedIcon from '@mui/icons-material/TempleBuddhistOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const KeepMountedModal = () => {
    
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const[color , setColor] = React.useState <'inherit' | 'secondary'>('inherit')

  const mouseIn = (event: React.MouseEvent<HTMLDivElement>) =>{
    setColor('secondary')
  }
  const mouseOut = (event: React.MouseEvent<HTMLDivElement>) =>{
    setColor('inherit')
  }
  
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description" 
      >
        <Box sx={style}>
        <Box sx={{display:'flex', marginLeft:'300px', marginRight:'300px', justifyContent:'space-around', marginTop:'30px', borderBottom: 1, borderColor: 'divider' }}>
            <Typography>Explore by category</Typography>
            <Typography>See recently added titles</Typography>
            <Typography>See popular titles</Typography>
        </Box>
        <br />

        <div style={{display:'flex',justifyContent:'center', marginLeft:'360px'}}>
        <Grid  container spacing={{ xs: 0, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
            <Grid item key='1' xs={2} sm={4} md={4}>
              <div onMouseOver={mouseIn} onMouseOut={mouseOut}>
            <IconComponent icon={<RocketIcon color={color} />} title={'Entrepreneurship'} titleColor={color} onClick={() => {}} />
            </div>
            </Grid>

            <Grid item key='2' xs={2} sm={4} md={4}>
            <IconComponent icon={<AccountBalanceOutlinedIcon />} title={'Politics'} titleColor={''} onClick={() => {}} />
            </Grid>

            <Grid item key='3' xs={2} sm={4} md={4}>
            <IconComponent icon={<ShowChartOutlinedIcon />} title={'Marketing & Sales'} titleColor={''} onClick={() => {}} />
            </Grid>

            <Grid item key='4' xs={2} sm={4} md={4}>
            <IconComponent icon={<ScienceOutlinedIcon />} title={'Science'} titleColor={''} onClick={() => {}} />
            </Grid>

            <Grid item key='5' xs={2} sm={4} md={4}>
            <IconComponent icon={<LocalHospitalOutlinedIcon />} title={'Health & Nutrition'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='6' xs={2} sm={4} md={4}>
            <IconComponent icon={<DirectionsRunOutlinedIcon />} title={'Personal Development'} titleColor={''} onClick={() => {}} />
            </Grid>

            <Grid item key='7' xs={2} sm={4} md={4}>
            <IconComponent icon={<FiberSmartRecordOutlinedIcon />} title={'Economics'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='8' xs={2} sm={4} md={4}>
            <IconComponent icon={<TempleBuddhistOutlinedIcon />} title={'History'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='9' xs={2} sm={4} md={4}>
            <IconComponent icon={<ChatBubbleOutlineOutlinedIcon />} title={'Communication Skills'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='10' xs={2} sm={4} md={4}>
            <IconComponent icon={<WorkOutlineOutlinedIcon />} title={'Corporate Culture'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='11' xs={2} sm={4} md={4}>
            <IconComponent icon={<LightbulbOutlinedIcon />} title={'Motivation & Inspiration'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='12' xs={2} sm={4} md={4}>
            <IconComponent icon={<AccountBalanceWalletOutlinedIcon />} title={'Money & Investments'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='13' xs={2} sm={4} md={4}>
            <IconComponent icon={<PsychologyOutlinedIcon />} title={'Psychology'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='14' xs={2} sm={4} md={4}>
            <IconComponent icon={<HourglassBottomOutlinedIcon />} title={'Productivity'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='15' xs={2} sm={4} md={4}>
            <IconComponent icon={<FavoriteBorderOutlinedIcon />} title={'Sex & Relationship'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='16' xs={2} sm={4} md={4}>
            <IconComponent icon={<ForestOutlinedIcon />} title={'Nature & Environment'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='17' xs={2} sm={4} md={4}>
            <IconComponent icon={<ThumbUpAltOutlinedIcon />} title={'Career & Success'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='18' xs={2} sm={4} md={4}>
            <IconComponent icon={<SchoolOutlinedIcon />} title={'Education'} titleColor={''} onClick={() => {}} />
            </Grid>
        </Grid>
        </div>
        </Box>
      </Modal>
    </div>
  );
}

export default KeepMountedModal; 