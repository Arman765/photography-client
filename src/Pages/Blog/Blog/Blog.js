import React from "react";
import img1 from "../../../assets/blog/blog.jpg";
import useTitle from "../../../Hooks/Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <div className="hero mt-12">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img1} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-2xl font-bold">
              Difference between SQL and NoSQL!
            </h1>
            <p className="py-6">
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </p>
            <p className="py-6">
              There are five practical differences between SQL and NoSQL:
              1.Language, 2.Scalability, 3.Structure, 4.Properties Support and
              5.communities
            </p>
          </div>
        </div>
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img1} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-2xl font-bold">
              What is JWT, and how does it work?!
            </h1>
            <p className="py-6">
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP). So the integrity
              and authenticity of the token can be verified by other parties
              involved. The purpose of using JWT is not to hide data but to
              ensure the authenticity of the data. JWT is signed and encoded,
              not encrypted. JWT is a token based stateless authentication
              mechanism. Since it is a client-side based stateless session,
              server doesn't have to completely rely on a datastore(database) to
              save session information.
            </p>
            <p className="py-6">
              Basically the identity provider(IdP) generates a JWT certifying
              user identity and Resource server decodes and verifies the
              authenticity of the token using secret salt / public key. User
              sign-in using username and password or google/facebook.
              Authentication server verifies the credentials and issues a jwt
              signed using either a secret salt or a private key. User's Client
              uses the JWT to access protected resources by passing the JWT in
              HTTP Authorization header. Resource server then verifies the
              authenticity of the token using the secret salt/ public key.
            </p>
          </div>
        </div>
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img1} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-2xl font-bold">
              What is the difference between javascript and NodeJS!
            </h1>
            <p className="py-6">
              1. JavaScript is a client-side scripting language that is
              lightweight, cross-platform, and interpreted. Both Java and HTML
              include it. Node.js, on the other hand, is a V8-based server-side
              programming language.
            </p>
            <p>
              2. JavaScript is a simple programming language that can be used
              with any browser that has the JavaScript Engine installed.
              Node.js, on the other hand, is an interpreter or execution
              environment for the JavaScript programming language. It requires
              libraries that can be conveniently accessed from JavaScript
              programming to be more helpful.
            </p>
            <p>
              3. Any engine may run JavaScript. As a result, writing JavaScript
              is incredibly easy, and any working environment is similar to a
              complete browser. Node.js, on the other hand, only enables the V8
              engine. Written JavaScript code, on the other hand, can run in any
              context, regardless of whether the V8 engine is supported.
            </p>
            <p>
              4. A specific non-blocking operation is required to access any
              operating system. There are a few essential objects in JavaScript,
              but they are entirely OS-specific.
            </p>
            <p>
              5. The critical benefits of JavaScript include a wide choice of
              interfaces and interactions and just the proper amount of server
              contact and direct visitor input.
            </p>
          </div>
        </div>
      </div>
      <div className="hero mb-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img1} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-2xl font-bold">
              How does NodeJS handle multiple requests at the same time!
            </h1>
            <p className="py-6">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
