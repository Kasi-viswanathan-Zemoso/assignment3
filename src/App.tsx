import React from 'react';
import './App.css';
import ButtonComponent from './components/atoms/Button';
import IconComponent from './components/atoms/Icon';
import ImageComponent from './components/atoms/Image';

import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

import { ThemeProvider } from '@mui/material/styles'
import CustomTheme from './themes';
import AvatarComponent from './components/molecules/Avatar';
import TextFieldComponent from './components/molecules/TextField';
import AppBarComponent from './components/organisms/AppBar';
import CardComponent from './components/organisms/Card';
import MyLibraryPage from './pages/MyLibrary';
import EntrepreneurshipPage from './pages/Entrepreneurship';
import KeepMountedModal from './components/molecules/Modal';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BookDetailViewPage from './pages/BookDetailView';

function App() {
  return (

    <ThemeProvider theme={CustomTheme}>
    <Router>
      <Routes>
        <Route path="/" element={<MyLibraryPage />} />
        <Route path="/mylibrary:val" element={<MyLibraryPage />} />
        <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
        <Route path="/bookdetailview:bookId" element={<BookDetailViewPage />} />
      </Routes>
    </Router>

      {/* <KeepMountedModal /> */}
      {/* <ButtonComponent variant={'outlined'} color={'secondary'} hoverColor={''} startIcon={<AddIcon />} endIcon={''} title={'Add To Library'} titleColor={"inherit"} buttonDeco={'none'} width={284} borderColor={'#E5E4E2'} /> */}

    {/* <div className="App">
      <AppBarComponent />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly", maxWidth:"500px" }}>
        <ButtonComponent variant={'outlined'} color={undefined} hoverColor={''} startIcon={''} endIcon={''} title={'Read now'} titleColor={"primary"} buttonDeco={'none'} width={100} borderColor={'#3A4649'} />
        <ButtonComponent variant={'contained'} color={'primary'} hoverColor={'#20BA68'} startIcon={''} endIcon={''} title={'Finished Reading'} titleColor={undefined} buttonDeco={'none'} width={150} borderColor={''} />
        <ButtonComponent variant={'text'} color={undefined} hoverColor={''} startIcon={''} endIcon={<ArrowForwardIcon color='disabled' />} title={'Send to Kindle'} titleColor={'text.secondary'} buttonDeco={'none'} width={136} borderColor={''} />
      </div>
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly", maxWidth:"500px" }}>
        <IconComponent icon={<DeleteIcon />} title={''}  titleColor={''} />
        <IconComponent icon={<DeleteIcon color='secondary'/>} title={'Delete'} titleColor={'secondary'} />
        <IconComponent icon={<AccessTimeIcon color='disabled'/>} title={'13-minute read'} titleColor={'text.secondary'} />
      </div>
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly", maxWidth:"900px" }}>
        <ImageComponent imgLocation={`/static/images/3.png`}/>
        <CardComponent />
      </div>
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly", maxWidth:"500px" }}>
        <AvatarComponent userName={'Kasi Viswanathan'} color={''} icon={<KeyboardArrowUpIcon />} />
        <AvatarComponent userName={'Viswanathan'} color={'green'} icon={<KeyboardArrowDownIcon />} />
      </div>
      <div>
        <TextFieldComponent id={'bookSearch'} placeholder={'Search by title or author'} icon={<SearchIcon htmlColor='black'/>} length={500} />
      </div>
      <div>
      </div>
    </div> */}
    </ThemeProvider>
  );
}

export default App;
