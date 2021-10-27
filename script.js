        // let btn = document.getElementById("btn");
        // btn.setAttribute("class", "form1")
        // let value = btn.getAttribute("name");
        // console.log(value);
        // // let value = btn.removeAttribute("name");
        //  let value = btn.hasAttribute("class");
        //  console.log(value);

        // Inline Style using JavaScript
        // let btn = document.getElementById("btn");
        // btn.style.cssText = "background-color:black; color:white";
        // btn.setAttribute('style','color:white;background-color:black;');
        // btn.style.color = "red";
        // btn.style.backgroundColor = "black";
        // btn.style.color = "white";
        // btn.style.cssText +=   'background:red;border: 2px solid green;';

        // Get computed CSS 
        // let btn = document.getElementById("btn");
        // let css = getComputedStyle(btn);
        // console.log(css.color);

        // CSS Classes 
        // let box = document.getElementById("box");
        // console.log(box.className);
        // box.className += "dim";
        // console.log(box.classList);
        // for(let css of box.classList){
        //     console.log(css);
        // }

        // box.classList.add("dim");
        // box.classList.remove("dim")
        // box.classList.replace("color","dim");

        // let result = box.classList.contains("dim");
        // console.log(result);

        // box.classList.toggle("dim");

        // Width and Height of an Element 
        // let box = document.getElementById("box");
        // let width = box.offsetWidth;
        // let height = box.offsetHeight;
        // let width = box.clientWidth;
        // let height = box.clientHeight;
        // console.log(width);
        // console.log(height);

        // DOM Events 
        // DOM events are actions that occur as a result of the user action or as result of state change of the elements of DOM tree 

        // function btnClick(){
        //     alert("The button has been clicked!");
        // }
        // let btn = document.getElementById("btn");
        // btn.addEventListener('click',function (){
        //     alert("The button was clicked!")
        // });

        // btn.addEventListener('mouseover', function (){
        //     console.log("Mouse is on the button!");
        // })
        // btn.addEventListener('mouseout', function (){
        //     console.log("Mouse is out of the button!");
        // })

        // let btn = document.getElementById("btn");

        // function click1(){
        // console.log("click1 activated");
        // }

        // function click2(){
        // console.log("click2 activated");
        // }

        // btn.addEventListener('click',click1);
        // btn.addEventListener('click',click2);

        // btn.removeEventListener('click',click2);
        // Mouse Events
        // onclick event 
        // function fun(){
        //     console.log("Click Event")
        // }
        // oncontextmenu
        // function fun(){
        //         console.log("Right Click Event")
        // }
        // ondblclick
        // function fun(){
        //         console.log("Double Click Event")
        // }
        // onmousedown
        // function fun(){
        //         console.log("Mouse Down Event")
        // }

        // onmouseup
        // function fun(){
        //         console.log("Mouse Up Event")
        // }

        // onmouseover
        // function fun(){
        //         console.log("Mouse Over Event");
        // }

        // onmouseout
        // function fun(){
        //         console.log("Mouse Out Event");
        // }
        // window.addEventListener('scroll', function (){
        //         console.log("Scroll Event is being activated");
        // })

        // how to know if scrolling is done upwards or downwards 
        
        // window.addEventListener('wheel', function(event){
        //     if(event.deltaY < 0){
        //         console.log("scrolling up");
        //     }else if(event.deltaY > 0){
        //         console.log("scrolling down");
        //     }else{
        //         console.log("not scrolling");
        //     }
        // });

        // to detect how much px scrolling has been done 
        // window.addEventListener('scroll', function(){
        //         if(window.pageYOffset > 500){
        //             document.body.style.backgroundColor = "red";
        //         }else{
        //             document.body.style.backgroundColor = "blue";
        // }
        // });
        // let x = document.getElementById("myInput");

        // x.addEventListener('focus', myFocusFunction);
        // x.addEventListener('blur', myBlurFunction);

        // function myFocusFunction (){
        //     x.style.backgroundColor = "yellow";
        // }

        // function myBlurFunction (){
        //     x.style.backgroundColor = "white"
        // }

        // x.addEventListener('change', function (){
        //         console.log(this.value);
        //     });

        // x.addEventListener('input', function (){
        //         console.log(this.value);
        // });

        // Event Bubbling and Event Capturing 
        // Event Bubbling : In the event bubbling model, an event starts at the most specific element and then flows upward toward the least specific element( the document or even window) 

        // Event Capturing : In the event capturing model, an event starts at the least specific element and flows downward toward the most specific element 

        // Example of Event bubbling 
        
        // let d = document.getElementById("myDiv");
        // let b = document.getElementById("btn");
        // b.addEventListener('click', btnClicked);
        // d.addEventListener('click',divClicked);
        // document.body.addEventListener('click',bodyClicked);

        // function btnClicked (){
        //     console.log("button clicked!");
        // }

        // function divClicked (){
        //     console.log("div clicked!");
        // }

        // function bodyClicked (){
        //     console.log("body clicked!");
        // }
        
        // Example of Event Capturing 
        
        // let d = document.getElementById("myDiv");
        // let b = document.getElementById("btn");

        // b.addEventListener('click', btnClicked,true);
        // d.addEventListener('click',divClicked,true);
        // document.body.addEventListener('click',bodyClicked,true);

        // function btnClicked (){
        //     console.log("button clicked!");
        // }

        // function divClicked (){
        //     console.log("div clicked!");
        // }

        // function bodyClicked (){
        //     console.log("body clicked!");
        // }

        // To stop this propagation at a particular element, use stopPropagation 
        // Example 
   
        // let d = document.getElementById("myDiv");
        // let b = document.getElementById("btn");

        // b.addEventListener('click', btnClicked);
        // d.addEventListener('click',divClicked);
        // document.body.addEventListener('click',bodyClicked);

        // function btnClicked (event){
        //     console.log("button clicked!");
        //     event.stopPropagation();
        // }

        // function divClicked (){
        //     console.log("div clicked!");
        // }

        // function bodyClicked (){
        //     console.log("body clicked!");
        // }

        // Prevent Default 
        // Prevent the defaut behaviour of an element or event 
        // let link = document.getElementById("anchor");

        // link.addEventListener('click', function(event){
        //     console.log("link clicked!")
        //     event.preventDefault;
        // });

        // Browser Object Model (BOM)
        // The Browser Object Model (BOM) is used to interact with the browser 

        // properties of window object - var 
        // methods of window object - alert(), prompt(), confirm() etc.
        
        // Window object 
        // console.log(window.innerHeight);
        // console.log(window.innerWidth);

        // console.log(window.outerHeight);
        // console.log(window.outerWidth);

        // To open a new window 

        // let btn1 = document.getElementById("btn1");

        // btn1.addEventListener('click',function (){
        //     window.open(url,names,features);
        // })

        // for example 
        // let btn1 = document.getElementById("btn1");
        // let btn2 = document.getElementById("btn2");
        // let url ="https://www.google.com";
        // let features = "height =500,width = 500"
        // btn1.addEventListener('click',function (){
        //     window.open(url,'Google',features);
        // })
        // btn2.addEventListener('click',function (){
        //     window.open('https://www.yahoo.com','Google',features);
        // })

        // example - pop up with close button 
        // let btn1 = document.getElementById("btn1");
        // let btn2 = document.getElementById("btn2");
        // let btn3 = document.getElementById("btn3");
        // let url ="https://www.google.com";
        // let features = "height =500,width = 500"

        // let win;
        // btn1.addEventListener('click',function (){
        //     win = window.open(url,'Google',features);
        // })
        // btn2.addEventListener('click',function (){
        //     window.open('https://www.yahoo.com','Google',features);
        // })
        // btn3.addEventListener('click',function (){
        //     win.close();
        // })

        // setTimeout() 
        // setTimeout(myFunction,3000);

        // function myFunction(){
        //     alert("this works yay")
        // }


        // setInterval()
        // setInterval(fun,2000)

        // function fun(){
        //     console.log("hello Ankit");
        // }

        // var t1 = setInterval(fun,2000)

        // function fun(){
        //     console.log("hello Ankit");
        // }

        // let btn1 = document.getElementById("btn");
        // btn1.addEventListener('click',function (){
        //     clearInterval(t1);
        // })

        // function fun(){
        //         window.location = "https://www.google.com";
        //         location.href = "https://www.yahoo.com";
        //         location.assign("https://www.facebook.com");
        //         location.replace("https://www.google.com");
        //  }

        // To reload page 
        // location.reload();

        // Navigator Object 
        // It provides all information of the browser 
        // console.log(navigator.appName);
        // console.log(navigator.appVersion);
        // console.log(navigator.appCodeName);
        // console.log(navigator.cookieEnabled);
        // console.log(navigator.userAgent);
        // console.log(navigator.platform);
        // console.log(navigator.javaEnabled());

        // Screen Object 
        // It provides information of the screen on which your website is being displayed 
        // console.log(screen.width);
        // console.log(screen.height);
        // console.log(screen.colorDepth);
        // console.log(screen.orientation);







