import React from 'react';

const Blog = () => {
    return (
        <div className='w-2/4 mx-auto'>
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        what is cors?
        </div>
        <div className="collapse-content"> 
          <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources</p>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-10">
      <div className="collapse-title text-xl font-medium">
      Why are you using firebase? What other options do you have to implement authentication?
      </div>
      <div className="collapse-content"> 
        <p>
        Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Build Extraordinary Apps. Boost App Engagement. Release Apps Confidently. <br /> <br />
        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
        </p>
      </div>
    </div>

    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        How does the private route work?
        </div>
        <div className="collapse-content"> 
          <p>
          The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
          </p>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-10">
        <div className="collapse-title text-xl font-medium">
        What is Node? How does Node work?
        </div>
        <div className="collapse-content"> 
          <p>
          Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return. <br /> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
        </div>
      </div>

        </div>
    );
};

export default Blog;