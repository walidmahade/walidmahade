import React from "react";
import Container from "../components/global/container";
import Head from "next/head";
import LayoutMaster from "../components/layoutmaster";

export default () => {
  console.log(
    "Personal values listed here was shamelessly copied from https://kennethreitz.org/"
  );

  return (
    <LayoutMaster>
      <Container>
        <Head>
          <title>Personal values | Mahade Walid</title>
        </Head>

        <div className="page-head">
          <h2 className="bold text-center">Personal values</h2>
        </div>

        <div className="values text-center">
          <p>Balance.</p>
          <p>Just Breathe.</p>
          <p>Trust, but verify.</p>
          <p>As above, so below.</p>
          <p>Constraints foster creativity.</p>
          <p>Full, 180° turns are encouraged.</p>
          <p>Listen to everyone, then disregard it.</p>
          <p>Optimize for peacefulness; in all directions.</p>
          <p>Life's not a race, but there's no speed limit either.</p>
          <p>Watch yourself closely, and learn from your mistakes.</p>
          <p>Reality is what still exists after you stop believing in it.</p>
          <p>Always give the benefit of the doubt; don't forget red flags.</p>
          <p>There's a big difference between judgement and discernment.</p>
          <p>Negative atmospheres are toxic. Remove yourself from them.</p>
          <p>The trick is to go in “both” directions — at the same time.</p>
          <p>Attention is your only currency. Allocate it sparingly.</p>
          <p>Drink copious amounts of water—every day.</p>
          <p>Fallibilism (epistemological & moral).</p>
          <p>The best way to learn is to teach.</p>
          <p>Be cordial or be on your way.</p>
          <p>Do your best to sleep, daily.</p>
          <p>Be gentle with yourself.</p>
          <p>Inspire. Stay inspired.</p>
        </div>
      </Container>
    </LayoutMaster>
  );
};
