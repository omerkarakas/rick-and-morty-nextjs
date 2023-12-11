import { Button } from "@mui/joy";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex justify-center h-10">
      <Link href="/">
        <Button size="md" className="bg-cyan-700">
          Back Home
        </Button>
      </Link>
    </div>
  );
};

export default Footer;
