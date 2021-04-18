import React,{Component} from 'react';
class Chat extends Component
{
    constructor(props){
        super(props);
    }
    componentDidMount()
    {

        (function(d, m){
                var kommunicateSettings = {"appId":"21e8912da8a13b475786155a9fa5f1fd","popupWidget":true,"automaticChatOpenOnNavigation":true};
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

