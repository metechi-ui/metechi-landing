import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { breakpoints } from "../../styles/theme";
import Button from "../../components/Button";
import Field from "../../components/Field";

const Form = () => {
  const [queries, setQueries] = useState({});
  const router = useRouter();

  useEffect(() => {
    setQueries(router.query);
  });

  return (
    <>
      <section className="access-form max-container">
        <h2 className="stagger-in second">Access CRE Loans</h2>

        <form
          className="stagger-in third"
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
            <Field
              label={"Work Email"}
              name={"email"}
              type={"email"}
              required
            />
            <Field label={"Phone"} name={"phone"} type={"tel"} required />
            <Field label={"Company"} name={"company"} type={"text"} required />
            <Field
              label={"Role"}
              name={"role"}
              type={"select"}
              options={["Participant", "Participant Bank", "Agent Bank"]}
              required
            />
          </div>
          <div className="justify-center">
            <Button primary submit label="Submit" />
          </div>
        </form>
      </section>
      <style jsx>{`
        section {
          padding-top: 80px;
          padding-bottom: 90px;
        }

        h2 {
          font-size: 4.2rem;
          text-align: center;
          margin-bottom: 50px;
        }

        @media (${breakpoints.sm}) {
          .form-fields {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
        }

        @media (${breakpoints.downTy}) {
          section {
            padding-bottom: 150px;
          }
        }

        @media (${breakpoints.md}) {
          h2 {
            font-size: 5.2rem;
            margin-bottom: 80px;
          }

          section {
            padding-bottom: 120px;
          }
        }
      `}</style>
    </>
  );
};

export default Form;
