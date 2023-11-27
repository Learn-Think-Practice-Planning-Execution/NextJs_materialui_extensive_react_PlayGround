"use client";
function NameValue({ params }: { params: any }) {
  console.log("params", params);
  return null;
  // return (
  //   <>
  //     {" "}
  //     <div> name :{params.nameValue[0]}</div>
  //     <div> name :{params.nameValue[1]}</div>
  //   </>
  // );
}

export default NameValue;
