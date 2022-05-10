import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='container mt-3'>
            <div className='row g-3'>
                <div className="col-md-6 blog">
                    <h3>Difference between javascript and nodejs</h3>
                    <div>
                        <h4 className='blog-title'>Javascript</h4>
                        <ol>
                            <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                            <li>Javascript can only be run in the browsers</li>
                            <li>Javascript is capable enough to add HTML and play with the DOM. </li>
                            <li>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </li>
                            <li>It is basically used on the client-side.</li>
                        </ol>
                    </div>
                    <div>
                        <h4 className='blog-title'>NodeJS </h4>
                        <ol>
                            <li>NodeJS is a Javascript runtime environment.</li>
                            <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                            <li>Nodejs does not have capability to add HTML tags.</li>
                            <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
                            <li>It is mostly used on the server-side.</li>
                        </ol>
                    </div>
                </div>
                <div className="col-md-6 blog">
                    <h3> When should you use nodejs and when should you use mongodb?</h3>
                    <div>
                        <h4 className='blog-title'>When should we use Nodejs?</h4>
                        <p>Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc.</p>
                    </div>
                    <div>
                        <h4 className='blog-title'>When should we use MongoDB?</h4>
                        <p>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.</p>
                    </div>
                </div>
                <div className="col-md-6 blog">
                    <div>
                        <h3>differences between sql and nosql databases</h3>
                        <div>
                            <h4 className='blog-title'>SQL</h4>
                            <ol>
                                <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)	</li>
                                <li>These databases have fixed or static or predefined schema</li>
                                <li>These databases are not suited for hierarchical data storage.</li>
                                <li>These databases are best suited for complex queries</li>
                                <li>Vertically Scalable</li>
                            </ol>
                        </div>
                        <div>
                            <h4 className='blog-title'>NoSQL</h4>
                            <ol>
                                <li>Non-relational or distributed database system.</li>
                                <li>They have dynamic schema</li>
                                <li>These databases are best suited for hierarchical data storage.</li>
                                <li>These databases are not so good for complex queries</li>
                                <li>	Horizontally scalable</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 blog">
                    <h3>What is the purpose of jwt and how does it work?</h3>
                    <div>
                        <h4 className='blog-title'>What is jwt?</h4>
                        <p>
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    </p>
                    </div>
                    <div>
                        <h4 className='blog-title'>How does jwt work</h4>
                        <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;