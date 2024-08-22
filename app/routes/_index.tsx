import type { MetaFunction } from "@remix-run/node";
import Appmanu from "./template/manu";
import CreateCard from "./myherbform";
import Myprofile from "./myhomeP";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



export default function Index() {
  return (
    <div>  
      <Myprofile />
    </div>
  );
}
