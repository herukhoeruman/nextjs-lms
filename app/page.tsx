"use client";

import { useState } from "react";

import Heading from "./utils/heading";

interface Props {
  hello: string;
}

const Page = ({ hello }: Props) => {
  return (
    <div>
      <Heading
        title="e-Learning"
        description="e-Learning adalah aplikasi pembelajaran online yang dibuat dengan Next.js dan TypeScript."
        keywords="Programming, Next.js, TypeScript, React, JavaScript, Mern, MongoDB, Express, Node.js, Tailwind CSS, Vercel, e-Learning"
      />
    </div>
  );
};

export default Page;
