// 15 16 17 chapter assignment
// ADDITION IN ARRAY
var courses=[];
var a,b,c,d,e;
var course1 =prompt(a); 
var course2 =prompt(b); 
var course3 =prompt(c); 
var course4 =prompt(d);
var course5 =prompt(e);
courses.push(course1,course2,course3,course4,course5);
alert(courses);
//prompt(course1); prompt(course2); prompt(course3); prompt(course4); prompt(course5);


let arr=[course1,course2,course3,course4,course5]; 
// EDITION IN ARRAY

a=courses[0];
b=courses[1];
c=courses[2];
d=courses[3];
e=courses[4];
a=prompt(a); 
b= prompt(b);c= prompt(c); d=prompt(d);e= prompt(e);

if( a != courses[0]){
const index = a.indexOf(a); 

courses.splice(index, 1, a);

alert(a); 
}

 if( b != courses[1]){
    const index = b.indexOf(b); 
    
    courses.splice(index, 2, b);
    
    alert(b); 
    }
else if( c != courses[2]){
        const index = c.indexOf(c); 
        
        courses.splice(index, 3, c);
        
        alert(c); 
        }

 if( d != courses[3]){
            const index = d.indexOf(d); 
            
            courses.splice(index, 4, d);
            
            alert(d); 
            }
 if( e != courses[4]){
                const index = e.indexOf(e);
                
                courses.splice(index, 5, e);
                
                alert(e); 
        }        

else{alert('its else')}
alert(courses) ; console.log(courses);