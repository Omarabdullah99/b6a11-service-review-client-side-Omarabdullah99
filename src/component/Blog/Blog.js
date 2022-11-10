import React from 'react';

const Blog = () => {
    return (
        <div className='w-2/4 mx-auto'>
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        Difference between SQL and NoSQL?
        </div>
        <div className="collapse-content"> 
          <p>
          SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. <br /><br />SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests. NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases.</p>
        </div> 
      </div>

      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-10">
      <div className="collapse-title text-xl font-medium">
      What is JWT, and how does it work?
      </div>
      <div className="collapse-content"> 
        <p>
        What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). <br /> <br />
        Information Exchange: JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.
        </p>
      </div>
    </div>

    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content"> 
          <p>
          JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language <br /><br />To summarize, Node. js is a cross-platform JavaScript runtime environment for servers and applications. It is built on a single-threaded, non-blocking event loop, the Google Chrome V8 JavaScript engine, and a low-level I/O API. and JavaScript is a simple programming language 
          </p>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-10">
        <div className="collapse-title text-xl font-medium">
        How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content"> 
          <p>
          NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
        </div>
      </div>

        </div>
    );
};

export default Blog;