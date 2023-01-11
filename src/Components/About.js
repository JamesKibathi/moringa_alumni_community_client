// About Page
import Logo from "../img/logo.png"
const About = () => {
  return (
      <>
            <img src={Logo} alt="logo"  width={100} height={100} />
               <div>
              <h1>Our Vision</h1>
              <p>
                  A world in which anyone can create their future.
              </p>
              <p>
                 Our vision is one that strives to connect our Alumni to the future they envision for themselves.
              </p>
          </div>
      </>
  );
}
export default About;