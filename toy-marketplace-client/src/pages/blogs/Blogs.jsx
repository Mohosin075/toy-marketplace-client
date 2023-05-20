import useTitle from "../hooks/useTitle";

const Blogs = () => {
  useTitle("blogs");
  return (
    <section className="w-9/12 md:w-10/12 mx-auto my-5">
      <hr />
      <div className="mt-12 text-center"></div>
      <div className="">
        <h1 className="text-center my-10 text-2xl md:text-4xl font-bold">
          Some <span className="text-blue-600 font-bold">Important</span>{" "}
          Question
        </h1>
        <div>
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold">
              (1) What is an access token and refresh token? How do they work
              and where should we store them on the client-side?
            </h3>
            <div className="text-sm md:text-xl py-3">
              <p className="py-2">
                A refresh token just helps you re-validate a user without them
                having to re-enter their login credentials multiple times. The
                access token is re-issued, provided the refresh token is a valid
                one requesting permission to access confidential resources.
                <br />
                refresh token is advisable to store them securely, typically
                using secure HTTP-only cookies or encrypted storage mechanisms
                such as the browsers session storage or secure HTTP-only local
                storage.
                <br />
                they are usually stored in memory (RAM) rather than long-term
                storage like cookies or local storage.
              </p>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold">
              (2) Compare SQL and NoSQL databases?
            </h3>
            <div className="text-sm md:text-xl py-3">
              <p className="py-2">
              SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
              </p>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold">
              (3) What is express js? What is Nest JS?
            </h3>
            <div className="text-sm md:text-xl py-3">
              <p className="py-2">
              Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.
              </p>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold">
              (4) What is MongoDB aggregate and how does it work?
            </h3>
            <div className="text-sm md:text-xl py-3">
              <p className="py-2">
              MongoDB Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.
              <br />
              This MongoDB Aggregation uses the Pipeline concept in the UNIX command, where the pipeline defines the possibility to perform an operation on few inputs and apply the output resulted as the input for the succeeding command, and it follows the same. MongoDB supports this idea in the aggregation framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
