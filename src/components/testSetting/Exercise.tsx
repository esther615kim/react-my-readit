import React from 'react';
// option 1 이렇게 하는 게 much stricter withouth children
// const Heading = ({title}:{title:string}) => {
//   return <div>{title}</div>;
// };

// option 2 :1과 2는 같음, children 넣을 수도 뺄 수도 있음
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
