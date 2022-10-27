import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    return (
        <div className='text-center lg:mx-16 '>
            <Blog
                image='cros.png'
                title=" what is cors?"
                description="Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a ' preflight' request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request."
            >
            </Blog>
            <Blog
                image='firebase.png'
                title="  Why are you using firebase?"
                description="Firebase is Google’s mobile application development platform. It has a lot of different products that cover much of what’s needed to build a mobile app. It would take a lot of time to describe the complete set of situations where Firebase can be helpful, so I suggest you start reading the web site to discover what all it can do.

                The bottom line is that there are a lot of things that you probably don’t want to manage yourself, such as building and maintaining a scalable database and file store, (serverless) backend code, notifications, analytics, and more. Don’t build all this yourself, just use Firebase."

                option="Other options: 1. Google authentication , 2. Microsoft Authenticator, 3 Twilio Authy, 4 Cisco Duo Mobile, 5 FreeOTP, 6 andOTP, 7. OTP auth"
            >
            </Blog>
            <Blog
                image='react-router.png'
                title="How does the private route work?"
                description="The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)."
            >
            </Blog>
            <Blog
                image='node.png'
                title="How does the private route work?"
                description="As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks except when the I/O is performed using synchronous methods of Node.js standard library. Because nothing blocks, scalable systems are very reasonable to develop in Node.js."
            >
            </Blog>
        </div >
    );
};

export default Blogs;