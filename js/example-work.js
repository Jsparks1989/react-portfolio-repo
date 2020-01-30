import React from 'react';
import ExampleWorkModal from './example-work-modal';

class ExampleWork extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            'modalOpen': false,
            'selectedExample': this.props.work[0] 
        };

        //-- Giving the openModal/closeModal functions access to the object
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(evt, example){
        this.setState({
            'modalOpen': true,
            'selectedExample': example
        })
    }

    closeModal(evt){
        this.setState({
            'modalOpen': false
        })
    }

    render(){
        return(
            // Need to wrap both JSX elements in span tag so test will pass
            <span>
                <section className="section section--alignCentered section--description">

                    {this.props.work.map( (example, idx) => {
                        return(
                            //-- Passing the openModal function as a prop so bubble component has access to it.
                            <ExampleWorkBubble example={example} key={idx} openModal={this.openModal}  />
                        )
                    })}
                </section>
                {/* Can now pass state data from constructor to ExampleWorkModal */}
                <ExampleWorkModal example={this.state.selectedExample} open={this.state.modalOpen} closeModal={this.closeModal}  />
            </span>
        )
    }
}


class ExampleWorkBubble extends React.Component{
    render(){
        let example = this.props.example;
        //-- Want to call the openModal function here in ExampleWorkBubble, when user clicks on the image
        return (
            <div className="section__exampleWrapper" onClick={ (evt) => this.props.openModal(evt, example) }>
                <div className="section__example">
                <img alt={ example.image.desc }
                    className="section__exampleImage"
                    src={ example.image.src }/>
                <dl className="color--cloud">
                    <dt className="section__exampleTitle section__text--centered">
                    { example.title }
                    </dt>
                    <dd></dd>
                </dl>
                </div>
            </div>
        )
    }
}



export default ExampleWork;
export { ExampleWorkBubble };