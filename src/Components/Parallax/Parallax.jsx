import React from 'react';
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";


function AppList () {
     const listTitle = "Services Offered"; 
     const pargraphOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    return (<div className="p-1">
              <h1 className="listTitle">{listTitle}</h1>
              <hr className="hrLine"/>
              <p className="parOne">{pargraphOne}</p>
    </div>);
}
const AppListTwo = () =>{
    const listTitleTwo = "Technical Support";
    const pargraphOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Enim praesent elementum facilisis leo. Potenti nullam ac tortor vitae purus. Neque laoreet suspendisse interdum consectetur libero id faucibus. Libero id faucibus nisl tincidunt. Tincidunt eget nullam non nisi est sit amet facilisis magna. Neque vitae tempus quam pellentesque nec nam aliquam sem. Nisl tincidunt eget nullam non. Amet dictum sit amet justo.";
    return(<div className="p-2">
              <Image className="tecSupportImg" src="https://microage.ca/nwd/wp-content/uploads/sites/39/2021/07/shutterstock_1006835566-1024x598.png" alt="technical support"/> 
              <h1 className="listTitleTwo">{listTitleTwo}</h1>
              <hr className="hrLineTwo"/>
              <p className="paragraphOne">{pargraphOne}</p>
              <section >
                   <ListGroup className="l-1" as="ul">
                          <ListGroup.Item as="li" active>
                                    Apple Configuration 
                          </ListGroup.Item>
                          <ListGroup.Item as="li" active>
                                   OS Configuration 
                          </ListGroup.Item>
                          <ListGroup.Item as="li" active>
                                    Hardware Repair and installation 
                          </ListGroup.Item>
                          <ListGroup.Item as="li" active>
                                    How to use device assistance One on One  
                          </ListGroup.Item>
                    </ListGroup> 
              </section>
    </div>);
}

const AppListThree = () =>{
           const webTitle = "Web Disign & Development";
           const sentanceWeb = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lectus mauris ultrices eros. Elementum curabitur vitae nunc sed velit dignissim. Sem fringilla ut morbi tincidunt augue interdum velit. Nisl nisi scelerisque eu ultrices vitae auctor.";

    return(<div>
                 <Image className="webDevelopmentImg" src="https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/051/Web_development_-_Main.png" Alt="web development"/>
                 <h1 className="webTitle">{webTitle}</h1>
                 <hr className="hrLineThree"/>
                 <p className="sentanceWeb">{sentanceWeb}</p>
                 <section >
                   <ListGroup className="l-2" as="ul">
                          <ListGroup.Item as="li" active>
                                    Web Design
                          </ListGroup.Item>
                          <ListGroup.Item as="li" active>
                                   Web Development
                          </ListGroup.Item>
                          <ListGroup.Item as="li" active>
                                    Web implemantation 
                          </ListGroup.Item>
                          <ListGroup.Item as="li" active>
                                   Web maintiance 
                          </ListGroup.Item>
                    </ListGroup> 
              </section>
    </div>);
}

const AppListFour = () =>{
     const webMaintiance = "Website Maintiance & Support";
     const maintianceSentance = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem. Aliquam eleifend mi in nulla posuere. Et sollicitudin ac orci phasellus.";
    return(<div>
              <Image className="webMaintianceImg" src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/09/website-maintenance-plan-featured-image.jpg" alt=""/> 
              <h1 className="webMaintianceTitle">{webMaintiance}</h1> 
              <hr className="maintianceHR"/>
              <p className="maintianceSentace">{maintianceSentance}</p>
              <section >
                   <ListGroup className="l-3" as="ul">
                          <ListGroup.Item as="li" active>
                                    Help and Support 
                          </ListGroup.Item>
                          <ListGroup.Item as="li" active>
                                   Update of information 
                          </ListGroup.Item>
                          <ListGroup.Item as="li" active>
                                    Implemantation of new fetures 
                          </ListGroup.Item>
                          <ListGroup.Item as="li" active>
                                   Optimization of site  
                          </ListGroup.Item>
                    </ListGroup> 
              </section>
    </div>);
}

function Parallax() {
    return ( <div>
        <AppList/>
        <AppListTwo/>
        <AppListThree/>
        <AppListFour/>
    </div> );
}

export default Parallax;