import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { breakpoints } from "../../styles/theme";
import Button from "../../components/Button";
import Field from "../../components/Field";

const Form = ({ className }) => {
  const [queries, setQueries] = useState({});
  const router = useRouter();

  useEffect(() => {
    setQueries(router.query);
  });
  return (
    <>
      <form
        className={className}
        action={
          "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
        }
        method="POST"
      >
        {/*add url params as hidden fields*/}
        {queries.utm_source && (
          <input
            type="hidden"
            id="00N1U00000QbeQn"
            name="00N1U00000QbeQn"
            value={queries.utm_source}
          />
        )}
        {queries.utm_medium && (
          <input
            type="hidden"
            id="00N1U00000QbeQx"
            name="00N1U00000QbeQx"
            value={queries.utm_medium}
          />
        )}
        {queries.utm_campaign && (
          <input
            type="hidden"
            id="Campaign_ID"
            name="Campaign_ID"
            value={queries.utm_medium}
          />
        )}
        <input
          type="hidden"
          name="retURL"
          value={`https://metechi.com${router.route}?thankyou=true`}
        />
        <input type="hidden" name="oid" value={`00D1U000000xECz`} />
        <input type="hidden" name="oid" value={`http://www.google.com`} />

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
            name={"00N1U00000IRyhy"}
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
