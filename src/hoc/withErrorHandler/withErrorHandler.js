import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxx from '../Auxx';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state={
            error:null
        }
        componentDidMount(){
            axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;
            })
            axios.interceptors.response.use(null, error =>{
                this.setState({error:error});
            })
        }
      
        errorConfirmedError = () =>{
            this.setState({error:null})
        }
        render(){
            return(
                <Auxx>
                <Modal show={this.state.error}
                        modalClosed={this.errorConfirmedError}>
                    {this.state.error ? this.state.error.message : null}
                
                </Modal>
           
            <WrappedComponent {...this.props} />
            </Auxx>
            )
        }
    }
    
}

export default withErrorHandler;