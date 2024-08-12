import './App.css';
import './styles.scss';
import PdfForm from './components/PdfForm';
import { Col, Row } from 'antd';
import CommentList from './components/CommentList';

function App() {
  return (
    <div >
    <Row>
      <Col span={16}><PdfForm /></Col>
      <Col span={8}><CommentList /></Col>
    </Row>
    </div>
  );
}

export default App;
