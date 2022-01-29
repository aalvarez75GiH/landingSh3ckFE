import React from 'react'


class GoogleAuth extends React.Component {
     
    state = {
        isSignedIn: null
    }

    componentDidMount() {
        console.log('red flag 1')
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'915460618193-dcl1a1f3en6f3h22evu9jqk2aqdh1lcj.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                console.log('red flag 2')
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get() 
                })
                console.log(this.isSignedIn)
                this.auth.isSignedIn.listen(this.onAuthChange)

            })
        })
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    }

    onSignInClick = async() => {
        await this.auth.signIn()
        console.log(this.auth.currentUser.get().Du.tf)
    }

    onSignOutClick = async() => {
        await this.auth.signOut()
    }
    
    renderGoogleAuthButton() {
        if (this.state.isSignedIn === null) {
            return <button 
            onClick={this.onSignOutClick}
            className="googleAuthBtn">Undetermined</button>
        }else if (this.state.isSignedIn){
            return (
                <button 
                onClick={this.onSignOutClick}
                className="googleAuthBtn">Sign Out</button>
            )
        }else{
            return (
                <button 
                onClick={this.onSignInClick}
                className="googleAuthBtn">Sign In with Google</button>
            )
        }
    }
    
    render () {
        return <div className="googleAuthContainer">{this.renderGoogleAuthButton()}</div>
    }
}

export default GoogleAuth
