import React from 'react';


class ExampleWorkModal extends React.Component {
    render() {
      //-- setting 'example' to props.example(state.selectedExample) that was passed to it in example-work.js
      let example = this.props.example;
      //-- setting 'modalClass' to props.open(state.modalOpen) that was passed to it in example-work.js
      //-- if props.open(modalOpen) is set to true, return modal--open; if false, return modal--closed.
      let modalClass = this.props.open ? 'modal--open' : 'modal--closed';
      console.log('Example Work Modal:');
      console.log(example.href);
        return(
            <div className={"background--skyBlue " + modalClass}>
              <span className="color--cloud modal__closeButton">
                <i className="fa fa-window-close-o" onClick={ (evt) => this.props.closeModal(evt, example) }></i>
              </span>
              <img alt= { example.image.desc }
                  className="modal__image"
                  src="images/example1.png"/>
              <div className="color--cloud modal__text">
                <h2 className="modal__title">
                  { example.title }
                </h2>
                <a target="_blank" className="color--skyBlue modal__link"
                  href={ example.href }>
                  Check it out
                </a>
                <p className="modal__description">
                  { example.desc }
                </p>
              </div>
            </div>
        )
    };
};




export default ExampleWorkModal;



{/* 
  ====ORIGINAL HTML====
<div className="background--skyBlue modal--closed">
  <span className="color--cloud modal__closeButton">
    <i className="fa fa-window-close-o"></i>
  </span>
  <img alt="example screenshot of a project involving code"
      className="modal__image"
      src="images/example1.png"/>
  <div className="color--cloud modal__text">
    <h2 className="modal__title">
      Work Example Name
    </h2>
    <a className="color--skyBlue modal__link"
      href="#">
      Check it out
    </a>
    <p className="modal__description">
      A long description of the work in question.
    </p>
  </div>
</div> */}