/* eslint-disable no-unused-vars */
import { Document, Page, StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({});

const PDFFile = () => {
  return (
    <Document>
      <Page>
        <Text>
          What is the differences between uncontrolled and controlled
          components?
        </Text>

        <Text>
          In react.js controlled components are those components which depends
          on there parent components to change their state or behavior. These
          components rely on props passed down from the parent component to
          update their state and behavior. Uncontrolled components are basically
          the opposite of controlled components these components manages their
          own state internally.
        </Text>

        <Text>What is custom hook and why will you create custom hook?</Text>

        <Text>
          In general term react hooks are basically functions which you can
          reuse. And there are a lot of prebuild hooks in react. But if
          developer wants to add some unique functionality to the application
          there might not be any prebuild hooks for that. In that case developer
          can make his own hook according to functionality. If the developer
          need to implement any feature or functionality that pre-build hook
          does not provide then he needs to create custom hook.
        </Text>

        <Text>How to validate React props using PropTypes?</Text>

        <Text>
          Since parent components can pass down any data as props to child
          components, we need to validate the data type to ensure the child gets
          what it expects. First we have to install the props-type library to
          use it. We can use thisnpm i prop-types command to install the
          package. and then receive the props and you can use them like below
          exampleComponents.propTypes = optionalArray: PropTypes.array
        </Text>

        <Text>What is the difference between node.js and express.js?</Text>

        <Text>
          Node.js is a runtime environment which allows developer to run
          javascript code in the backend. And express.js is a framework of
          node.js. Express.js makes it easy to work with node.js by providing a
          lot of helpful features to node.js
        </Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
