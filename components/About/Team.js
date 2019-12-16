import React from "react";

import AvatarInfo from "./AvatarInfo";
import { breakpoints } from "../../styles/theme";

const Team = ({ data }) => {
  const { title, members } = data.team || {};
  return (
    <div className="max-container">
      <section>
        <h2>{title}</h2>
        <div className="flex avatars">
          {members.map(({ name, position, info, img, linkedin }, idx) => (
            <div key={idx} className="col">
              <AvatarInfo
                name={name}
                position={position}
                info={info}
                img={img}
                linkedin={linkedin}
              />
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
        h2 {
          font-size: 4.2rem;
          margin-bottom: 25px;
        }

        .avatars {
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .col {
          width: 100%;
          margin-bottom: 50px;
        }

        @media (${breakpoints.sm}) {
          .col {
            width: 47%;
          }
        }
        @media (${breakpoints.md}) {
          h2 {
            font-size: 5.2rem;
            margin-bottom: 50px;
          }
          .col {
            width: 30%;
            margin-bottom: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default Team;
