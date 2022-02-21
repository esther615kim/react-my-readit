import React from 'react';
// option 1  much stricter withouth children
// const Heading = ({title}:{title:string}) => {
//   return <div>{title}</div>;
// };

const Heading:React.FC<{
  title:string,children?:string}> =({title})=> (
  <h2>{title}</h2>
)


const Exercise = () =>{
  <div>
    <Heading title="chuchu"></Heading>
  </div>
}

export default Exercise;
