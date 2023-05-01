
// Components are like blocks in a study
let title = "My First Component Is A List";
let listItem1 = "Compononts: UI Building Blocks";
let listItem2 = "Defining Components";
let listItem3 = "Using Components"

export function Article() {

    return (
        // React Components use de JSX tecnologie, it means that every html markup can be written direct in the return clause have be in an unique parent, that can be a <div>, <article>, <section> or a <> 
        <article>
            <h1>{ title }</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <ol>
                <li>{ listItem1 }</li>
                <li>{ listItem2 }</li>
                <li>{ listItem3 }</li>
            </ol>
        </article>
        
    )
};


/* Components are regular JavaScript functions, but when nesting components somethings have to be in mind:


- Never define a component inside another component
- Ever component have to be declared in top of code

*/


/*
    Keep components pure

      -Components doesn't change objects or variable that existed before it was called;
      -The same input will result ever the same output
*/

function Cup(guest) {
    return <h2>Tea  cup for guest#{ guest }</h2>
}

export function TeaSet() {
    
    return (
       
       <>
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
        </>

    )
}
