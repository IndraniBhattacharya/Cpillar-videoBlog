import React , {Component} from 'react';
import {Modal , Button , Form } from 'react-bootstrap';
import styles from "./VideoBlog.css";
import ApiService from '../API/ApiService.js'

export class AddData extends Component{
    constructor(props){
        super(props);
        this.state ={ category : '',
                      file : Object ,
                      title : ''};
        this.onFileChangeHandler=this.onFileChangeHandler.bind(this);
        this.handleCategory=this.handleCategory.bind(this);
        this.handlefilePath=this.handlefilePath.bind(this);
        this.handleTitle=this.handleTitle.bind(this);
    }

    onFileChangeHandler = (e) => {
      e.preventDefault();
      
          let formData = new FormData();
          formData.append('file', this.state.file);
          formData.append('category',this.state.category);
          formData.append('title',this.state.title);
          ApiService.upload(formData)
              .then(res => {
                      //console.log(res.data);
                      alert("Form submitted successfully.")
              })
  };

    handleCategory (event) {
      this.setState({category:event.target.value})
    }

    handlefilePath (event) {
      this.setState({file:event.target.files[0]});
      // this.setState({file:this.props.fl});
      console.log(event.target.files[0]);
    }

    handleTitle (event) {
      this.setState({title:event.target.value})
    }

    render(){

      //const {file} = this.state ;
      const {title} = this.state ;
      const {category} = this.state ;

        return(
            <Modal
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Add Video Details
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="container">
                    <Form onSubmit={this.onFileChangeHandler} encType="multipart/form-data">
                      <Form.Group controlId="videoCategory">
                        <Form.Label>Category</Form.Label> <span className={styles.requiredfield} > </span> : <br></br>
                          <select required
                              type="text" 
                              name="category" 
                              onChange={this.handleCategory}
                              placeholder="Enter video category"  
                              value={category}
                              className={styles.select}
                              >
                                 <option selected value="" disabled>Enter video category</option> 
                                 <option value="Interview">Interview</option>
                                 <option value="Certification">Certification</option>
                              </select>
                      </Form.Group>

                      <Form.Group controlId="videoTitle">
                        <Form.Label>Title</Form.Label> <span className={styles.requiredfield} > </span> :
                        <Form.Control 
                            type="text" 
                            value={title}
                            placeholder="Enter video title" 
                            name="title"
                            required
                            onChange={this.handleTitle}/>
                      </Form.Group>
                       
                      <Form.Group controlId="file">
                      <Form.Label>Video File </Form.Label> <span className={styles.requiredfield} > </span> :
                        <Form.File required
                                   name="file" 
                                   accept= "video/*"
                                   onChange={this.handlefilePath}/>

                        {/* <input type="file" className="form-control" name="file" onChange={this.handlefilePath} /> */}
                      </Form.Group>

                      <Button variant="light" type="submit" className={styles.button} id={styles.saveForm} >
                        Submit
                      </Button>       &nbsp;&nbsp;      
                      <Button variant="light" className={styles.button} id={styles.saveForm} onClick={this.props.onHide}>Close</Button>

                    </Form>
                    
                </div>
              </Modal.Body>
            </Modal>
    )
  }
}