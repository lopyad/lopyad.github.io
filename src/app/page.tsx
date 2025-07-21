// import Image from "next/image";
// import styles from "./page.module.css";

import Box from "./component/box";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "gh blog",
  description: "lopyad gh blog",
};

export default function Home() {
  // console.log(headers());
  return (
     <Box />
  );
}
