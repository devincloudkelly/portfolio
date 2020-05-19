import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>

          {/* <p> */}
          <h3>
            Coffee Mentor{' '}
            <h5>
              <a
                href="https://github.com/devincloudkelly/coffee-prep-client"
                target="_blank"
              >
                Github
              </a>
            </h5>
          </h3>
          <p>
            Save and share coffee preparations, or browse to learn from world
            class baristas and coffee enthusiasts
            <ul>
              <li>
                Built Rails API backend with Postgres DB to handle data
                persistence and serve data via JSON endpoints
              </li>
              <li>
                Designed front-end with React, React-Router and Redux for
                enhanced user-experience
              </li>
              <li>
                Created brew dashboard with time-based events to dynamically
                walk users through each brew
              </li>
              <li>
                Implemented Auth with BCrypt and JWT tokens to authorize user
                access for non-public urls.
              </li>
              <li>
                Styled with Semantic UI components and CSS.
              </li>
            </ul>
          </p>
          <span className="image main">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GMKBJEiXopQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </span>
          <h3>
            Portfolio Builder Lite{' '}
            <h5>
              <a
                href="https://github.com/devincloudkelly/portfolio-builder-backend"
                target="_blank"
              >
                Github
              </a>
            </h5>
          </h3>
          <p>
            Input your skills, experience and education to create a dynamic
            portfolio that can be shared via url.
            <ul>
              <li>
                Utilized Scrum framework to plan and Git version control to
                manage updates during team build
              </li>
              <li>
                Designed and built Rails API backend with PostgreSQL database
              </li>
              <li>
                Built frontend with dynamic components and routing using React and React-Router
              </li>
            </ul>
          </p>
          <span className="image main">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nVeoQqnL3DU"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </span>
          <h3>
            Tide Tracker{' '}
            <h5>
              <a
                href="https://github.com/devincloudkelly/EatTheSeaTideApp"
                target="_blank"
              >
                Github
              </a>
            </h5>
          </h3>
          <p>
            Single-page web app that allows users to get upcoming tides for the
            location and tide height of their choice.
            <ul>
              <li>
                Consumed JSON API to deliver dynamic tide height data based on user
                input
              </li>
              <li>
                Persisted data with Rails API backend and Postgresql database
              </li>
              <li>
                Created JavaScript frontend for interactive user experience
              </li>
              <li>
                CRUD functionality allows for persistence of locations and tides for each user
              </li>
            </ul>
          </p>
          <span className="image main">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lyN_JWtu3pI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </span>
          {/* </p> */}
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <p>
            <h3>
              Software Engineer{' '}
              <h5>
                The Be Good Project | Seattle, WA
                <br />
                <em>02/ 2020 - Present</em>
              </h5>
            </h3>
            <p>
            Helping BGP build their Banana app, a native platform that connects donors and recipients to allow donors to donate food to individuals experiencing homelessness or food insecurity
            </p>
            <ul>
              <li>
                Creating dynamic React Native components based off UI/UX designs
              </li>
              <li>
                Collaborate with dev, design and PM team across Slack, Trello
                and Figma
              </li>
              <li>Backlog grooming with dev team to continually work towards MVP</li>
            </ul>
          </p>
          <p>
            <h3>
              Third Party Seller{' '}
              <h5>
                Amazon | Seattle, WA
                <br />
                <em>10/ 2017 - 10/ 2019</em>
              </h5>
            </h3>
            <ul>
              <li>
                Used product and market data to select products with a greater likelihood of becoming top sellers
              </li>
              <li>
                Negotiated with suppliers to source, optimize and manufacture products cost-effectively
              </li>
              <li>
                Created Amazon, Facebook and email marketing campaigns to drive
                sales and awareness
              </li>
              <li>
                Continually tweaked and modified product listings and ads to optimize product rankings and sales
              </li>
            </ul>
          </p>
          <p>
            <h3>
              Ecommerce Marketing Manager{' '}
              <h5>
                T&M Enterprises | Tukwila, WA
                <br />
                <em>05/ 2015 - 12/ 2018</em>
              </h5>
            </h3>
            <ul>
            <li>
            Created, Tested and Optimized Email Marketing campaigns for three distinct brands, increasing email sales 220%
            </li>
            <li>
            Oversaw video creation and SEO optimization for video marketing, generating new inbound marketing source
            </li>
            <li>
            Redesigned brand website based on customer search queries, support tickets and site heat-mapping
            </li>
              <li>
              Designed and implemented customer service SOP to streamline customer service onboarding and processes
              </li>
              <li>
              Redesigned product manual, reducing man-hours required for customer service and enhancing customer experience
              </li>
            </ul>
          </p>
          <p>
            <h3>
              National Account Manager{' '}
              <h5>
                CrossCom National | Buffalo Grove, IL
                <br />
                <em>08/ 2010 - 05/ 2015</em>
              </h5>
            </h3>
            <ul>
            <li>
            Responsible for managing over 10M annually in retail accounts and coordinating with client and internal resources to deliver cost-effective retail solutions.
            </li>
            <li>
            Produced weekly, quarterly and yearly forecasting for over 20 customer accounts
            </li>
            <li>
            Produced data-based insight for VP of sales regarding customer trends and internal process effectiveness
           </li>
              <li>
                Constant communication with customers and internal cross-functional coordination to maintain ongoing, healthy client relationships
                </li>
            </ul>
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <blockquote cite="https://www.linkedin.com/in/devin-cloud-kelly/">
          Devin worked quickly through the ranks of our company from working directly with customers to overseeing critical marketing projects in just a few years. Devin helped us grow exponentially year over year with his insight, analytical approach to problem solving and attitude.
          <br/>
          <br/>
          - Dave Stickland, COO, T&M Enterprises
          </blockquote>
          <p>
            After years in ecommerce marketing and entrepreneurship, Devin wanted a more fulfilling career and a skill he could use to build solutions every day. He learned software engineering at Flatiron School in Seattle in 2019 and moved back to Chicago in 2020.
          </p>
          <p>
          Experienced in React, Ruby on Rails and JavaScript based programming and a background in e-commerce entrepreneurship and marketing management, Devin is a collaborative team-player focused on building solutions to improve client experience and strenghtening alliances with coworkers and clients alike. 
          </p>
          <p>
            When he isn't coding he enjoys getting outdoors for hiking and fishing, playing guitar or learning a new recipe to make for him and his wife.
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/devincloudkelly"
                className="icon fa-twitter"
                target="_blank"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/devin-cloud-kelly/"
                className="icon fa-linkedin"
                target="_blank"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/devincloudkelly"
                className="icon fa-github"
                target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:devin.cloud.kelly@gmail.com"
                className="icon fa-envelope"
                target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
            <h3>Tools & Technologies</h3>
          <ul>
            <li>React.js</li>
            <li>Javascript</li>
            <li>Ruby on Rails</li>
            <li>PostgreSQL</li>
            <li>SQLite</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Git / Github</li>
            <li>AWS (S3 / Route 53)</li>
            <li>Redux.js</li>
            <li>REST Api</li>
            <li>JSON</li>
            <li>Bootstrap</li>
            <li>Semantic UI</li>
            <li>React Native</li>
            <li>Expo</li>
            <li>Heroku</li>

          </ul>
            <h3>Soft Skills</h3>
            <ul>
              <li>Process Improvement</li>
              <li>Cross-functional team leadership</li>
              <li>Collaborative</li>
              <li>Values Diversity and Inclusion</li>
              <li>Analytical</li>
              <li>Entrepreneurial </li>
            </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
