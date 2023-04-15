const MARGIN=['m','ml','mr','mb','mt','my','mx'];
const PADDING=['p','pl','pr','pb','pt','py','px'];
const DISPLAY=["d-flex","d-inline","d-inline-flex","d-block","d-inline-block"];
const OVERFLOW = "overflow";
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
    let mb,mt,mr,ml;
    marginListClass.forEach((value) => {
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
    paddingListClass.forEach((value) => {
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
let getMargin=(strList)=>{
    let data = getClassList(strList);
    let marginList=[];
    data.forEach(value=>{
        let prop=splitClassName(value);
        if (MARGIN.includes(prop[0])) {
            marginList.push(prop);
        }
    });
    return marginList;
}

let getPadding=(strList)=>{
    let data = getClassList(strList);
    let paddingList=[];
    data.forEach(value=>{
        let prop=splitClassName(value);
        if (PADDING.includes(prop[0])) {
            paddingList.push(prop);
        }
    });
    return paddingList;
}
let getLastDisplay=(strList)=>{
    let data = getClassList(strList);
    let display;
    data.forEach(value=>{
        if (DISPLAY.includes(value)) {
            display=value;
        }
    });
    return display;
}
let getOverflow=(strList)=>{
    let data = getClassList(strList);
    let overflow=[];
    data.forEach(value=>{
        let prop=splitClassName(value);
        if ("overflow".includes(prop[0])) {
            overflow.push(value)
        }
    });
    // console.log(overflow)
    return overflow;
}


let convertOverflowTO=(OverflowStrClass)=>{
    let ofx,ofy;
    let props =getClassList(OverflowStrClass[0]);
    props.forEach(value=>{
        let splitProp = splitClassName(value)
        if (splitProp.length===3){
            if (splitProp[1]==="x"){
                ofx=[splitProp[0],splitProp[1],splitProp[2]];
            }
            if (splitProp[1]==="y"){
                ofy=[splitProp[0],splitProp[1],splitProp[2]];
            }
        }else if (splitProp.length===2){
            ofx=[splitProp[0],'x',splitProp[1]];
            ofy=[splitProp[0],'y',splitProp[1]];
        }
    })
    return [ofx,ofy];
}

let convertTOOverflow=(x=[],y=[])=>{
    if (x[2]===y[2]){
        return [[OVERFLOW,x[2]]];
    }else {
        return [x,y];
    }
}

function purgeClassNames(...classNames){
    // TODO write your code here
    return classNames;
}

document.getElementById('input').onkeyup = function(){
    document.getElementById('output').innerHTML = purgeClassNames(...this.value.trim().split(/\s+/));
};
//Test