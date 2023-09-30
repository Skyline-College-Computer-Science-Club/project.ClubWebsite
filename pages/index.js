import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Col from "react-bootstrap/Col";

// Current officers 2022
// Feel free to change this accordingly once new officers are elected and/or new roles are added.
const officers = [
  {
    name: "Tyler Kuwada",
    role: "President",
    imgSrc: "/assets/imgs/tylerkuwadapfp.png",
    socialLink: "https://www.instagram.com/tyler_kuwada/",
  },
  {
    name: "Jonas Quiballo", 
    role: "Vice President", 
    imgSrc: "/assets/imgs/jonasquiballofixed.png",
    socialLink: "https://www.instagram.com/_.waffly._/",
  },
  {
    name: "Lance Ruiz",
    role: "Project Manager",
    imgSrc: "/assets/imgs/lanceruizpfp.png",
    socialLink: "",
  },
  {
    name: "Jayan Pintor",
    role: "Treasurer",
    imgSrc: "/assets/imgs/jayanpintorpfp.jpg",
    socialLink: "https://www.instagram.com/0p_photos/"
  },
  {
    name: "Chris Tse",
    role: "SOCC Advisor/Rep",
    imgSrc: "/assets/imgs/christsepfp.png",
    socialLink: "https://www.instagram.com/cchristse/",
  },
  {
    name: "Kaila Bautista", 
    role: "Secretary", 
    imgSrc: "/assets/imgs/kailabautistapfp.jpg",
    socialLink: "https://instagram.com/kqilamae?igshid=OGQ5ZDc2ODk2ZA==",
  },
 // { name: "Owen Fan", role: "Vice President", imgSrc: "/" },
 // { name: "Eden Huang", role: "Treasurer", imgSrc: "/" },
 // { name: "Camille Catolos", role: "Secretary", imgSrc: "/" },
 // { name: "John Carlo Manuel", role: "Project Manager", imgSrc: "/" },
 // { name: "Denise Hum", role: "Co-Advisor", imgSrc: "/" },
 // { name: "Bryan Swartout", role: "Co-Advisor", imgSrc: "/" },
];
export default function Home() {
  return (
    <>
      <MyNavbar />

      <main id="main-page" className="py-lg-4">
        <section id="hero" className="py-60">
          <Container fluid>
            <Row>
              <div className="p-5 mb-4 bg-light rounded-3">
                <div className="px-lg-5">
                  <h1 className="display-5 fw-bold">
                    Skyline College&apos;s Computer Science Club
                  </h1>
                  <p className="col-md-8 fs-4">Mission statement here</p>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <section id="about">
          <Container fluid>
            <div className="p-5 mb-4 rounded-3">
              <div className="px-lg-5">
                <h2 className="display-5 fw-bold">About Us</h2>
                <p>
                  Story about our club + other things that readers should know:
                </p>
                <Col className="mb-4">
                  <h3 className="display-6 fw-bold d-flex py-5 justify-content-center">
                    Meet your officers!
                  </h3>
                  {/* Using the css version of Bootstrap since I am not sure on how to rewrite it 
                      with the React-Bootstrap version */}
                  <div className="row row-cols-1 row-cols-md-3 g-4 py-5 py-lg-3">
                    {/* Loop through list and output a card element for each officer */}
                    {officers.map((officer) => (
                      // Each element needs to be identified uniquely via key attribute in order to prevent
                      // errors from occurring. I decide to use .toString() on 'officers' since each object
                      // within the list is already unique
                      // Read more: https://reactjs.org/docs/lists-and-keys.html#keys
                      <div className="col" key={officer.toString()}>
                        <div className="card border-0">
                        <Image
                          src={officer.imgSrc}
                          //src="/assets/imgs/pat.jpg"
                          className="card-img-top"
                          width={500}
                          height={500}
                          alt={officer.name}
                        />
                          <div className="card-body">
                            <h5 className="card-title text-center">
                              {officer.name}
                            </h5>
                            <p className="card-text text-center">
                              {officer.role}
                            </p>
                            <a className="card-text text-center" href={officer.socialLink}>Social Media
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
              </div>
            </div>
          </Container>
        </section>
        <section id="projects" className="col-md-offset-2">
          <Container fluid>
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="px-lg-5">
                <h2 className="display-5 fw-bold">Projects</h2>
                <p>
                  We&apos;re currently planning a few projects! Stay tuned!{" "}
                </p>
                {/* <div className="col mb-4">
                  <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
                    <div class="col">
                      <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </Container>
        </section>
        <section id="recruitment">
          <Container fluid>
            <div className="p-5 mb-4 rounded-3 d-flex justify-content-center">
              <div className="px-lg-5">
                <h2 className="display-5 fw-bold text-center">Recruitment</h2>
                <p className="text-center">
                  Interested in being a part of the club? Join our Discord here!
                </p>
                {/* Discord iframe */}
                <iframe
                  src="https://discord.com/widget?id=939701223144185867&theme=dark"
                  width="350"
                  height="500"
                  allowtransparency="true"
                  frameBorder="0"
                  className="w-100 mh-100"
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
