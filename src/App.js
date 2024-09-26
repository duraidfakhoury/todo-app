import './App.css';
import { Component } from 'react';
import  Container  from 'react-bootstrap/Container';
import { InputGroup, Row , Col, FormControl, Button, ListGroup} from 'react-bootstrap';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      userInput : "",
      list:[]
    }
  }

  updateInput(value) { 
    this.setState({
      userInput : value
    })
  }

  addItem() {
    if (this.state.userInput !== ""){
      const userInput = {
        id : Math.random(),
        value  : this.state.userInput
      };
      const list = [...this.state.list]
      list.push(userInput);
      this.setState(
        {
          list,
          userInput:"",
        }
      )
    }
  }
 
  deleteItem(key){
    const list = [...this.state.list];
    const updateList = list.filter((item)=> item.id!== key);
    this.setState({
      list:updateList,
    });
  }

  editItem = (index) => {
    const todos = [...this.state.list];
    const editedTodo = prompt("edit this todo: ");
    if(editedTodo !==null && editedTodo.trim !== ''){
      let updatedTodos = [...todos];
      updatedTodos[index].value=editedTodo;
      this.setState({
        list:updatedTodos,
      })
    }
  }

  render() {
    return(
     <Container
     style={{
     }}
     >
      <Row
        style={{
          display:'flex',
          justifyContent:'center',
          alignContent:'center',
          fontSize:'3rem',
          fontWeight:'bolder',
        }}>TODO LIST</Row>
      <hr/>
      <Row>
        <Col md = {{span : 5 , offset : 4 }}>
          <InputGroup className='mb-3'>
            <FormControl
            placeholder='Add Item ...'
            size='lg'
            aria-label='Add somthing'
            aria-describedby='basic-addon2'
            value={this.state.userInput}
            onChange={(item)=>this.updateInput(item.target.value)}
            />
            <InputGroup>
              <Button
              variant='dark'
              className='mt-2'
              onClick={()=>this.addItem()}
              >Add</Button>
            </InputGroup>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{span : 5 , offset : 4 }}>
          <ListGroup>
            { this.state.list.map((item,index)=>{
                return(
                  <div key = {index}>
                    <ListGroup.Item
                      variant='dark'
                      action 
                      style={{
                        display : 'flex',
                        justifyContent : 'space-between',
                      }}>
                        {item.value}
                        <span>
                          <Button style={{marginRight:"10px"}} 
                          variant='light'
                          onClick={()=>this.deleteItem(item.id)}>
                            Delete
                          </Button>
                          <Button variant='light'
                          onClick={()=>this.editItem(index)}>
                            edit
                          </Button>
                        </span>
                      </ListGroup.Item>
                  </div>
                )
              })
            }
          </ListGroup>
        </Col>
      </Row>
     </Container> 
    );
  }
}
export default App;
