import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

const  About =() => {
  return (
    <div>
      About page
      <br />
      <LoremIpsum p={50} avgWordsPerSentence={10} avgSentencesPerParagraph={8} />
    </div>
  );
}

export default About;
