"use client";

import { CommunityPost, CommunitySection, TagSection } from "@/components/communityAndTags";
import React from "react";

const Page = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 gap-4">
      <section className="md:w-4/5 w-full order-last md:order-first">
      <CommunitySection/>
      <CommunityPost/>
      </section>
      <section className="md:w-1/4 w-full ">
        <TagSection />
      </section>
    </main>
  );
};

export default Page;
