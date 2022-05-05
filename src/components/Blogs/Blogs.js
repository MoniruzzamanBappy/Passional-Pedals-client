import React from "react";
import PageTitle from "../PageTitle/PageTitle";

const Blogs = () => {
  return (
    <div className="container my-5">
      <PageTitle title="Blogs"></PageTitle>
      <h1>Difference between javascript and nodejs</h1>
      <ul>
        <li>
          Javascript is a programming language that is used for writing scripts
          on the website. And NodeJS is a Javascript runtime environment.
        </li>
        <li>
          Javascript can only be run in the browsers. And We can run Javascript
          outside the browser with the help of NodeJS.
        </li>
        <li>
          It is basically used on the client-side. And It is mostly used on the
          server-side.
        </li>
        <li>
          Javascript is capable enough to add HTML and play with the DOM. And
          Nodejs does not have capability to add HTML tags.
        </li>
        <li>
          Javascript can run in any browser engine as like JS core in safari and
          Spidermonkey in Firefox. And V8 is the Javascript engine inside of
          node.js that parses and runs Javascript.
        </li>
        <li>
          Javascript is used in frontend development. And Nodejs is used in
          server-side development.
        </li>
      </ul>
      <hr />
      <h1>Differences between sql and nosql databases.</h1>
      <ul>
        <li>
          SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).NoSQL is And
          Non-relational or distributed database system.
        </li>
        <li>
          SQL is These databases have fixed or static or predefined schema.NoSQL
          is And They have dynamic schema
        </li>
        <li>
          SQL is These databases are not suited for hierarchical data
          storage.NoSQL is And These databases are best suitSQL is ed for
          hierarchical data storage.
        </li>
        <li>SQL is Vertically Scalable.NoSQL is And Horizontally scalable </li>
        <li>
          SQL is Follows ACID property.NoSQL is And Follows CAP(consistency,
          availability, partition tolerance)
        </li>
      </ul>
      <hr />
      <h1>What is the purpose of jwt and how does it work?</h1>
      <ul>
        <h3>What is JWT?</h3>
        <p>
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
        <hr />
        <h3>What is the purpose of jwt?</h3>
        <p>
          In short, JWTs are used as a secure way to authenticate users and
          share information. Typically, a private key, or secret, is used by the
          issuer to sign the JWT. The receiver of the JWT will verify the
          signature to ensure that the token hasn’t been altered after it was
          signed by the issuer. It is difficult for unauthenticated sources to
          guess the signing key and attempt to change the claims within the JWT.
        </p>
        <hr />
        <h3>how does JWT work?</h3>
        <p>
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted. A JWT is a string made
          up of three parts, separated by dots (.), and serialized using base64.
          In the most common serialization format, compact serialization. Once
          decoded, you will get two JSON strings:
          <ul>
            <li>The header and the payload.</li>
            <li>The signature. </li>
          </ul>
          The JOSE (JSON Object Signing and Encryption) header contains the type
          of token — JWT in this case — and the signing algorithm.
        </p>
      </ul>
      <hr />
      <h1>When to use nodejs and when should you use mongodb</h1>
      <p>
        MondoDB is a Database Management System, it's used to store data. NodeJS
        is a runtime environment for running JavaScript on a server. They can be
        used together but none is a replacement for the other.
      </p>
      <h3>When to use Node.js?</h3>
      <ul>
        <li>API Application</li>
        <li>Real-time applications</li>
        <li>Microservices</li>
        <li>lightweight</li>
        <li>high traffic</li>
      </ul>
      <hr />
      <h3>when to use mongodb</h3>
      <ul>
        <li>Massive-scale Data</li>
        <li>Caching and High Availability</li>
        <li>Rapid Prototyping</li>
        <li>Streaming Feeds</li>
      </ul>
    </div>
  );
};

export default Blogs;
