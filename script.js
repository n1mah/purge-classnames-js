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
let convertMarginTO=(marginListClass)=>{
    marginListClass.forEach((value, index) => {
        switch (value[0]) {
            case "m":
                mb=value[1];mt=value[1];mr=value[1];ml=value[1];
                break;
            case "mx":
               mr=value[1];ml=value[1];
                break;
            case "my":
                mb=value[1];mt=value[1];
                break;
            case "mr":
                mr=value[1];
                break;
            case "ml":
                ml=value[1];
                break;
            case "mt":
                mt=value[1];
                break;
            case "mb":
                mb=value[1];
                break;
        }
    });
    return [mt,mb,mr,ml];
}
let convertTOMargin=(mt=0,mb=0,mr=0,ml=0)=>{
    if (mt===mb && mr===ml && mt===mr){
        return ["m",mt];
    }else if (mt===mb && mr===ml){
        return [["my",mt],["mx",mr]];
    }else if(mt===mb || mr===ml){
        if (mt===mb){
            return [["my",mt],["mr",mr],["ml",ml]];
        }else{
            return [["mx",mr],["mt",mt],["mb",mb]];

        }
    }else {
        return [["mr",mr],["ml",ml],["mt",mt],["mb",mb]];
    }
}
let convertPaddingTO=(paddingListClass)=>{
    let pb,pt,pr,pl;
    paddingListClass.forEach((value, index) => {
        switch (value[0]) {
            case "p":
                pb=value[1];pt=value[1];pr=value[1];pl=value[1];
                break;
            case "px":
                pr=value[1];pl=value[1];
                break;
            case "py":
                pb=value[1];pt=value[1];
                break;
            case "pr":
                pr=value[1];
                break;
            case "pl":
                pl=value[1];
                break;
            case "pt":
                pt=value[1];
                break;
            case "pb":
                pb=value[1];
                break;
        }
    });
    return [pt,pb,pr,pl];
}
let convertTOPadding=(pt=0,pb=0,pr=0,pl=0)=>{
    if (pt===pb && pr===pl && pt===pr){
        return ["p",pt];
    }else if (pt===pb && pr===pl){
        return [["py",pt],["px",pr]];
    }else if(pt===pb || pr===pl){
        if (pt===pb){
            return [["py",pt],["pr",pr],["pl",pl]];
        }else{
            return [["px",pr],["pt",pt],["pb",pb]];

        }
    }else {
        return [["pr",pr],["pl",pl],["pt",pt],["pb",pb]];
    }
}

/*let convertMargin=(marginListClass)=>{
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
}*/

function purgeClassNames(...classNames){
    // TODO write your code here
    return classNames;
}

document.getElementById('input').onkeyup = function(){
    document.getElementById('output').innerHTML = purgeClassNames(...this.value.trim().split(/\s+/));
};
//Test