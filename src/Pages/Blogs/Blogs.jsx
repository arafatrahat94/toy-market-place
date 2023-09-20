import React from "react";
import useTittle from "../../hooks";

const Blogs = () => {
  useTittle("Blogs");
  return (
    <div className="min-h-screen w-11/12 mx-auto">
      <h1>
        `1) What is an access token and refresh token? How do they work and
        where should we store them on the client-side?
        <br />
        Ans:Access tokens and refresh tokens are commonly used in authentication
        and authorization systems, especially in the context of web applications
        and APIs. They serve different purposes in the security and access
        control of resources. Access token are used to make route based data
        loading secure and if a person trys to access the api he wont be able to
        access the api and the refresh token works as if thhe current access
        expires then it renews a new token.
      </h1>
      <h1 className="mt-3">2)Compare SQL and NoSQL databases?</h1>
      <h1>
        Ans:sql and nosql databases are two broad categories of database
        management systems ,each with its own characteristics <br />
        SQL (Relational Databases): SQL databases are relational databases that
        use tables to store structured data. Data is organized into rows and
        columns, and tables can have relationships with one another. NoSQL
        (Non-Relational Databases): NoSQL databases can store structured,
        semi-structured, or unstructured data. They use various data models,
        including document-based (e.g., MongoDB), key-value (e.g., Redis),
        column-family (e.g., Cassandra), and graph-based (e.g., Neo4j).
      </h1>
    </div>
  );
};

export default Blogs;
