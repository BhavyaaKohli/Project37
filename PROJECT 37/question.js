class Question {
    constructor() {
      this.input =createInput("Name");
      this.input1 =createInput("Enter correct option No.");
      this.button = createButton('Submit');
      this.option1 = createElement('h3')
      this.option2 = createElement('h3')
      this.option3 = createElement('h3')
      this.option4 = createElement('h3')
      this.question = createElement('h3');
     }
    hide(){
      this.input.hide();
      this.button.hide();
     
    }
  
    display(){
      var title = createElement('h2')
      title.html("My Quiz Game");
      title.position(420, 0);
      
      this.question.html("Question:- What starts and end with letter'E', but has only one letter? ")
        this.question.position(120,100)
        
        this.option1.html("1 : Everyone")
        this.option1.position(210,130)

        this.option2.html("2 : Envelope")
        this.option2.position(210,160)

        this.option3.html("3 : Estimate")
        this.option3.position(210,190)

        this.option4.html("4 : Example")
        this.option4.position(210,220)


       this.input.position(210, 290);
       this.input1.position(500, 290);
       this.button.position(470, 340);
  
      this.button.mousePressed(()=>{
      this.input.hide();
       this.button.hide();
  
        player.name = this.input.value();
        
        playerCount+=1;
        player.index = playerCount;
        player.update()
        player.updateCount(playerCount);
        
     
      });
      
  
  
    }
  }
  