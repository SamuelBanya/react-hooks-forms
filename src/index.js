import React from "react";
import ReactDOM from "react-dom";
import ParentComponent from "./components/ParentComponent";
import NewsletterForm from "./components/NewsletterForm";
import NumberForm from "./components/NumberForm";

// NOTE: I revised this to include the shorthand for '<ReactComponent>
// so that I can utilize the 'Form' AND 'NewsletterForm'
// mostly because the lab itself doesn't even utilize the newsletter
// form which I find weird --> If you build it, just use it too!

// OTHER NOTE:
// We also utilize the 'ParentComponent' which uses the 'Form'
// child component accordingly in this scenario:
ReactDOM.render(
  <>
    <ParentComponent />
    <NewsletterForm />
    <NumberForm />
  </>,
  document.getElementById("root")
);
