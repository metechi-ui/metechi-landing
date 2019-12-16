import React from "react";
import { useRouter } from "next/router";

import { breakpoints } from "../../styles/theme";
import Button from "../../components/Button";
import Field from "../../components/Field";

const Form = ({ className }) => {
  const onSubmit = evt => evt.preventDefault();
  const router = useRouter();

  return (
    <>
      <form className={className} onSubmit={onSubmit}>
        <input
          type="hidden"
          name="retURL"
          value={`https://metechi.com${router.route}?thankyou=true`}
        />

        <div className="form-fields">
          <Field
            label={"First Name"}
            name={"first_name"}
            type={"text"}
            required
          />
          <Field
            label={"Last Name"}
            name={"last_name"}
            type={"text"}
            required
          />
          <Field label={"Work Email"} name={"email"} type={"email"} required />
          <Field label={"Phone"} name={"phone"} type={"tel"} />
          <Field label={"Company"} name={"company"} type={"text"} />
          <Field label={"Title"} name={"title"} type={"text"} />
          <Field
            label={"Message"}
            name={"message"}
            type={"textarea"}
            required
          />
        </div>

        <div className="justify-end">
          <Button primary submit label="Send" />
        </div>
      </form>
      <style jsx>{`
        @media (${breakpoints.md}) {
          .form-fields {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
        }
      `}</style>
    </>
  );
};

export default Form;
