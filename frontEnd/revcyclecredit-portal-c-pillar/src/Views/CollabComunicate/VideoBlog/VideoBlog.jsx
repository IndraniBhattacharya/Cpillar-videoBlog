import React from "react";

import { useDropzone } from "react-dropzone";
import { Container, Row, Col , Button , ButtonToolbar } from "react-bootstrap";
import styles from "./VideoBlog.css";
import VideoBlogItemService from "../API/VideoBlogItemService.js";
import SCard from "../VideoBlog/Card/SCard.jsx";
import ReactPlayer from "react-player";
import { AddData } from "./AddData";

class VideoBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Items: [],
      showModal : false,
      setShowModal : false
    };
  }

  componentDidMount() {
    VideoBlogItemService.retrieveAllItems().then((response) => {
      this.setState({ Items: response.data });
      console.log(response);
    });
  }

  render() {
    const videoList = this.state.Items.map((item) => {
      return (
        <div>
        <div className="col-sm-4">
          <SCard
            id={item.id}
            title={item.title}
            url={
              <ReactPlayer
                url={item.url}
                controls="true"
                width="100%"
                height="105%"
              />
            }
            description={item.description}
          />
        </div>
        </div>
      );
    });

    let closeModal=() => this.setState({showModal:false});
    let self=this.state;
    let fl=this;
    const temp = this;
    
    function Accept(props) {
      const {
        acceptedFiles,
        // rejectedFiles,
        getRootProps,
        getInputProps,
      } = useDropzone({
        accept: "video/*",
      });

      const acceptedFilesItems = acceptedFiles.map((file) => (
        // <li key={file.path}>{file.path}</li>
        fl=file.path
      ));

      // const rejectedFilesItems = rejectedFiles.map((file) => (
      //   <li key={file.path}>{file.path}</li>
      // ));

      return (
        // <section className="container">
        //   <div {...getRootProps({ className: "dropzone" })}>
        //     <input
        //       {...getInputProps()}
        //     />
        //     <p className={styles.dropzone}>
        //     <span>{"📂" }</span><br></br>
        //       Drag & drop files here, or <br></br>
        //       {/* <div className={styles.button}>Browse Files</div> */}
        //       <Button variant="light" className={styles.button} >Browse Files</Button>
        //     </p>
        //   </div>
          <ButtonToolbar>
              <Button
                variant="light"
                onClick={(e) => 
                  {
                  temp.setState({showModal:true});
                  }
              }
              >
                  <p className={styles.dropzone}>
                    <span>{"📂" }</span><br></br>
                      Drag & drop files here, or <br></br>
                     <Button variant="light" className={styles.button} >Browse Files</Button>
                  </p>
              </Button>
              <AddData
                show={self.showModal}
                onHide={closeModal}
              />

          </ButtonToolbar>
          //  <aside>
          //   <p>Accepted files</p>
          //   <ul className={styles.filess}>{acceptedFilesItems}</ul>
          //   <p>Rejected files</p>
          //   <ul className={styles.filess}>{rejectedFilesItems}</ul>
          // </aside>  
        //  </section> 
      );
    }

    return (
      <div className={styles.mainBody}>
        <Container>
          <Row>
            <Col sm={10}>
              <h3 className={styles.h3}>VideoBlog</h3>
              <Row>{videoList}</Row>
            </Col>
            <Col sm={2} className={styles.uploadVideo}>
              video upload
              <Accept />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default VideoBlog;