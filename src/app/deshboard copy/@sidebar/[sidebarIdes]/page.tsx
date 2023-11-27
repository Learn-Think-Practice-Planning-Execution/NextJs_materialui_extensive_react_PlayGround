"use client";
function SidebarIdes({ params }: { params: any }) {
  console.log("params", params);
  return <div> side bar page:{params?.sidebarIdes}</div>;
}

export default SidebarIdes;
