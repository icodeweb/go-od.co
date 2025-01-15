let spanTexts = [];
for (let index = 0; index < 1; index++) {
    document.querySelectorAll(".title span").forEach((span) => {
        spanTexts.push(span.textContent)
        console.log(spanTexts);
    });
}


const inputArray = [

];

const outputArray = inputArray.map(item => {
    return {
        name: item,
        src: "",
        format: item.split(".").pop()
    };
});

console.log(outputArray);


let gifSrcs = [];
for (let index = 0; index < 1; index++) {
    document.querySelectorAll("iframe").forEach((iframe) => {
        gifSrcs.push(iframe.src)
        console.log(gifSrcs);
    });
}
