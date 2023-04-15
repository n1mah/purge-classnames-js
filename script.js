let margin=['m-','ml-','mr-','mb-','mt-','my-','mx-'];
let padding=['p-','pl-','pr-','pb-','pt-','py-','px-'];
let display=["d-flex","d-inline","d-inline-flex","d-block","d-inline-block"];
let overflow = ["overflow-","overflow-y-","overflow-x"];
let overflowValue = ["hidden","visible","scroll","auto","none"];
let breakpoint=["xs","sm","md","lg"];

let splitClassName=(className)=>{
    className = className.split("-");
    return[...className];
}
let getClassList=(str)=>{
    str = str.split(" ");
    return [...str];
}
let convertMargin=(marginListClass)=>{
    let str;
    // marginListClass=[["mx","20"],["mr","15"],["m","10"]];//test
    marginListClass.reverse();
    let deletedList=[];
    if (marginListClass[0][0]==="m"){
        str="m";
        //delete mx my mr ml mt mb /done
        marginListClass=[marginListClass[0]];
    }else if(marginListClass[0][0]==="mx"){
        marginListClass.forEach((value, index) =>{
            if(value[0]==="mr" || value[0]==="ml"){
                deletedList.push(index);
            }
        });

        //delete mr ml
    }else if(marginListClass[0][0]==="my"){
        let deletedList=[];
        marginListClass.forEach((value, index) =>{
            if(value[0]==="mt" || value[0]==="mb"){
                deletedList.push(index);
                // marginListClass.splice(index,1);
            }
        });

        //delete mt mb

    }
    console.log(deletedList);
    deletedList.reverse().forEach((value) => {
        console.log(value);
        marginListClass.splice(value,1);
    })
    return marginListClass;
}

function purgeClassNames(...classNames){
    // TODO write your code here
    return classNames;
}

document.getElementById('input').onkeyup = function(){
    document.getElementById('output').innerHTML = purgeClassNames(...this.value.trim().split(/\s+/));
};
//Test