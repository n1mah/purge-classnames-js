const MARGIN=['m','ml','mr','mb','mt','my','mx'];
const PADDING=['p','pl','pr','pb','pt','py','px'];
const DISPLAY=["d-flex","d-inline","d-inline-flex","d-block","d-inline-block"];
const OVERFLOW = "overflow";
const BREAKPOINT=["xs","sm","md","lg"];

let splitClassName=(className)=>{
    className = className.split("-");
    return[...className];
}
let getClassList=(str)=>{
    str = str.split(" ");
    return [...str];
}

// Example: convertMarginTO([['mx',2],['mt',10]])  //Result:    [10, undefined, 2, 2]
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

// Example: convertTOMargin(convertTOMargin(10,10,2,2))     //result [['my', 10],['mx', 2]]
// Example: convertTOMargin(convertTOMargin(3,10,2,2))     //result [['mt', 3],['mx', 2],['mb', 10]]
let convertTOMargin=(mt=0,mb=0,mr=0,ml=0)=>{
    if (mt===mb && mr===ml && mt===mr){
        if (mt===0){
            return  null;
        }
        return [["m",mt]];
    }else if (mt===mb && mr===ml){
        return [["my",mt],["mx",mr]];
    }else if(mt===mb || mr===ml){
        if (mt===mb){
            return [["my",mt],["mr",mr],["ml",ml]];
        }else{
            return [["mt",mt],["mx",mr],["mb",mb]];

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
let     convertTOPadding=(pt=0,pb=0,pr=0,pl=0)=>{
    if (pt===pb && pr===pl && pt===pr){
        return [["p",pt]];
    }else if (pt===pb && pr===pl){
        return [["py",pt],["px",pr]];
    }else if(pt===pb || pr===pl){
        if (pt===pb){
            return [["py",pt],["pr",pr],["pl",pl]];
        }else{
            return [["pt",pt],["px",pr],["pb",pb]];

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
        if (OVERFLOW.includes(prop[0])) {
            overflow.push(value)
        }
    });
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
        return OVERFLOW+"-"+x[2];
    }else {
        return [x.join("-"),y.join("-")].join(" ");
    }
}

let searchMargin=(str)=>{
    let MarginList = [];
    let classNames = getClassList(str);
    classNames.forEach((value)=>{
        let sp = splitClassName(value);
        if (sp[0]==="m" || sp[0]==="mx" || sp[0]==="my" || sp[0]==="mr" || sp[0]==="ml" || sp[0]==="mt" || sp[0]==="mb"){
            MarginList.push([sp[0],sp[1]])
        }
    });
    return MarginList;
}

let searchPadding=(str)=>{
    let PaddingList = [];
    let classNames = getClassList(str);
    classNames.forEach((value)=>{
        let sp = splitClassName(value);
        if (sp[0]==="p" || sp[0]==="px" || sp[0]==="py" || sp[0]==="pr" || sp[0]==="pl" || sp[0]==="pt" || sp[0]==="pb"){
            PaddingList.push([sp[0],sp[1]])
        }
    });
    return PaddingList;
}
let searchDisplay=(str)=>{
    let displayList = [];
    let displayStr = "";
    let classNames = getClassList(str);
    classNames.forEach((value)=>{
        let sp = splitClassName(value);
        if (sp[0]==="d"){
            displayList.push([sp[0],sp[1]]);
            displayStr+=(sp[0]+"-"+sp[1]+ " ");
        }
    });
    return [displayList,(displayStr.trim())];
}
let searchOverflow=(str)=>{
    let overflowList = [];
    let overflowStr = "";
    let classNames = getClassList(str);
    classNames.forEach((value)=>{
        let sp = splitClassName(value);
        if (sp[0]===OVERFLOW){
            overflowList.push([...sp])
            overflowStr+=sp.join("-")+" ";
        }
    });
    return [overflowList,overflowStr.trim()];
}

let searchBreakpoint=(str)=>{
    let breakpoint = [];
    let classNames = getClassList(str);
    classNames.forEach((value)=>{
        let sp = splitClassName(value);
        if (sp[0].includes(":")){
            let bp = sp[0].split(":");
            if (bp[0]===BREAKPOINT[0] || bp[0]===BREAKPOINT[1] || bp[0]===BREAKPOINT[2] || bp[0]===BREAKPOINT[3]){
                // sm:m-5 lg:m-2
                breakpoint.push([...bp.concat(sp[1])]);
            }
        }
    });
    return breakpoint;
}



let search= str =>{
   return [ searchMargin(str),
            searchPadding(str),
            searchDisplay(str),
            searchOverflow(str),
            searchBreakpoint(str) ];
}

let finalMargin = (str)=>{
    let Margins=search(str)[0];
    let [mt,mb,mr,ml] =convertMarginTO(Margins);
    let margin = convertTOMargin(mt, mb, mr, ml);
    if (margin !== null && margin.length>0 )
    margin.forEach((value,index,array) => {
        if (value[1]===0){
            array.splice(index,1);
        }
    })
    return margin ;
}
let finalPadding = (str)=>{
    let Paddings=search(str)[1];
    let padding=null
    if (Paddings.length>0) {
        let [pt, pb, pr, pl] = convertPaddingTO(Paddings);
        padding = convertTOPadding(pt, pb, pr, pl);
        padding.forEach((value, index, array) => {
            if (value[1] === 0) {
                array.splice(index, 1);
            }
        })
    }
    return padding ;
}

let finalDisplay = (str)=>{
    let Display=search(str)[2][1];
    if (Display.length>0)
        return getLastDisplay(Display);
    return null;
}

let finalOverflow = (str)=>{
    let Overflow=search(str)[3][1];
    if (Overflow.length>0){
        let o= getOverflow(Overflow);
        let dataXY=  convertOverflowTO([o.join(" ")]);
        return  convertTOOverflow(dataXY[0],dataXY[1])
    }
    return null;
}

function purgeClassNames(...classNames){
    classNames=classNames.join(" ");
    let margin=finalMargin(classNames);
    let padding=finalPadding(classNames);
    let display=finalDisplay(classNames);
    let overflow=finalOverflow(classNames);
    let str="";
    let breakpoint=searchBreakpoint(classNames);

    // Display
    if (display===null){
        display="";
    }
    // Overflow
    if (overflow===null){
        overflow="";
    }

    // Margin
    let strM="";
    if (margin !== null && margin.length>0)
    margin.forEach(value => {
        strM+=value[0]+"-"+value[1]+" ";
    });
    strM.trim();

    // Padding
    let strP="";
    if (padding !== null && padding.length>0)
    padding.forEach(value => {
        strP+=value[0]+"-"+value[1]+" ";
    });
    strP.trim();

    // Breakpoint
    let strBP="";
    breakpoint.forEach(value => {
        strBP+=value[0]+":"+value[1]+"-"+value[2]+" ";
    })
    strBP.trim();
    str=strM+" "+strP+" "+display+" "+overflow+" "+strBP;
    return str;
}

document.getElementById('input').onkeyup = function(){
    document.getElementById('output').innerHTML = purgeClassNames(...this.value.trim().split(/\s+/));
};
