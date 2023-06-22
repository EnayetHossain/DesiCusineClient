/* eslint-disable no-unused-vars */
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import PDFFile from "../PDFFile/PDFFile";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <PDFDownloadLink document={<PDFFile />} fileName="blog">
        {({ loading, error }) =>
          loading ? (
            <button className="btn">Loading documents...</button>
          ) : (
            <button className="btn">Download</button>
          )
        }
      </PDFDownloadLink>
      <section className="question-container-grid desktop-max">
        <article className="question-container bg-primary-400 text-neutral-100">
          <h1 className="blog-title">
            What is the differences between uncontrolled and controlled
            components?
          </h1>
          <p>
            In react.js controlled components are those components which depends
            on there parent components to change their state or behavior. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components are
            basically the opposite of controlled components these components
            manages their own state internally.
          </p>
        </article>
        <article className="question-container bg-secondary-400 text-neutral-100">
          <h1 className="blog-title">
            What is custom hook and why will you create custom hook?
          </h1>
          <p>
            In general term react hooks are basically functions which you can
            reuse. And there are a lot of prebuild hooks in react. But if
            developer wants to add some unique functionality to the application
            there might not be any prebuild hooks for that. In that case
            developer can make his own hook according to functionality. If the
            developer need to implement any feature or functionality that
            pre-build hook does not provide then he needs to create custom hook.
          </p>
        </article>
        <article className="question-container bg-neutral-100 text-secondary-400">
          <h1 className="blog-title">
            How to validate React props using PropTypes?
          </h1>
          <p>
            Since parent components can pass down any data as props to child
            components, we need to validate the data type to ensure the child
            gets what it expects. First we have to install the props-type
            library to use it. We can use this <code>npm i prop-types</code>{" "}
            command to install the package. and then receive the props and you
            can use them like below{" "}
            <code>
              exampleComponents.propTypes = optionalArray: PropTypes.array
            </code>
          </p>
        </article>
        <article className="question-container bg-secondary-500 text-neutral-100">
          <h1 className="blog-title">
            What is the difference between node.js and express.js?
          </h1>
          <p>
            Node.js is a runtime environment which allows developer to run
            javascript code in the backend. And express.js is a framework of
            node.js. Express.js makes it easy to work with node.js by providing
            a lot of helpful features to node.js
          </p>
        </article>
      </section>
    </div>
  );
};

export default Blog;
