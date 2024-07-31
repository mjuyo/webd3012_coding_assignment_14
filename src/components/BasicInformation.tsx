import React from 'react';

const BasicInformation: React.FC = () => (
  <section id="about" className="py-10 text-center">
    <h1 className="my-8 text-4xl font-light text-cyan-400">About me</h1>
    <div className="flex flex-col items-center">
      <p className="text-lg mb-20">Hello! I am a Full Stack Web Development student in my final year at Red River College Polytechnic. I have experience in creating beautiful and functional websites using technologies such as HTML, CSS, JavaScript, React, and more.</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cYNUK_AXibf6oFjn79888ZWvWAOmVRO3Cg&s" alt="RRC" className="size-32 rounded-full mt-4" />
    </div>
  </section>
);

export default BasicInformation;
