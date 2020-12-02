class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput('h3');
        this.button = createButton('This is the button name');
    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        this.title.html("Save Your Mother!");
        this.title.position((displayWidth/2)-50, displayHeight/2);
        this.input.position((displayWidth/2)-50, (displayHeight/2)-50);
        this.button.position((displayWidth/2)-50, (displayHeight/2)-20);
        if(this.button.mousePressed()=>{
            
        })
    }
}