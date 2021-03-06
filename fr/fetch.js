class ffr{
    constructor(){
        this.xhr = new XMLHttpRequest();
        return
    }
    open(URL, METHOD="GET"){
        if (METHOD.toLowerCase() == "get" || METHOD.toLowerCase == "post" || METHOD.toLowerCase == "put"){
            this.is_open = true;
            this.method = METHOD;
            this.url = URL;
            this.xhr.open(this.method, this.url);
            this.response = {};
        }else{
            console.error("False Method");
        }
    }

    send(){
        if (this.is_open){
            this.xhr.onload = this.onload_();
            this.xhr.send();
        }else{
            console.error("No Method and No URL");
        }
    }

    onload_(){
        this.response = this.xhr.response;
        this.onload();
    }

    onload(){

    }
}
