import React from "react";

const AboutPage = () => {
  return (
    <main className=" py-8 px-0 w-9/12 my-0 mx-auto ">
      <h1 className="text-4xl capitalize text-center mb-14 mt-4 font-bold">
        About R&M API and This Website
      </h1>
      <p>
        The Rick and Morty API (https://rickandmortyapi.com/) is a REST(ish) and
        GraphQL API based on the television show Rick and Morty. You will have
        access to about hundreds of characters, images, locations and episodes.
        The Rick and Morty API is filled with canonical information as seen on
        the TV show.
      </p>
      <p>
        This web app is just a simple consumer of this API designed by Omer
        Karakas.
      </p>
    </main>
  );
};

export default AboutPage;
