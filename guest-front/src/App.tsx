import Navbar from './features/comments/components/Navbar.tsx';
import {Container} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import CommentList from './features/comments/CommentList.tsx';
import CommentForm from './features/comments/CommentForm.tsx';

const App = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <Container maxWidth='xl' component='main'>
        <Routes>
          <Route path='/' element={<CommentList/>}/>
          <Route path='/new-comment' element={<CommentForm/>}/>
        </Routes>
      </Container>
    </>
  );
};

export default App;