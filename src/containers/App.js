import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'
import * as userActions from '../actions/UserActions'



class App extends Component {

	componentWillMount(/*handle = this.props.handleLogin*/) {
	console.log('зашел в вил маунт');
	 VK.Auth.getLoginStatus(r=> console.log(r))// eslint-disable-line no-undef
	// VK.Auth.getLoginStatus((response) => {// eslint-disable-line no-undef
	// 	console.log('xyuok')
 //  if (response.session) {
 //    console.log('zashel d login');
 //      if (response.status =='connected') { 
        
 //        console.log(this)
 //        handle();

 //      } else {
 //        console.log('lalala')
 //      }
	// 	}
	// });
	  	console.log('proshel mimo auth') // запрос прав на доступ 

}

  render() {
    const { user, page } = this.props
    const { getPhotos } = this.props.pageActions
    const { handleLogin } = this.props.userActions

    return <div className='row'>
      <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching} error={page.error}/>
      <User name={user.name} handleLogin={handleLogin} error={user.error} />
    </div>
  }
}



function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)