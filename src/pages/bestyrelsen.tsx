import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />

      <div className="container">
        <div>
          <h2>Bestyrelsen</h2>
          <p>Helle Andersen, formand <br />
            Carsten Rosendal, kasserer <br />
            Dagny Sylvest, sekretær <br />
            Dorrit Munk Jørgensen, næstformand <br />
            Bodil Sodemann, bestyrelsesmedlem <br />
            Jens Uffe Rasmussen, bestyrelsesmedlem <br />
          </p>
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
