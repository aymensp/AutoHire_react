import React,{Component} from 'react';
class Chat extends Component
{
    constructor(props){
        super(props);
    }
    componentDidMount()
    {

        (function(d, m){
                var kommunicateSettings = {"appId":"35f242480b89ef8d90de38edf7c92b14f","popupWidget":true,"automaticChatOpenOnNavigation":true};
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
              })(document, window.kommunicate || {});
    }
    render()
    {
        return(<div></div>)
    }
}

export default Chat;

