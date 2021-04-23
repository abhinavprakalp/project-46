class form{
    constructor(){
        this.button1=createButton("Fight as Rama");
        this.button2=createButton("Fight as Arjun");
        this.button3=createButton("Fight as Bheema");
        this.title=createElement('h2');
    }

    hide(){
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.title.hide();
    }
    display(){
        this.title.html("Fight between great warriors");
        this.title.position(300,50);

        image(rama,100,200,100,100);
        this.button1.position(100,300);

        image(arjuna,300,200,100,100);
        this.button2.position(300,300);

        image(bheeema,500,200,100,100);
        this.button3.position(500,300);

        this.button1.mousePressed(()=>{
            gameState = 1;
        });

        this.button2.mousePressed(()=>{
            gameState = 2;
        });

        this.button3.mousePressed(()=>{
            gameState = 3;
        });
    }
}