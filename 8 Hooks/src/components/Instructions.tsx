import { useEffect } from "react";

const Instructions = (props: any) => {
  useEffect(() => {
    // console.log(props.doSomething);
    // console.log(props.doSomethingElse);
    props.doSomething();
    props.doSomethingElse();
  });
  return (
    <div className=" py-5 ">
      <p>Follow the instructions above as closely as possible</p>
    </div>
  );
};

export default Instructions;
