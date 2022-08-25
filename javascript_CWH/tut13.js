console.log(`L-13 Exercise 1 - webpage crawler`);

// Exercise 1
// You have to create a variable which is a string containing the text which is a link you are interested in. 

// You have to fetch all the links from a given page which contains this text

// linkedin.com
// linkedin

let li=document.links;

Array.from(li).forEach(function(element, index){
    if(element.href.includes("linkedin")){
        console.log(element.href);
    }
})