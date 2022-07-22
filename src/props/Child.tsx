interface ChildeProps {
    solr:string;
    bool:boolean;
   children:string
   handleClick:()=>void
}

// export const Child = ({solr,bool}:ChildeProps) => {
//   return (
//     <div style={{color:solr, backgroundColor: "DodgerBlue",}}>{bool ? <p>Hi there!</p>: <p>Bye there</p>}</div>
//   )
// }

 export const ChildAsFC: React.FC<ChildeProps> = ({solr,bool,children,handleClick})=>{
    return (
        <div style={{color:solr, backgroundColor: "DodgerBlue",}}>{bool ? <p>Hi there!</p>: <p>Bye there</p>}
        <p>{children}</p>
        <button onClick = {handleClick}>click me </button>
        </div>
  )
}
