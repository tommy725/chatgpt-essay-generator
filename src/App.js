import './App.css';
import { Input, Typography, Card, Col, Row} from 'antd';
import { useState } from 'react';
const { Title, Text } = Typography;
const { TextArea } = Input;

function App() {
  const [value, setValue] = useState('');
  
  return (
    <>
      <Title>ChatGPT Detector</Title>
      <Row gutter={16}>
        <Col span={12} offset={4}>
          <Card className="no-padding">
            <Row gutter={16}>
              <Col span={16}>
                  <Text strong>Enter an essay topic.</Text>
                  <Input placeholder="" />
                  <Text strong>Ant Design (strong)</Text>
                  <TextArea placeholder="" autoSize />
                  <div
                    style={{
                      margin: '24px 0',
                    }}
                  />
              </Col>  
              <Col span={8} className="">
                
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;
